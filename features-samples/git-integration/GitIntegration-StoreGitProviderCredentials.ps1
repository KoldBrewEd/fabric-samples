# This sample script calls the Fabric API to programmatically create connection with Git provider credentials.

# For documentation, please see:
# https://learn.microsoft.com/en-us/rest/api/fabric/core/connections/create-connection

# Instructions:
# 1. Install PowerShell (https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell)
# 2. Install Azure PowerShell Az module (https://learn.microsoft.com/en-us/powershell/azure/install-azure-powershell)
# 3. Run PowerShell as an administrator
# 4. Fill in the parameters below
# 5. Change PowerShell directory to where this script is saved
# 6. > ./GitIntegration-StoreGitProviderCredentials.ps1

# Parameters - fill these in before running the script!
# =====================================================

# Connection with personal access token for GitHubSourceControl
$gitHubPATConnection = @{
    connectivityType = "ShareableCloud"
    displayName = "<CONNECTION NAME>"
    connectionDetails = @{
        type = "GitHubSourceControl"
        creationMethod = "GitHubSourceControl.Contents"
    }
    credentialDetails = @{
        credentials = @{
            credentialType = "Key"
            key = "<PAT>"
        }
    }
}

# Connection with ServicePrincipal details for AzureDevOpsSourceControl
$adoSPConnection = @{
    connectivityType = "ShareableCloud"
    displayName = "<CONNECTION NAME>"
    connectionDetails = @{
        type = "AzureDevOpsSourceControl"
        creationMethod = "AzureDevOpsSourceControl.Contents"
        parameters = @(
            @{
                dataType = "Text"
                name = "url"
                value = "<Repo url in Azure DevOps>"
            }
        )
    }
    credentialDetails = @{
        credentials = @{
            credentialType = "ServicePrincipal"
            tenantId = "<SP tenant (directory) id (Guid)>"
            servicePrincipalClientId = "<SP APP (clint) id (Guid)>"
            servicePrincipalSecret = "<SP Secret>"
        }
    }
}

#Note: AzureDevOps for UserPrincipal is not supported (since it requires interactive OAuth2)
$principalType = "<PRINCIPAL TYPE>" # Choose either "UserPrincipal" or "ServicePrincipal"

# Relevant for ServicePrincipal
$clientId = "<CLIENT ID>"                   #The application (client) ID of the service principal
$tenantId = "<TENANT ID>"                   #The directory (tenant) ID of the service principal
$servicePrincipalSecret = "<SECRET VALUE>"  #The secret value of the service principal
$connection = $gitHubPATConnection          # Choose either "$gitHubPATConnection" or "$adoSPConnection"

# End Parameters =======================================

$global:baseUrl = "<Base URL>" # Replace with environment-specific base URL. For example: "https://api.fabric.microsoft.com/v1"

$global:resourceUrl = "https://api.fabric.microsoft.com"

$global:fabricHeaders = @{}

function SetFabricHeaders() {
    if ($principalType -eq "UserPrincipal") {
        $secureFabricToken = GetSecureTokenForUserPrincipal
    } elseif ($principalType -eq "ServicePrincipal") {
        $secureFabricToken = GetSecureTokenForServicePrincipal

    } else {
        throw "Invalid principal type. Please choose either 'UserPrincipal' or 'ServicePrincipal'."
    }

    # Convert SecureString to plain text
    $fabricToken = ConvertSecureStringToPlainText($secureFabricToken)

    $global:fabricHeaders = @{
        'Content-Type' = "application/json"
        'Authorization' = "Bearer $fabricToken"
    }
}

function GetSecureTokenForUserPrincipal() {
    #Login to Azure interactively
    Connect-AzAccount | Out-Null

    # Get authentication
    $secureFabricToken = (Get-AzAccessToken -AsSecureString -ResourceUrl $global:resourceUrl).Token

    return $secureFabricToken
}

function GetSecureTokenForServicePrincipal() {
    $secureServicePrincipalSecret  = ConvertTo-SecureString -String $servicePrincipalSecret -AsPlainText -Force
    $credential = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $clientId, $secureServicePrincipalSecret

    #Login to Azure using service principal
    Connect-AzAccount -ServicePrincipal -TenantId $tenantId -Credential $credential | Out-Null

    # Get authentication
    $secureFabricToken = (Get-AzAccessToken -AsSecureString -ResourceUrl $global:resourceUrl).Token
    
    return $secureFabricToken
}

function ConvertSecureStringToPlainText($secureString) {
    $ssPtr = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($secureString)
    try {
        $plainText = [System.Runtime.InteropServices.Marshal]::PtrToStringBSTR($ssPtr)
    } finally {
        [System.Runtime.InteropServices.Marshal]::ZeroFreeBSTR($ssPtr)
    }
    return $plainText
}

function GetErrorResponse($exception) {
    # Relevant only for PowerShell Core
    $errorResponse = $_.ErrorDetails.Message
 
    if(!$errorResponse) {
        # This is needed to support Windows PowerShell
        if (!$exception.Response) {
            return $exception.Message
        }
        $result = $exception.Response.GetResponseStream()
        $reader = New-Object System.IO.StreamReader($result)
        $reader.BaseStream.Position = 0
        $reader.DiscardBufferedData()
        $errorResponse = $reader.ReadToEnd();
    }
 
    return $errorResponse
}

try {
    SetFabricHeaders
	
    Write-Host "Creating connection with Git provider credentials..."

    $connectionsUrl = "$global:baseUrl/connections"

    $connectionBody = $connection | ConvertTo-Json -Depth 10

    $response = Invoke-RestMethod -Headers $global:fabricHeaders -Uri $connectionsUrl -Method POST -Body $connectionBody

    Write-Host "Connection created successfully! Connection ID: $($response.id)" -ForegroundColor Green

} catch {
    $errorResponse = GetErrorResponse($_.Exception)
    Write-Host "Failed to create connection. . Error reponse: $errorResponse" -ForegroundColor Red
}