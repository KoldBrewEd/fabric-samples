import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Byte` scalar type represents non-fractional whole numeric values. Byte can represent values between 0 and 255. */
  Byte: { input: any; output: any; }
  ByteArray: { input: any; output: any; }
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: { input: any; output: any; }
  /** The `Decimal` scalar type represents a decimal floating-point number. */
  Decimal: { input: any; output: any; }
  /**
   * LocalTime represents a time of day, with no reference to a particular calendar, time zone, or date.
   *
   * Allowed patterns:
   * - `hh:mm:ss.sssssssss`
   *
   * Examples:
   * - `20:00:00.999`
   */
  LocalTime: { input: any; output: any; }
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
  /** The `Short` scalar type represents non-fractional signed whole 16-bit numeric values. Short can represent values between -(2^15) and 2^15 - 1. */
  Short: { input: any; output: any; }
  /** IEEE 754 32 bit float */
  Single: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  AddressID: Scalars['Int']['output'];
  AddressLine1: Scalars['String']['output'];
  AddressLine2?: Maybe<Scalars['String']['output']>;
  City: Scalars['String']['output'];
  CountryRegion?: Maybe<Scalars['String']['output']>;
  ModifiedDate: Scalars['DateTime']['output'];
  PostalCode: Scalars['String']['output'];
  StateProvince?: Maybe<Scalars['String']['output']>;
  rowguid: Scalars['UUID']['output'];
};

/** Aggregation type for Address */
export type AddressAggregations = {
  __typename?: 'AddressAggregations';
  /** Average value */
  avg?: Maybe<Scalars['Float']['output']>;
  /** Count of numeric values */
  count?: Maybe<Scalars['Int']['output']>;
  /** Maximum value for numeric fields */
  max?: Maybe<Scalars['Float']['output']>;
  /** Minimum value for numeric fields */
  min?: Maybe<Scalars['Float']['output']>;
  /** Sum of values */
  sum?: Maybe<Scalars['Float']['output']>;
};


/** Aggregation type for Address */
export type AddressAggregationsAvgArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: AddressNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for Address */
export type AddressAggregationsCountArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: AddressNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for Address */
export type AddressAggregationsMaxArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: AddressNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for Address */
export type AddressAggregationsMinArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: AddressNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for Address */
export type AddressAggregationsSumArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: AddressNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};

/** The return object from a filter query that supports a pagination token for paging through results */
export type AddressConnection = {
  __typename?: 'AddressConnection';
  /** A pagination token to provide to subsequent pages of a query */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Group results by specified fields */
  groupBy: Array<AddressGroupBy>;
  /** Indicates if there are more pages of items to return */
  hasNextPage: Scalars['Boolean']['output'];
  /** The list of items that matched the filter */
  items: Array<Address>;
};


/** The return object from a filter query that supports a pagination token for paging through results */
export type AddressConnectionGroupByArgs = {
  fields?: InputMaybe<Array<AddressScalarFields>>;
};

/** Filter input for Address GraphQL type */
export type AddressFilterInput = {
  /** Filter options for AddressID */
  AddressID?: InputMaybe<IntFilterInput>;
  /** Filter options for AddressLine1 */
  AddressLine1?: InputMaybe<StringFilterInput>;
  /** Filter options for AddressLine2 */
  AddressLine2?: InputMaybe<StringFilterInput>;
  /** Filter options for City */
  City?: InputMaybe<StringFilterInput>;
  /** Filter options for CountryRegion */
  CountryRegion?: InputMaybe<StringFilterInput>;
  /** Filter options for ModifiedDate */
  ModifiedDate?: InputMaybe<DateTimeFilterInput>;
  /** Filter options for PostalCode */
  PostalCode?: InputMaybe<StringFilterInput>;
  /** Filter options for StateProvince */
  StateProvince?: InputMaybe<StringFilterInput>;
  /** Conditions to be treated as AND operations */
  and?: InputMaybe<Array<InputMaybe<AddressFilterInput>>>;
  /** Conditions to be treated as OR operations */
  or?: InputMaybe<Array<InputMaybe<AddressFilterInput>>>;
  /** Filter options for rowguid */
  rowguid?: InputMaybe<UuidFilterInput>;
};

/** GroupBy type for Address */
export type AddressGroupBy = {
  __typename?: 'AddressGroupBy';
  /** Aggregations for Address */
  aggregations?: Maybe<AddressAggregations>;
  /** Grouped fields from Address */
  fields?: Maybe<Address>;
};

/** Fields available for aggregation in Address */
export enum AddressNumericAggregateFields {
  AddressId = 'AddressID'
}

/** Order by input for Address GraphQL type */
export type AddressOrderByInput = {
  /** Order by options for AddressID */
  AddressID?: InputMaybe<OrderBy>;
  /** Order by options for AddressLine1 */
  AddressLine1?: InputMaybe<OrderBy>;
  /** Order by options for AddressLine2 */
  AddressLine2?: InputMaybe<OrderBy>;
  /** Order by options for City */
  City?: InputMaybe<OrderBy>;
  /** Order by options for CountryRegion */
  CountryRegion?: InputMaybe<OrderBy>;
  /** Order by options for ModifiedDate */
  ModifiedDate?: InputMaybe<OrderBy>;
  /** Order by options for PostalCode */
  PostalCode?: InputMaybe<OrderBy>;
  /** Order by options for StateProvince */
  StateProvince?: InputMaybe<OrderBy>;
  /** Order by options for rowguid */
  rowguid?: InputMaybe<OrderBy>;
};

/** Scalar fields available in Address */
export enum AddressScalarFields {
  AddressId = 'AddressID',
  AddressLine1 = 'AddressLine1',
  AddressLine2 = 'AddressLine2',
  City = 'City',
  CountryRegion = 'CountryRegion',
  ModifiedDate = 'ModifiedDate',
  PostalCode = 'PostalCode',
  StateProvince = 'StateProvince',
  Rowguid = 'rowguid'
}

/** Defines when a policy shall be executed. */
export enum ApplyPolicy {
  /** After the resolver was executed. */
  AfterResolver = 'AFTER_RESOLVER',
  /** Before the resolver was executed. */
  BeforeResolver = 'BEFORE_RESOLVER',
  /** The policy is applied in the validation step before the execution. */
  Validation = 'VALIDATION'
}

/** Input type for adding Boolean filters */
export type BooleanFilterInput = {
  /** Equals */
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  /** In */
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  /** Not null test */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Not Equals */
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BuildVersion = {
  __typename?: 'BuildVersion';
  DatabaseVersion: Scalars['String']['output'];
  ModifiedDate: Scalars['DateTime']['output'];
  SystemInformationID: Scalars['Byte']['output'];
  VersionDate: Scalars['DateTime']['output'];
};

/** Aggregation type for BuildVersion */
export type BuildVersionAggregations = {
  __typename?: 'BuildVersionAggregations';
  /** Average value */
  avg?: Maybe<Scalars['Float']['output']>;
  /** Count of numeric values */
  count?: Maybe<Scalars['Int']['output']>;
  /** Maximum value for numeric fields */
  max?: Maybe<Scalars['Float']['output']>;
  /** Minimum value for numeric fields */
  min?: Maybe<Scalars['Float']['output']>;
  /** Sum of values */
  sum?: Maybe<Scalars['Float']['output']>;
};


/** Aggregation type for BuildVersion */
export type BuildVersionAggregationsAvgArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: BuildVersionNumericAggregateFields;
  having?: InputMaybe<ByteFilterInput>;
};


/** Aggregation type for BuildVersion */
export type BuildVersionAggregationsCountArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: BuildVersionNumericAggregateFields;
  having?: InputMaybe<ByteFilterInput>;
};


/** Aggregation type for BuildVersion */
export type BuildVersionAggregationsMaxArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: BuildVersionNumericAggregateFields;
  having?: InputMaybe<ByteFilterInput>;
};


/** Aggregation type for BuildVersion */
export type BuildVersionAggregationsMinArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: BuildVersionNumericAggregateFields;
  having?: InputMaybe<ByteFilterInput>;
};


/** Aggregation type for BuildVersion */
export type BuildVersionAggregationsSumArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: BuildVersionNumericAggregateFields;
  having?: InputMaybe<ByteFilterInput>;
};

/** The return object from a filter query that supports a pagination token for paging through results */
export type BuildVersionConnection = {
  __typename?: 'BuildVersionConnection';
  /** A pagination token to provide to subsequent pages of a query */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Group results by specified fields */
  groupBy: Array<BuildVersionGroupBy>;
  /** Indicates if there are more pages of items to return */
  hasNextPage: Scalars['Boolean']['output'];
  /** The list of items that matched the filter */
  items: Array<BuildVersion>;
};


/** The return object from a filter query that supports a pagination token for paging through results */
export type BuildVersionConnectionGroupByArgs = {
  fields?: InputMaybe<Array<BuildVersionScalarFields>>;
};

/** Filter input for BuildVersion GraphQL type */
export type BuildVersionFilterInput = {
  /** Filter options for DatabaseVersion */
  DatabaseVersion?: InputMaybe<StringFilterInput>;
  /** Filter options for ModifiedDate */
  ModifiedDate?: InputMaybe<DateTimeFilterInput>;
  /** Filter options for SystemInformationID */
  SystemInformationID?: InputMaybe<ByteFilterInput>;
  /** Filter options for VersionDate */
  VersionDate?: InputMaybe<DateTimeFilterInput>;
  /** Conditions to be treated as AND operations */
  and?: InputMaybe<Array<InputMaybe<BuildVersionFilterInput>>>;
  /** Conditions to be treated as OR operations */
  or?: InputMaybe<Array<InputMaybe<BuildVersionFilterInput>>>;
};

/** GroupBy type for BuildVersion */
export type BuildVersionGroupBy = {
  __typename?: 'BuildVersionGroupBy';
  /** Aggregations for BuildVersion */
  aggregations?: Maybe<BuildVersionAggregations>;
  /** Grouped fields from BuildVersion */
  fields?: Maybe<BuildVersion>;
};

/** Fields available for aggregation in BuildVersion */
export enum BuildVersionNumericAggregateFields {
  SystemInformationId = 'SystemInformationID'
}

/** Order by input for BuildVersion GraphQL type */
export type BuildVersionOrderByInput = {
  /** Order by options for DatabaseVersion */
  DatabaseVersion?: InputMaybe<OrderBy>;
  /** Order by options for ModifiedDate */
  ModifiedDate?: InputMaybe<OrderBy>;
  /** Order by options for SystemInformationID */
  SystemInformationID?: InputMaybe<OrderBy>;
  /** Order by options for VersionDate */
  VersionDate?: InputMaybe<OrderBy>;
};

/** Scalar fields available in BuildVersion */
export enum BuildVersionScalarFields {
  DatabaseVersion = 'DatabaseVersion',
  ModifiedDate = 'ModifiedDate',
  SystemInformationId = 'SystemInformationID',
  VersionDate = 'VersionDate'
}

/** Input type for adding ByteArray filters */
export type ByteArrayFilterInput = {
  /** Not null test */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input type for adding Byte filters */
export type ByteFilterInput = {
  /** Equals */
  eq?: InputMaybe<Scalars['Byte']['input']>;
  /** Greater Than */
  gt?: InputMaybe<Scalars['Byte']['input']>;
  /** Greater Than or Equal To */
  gte?: InputMaybe<Scalars['Byte']['input']>;
  /** In */
  in?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  /** Not null test */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less Than */
  lt?: InputMaybe<Scalars['Byte']['input']>;
  /** Less Than or Equal To */
  lte?: InputMaybe<Scalars['Byte']['input']>;
  /** Not Equals */
  neq?: InputMaybe<Scalars['Byte']['input']>;
};

/** Input type for creating Address */
export type CreateAddressInput = {
  /** Input for field AddressLine1 on type CreateAddressInput */
  AddressLine1: Scalars['String']['input'];
  /** Input for field AddressLine2 on type CreateAddressInput */
  AddressLine2?: InputMaybe<Scalars['String']['input']>;
  /** Input for field City on type CreateAddressInput */
  City: Scalars['String']['input'];
  /** Input for field CountryRegion on type CreateAddressInput */
  CountryRegion?: InputMaybe<Scalars['String']['input']>;
  /** Input for field ModifiedDate on type CreateAddressInput */
  ModifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field PostalCode on type CreateAddressInput */
  PostalCode: Scalars['String']['input'];
  /** Input for field StateProvince on type CreateAddressInput */
  StateProvince?: InputMaybe<Scalars['String']['input']>;
  /** Input for field rowguid on type CreateAddressInput */
  rowguid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Input type for creating BuildVersion */
export type CreateBuildVersionInput = {
  /** Input for field DatabaseVersion on type CreateBuildVersionInput */
  DatabaseVersion: Scalars['String']['input'];
  /** Input for field ModifiedDate on type CreateBuildVersionInput */
  ModifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field SystemInformationID on type CreateBuildVersionInput */
  SystemInformationID: Scalars['Byte']['input'];
  /** Input for field VersionDate on type CreateBuildVersionInput */
  VersionDate: Scalars['DateTime']['input'];
};

/** Input type for creating CustomerAddress */
export type CreateCustomerAddressInput = {
  /** Input for field AddressID on type CreateCustomerAddressInput */
  AddressID: Scalars['Int']['input'];
  /** Input for field AddressType on type CreateCustomerAddressInput */
  AddressType?: InputMaybe<Scalars['String']['input']>;
  /** Input for field CustomerID on type CreateCustomerAddressInput */
  CustomerID: Scalars['Int']['input'];
  /** Input for field ModifiedDate on type CreateCustomerAddressInput */
  ModifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field rowguid on type CreateCustomerAddressInput */
  rowguid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Input type for creating Customer */
export type CreateCustomerInput = {
  /** Input for field CompanyName on type CreateCustomerInput */
  CompanyName?: InputMaybe<Scalars['String']['input']>;
  /** Input for field EmailAddress on type CreateCustomerInput */
  EmailAddress?: InputMaybe<Scalars['String']['input']>;
  /** Input for field FirstName on type CreateCustomerInput */
  FirstName?: InputMaybe<Scalars['String']['input']>;
  /** Input for field LastName on type CreateCustomerInput */
  LastName?: InputMaybe<Scalars['String']['input']>;
  /** Input for field MiddleName on type CreateCustomerInput */
  MiddleName?: InputMaybe<Scalars['String']['input']>;
  /** Input for field ModifiedDate on type CreateCustomerInput */
  ModifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field NameStyle on type CreateCustomerInput */
  NameStyle?: InputMaybe<Scalars['Boolean']['input']>;
  /** Input for field PasswordHash on type CreateCustomerInput */
  PasswordHash: Scalars['String']['input'];
  /** Input for field PasswordSalt on type CreateCustomerInput */
  PasswordSalt: Scalars['String']['input'];
  /** Input for field Phone on type CreateCustomerInput */
  Phone?: InputMaybe<Scalars['String']['input']>;
  /** Input for field SalesPerson on type CreateCustomerInput */
  SalesPerson?: InputMaybe<Scalars['String']['input']>;
  /** Input for field Suffix on type CreateCustomerInput */
  Suffix?: InputMaybe<Scalars['String']['input']>;
  /** Input for field Title on type CreateCustomerInput */
  Title?: InputMaybe<Scalars['String']['input']>;
  /** Input for field rowguid on type CreateCustomerInput */
  rowguid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Input type for creating ErrorLog */
export type CreateErrorLogInput = {
  /** Input for field ErrorLine on type CreateErrorLogInput */
  ErrorLine?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field ErrorMessage on type CreateErrorLogInput */
  ErrorMessage: Scalars['String']['input'];
  /** Input for field ErrorNumber on type CreateErrorLogInput */
  ErrorNumber: Scalars['Int']['input'];
  /** Input for field ErrorProcedure on type CreateErrorLogInput */
  ErrorProcedure?: InputMaybe<Scalars['String']['input']>;
  /** Input for field ErrorSeverity on type CreateErrorLogInput */
  ErrorSeverity?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field ErrorState on type CreateErrorLogInput */
  ErrorState?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field ErrorTime on type CreateErrorLogInput */
  ErrorTime?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field UserName on type CreateErrorLogInput */
  UserName: Scalars['String']['input'];
};

/** Input type for creating ProductCategory */
export type CreateProductCategoryInput = {
  /** Input for field ModifiedDate on type CreateProductCategoryInput */
  ModifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field Name on type CreateProductCategoryInput */
  Name?: InputMaybe<Scalars['String']['input']>;
  /** Input for field ParentProductCategoryID on type CreateProductCategoryInput */
  ParentProductCategoryID?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field rowguid on type CreateProductCategoryInput */
  rowguid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Input type for creating ProductDescription */
export type CreateProductDescriptionInput = {
  /** Input for field Description on type CreateProductDescriptionInput */
  Description: Scalars['String']['input'];
  /** Input for field ModifiedDate on type CreateProductDescriptionInput */
  ModifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field rowguid on type CreateProductDescriptionInput */
  rowguid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Input type for creating Product */
export type CreateProductInput = {
  /** Input for field Color on type CreateProductInput */
  Color?: InputMaybe<Scalars['String']['input']>;
  /** Input for field DiscontinuedDate on type CreateProductInput */
  DiscontinuedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field ListPrice on type CreateProductInput */
  ListPrice: Scalars['Decimal']['input'];
  /** Input for field ModifiedDate on type CreateProductInput */
  ModifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field Name on type CreateProductInput */
  Name?: InputMaybe<Scalars['String']['input']>;
  /** Input for field ProductCategoryID on type CreateProductInput */
  ProductCategoryID?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field ProductModelID on type CreateProductInput */
  ProductModelID?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field ProductNumber on type CreateProductInput */
  ProductNumber: Scalars['String']['input'];
  /** Input for field SellEndDate on type CreateProductInput */
  SellEndDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field SellStartDate on type CreateProductInput */
  SellStartDate: Scalars['DateTime']['input'];
  /** Input for field Size on type CreateProductInput */
  Size?: InputMaybe<Scalars['String']['input']>;
  /** Input for field StandardCost on type CreateProductInput */
  StandardCost: Scalars['Decimal']['input'];
  /** Input for field ThumbNailPhoto on type CreateProductInput */
  ThumbNailPhoto?: InputMaybe<Scalars['ByteArray']['input']>;
  /** Input for field ThumbnailPhotoFileName on type CreateProductInput */
  ThumbnailPhotoFileName?: InputMaybe<Scalars['String']['input']>;
  /** Input for field Weight on type CreateProductInput */
  Weight?: InputMaybe<Scalars['Decimal']['input']>;
  /** Input for field rowguid on type CreateProductInput */
  rowguid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Input type for creating ProductModel */
export type CreateProductModelInput = {
  /** Input for field ModifiedDate on type CreateProductModelInput */
  ModifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field Name on type CreateProductModelInput */
  Name?: InputMaybe<Scalars['String']['input']>;
  /** Input for field rowguid on type CreateProductModelInput */
  rowguid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Input type for creating ProductModelProductDescription */
export type CreateProductModelProductDescriptionInput = {
  /** Input for field Culture on type CreateProductModelProductDescriptionInput */
  Culture: Scalars['String']['input'];
  /** Input for field ModifiedDate on type CreateProductModelProductDescriptionInput */
  ModifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field ProductDescriptionID on type CreateProductModelProductDescriptionInput */
  ProductDescriptionID: Scalars['Int']['input'];
  /** Input for field ProductModelID on type CreateProductModelProductDescriptionInput */
  ProductModelID: Scalars['Int']['input'];
  /** Input for field rowguid on type CreateProductModelProductDescriptionInput */
  rowguid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Input type for creating SalesOrderDetail */
export type CreateSalesOrderDetailInput = {
  /** Input for field ModifiedDate on type CreateSalesOrderDetailInput */
  ModifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field OrderQty on type CreateSalesOrderDetailInput */
  OrderQty: Scalars['Short']['input'];
  /** Input for field ProductID on type CreateSalesOrderDetailInput */
  ProductID: Scalars['Int']['input'];
  /** Input for field SalesOrderID on type CreateSalesOrderDetailInput */
  SalesOrderID: Scalars['Int']['input'];
  /** Input for field UnitPrice on type CreateSalesOrderDetailInput */
  UnitPrice: Scalars['Decimal']['input'];
  /** Input for field UnitPriceDiscount on type CreateSalesOrderDetailInput */
  UnitPriceDiscount?: InputMaybe<Scalars['Decimal']['input']>;
  /** Input for field rowguid on type CreateSalesOrderDetailInput */
  rowguid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Input type for creating SalesOrderHeader */
export type CreateSalesOrderHeaderInput = {
  /** Input for field AccountNumber on type CreateSalesOrderHeaderInput */
  AccountNumber?: InputMaybe<Scalars['String']['input']>;
  /** Input for field BillToAddressID on type CreateSalesOrderHeaderInput */
  BillToAddressID?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field Comment on type CreateSalesOrderHeaderInput */
  Comment?: InputMaybe<Scalars['String']['input']>;
  /** Input for field CreditCardApprovalCode on type CreateSalesOrderHeaderInput */
  CreditCardApprovalCode?: InputMaybe<Scalars['String']['input']>;
  /** Input for field CustomerID on type CreateSalesOrderHeaderInput */
  CustomerID: Scalars['Int']['input'];
  /** Input for field DueDate on type CreateSalesOrderHeaderInput */
  DueDate: Scalars['DateTime']['input'];
  /** Input for field Freight on type CreateSalesOrderHeaderInput */
  Freight?: InputMaybe<Scalars['Decimal']['input']>;
  /** Input for field ModifiedDate on type CreateSalesOrderHeaderInput */
  ModifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field OnlineOrderFlag on type CreateSalesOrderHeaderInput */
  OnlineOrderFlag?: InputMaybe<Scalars['Boolean']['input']>;
  /** Input for field OrderDate on type CreateSalesOrderHeaderInput */
  OrderDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field PurchaseOrderNumber on type CreateSalesOrderHeaderInput */
  PurchaseOrderNumber?: InputMaybe<Scalars['String']['input']>;
  /** Input for field RevisionNumber on type CreateSalesOrderHeaderInput */
  RevisionNumber?: InputMaybe<Scalars['Byte']['input']>;
  /** Input for field SalesOrderID on type CreateSalesOrderHeaderInput */
  SalesOrderID?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field ShipDate on type CreateSalesOrderHeaderInput */
  ShipDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field ShipMethod on type CreateSalesOrderHeaderInput */
  ShipMethod: Scalars['String']['input'];
  /** Input for field ShipToAddressID on type CreateSalesOrderHeaderInput */
  ShipToAddressID?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field Status on type CreateSalesOrderHeaderInput */
  Status?: InputMaybe<Scalars['Byte']['input']>;
  /** Input for field SubTotal on type CreateSalesOrderHeaderInput */
  SubTotal?: InputMaybe<Scalars['Decimal']['input']>;
  /** Input for field TaxAmt on type CreateSalesOrderHeaderInput */
  TaxAmt?: InputMaybe<Scalars['Decimal']['input']>;
  /** Input for field rowguid on type CreateSalesOrderHeaderInput */
  rowguid?: InputMaybe<Scalars['UUID']['input']>;
};

export type Customer = {
  __typename?: 'Customer';
  CompanyName?: Maybe<Scalars['String']['output']>;
  CustomerID: Scalars['Int']['output'];
  EmailAddress?: Maybe<Scalars['String']['output']>;
  FirstName?: Maybe<Scalars['String']['output']>;
  LastName?: Maybe<Scalars['String']['output']>;
  MiddleName?: Maybe<Scalars['String']['output']>;
  ModifiedDate: Scalars['DateTime']['output'];
  NameStyle?: Maybe<Scalars['Boolean']['output']>;
  PasswordHash: Scalars['String']['output'];
  PasswordSalt: Scalars['String']['output'];
  Phone?: Maybe<Scalars['String']['output']>;
  SalesPerson?: Maybe<Scalars['String']['output']>;
  Suffix?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  rowguid: Scalars['UUID']['output'];
};

export type CustomerAddress = {
  __typename?: 'CustomerAddress';
  AddressID: Scalars['Int']['output'];
  AddressType?: Maybe<Scalars['String']['output']>;
  CustomerID: Scalars['Int']['output'];
  ModifiedDate: Scalars['DateTime']['output'];
  rowguid: Scalars['UUID']['output'];
};

/** Aggregation type for CustomerAddress */
export type CustomerAddressAggregations = {
  __typename?: 'CustomerAddressAggregations';
  /** Average value */
  avg?: Maybe<Scalars['Float']['output']>;
  /** Count of numeric values */
  count?: Maybe<Scalars['Int']['output']>;
  /** Maximum value for numeric fields */
  max?: Maybe<Scalars['Float']['output']>;
  /** Minimum value for numeric fields */
  min?: Maybe<Scalars['Float']['output']>;
  /** Sum of values */
  sum?: Maybe<Scalars['Float']['output']>;
};


/** Aggregation type for CustomerAddress */
export type CustomerAddressAggregationsAvgArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: CustomerAddressNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for CustomerAddress */
export type CustomerAddressAggregationsCountArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: CustomerAddressNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for CustomerAddress */
export type CustomerAddressAggregationsMaxArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: CustomerAddressNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for CustomerAddress */
export type CustomerAddressAggregationsMinArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: CustomerAddressNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for CustomerAddress */
export type CustomerAddressAggregationsSumArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: CustomerAddressNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};

/** The return object from a filter query that supports a pagination token for paging through results */
export type CustomerAddressConnection = {
  __typename?: 'CustomerAddressConnection';
  /** A pagination token to provide to subsequent pages of a query */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Group results by specified fields */
  groupBy: Array<CustomerAddressGroupBy>;
  /** Indicates if there are more pages of items to return */
  hasNextPage: Scalars['Boolean']['output'];
  /** The list of items that matched the filter */
  items: Array<CustomerAddress>;
};


/** The return object from a filter query that supports a pagination token for paging through results */
export type CustomerAddressConnectionGroupByArgs = {
  fields?: InputMaybe<Array<CustomerAddressScalarFields>>;
};

/** Filter input for CustomerAddress GraphQL type */
export type CustomerAddressFilterInput = {
  /** Filter options for AddressID */
  AddressID?: InputMaybe<IntFilterInput>;
  /** Filter options for AddressType */
  AddressType?: InputMaybe<StringFilterInput>;
  /** Filter options for CustomerID */
  CustomerID?: InputMaybe<IntFilterInput>;
  /** Filter options for ModifiedDate */
  ModifiedDate?: InputMaybe<DateTimeFilterInput>;
  /** Conditions to be treated as AND operations */
  and?: InputMaybe<Array<InputMaybe<CustomerAddressFilterInput>>>;
  /** Conditions to be treated as OR operations */
  or?: InputMaybe<Array<InputMaybe<CustomerAddressFilterInput>>>;
  /** Filter options for rowguid */
  rowguid?: InputMaybe<UuidFilterInput>;
};

/** GroupBy type for CustomerAddress */
export type CustomerAddressGroupBy = {
  __typename?: 'CustomerAddressGroupBy';
  /** Aggregations for CustomerAddress */
  aggregations?: Maybe<CustomerAddressAggregations>;
  /** Grouped fields from CustomerAddress */
  fields?: Maybe<CustomerAddress>;
};

/** Fields available for aggregation in CustomerAddress */
export enum CustomerAddressNumericAggregateFields {
  AddressId = 'AddressID',
  CustomerId = 'CustomerID'
}

/** Order by input for CustomerAddress GraphQL type */
export type CustomerAddressOrderByInput = {
  /** Order by options for AddressID */
  AddressID?: InputMaybe<OrderBy>;
  /** Order by options for AddressType */
  AddressType?: InputMaybe<OrderBy>;
  /** Order by options for CustomerID */
  CustomerID?: InputMaybe<OrderBy>;
  /** Order by options for ModifiedDate */
  ModifiedDate?: InputMaybe<OrderBy>;
  /** Order by options for rowguid */
  rowguid?: InputMaybe<OrderBy>;
};

/** Scalar fields available in CustomerAddress */
export enum CustomerAddressScalarFields {
  AddressId = 'AddressID',
  AddressType = 'AddressType',
  CustomerId = 'CustomerID',
  ModifiedDate = 'ModifiedDate',
  Rowguid = 'rowguid'
}

/** Aggregation type for Customer */
export type CustomerAggregations = {
  __typename?: 'CustomerAggregations';
  /** Average value */
  avg?: Maybe<Scalars['Float']['output']>;
  /** Count of numeric values */
  count?: Maybe<Scalars['Int']['output']>;
  /** Maximum value for numeric fields */
  max?: Maybe<Scalars['Float']['output']>;
  /** Minimum value for numeric fields */
  min?: Maybe<Scalars['Float']['output']>;
  /** Sum of values */
  sum?: Maybe<Scalars['Float']['output']>;
};


/** Aggregation type for Customer */
export type CustomerAggregationsAvgArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: CustomerNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for Customer */
export type CustomerAggregationsCountArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: CustomerNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for Customer */
export type CustomerAggregationsMaxArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: CustomerNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for Customer */
export type CustomerAggregationsMinArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: CustomerNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for Customer */
export type CustomerAggregationsSumArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: CustomerNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};

/** The return object from a filter query that supports a pagination token for paging through results */
export type CustomerConnection = {
  __typename?: 'CustomerConnection';
  /** A pagination token to provide to subsequent pages of a query */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Group results by specified fields */
  groupBy: Array<CustomerGroupBy>;
  /** Indicates if there are more pages of items to return */
  hasNextPage: Scalars['Boolean']['output'];
  /** The list of items that matched the filter */
  items: Array<Customer>;
};


/** The return object from a filter query that supports a pagination token for paging through results */
export type CustomerConnectionGroupByArgs = {
  fields?: InputMaybe<Array<CustomerScalarFields>>;
};

/** Filter input for Customer GraphQL type */
export type CustomerFilterInput = {
  /** Filter options for CompanyName */
  CompanyName?: InputMaybe<StringFilterInput>;
  /** Filter options for CustomerID */
  CustomerID?: InputMaybe<IntFilterInput>;
  /** Filter options for EmailAddress */
  EmailAddress?: InputMaybe<StringFilterInput>;
  /** Filter options for FirstName */
  FirstName?: InputMaybe<StringFilterInput>;
  /** Filter options for LastName */
  LastName?: InputMaybe<StringFilterInput>;
  /** Filter options for MiddleName */
  MiddleName?: InputMaybe<StringFilterInput>;
  /** Filter options for ModifiedDate */
  ModifiedDate?: InputMaybe<DateTimeFilterInput>;
  /** Filter options for NameStyle */
  NameStyle?: InputMaybe<BooleanFilterInput>;
  /** Filter options for PasswordHash */
  PasswordHash?: InputMaybe<StringFilterInput>;
  /** Filter options for PasswordSalt */
  PasswordSalt?: InputMaybe<StringFilterInput>;
  /** Filter options for Phone */
  Phone?: InputMaybe<StringFilterInput>;
  /** Filter options for SalesPerson */
  SalesPerson?: InputMaybe<StringFilterInput>;
  /** Filter options for Suffix */
  Suffix?: InputMaybe<StringFilterInput>;
  /** Filter options for Title */
  Title?: InputMaybe<StringFilterInput>;
  /** Conditions to be treated as AND operations */
  and?: InputMaybe<Array<InputMaybe<CustomerFilterInput>>>;
  /** Conditions to be treated as OR operations */
  or?: InputMaybe<Array<InputMaybe<CustomerFilterInput>>>;
  /** Filter options for rowguid */
  rowguid?: InputMaybe<UuidFilterInput>;
};

/** GroupBy type for Customer */
export type CustomerGroupBy = {
  __typename?: 'CustomerGroupBy';
  /** Aggregations for Customer */
  aggregations?: Maybe<CustomerAggregations>;
  /** Grouped fields from Customer */
  fields?: Maybe<Customer>;
};

/** Fields available for aggregation in Customer */
export enum CustomerNumericAggregateFields {
  CustomerId = 'CustomerID'
}

/** Order by input for Customer GraphQL type */
export type CustomerOrderByInput = {
  /** Order by options for CompanyName */
  CompanyName?: InputMaybe<OrderBy>;
  /** Order by options for CustomerID */
  CustomerID?: InputMaybe<OrderBy>;
  /** Order by options for EmailAddress */
  EmailAddress?: InputMaybe<OrderBy>;
  /** Order by options for FirstName */
  FirstName?: InputMaybe<OrderBy>;
  /** Order by options for LastName */
  LastName?: InputMaybe<OrderBy>;
  /** Order by options for MiddleName */
  MiddleName?: InputMaybe<OrderBy>;
  /** Order by options for ModifiedDate */
  ModifiedDate?: InputMaybe<OrderBy>;
  /** Order by options for NameStyle */
  NameStyle?: InputMaybe<OrderBy>;
  /** Order by options for PasswordHash */
  PasswordHash?: InputMaybe<OrderBy>;
  /** Order by options for PasswordSalt */
  PasswordSalt?: InputMaybe<OrderBy>;
  /** Order by options for Phone */
  Phone?: InputMaybe<OrderBy>;
  /** Order by options for SalesPerson */
  SalesPerson?: InputMaybe<OrderBy>;
  /** Order by options for Suffix */
  Suffix?: InputMaybe<OrderBy>;
  /** Order by options for Title */
  Title?: InputMaybe<OrderBy>;
  /** Order by options for rowguid */
  rowguid?: InputMaybe<OrderBy>;
};

/** Scalar fields available in Customer */
export enum CustomerScalarFields {
  CompanyName = 'CompanyName',
  CustomerId = 'CustomerID',
  EmailAddress = 'EmailAddress',
  FirstName = 'FirstName',
  LastName = 'LastName',
  MiddleName = 'MiddleName',
  ModifiedDate = 'ModifiedDate',
  NameStyle = 'NameStyle',
  PasswordHash = 'PasswordHash',
  PasswordSalt = 'PasswordSalt',
  Phone = 'Phone',
  SalesPerson = 'SalesPerson',
  Suffix = 'Suffix',
  Title = 'Title',
  Rowguid = 'rowguid'
}

/** Input type for adding DateTime filters */
export type DateTimeFilterInput = {
  /** Equals */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Greater Than */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Greater Than or Equal To */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** In */
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** Not null test */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less Than */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Less Than or Equal To */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Not Equals */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DbOperationResult = {
  __typename?: 'DbOperationResult';
  /** Contains result for mutation execution */
  result?: Maybe<Scalars['String']['output']>;
};

/** Input type for adding Decimal filters */
export type DecimalFilterInput = {
  /** Equals */
  eq?: InputMaybe<Scalars['Decimal']['input']>;
  /** Greater Than */
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  /** Greater Than or Equal To */
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  /** In */
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  /** Not null test */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less Than */
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  /** Less Than or Equal To */
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  /** Not Equals */
  neq?: InputMaybe<Scalars['Decimal']['input']>;
};

export type DefaultValue = {
  Boolean?: InputMaybe<Scalars['Boolean']['input']>;
  Byte?: InputMaybe<Scalars['Byte']['input']>;
  ByteArray?: InputMaybe<Scalars['ByteArray']['input']>;
  DateTime?: InputMaybe<Scalars['DateTime']['input']>;
  Decimal?: InputMaybe<Scalars['Decimal']['input']>;
  Float?: InputMaybe<Scalars['Float']['input']>;
  Int?: InputMaybe<Scalars['Int']['input']>;
  LocalTime?: InputMaybe<Scalars['LocalTime']['input']>;
  Long?: InputMaybe<Scalars['Long']['input']>;
  Short?: InputMaybe<Scalars['Short']['input']>;
  Single?: InputMaybe<Scalars['Single']['input']>;
  String?: InputMaybe<Scalars['String']['input']>;
};

export type ErrorLog = {
  __typename?: 'ErrorLog';
  ErrorLine?: Maybe<Scalars['Int']['output']>;
  ErrorLogID: Scalars['Int']['output'];
  ErrorMessage: Scalars['String']['output'];
  ErrorNumber: Scalars['Int']['output'];
  ErrorProcedure?: Maybe<Scalars['String']['output']>;
  ErrorSeverity?: Maybe<Scalars['Int']['output']>;
  ErrorState?: Maybe<Scalars['Int']['output']>;
  ErrorTime: Scalars['DateTime']['output'];
  UserName: Scalars['String']['output'];
};

/** Aggregation type for ErrorLog */
export type ErrorLogAggregations = {
  __typename?: 'ErrorLogAggregations';
  /** Average value */
  avg?: Maybe<Scalars['Float']['output']>;
  /** Count of numeric values */
  count?: Maybe<Scalars['Int']['output']>;
  /** Maximum value for numeric fields */
  max?: Maybe<Scalars['Float']['output']>;
  /** Minimum value for numeric fields */
  min?: Maybe<Scalars['Float']['output']>;
  /** Sum of values */
  sum?: Maybe<Scalars['Float']['output']>;
};


/** Aggregation type for ErrorLog */
export type ErrorLogAggregationsAvgArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ErrorLogNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for ErrorLog */
export type ErrorLogAggregationsCountArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ErrorLogNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for ErrorLog */
export type ErrorLogAggregationsMaxArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ErrorLogNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for ErrorLog */
export type ErrorLogAggregationsMinArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ErrorLogNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for ErrorLog */
export type ErrorLogAggregationsSumArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ErrorLogNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};

/** The return object from a filter query that supports a pagination token for paging through results */
export type ErrorLogConnection = {
  __typename?: 'ErrorLogConnection';
  /** A pagination token to provide to subsequent pages of a query */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Group results by specified fields */
  groupBy: Array<ErrorLogGroupBy>;
  /** Indicates if there are more pages of items to return */
  hasNextPage: Scalars['Boolean']['output'];
  /** The list of items that matched the filter */
  items: Array<ErrorLog>;
};


/** The return object from a filter query that supports a pagination token for paging through results */
export type ErrorLogConnectionGroupByArgs = {
  fields?: InputMaybe<Array<ErrorLogScalarFields>>;
};

/** Filter input for ErrorLog GraphQL type */
export type ErrorLogFilterInput = {
  /** Filter options for ErrorLine */
  ErrorLine?: InputMaybe<IntFilterInput>;
  /** Filter options for ErrorLogID */
  ErrorLogID?: InputMaybe<IntFilterInput>;
  /** Filter options for ErrorMessage */
  ErrorMessage?: InputMaybe<StringFilterInput>;
  /** Filter options for ErrorNumber */
  ErrorNumber?: InputMaybe<IntFilterInput>;
  /** Filter options for ErrorProcedure */
  ErrorProcedure?: InputMaybe<StringFilterInput>;
  /** Filter options for ErrorSeverity */
  ErrorSeverity?: InputMaybe<IntFilterInput>;
  /** Filter options for ErrorState */
  ErrorState?: InputMaybe<IntFilterInput>;
  /** Filter options for ErrorTime */
  ErrorTime?: InputMaybe<DateTimeFilterInput>;
  /** Filter options for UserName */
  UserName?: InputMaybe<StringFilterInput>;
  /** Conditions to be treated as AND operations */
  and?: InputMaybe<Array<InputMaybe<ErrorLogFilterInput>>>;
  /** Conditions to be treated as OR operations */
  or?: InputMaybe<Array<InputMaybe<ErrorLogFilterInput>>>;
};

/** GroupBy type for ErrorLog */
export type ErrorLogGroupBy = {
  __typename?: 'ErrorLogGroupBy';
  /** Aggregations for ErrorLog */
  aggregations?: Maybe<ErrorLogAggregations>;
  /** Grouped fields from ErrorLog */
  fields?: Maybe<ErrorLog>;
};

/** Fields available for aggregation in ErrorLog */
export enum ErrorLogNumericAggregateFields {
  ErrorLine = 'ErrorLine',
  ErrorLogId = 'ErrorLogID',
  ErrorNumber = 'ErrorNumber',
  ErrorSeverity = 'ErrorSeverity',
  ErrorState = 'ErrorState'
}

/** Order by input for ErrorLog GraphQL type */
export type ErrorLogOrderByInput = {
  /** Order by options for ErrorLine */
  ErrorLine?: InputMaybe<OrderBy>;
  /** Order by options for ErrorLogID */
  ErrorLogID?: InputMaybe<OrderBy>;
  /** Order by options for ErrorMessage */
  ErrorMessage?: InputMaybe<OrderBy>;
  /** Order by options for ErrorNumber */
  ErrorNumber?: InputMaybe<OrderBy>;
  /** Order by options for ErrorProcedure */
  ErrorProcedure?: InputMaybe<OrderBy>;
  /** Order by options for ErrorSeverity */
  ErrorSeverity?: InputMaybe<OrderBy>;
  /** Order by options for ErrorState */
  ErrorState?: InputMaybe<OrderBy>;
  /** Order by options for ErrorTime */
  ErrorTime?: InputMaybe<OrderBy>;
  /** Order by options for UserName */
  UserName?: InputMaybe<OrderBy>;
};

/** Scalar fields available in ErrorLog */
export enum ErrorLogScalarFields {
  ErrorLine = 'ErrorLine',
  ErrorLogId = 'ErrorLogID',
  ErrorMessage = 'ErrorMessage',
  ErrorNumber = 'ErrorNumber',
  ErrorProcedure = 'ErrorProcedure',
  ErrorSeverity = 'ErrorSeverity',
  ErrorState = 'ErrorState',
  ErrorTime = 'ErrorTime',
  UserName = 'UserName'
}

/** Input type for adding Int filters */
export type IntFilterInput = {
  /** Equals */
  eq?: InputMaybe<Scalars['Int']['input']>;
  /** Greater Than */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** Greater Than or Equal To */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** In */
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Not null test */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less Than */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** Less Than or Equal To */
  lte?: InputMaybe<Scalars['Int']['input']>;
  /** Not Equals */
  neq?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a new Address */
  createAddress?: Maybe<Address>;
  /** Creates a new BuildVersion */
  createBuildVersion?: Maybe<BuildVersion>;
  /** Creates a new Customer */
  createCustomer?: Maybe<Customer>;
  /** Creates a new CustomerAddress */
  createCustomerAddress?: Maybe<CustomerAddress>;
  /** Creates a new ErrorLog */
  createErrorLog?: Maybe<ErrorLog>;
  /** Creates a new Product */
  createProduct?: Maybe<Product>;
  /** Creates a new ProductCategory */
  createProductCategory?: Maybe<ProductCategory>;
  /** Creates a new ProductDescription */
  createProductDescription?: Maybe<ProductDescription>;
  /** Creates a new ProductModel */
  createProductModel?: Maybe<ProductModel>;
  /** Creates a new ProductModelProductDescription */
  createProductModelProductDescription?: Maybe<ProductModelProductDescription>;
  /** Creates a new SalesOrderDetail */
  createSalesOrderDetail?: Maybe<SalesOrderDetail>;
  /** Creates a new SalesOrderHeader */
  createSalesOrderHeader?: Maybe<SalesOrderHeader>;
  /** Delete a Address */
  deleteAddress?: Maybe<Address>;
  /** Delete a BuildVersion */
  deleteBuildVersion?: Maybe<BuildVersion>;
  /** Delete a Customer */
  deleteCustomer?: Maybe<Customer>;
  /** Delete a CustomerAddress */
  deleteCustomerAddress?: Maybe<CustomerAddress>;
  /** Delete a ErrorLog */
  deleteErrorLog?: Maybe<ErrorLog>;
  /** Delete a Product */
  deleteProduct?: Maybe<Product>;
  /** Delete a ProductCategory */
  deleteProductCategory?: Maybe<ProductCategory>;
  /** Delete a ProductDescription */
  deleteProductDescription?: Maybe<ProductDescription>;
  /** Delete a ProductModel */
  deleteProductModel?: Maybe<ProductModel>;
  /** Delete a ProductModelProductDescription */
  deleteProductModelProductDescription?: Maybe<ProductModelProductDescription>;
  /** Delete a SalesOrderDetail */
  deleteSalesOrderDetail?: Maybe<SalesOrderDetail>;
  /** Delete a SalesOrderHeader */
  deleteSalesOrderHeader?: Maybe<SalesOrderHeader>;
  /** Execute Stored-Procedure uspLogError and get results from the database */
  executeuspLogError: Array<UspLogError>;
  /** Updates a Address */
  updateAddress?: Maybe<Address>;
  /** Updates a BuildVersion */
  updateBuildVersion?: Maybe<BuildVersion>;
  /** Updates a Customer */
  updateCustomer?: Maybe<Customer>;
  /** Updates a CustomerAddress */
  updateCustomerAddress?: Maybe<CustomerAddress>;
  /** Updates a ErrorLog */
  updateErrorLog?: Maybe<ErrorLog>;
  /** Updates a Product */
  updateProduct?: Maybe<Product>;
  /** Updates a ProductCategory */
  updateProductCategory?: Maybe<ProductCategory>;
  /** Updates a ProductDescription */
  updateProductDescription?: Maybe<ProductDescription>;
  /** Updates a ProductModel */
  updateProductModel?: Maybe<ProductModel>;
  /** Updates a ProductModelProductDescription */
  updateProductModelProductDescription?: Maybe<ProductModelProductDescription>;
  /** Updates a SalesOrderDetail */
  updateSalesOrderDetail?: Maybe<SalesOrderDetail>;
  /** Updates a SalesOrderHeader */
  updateSalesOrderHeader?: Maybe<SalesOrderHeader>;
};


export type MutationCreateAddressArgs = {
  item: CreateAddressInput;
};


export type MutationCreateBuildVersionArgs = {
  item: CreateBuildVersionInput;
};


export type MutationCreateCustomerArgs = {
  item: CreateCustomerInput;
};


export type MutationCreateCustomerAddressArgs = {
  item: CreateCustomerAddressInput;
};


export type MutationCreateErrorLogArgs = {
  item: CreateErrorLogInput;
};


export type MutationCreateProductArgs = {
  item: CreateProductInput;
};


export type MutationCreateProductCategoryArgs = {
  item: CreateProductCategoryInput;
};


export type MutationCreateProductDescriptionArgs = {
  item: CreateProductDescriptionInput;
};


export type MutationCreateProductModelArgs = {
  item: CreateProductModelInput;
};


export type MutationCreateProductModelProductDescriptionArgs = {
  item: CreateProductModelProductDescriptionInput;
};


export type MutationCreateSalesOrderDetailArgs = {
  item: CreateSalesOrderDetailInput;
};


export type MutationCreateSalesOrderHeaderArgs = {
  item: CreateSalesOrderHeaderInput;
};


export type MutationDeleteAddressArgs = {
  AddressID: Scalars['Int']['input'];
};


export type MutationDeleteBuildVersionArgs = {
  SystemInformationID: Scalars['Byte']['input'];
};


export type MutationDeleteCustomerArgs = {
  CustomerID: Scalars['Int']['input'];
};


export type MutationDeleteCustomerAddressArgs = {
  AddressID: Scalars['Int']['input'];
  CustomerID: Scalars['Int']['input'];
};


export type MutationDeleteErrorLogArgs = {
  ErrorLogID: Scalars['Int']['input'];
};


export type MutationDeleteProductArgs = {
  ProductID: Scalars['Int']['input'];
};


export type MutationDeleteProductCategoryArgs = {
  ProductCategoryID: Scalars['Int']['input'];
};


export type MutationDeleteProductDescriptionArgs = {
  ProductDescriptionID: Scalars['Int']['input'];
};


export type MutationDeleteProductModelArgs = {
  ProductModelID: Scalars['Int']['input'];
};


export type MutationDeleteProductModelProductDescriptionArgs = {
  Culture: Scalars['String']['input'];
  ProductDescriptionID: Scalars['Int']['input'];
  ProductModelID: Scalars['Int']['input'];
};


export type MutationDeleteSalesOrderDetailArgs = {
  SalesOrderDetailID: Scalars['Int']['input'];
  SalesOrderID: Scalars['Int']['input'];
};


export type MutationDeleteSalesOrderHeaderArgs = {
  SalesOrderID: Scalars['Int']['input'];
};


export type MutationExecuteuspLogErrorArgs = {
  ErrorLogID?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateAddressArgs = {
  AddressID: Scalars['Int']['input'];
  item: UpdateAddressInput;
};


export type MutationUpdateBuildVersionArgs = {
  SystemInformationID: Scalars['Byte']['input'];
  item: UpdateBuildVersionInput;
};


export type MutationUpdateCustomerArgs = {
  CustomerID: Scalars['Int']['input'];
  item: UpdateCustomerInput;
};


export type MutationUpdateCustomerAddressArgs = {
  AddressID: Scalars['Int']['input'];
  CustomerID: Scalars['Int']['input'];
  item: UpdateCustomerAddressInput;
};


export type MutationUpdateErrorLogArgs = {
  ErrorLogID: Scalars['Int']['input'];
  item: UpdateErrorLogInput;
};


export type MutationUpdateProductArgs = {
  ProductID: Scalars['Int']['input'];
  item: UpdateProductInput;
};


export type MutationUpdateProductCategoryArgs = {
  ProductCategoryID: Scalars['Int']['input'];
  item: UpdateProductCategoryInput;
};


export type MutationUpdateProductDescriptionArgs = {
  ProductDescriptionID: Scalars['Int']['input'];
  item: UpdateProductDescriptionInput;
};


export type MutationUpdateProductModelArgs = {
  ProductModelID: Scalars['Int']['input'];
  item: UpdateProductModelInput;
};


export type MutationUpdateProductModelProductDescriptionArgs = {
  Culture: Scalars['String']['input'];
  ProductDescriptionID: Scalars['Int']['input'];
  ProductModelID: Scalars['Int']['input'];
  item: UpdateProductModelProductDescriptionInput;
};


export type MutationUpdateSalesOrderDetailArgs = {
  SalesOrderDetailID: Scalars['Int']['input'];
  SalesOrderID: Scalars['Int']['input'];
  item: UpdateSalesOrderDetailInput;
};


export type MutationUpdateSalesOrderHeaderArgs = {
  SalesOrderID: Scalars['Int']['input'];
  item: UpdateSalesOrderHeaderInput;
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Product = {
  __typename?: 'Product';
  Color?: Maybe<Scalars['String']['output']>;
  DiscontinuedDate?: Maybe<Scalars['DateTime']['output']>;
  ListPrice: Scalars['Decimal']['output'];
  ModifiedDate: Scalars['DateTime']['output'];
  Name?: Maybe<Scalars['String']['output']>;
  ProductCategoryID?: Maybe<Scalars['Int']['output']>;
  ProductID: Scalars['Int']['output'];
  ProductModelID?: Maybe<Scalars['Int']['output']>;
  ProductNumber: Scalars['String']['output'];
  SellEndDate?: Maybe<Scalars['DateTime']['output']>;
  SellStartDate: Scalars['DateTime']['output'];
  Size?: Maybe<Scalars['String']['output']>;
  StandardCost: Scalars['Decimal']['output'];
  ThumbNailPhoto?: Maybe<Scalars['ByteArray']['output']>;
  ThumbnailPhotoFileName?: Maybe<Scalars['String']['output']>;
  Weight?: Maybe<Scalars['Decimal']['output']>;
  rowguid: Scalars['UUID']['output'];
};

/** Aggregation type for Product */
export type ProductAggregations = {
  __typename?: 'ProductAggregations';
  /** Average value */
  avg?: Maybe<Scalars['Float']['output']>;
  /** Count of numeric values */
  count?: Maybe<Scalars['Int']['output']>;
  /** Maximum value for numeric fields */
  max?: Maybe<Scalars['Float']['output']>;
  /** Minimum value for numeric fields */
  min?: Maybe<Scalars['Float']['output']>;
  /** Sum of values */
  sum?: Maybe<Scalars['Float']['output']>;
};


/** Aggregation type for Product */
export type ProductAggregationsAvgArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductNumericAggregateFields;
  having?: InputMaybe<DecimalFilterInput>;
};


/** Aggregation type for Product */
export type ProductAggregationsCountArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductNumericAggregateFields;
  having?: InputMaybe<DecimalFilterInput>;
};


/** Aggregation type for Product */
export type ProductAggregationsMaxArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductNumericAggregateFields;
  having?: InputMaybe<DecimalFilterInput>;
};


/** Aggregation type for Product */
export type ProductAggregationsMinArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductNumericAggregateFields;
  having?: InputMaybe<DecimalFilterInput>;
};


/** Aggregation type for Product */
export type ProductAggregationsSumArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductNumericAggregateFields;
  having?: InputMaybe<DecimalFilterInput>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  ModifiedDate: Scalars['DateTime']['output'];
  Name?: Maybe<Scalars['String']['output']>;
  ParentProductCategoryID?: Maybe<Scalars['Int']['output']>;
  ProductCategoryID: Scalars['Int']['output'];
  rowguid: Scalars['UUID']['output'];
};

/** Aggregation type for ProductCategory */
export type ProductCategoryAggregations = {
  __typename?: 'ProductCategoryAggregations';
  /** Average value */
  avg?: Maybe<Scalars['Float']['output']>;
  /** Count of numeric values */
  count?: Maybe<Scalars['Int']['output']>;
  /** Maximum value for numeric fields */
  max?: Maybe<Scalars['Float']['output']>;
  /** Minimum value for numeric fields */
  min?: Maybe<Scalars['Float']['output']>;
  /** Sum of values */
  sum?: Maybe<Scalars['Float']['output']>;
};


/** Aggregation type for ProductCategory */
export type ProductCategoryAggregationsAvgArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductCategoryNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for ProductCategory */
export type ProductCategoryAggregationsCountArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductCategoryNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for ProductCategory */
export type ProductCategoryAggregationsMaxArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductCategoryNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for ProductCategory */
export type ProductCategoryAggregationsMinArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductCategoryNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for ProductCategory */
export type ProductCategoryAggregationsSumArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductCategoryNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};

/** The return object from a filter query that supports a pagination token for paging through results */
export type ProductCategoryConnection = {
  __typename?: 'ProductCategoryConnection';
  /** A pagination token to provide to subsequent pages of a query */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Group results by specified fields */
  groupBy: Array<ProductCategoryGroupBy>;
  /** Indicates if there are more pages of items to return */
  hasNextPage: Scalars['Boolean']['output'];
  /** The list of items that matched the filter */
  items: Array<ProductCategory>;
};


/** The return object from a filter query that supports a pagination token for paging through results */
export type ProductCategoryConnectionGroupByArgs = {
  fields?: InputMaybe<Array<ProductCategoryScalarFields>>;
};

/** Filter input for ProductCategory GraphQL type */
export type ProductCategoryFilterInput = {
  /** Filter options for ModifiedDate */
  ModifiedDate?: InputMaybe<DateTimeFilterInput>;
  /** Filter options for Name */
  Name?: InputMaybe<StringFilterInput>;
  /** Filter options for ParentProductCategoryID */
  ParentProductCategoryID?: InputMaybe<IntFilterInput>;
  /** Filter options for ProductCategoryID */
  ProductCategoryID?: InputMaybe<IntFilterInput>;
  /** Conditions to be treated as AND operations */
  and?: InputMaybe<Array<InputMaybe<ProductCategoryFilterInput>>>;
  /** Conditions to be treated as OR operations */
  or?: InputMaybe<Array<InputMaybe<ProductCategoryFilterInput>>>;
  /** Filter options for rowguid */
  rowguid?: InputMaybe<UuidFilterInput>;
};

/** GroupBy type for ProductCategory */
export type ProductCategoryGroupBy = {
  __typename?: 'ProductCategoryGroupBy';
  /** Aggregations for ProductCategory */
  aggregations?: Maybe<ProductCategoryAggregations>;
  /** Grouped fields from ProductCategory */
  fields?: Maybe<ProductCategory>;
};

/** Fields available for aggregation in ProductCategory */
export enum ProductCategoryNumericAggregateFields {
  ParentProductCategoryId = 'ParentProductCategoryID',
  ProductCategoryId = 'ProductCategoryID'
}

/** Order by input for ProductCategory GraphQL type */
export type ProductCategoryOrderByInput = {
  /** Order by options for ModifiedDate */
  ModifiedDate?: InputMaybe<OrderBy>;
  /** Order by options for Name */
  Name?: InputMaybe<OrderBy>;
  /** Order by options for ParentProductCategoryID */
  ParentProductCategoryID?: InputMaybe<OrderBy>;
  /** Order by options for ProductCategoryID */
  ProductCategoryID?: InputMaybe<OrderBy>;
  /** Order by options for rowguid */
  rowguid?: InputMaybe<OrderBy>;
};

/** Scalar fields available in ProductCategory */
export enum ProductCategoryScalarFields {
  ModifiedDate = 'ModifiedDate',
  Name = 'Name',
  ParentProductCategoryId = 'ParentProductCategoryID',
  ProductCategoryId = 'ProductCategoryID',
  Rowguid = 'rowguid'
}

/** The return object from a filter query that supports a pagination token for paging through results */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** A pagination token to provide to subsequent pages of a query */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Group results by specified fields */
  groupBy: Array<ProductGroupBy>;
  /** Indicates if there are more pages of items to return */
  hasNextPage: Scalars['Boolean']['output'];
  /** The list of items that matched the filter */
  items: Array<Product>;
};


/** The return object from a filter query that supports a pagination token for paging through results */
export type ProductConnectionGroupByArgs = {
  fields?: InputMaybe<Array<ProductScalarFields>>;
};

export type ProductDescription = {
  __typename?: 'ProductDescription';
  Description: Scalars['String']['output'];
  ModifiedDate: Scalars['DateTime']['output'];
  ProductDescriptionID: Scalars['Int']['output'];
  rowguid: Scalars['UUID']['output'];
};

/** Aggregation type for ProductDescription */
export type ProductDescriptionAggregations = {
  __typename?: 'ProductDescriptionAggregations';
  /** Average value */
  avg?: Maybe<Scalars['Float']['output']>;
  /** Count of numeric values */
  count?: Maybe<Scalars['Int']['output']>;
  /** Maximum value for numeric fields */
  max?: Maybe<Scalars['Float']['output']>;
  /** Minimum value for numeric fields */
  min?: Maybe<Scalars['Float']['output']>;
  /** Sum of values */
  sum?: Maybe<Scalars['Float']['output']>;
};


/** Aggregation type for ProductDescription */
export type ProductDescriptionAggregationsAvgArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductDescriptionNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for ProductDescription */
export type ProductDescriptionAggregationsCountArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductDescriptionNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for ProductDescription */
export type ProductDescriptionAggregationsMaxArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductDescriptionNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for ProductDescription */
export type ProductDescriptionAggregationsMinArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductDescriptionNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for ProductDescription */
export type ProductDescriptionAggregationsSumArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductDescriptionNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};

/** The return object from a filter query that supports a pagination token for paging through results */
export type ProductDescriptionConnection = {
  __typename?: 'ProductDescriptionConnection';
  /** A pagination token to provide to subsequent pages of a query */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Group results by specified fields */
  groupBy: Array<ProductDescriptionGroupBy>;
  /** Indicates if there are more pages of items to return */
  hasNextPage: Scalars['Boolean']['output'];
  /** The list of items that matched the filter */
  items: Array<ProductDescription>;
};


/** The return object from a filter query that supports a pagination token for paging through results */
export type ProductDescriptionConnectionGroupByArgs = {
  fields?: InputMaybe<Array<ProductDescriptionScalarFields>>;
};

/** Filter input for ProductDescription GraphQL type */
export type ProductDescriptionFilterInput = {
  /** Filter options for Description */
  Description?: InputMaybe<StringFilterInput>;
  /** Filter options for ModifiedDate */
  ModifiedDate?: InputMaybe<DateTimeFilterInput>;
  /** Filter options for ProductDescriptionID */
  ProductDescriptionID?: InputMaybe<IntFilterInput>;
  /** Conditions to be treated as AND operations */
  and?: InputMaybe<Array<InputMaybe<ProductDescriptionFilterInput>>>;
  /** Conditions to be treated as OR operations */
  or?: InputMaybe<Array<InputMaybe<ProductDescriptionFilterInput>>>;
  /** Filter options for rowguid */
  rowguid?: InputMaybe<UuidFilterInput>;
};

/** GroupBy type for ProductDescription */
export type ProductDescriptionGroupBy = {
  __typename?: 'ProductDescriptionGroupBy';
  /** Aggregations for ProductDescription */
  aggregations?: Maybe<ProductDescriptionAggregations>;
  /** Grouped fields from ProductDescription */
  fields?: Maybe<ProductDescription>;
};

/** Fields available for aggregation in ProductDescription */
export enum ProductDescriptionNumericAggregateFields {
  ProductDescriptionId = 'ProductDescriptionID'
}

/** Order by input for ProductDescription GraphQL type */
export type ProductDescriptionOrderByInput = {
  /** Order by options for Description */
  Description?: InputMaybe<OrderBy>;
  /** Order by options for ModifiedDate */
  ModifiedDate?: InputMaybe<OrderBy>;
  /** Order by options for ProductDescriptionID */
  ProductDescriptionID?: InputMaybe<OrderBy>;
  /** Order by options for rowguid */
  rowguid?: InputMaybe<OrderBy>;
};

/** Scalar fields available in ProductDescription */
export enum ProductDescriptionScalarFields {
  Description = 'Description',
  ModifiedDate = 'ModifiedDate',
  ProductDescriptionId = 'ProductDescriptionID',
  Rowguid = 'rowguid'
}

/** Filter input for Product GraphQL type */
export type ProductFilterInput = {
  /** Filter options for Color */
  Color?: InputMaybe<StringFilterInput>;
  /** Filter options for DiscontinuedDate */
  DiscontinuedDate?: InputMaybe<DateTimeFilterInput>;
  /** Filter options for ListPrice */
  ListPrice?: InputMaybe<DecimalFilterInput>;
  /** Filter options for ModifiedDate */
  ModifiedDate?: InputMaybe<DateTimeFilterInput>;
  /** Filter options for Name */
  Name?: InputMaybe<StringFilterInput>;
  /** Filter options for ProductCategoryID */
  ProductCategoryID?: InputMaybe<IntFilterInput>;
  /** Filter options for ProductID */
  ProductID?: InputMaybe<IntFilterInput>;
  /** Filter options for ProductModelID */
  ProductModelID?: InputMaybe<IntFilterInput>;
  /** Filter options for ProductNumber */
  ProductNumber?: InputMaybe<StringFilterInput>;
  /** Filter options for SellEndDate */
  SellEndDate?: InputMaybe<DateTimeFilterInput>;
  /** Filter options for SellStartDate */
  SellStartDate?: InputMaybe<DateTimeFilterInput>;
  /** Filter options for Size */
  Size?: InputMaybe<StringFilterInput>;
  /** Filter options for StandardCost */
  StandardCost?: InputMaybe<DecimalFilterInput>;
  /** Filter options for ThumbNailPhoto */
  ThumbNailPhoto?: InputMaybe<ByteArrayFilterInput>;
  /** Filter options for ThumbnailPhotoFileName */
  ThumbnailPhotoFileName?: InputMaybe<StringFilterInput>;
  /** Filter options for Weight */
  Weight?: InputMaybe<DecimalFilterInput>;
  /** Conditions to be treated as AND operations */
  and?: InputMaybe<Array<InputMaybe<ProductFilterInput>>>;
  /** Conditions to be treated as OR operations */
  or?: InputMaybe<Array<InputMaybe<ProductFilterInput>>>;
  /** Filter options for rowguid */
  rowguid?: InputMaybe<UuidFilterInput>;
};

/** GroupBy type for Product */
export type ProductGroupBy = {
  __typename?: 'ProductGroupBy';
  /** Aggregations for Product */
  aggregations?: Maybe<ProductAggregations>;
  /** Grouped fields from Product */
  fields?: Maybe<Product>;
};

export type ProductModel = {
  __typename?: 'ProductModel';
  ModifiedDate: Scalars['DateTime']['output'];
  Name?: Maybe<Scalars['String']['output']>;
  ProductModelID: Scalars['Int']['output'];
  rowguid: Scalars['UUID']['output'];
};

/** Aggregation type for ProductModel */
export type ProductModelAggregations = {
  __typename?: 'ProductModelAggregations';
  /** Average value */
  avg?: Maybe<Scalars['Float']['output']>;
  /** Count of numeric values */
  count?: Maybe<Scalars['Int']['output']>;
  /** Maximum value for numeric fields */
  max?: Maybe<Scalars['Float']['output']>;
  /** Minimum value for numeric fields */
  min?: Maybe<Scalars['Float']['output']>;
  /** Sum of values */
  sum?: Maybe<Scalars['Float']['output']>;
};


/** Aggregation type for ProductModel */
export type ProductModelAggregationsAvgArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductModelNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for ProductModel */
export type ProductModelAggregationsCountArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductModelNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for ProductModel */
export type ProductModelAggregationsMaxArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductModelNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for ProductModel */
export type ProductModelAggregationsMinArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductModelNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for ProductModel */
export type ProductModelAggregationsSumArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductModelNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};

/** The return object from a filter query that supports a pagination token for paging through results */
export type ProductModelConnection = {
  __typename?: 'ProductModelConnection';
  /** A pagination token to provide to subsequent pages of a query */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Group results by specified fields */
  groupBy: Array<ProductModelGroupBy>;
  /** Indicates if there are more pages of items to return */
  hasNextPage: Scalars['Boolean']['output'];
  /** The list of items that matched the filter */
  items: Array<ProductModel>;
};


/** The return object from a filter query that supports a pagination token for paging through results */
export type ProductModelConnectionGroupByArgs = {
  fields?: InputMaybe<Array<ProductModelScalarFields>>;
};

/** Filter input for ProductModel GraphQL type */
export type ProductModelFilterInput = {
  /** Filter options for ModifiedDate */
  ModifiedDate?: InputMaybe<DateTimeFilterInput>;
  /** Filter options for Name */
  Name?: InputMaybe<StringFilterInput>;
  /** Filter options for ProductModelID */
  ProductModelID?: InputMaybe<IntFilterInput>;
  /** Conditions to be treated as AND operations */
  and?: InputMaybe<Array<InputMaybe<ProductModelFilterInput>>>;
  /** Conditions to be treated as OR operations */
  or?: InputMaybe<Array<InputMaybe<ProductModelFilterInput>>>;
  /** Filter options for rowguid */
  rowguid?: InputMaybe<UuidFilterInput>;
};

/** GroupBy type for ProductModel */
export type ProductModelGroupBy = {
  __typename?: 'ProductModelGroupBy';
  /** Aggregations for ProductModel */
  aggregations?: Maybe<ProductModelAggregations>;
  /** Grouped fields from ProductModel */
  fields?: Maybe<ProductModel>;
};

/** Fields available for aggregation in ProductModel */
export enum ProductModelNumericAggregateFields {
  ProductModelId = 'ProductModelID'
}

/** Order by input for ProductModel GraphQL type */
export type ProductModelOrderByInput = {
  /** Order by options for ModifiedDate */
  ModifiedDate?: InputMaybe<OrderBy>;
  /** Order by options for Name */
  Name?: InputMaybe<OrderBy>;
  /** Order by options for ProductModelID */
  ProductModelID?: InputMaybe<OrderBy>;
  /** Order by options for rowguid */
  rowguid?: InputMaybe<OrderBy>;
};

export type ProductModelProductDescription = {
  __typename?: 'ProductModelProductDescription';
  Culture: Scalars['String']['output'];
  ModifiedDate: Scalars['DateTime']['output'];
  ProductDescriptionID: Scalars['Int']['output'];
  ProductModelID: Scalars['Int']['output'];
  rowguid: Scalars['UUID']['output'];
};

/** Aggregation type for ProductModelProductDescription */
export type ProductModelProductDescriptionAggregations = {
  __typename?: 'ProductModelProductDescriptionAggregations';
  /** Average value */
  avg?: Maybe<Scalars['Float']['output']>;
  /** Count of numeric values */
  count?: Maybe<Scalars['Int']['output']>;
  /** Maximum value for numeric fields */
  max?: Maybe<Scalars['Float']['output']>;
  /** Minimum value for numeric fields */
  min?: Maybe<Scalars['Float']['output']>;
  /** Sum of values */
  sum?: Maybe<Scalars['Float']['output']>;
};


/** Aggregation type for ProductModelProductDescription */
export type ProductModelProductDescriptionAggregationsAvgArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductModelProductDescriptionNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for ProductModelProductDescription */
export type ProductModelProductDescriptionAggregationsCountArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductModelProductDescriptionNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for ProductModelProductDescription */
export type ProductModelProductDescriptionAggregationsMaxArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductModelProductDescriptionNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for ProductModelProductDescription */
export type ProductModelProductDescriptionAggregationsMinArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductModelProductDescriptionNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for ProductModelProductDescription */
export type ProductModelProductDescriptionAggregationsSumArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: ProductModelProductDescriptionNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};

/** The return object from a filter query that supports a pagination token for paging through results */
export type ProductModelProductDescriptionConnection = {
  __typename?: 'ProductModelProductDescriptionConnection';
  /** A pagination token to provide to subsequent pages of a query */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Group results by specified fields */
  groupBy: Array<ProductModelProductDescriptionGroupBy>;
  /** Indicates if there are more pages of items to return */
  hasNextPage: Scalars['Boolean']['output'];
  /** The list of items that matched the filter */
  items: Array<ProductModelProductDescription>;
};


/** The return object from a filter query that supports a pagination token for paging through results */
export type ProductModelProductDescriptionConnectionGroupByArgs = {
  fields?: InputMaybe<Array<ProductModelProductDescriptionScalarFields>>;
};

/** Filter input for ProductModelProductDescription GraphQL type */
export type ProductModelProductDescriptionFilterInput = {
  /** Filter options for Culture */
  Culture?: InputMaybe<StringFilterInput>;
  /** Filter options for ModifiedDate */
  ModifiedDate?: InputMaybe<DateTimeFilterInput>;
  /** Filter options for ProductDescriptionID */
  ProductDescriptionID?: InputMaybe<IntFilterInput>;
  /** Filter options for ProductModelID */
  ProductModelID?: InputMaybe<IntFilterInput>;
  /** Conditions to be treated as AND operations */
  and?: InputMaybe<Array<InputMaybe<ProductModelProductDescriptionFilterInput>>>;
  /** Conditions to be treated as OR operations */
  or?: InputMaybe<Array<InputMaybe<ProductModelProductDescriptionFilterInput>>>;
  /** Filter options for rowguid */
  rowguid?: InputMaybe<UuidFilterInput>;
};

/** GroupBy type for ProductModelProductDescription */
export type ProductModelProductDescriptionGroupBy = {
  __typename?: 'ProductModelProductDescriptionGroupBy';
  /** Aggregations for ProductModelProductDescription */
  aggregations?: Maybe<ProductModelProductDescriptionAggregations>;
  /** Grouped fields from ProductModelProductDescription */
  fields?: Maybe<ProductModelProductDescription>;
};

/** Fields available for aggregation in ProductModelProductDescription */
export enum ProductModelProductDescriptionNumericAggregateFields {
  ProductDescriptionId = 'ProductDescriptionID',
  ProductModelId = 'ProductModelID'
}

/** Order by input for ProductModelProductDescription GraphQL type */
export type ProductModelProductDescriptionOrderByInput = {
  /** Order by options for Culture */
  Culture?: InputMaybe<OrderBy>;
  /** Order by options for ModifiedDate */
  ModifiedDate?: InputMaybe<OrderBy>;
  /** Order by options for ProductDescriptionID */
  ProductDescriptionID?: InputMaybe<OrderBy>;
  /** Order by options for ProductModelID */
  ProductModelID?: InputMaybe<OrderBy>;
  /** Order by options for rowguid */
  rowguid?: InputMaybe<OrderBy>;
};

/** Scalar fields available in ProductModelProductDescription */
export enum ProductModelProductDescriptionScalarFields {
  Culture = 'Culture',
  ModifiedDate = 'ModifiedDate',
  ProductDescriptionId = 'ProductDescriptionID',
  ProductModelId = 'ProductModelID',
  Rowguid = 'rowguid'
}

/** Scalar fields available in ProductModel */
export enum ProductModelScalarFields {
  ModifiedDate = 'ModifiedDate',
  Name = 'Name',
  ProductModelId = 'ProductModelID',
  Rowguid = 'rowguid'
}

/** Fields available for aggregation in Product */
export enum ProductNumericAggregateFields {
  ListPrice = 'ListPrice',
  ProductCategoryId = 'ProductCategoryID',
  ProductId = 'ProductID',
  ProductModelId = 'ProductModelID',
  StandardCost = 'StandardCost',
  Weight = 'Weight'
}

/** Order by input for Product GraphQL type */
export type ProductOrderByInput = {
  /** Order by options for Color */
  Color?: InputMaybe<OrderBy>;
  /** Order by options for DiscontinuedDate */
  DiscontinuedDate?: InputMaybe<OrderBy>;
  /** Order by options for ListPrice */
  ListPrice?: InputMaybe<OrderBy>;
  /** Order by options for ModifiedDate */
  ModifiedDate?: InputMaybe<OrderBy>;
  /** Order by options for Name */
  Name?: InputMaybe<OrderBy>;
  /** Order by options for ProductCategoryID */
  ProductCategoryID?: InputMaybe<OrderBy>;
  /** Order by options for ProductID */
  ProductID?: InputMaybe<OrderBy>;
  /** Order by options for ProductModelID */
  ProductModelID?: InputMaybe<OrderBy>;
  /** Order by options for ProductNumber */
  ProductNumber?: InputMaybe<OrderBy>;
  /** Order by options for SellEndDate */
  SellEndDate?: InputMaybe<OrderBy>;
  /** Order by options for SellStartDate */
  SellStartDate?: InputMaybe<OrderBy>;
  /** Order by options for Size */
  Size?: InputMaybe<OrderBy>;
  /** Order by options for StandardCost */
  StandardCost?: InputMaybe<OrderBy>;
  /** Order by options for ThumbNailPhoto */
  ThumbNailPhoto?: InputMaybe<OrderBy>;
  /** Order by options for ThumbnailPhotoFileName */
  ThumbnailPhotoFileName?: InputMaybe<OrderBy>;
  /** Order by options for Weight */
  Weight?: InputMaybe<OrderBy>;
  /** Order by options for rowguid */
  rowguid?: InputMaybe<OrderBy>;
};

/** Scalar fields available in Product */
export enum ProductScalarFields {
  Color = 'Color',
  DiscontinuedDate = 'DiscontinuedDate',
  ListPrice = 'ListPrice',
  ModifiedDate = 'ModifiedDate',
  Name = 'Name',
  ProductCategoryId = 'ProductCategoryID',
  ProductId = 'ProductID',
  ProductModelId = 'ProductModelID',
  ProductNumber = 'ProductNumber',
  SellEndDate = 'SellEndDate',
  SellStartDate = 'SellStartDate',
  Size = 'Size',
  StandardCost = 'StandardCost',
  ThumbNailPhoto = 'ThumbNailPhoto',
  ThumbnailPhotoFileName = 'ThumbnailPhotoFileName',
  Weight = 'Weight',
  Rowguid = 'rowguid'
}

export type Query = {
  __typename?: 'Query';
  /** Get a Address from the database by its ID/primary key */
  address_by_pk?: Maybe<Address>;
  /** Get a list of all the Address items from the database */
  addresses: AddressConnection;
  /** Get a BuildVersion from the database by its ID/primary key */
  buildVersion_by_pk?: Maybe<BuildVersion>;
  /** Get a list of all the BuildVersion items from the database */
  buildVersions: BuildVersionConnection;
  /** Get a CustomerAddress from the database by its ID/primary key */
  customerAddress_by_pk?: Maybe<CustomerAddress>;
  /** Get a list of all the CustomerAddress items from the database */
  customerAddresses: CustomerAddressConnection;
  /** Get a Customer from the database by its ID/primary key */
  customer_by_pk?: Maybe<Customer>;
  /** Get a list of all the Customer items from the database */
  customers: CustomerConnection;
  /** Get a ErrorLog from the database by its ID/primary key */
  errorLog_by_pk?: Maybe<ErrorLog>;
  /** Get a list of all the ErrorLog items from the database */
  errorLogs: ErrorLogConnection;
  /** Get a list of all the ProductCategory items from the database */
  productCategories: ProductCategoryConnection;
  /** Get a ProductCategory from the database by its ID/primary key */
  productCategory_by_pk?: Maybe<ProductCategory>;
  /** Get a ProductDescription from the database by its ID/primary key */
  productDescription_by_pk?: Maybe<ProductDescription>;
  /** Get a list of all the ProductDescription items from the database */
  productDescriptions: ProductDescriptionConnection;
  /** Get a ProductModelProductDescription from the database by its ID/primary key */
  productModelProductDescription_by_pk?: Maybe<ProductModelProductDescription>;
  /** Get a list of all the ProductModelProductDescription items from the database */
  productModelProductDescriptions: ProductModelProductDescriptionConnection;
  /** Get a ProductModel from the database by its ID/primary key */
  productModel_by_pk?: Maybe<ProductModel>;
  /** Get a list of all the ProductModel items from the database */
  productModels: ProductModelConnection;
  /** Get a Product from the database by its ID/primary key */
  product_by_pk?: Maybe<Product>;
  /** Get a list of all the Product items from the database */
  products: ProductConnection;
  /** Get a SalesOrderDetail from the database by its ID/primary key */
  salesOrderDetail_by_pk?: Maybe<SalesOrderDetail>;
  /** Get a list of all the SalesOrderDetail items from the database */
  salesOrderDetails: SalesOrderDetailConnection;
  /** Get a SalesOrderHeader from the database by its ID/primary key */
  salesOrderHeader_by_pk?: Maybe<SalesOrderHeader>;
  /** Get a list of all the SalesOrderHeader items from the database */
  salesOrderHeaders: SalesOrderHeaderConnection;
  /** Get a list of all the vGetAllCategories items from the database */
  vGetAllCategories: VGetAllCategoriesConnection;
  /** Get a list of all the vProductAndDescription items from the database */
  vProductAndDescriptions: VProductAndDescriptionConnection;
};


export type QueryAddress_By_PkArgs = {
  AddressID: Scalars['Int']['input'];
};


export type QueryAddressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AddressFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AddressOrderByInput>;
};


export type QueryBuildVersion_By_PkArgs = {
  SystemInformationID: Scalars['Byte']['input'];
};


export type QueryBuildVersionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BuildVersionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BuildVersionOrderByInput>;
};


export type QueryCustomerAddress_By_PkArgs = {
  AddressID: Scalars['Int']['input'];
  CustomerID: Scalars['Int']['input'];
};


export type QueryCustomerAddressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CustomerAddressFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CustomerAddressOrderByInput>;
};


export type QueryCustomer_By_PkArgs = {
  CustomerID: Scalars['Int']['input'];
};


export type QueryCustomersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CustomerFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CustomerOrderByInput>;
};


export type QueryErrorLog_By_PkArgs = {
  ErrorLogID: Scalars['Int']['input'];
};


export type QueryErrorLogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ErrorLogFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ErrorLogOrderByInput>;
};


export type QueryProductCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductCategoryFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProductCategoryOrderByInput>;
};


export type QueryProductCategory_By_PkArgs = {
  ProductCategoryID: Scalars['Int']['input'];
};


export type QueryProductDescription_By_PkArgs = {
  ProductDescriptionID: Scalars['Int']['input'];
};


export type QueryProductDescriptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductDescriptionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProductDescriptionOrderByInput>;
};


export type QueryProductModelProductDescription_By_PkArgs = {
  Culture: Scalars['String']['input'];
  ProductDescriptionID: Scalars['Int']['input'];
  ProductModelID: Scalars['Int']['input'];
};


export type QueryProductModelProductDescriptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductModelProductDescriptionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProductModelProductDescriptionOrderByInput>;
};


export type QueryProductModel_By_PkArgs = {
  ProductModelID: Scalars['Int']['input'];
};


export type QueryProductModelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductModelFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProductModelOrderByInput>;
};


export type QueryProduct_By_PkArgs = {
  ProductID: Scalars['Int']['input'];
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProductOrderByInput>;
};


export type QuerySalesOrderDetail_By_PkArgs = {
  SalesOrderDetailID: Scalars['Int']['input'];
  SalesOrderID: Scalars['Int']['input'];
};


export type QuerySalesOrderDetailsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SalesOrderDetailFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SalesOrderDetailOrderByInput>;
};


export type QuerySalesOrderHeader_By_PkArgs = {
  SalesOrderID: Scalars['Int']['input'];
};


export type QuerySalesOrderHeadersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SalesOrderHeaderFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SalesOrderHeaderOrderByInput>;
};


export type QueryVGetAllCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VGetAllCategoriesFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VGetAllCategoriesOrderByInput>;
};


export type QueryVProductAndDescriptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VProductAndDescriptionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VProductAndDescriptionOrderByInput>;
};

export type SalesOrderDetail = {
  __typename?: 'SalesOrderDetail';
  ModifiedDate: Scalars['DateTime']['output'];
  OrderQty: Scalars['Short']['output'];
  ProductID: Scalars['Int']['output'];
  SalesOrderDetailID: Scalars['Int']['output'];
  SalesOrderID: Scalars['Int']['output'];
  UnitPrice: Scalars['Decimal']['output'];
  UnitPriceDiscount: Scalars['Decimal']['output'];
  rowguid: Scalars['UUID']['output'];
};

/** Aggregation type for SalesOrderDetail */
export type SalesOrderDetailAggregations = {
  __typename?: 'SalesOrderDetailAggregations';
  /** Average value */
  avg?: Maybe<Scalars['Float']['output']>;
  /** Count of numeric values */
  count?: Maybe<Scalars['Int']['output']>;
  /** Maximum value for numeric fields */
  max?: Maybe<Scalars['Float']['output']>;
  /** Minimum value for numeric fields */
  min?: Maybe<Scalars['Float']['output']>;
  /** Sum of values */
  sum?: Maybe<Scalars['Float']['output']>;
};


/** Aggregation type for SalesOrderDetail */
export type SalesOrderDetailAggregationsAvgArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: SalesOrderDetailNumericAggregateFields;
  having?: InputMaybe<DecimalFilterInput>;
};


/** Aggregation type for SalesOrderDetail */
export type SalesOrderDetailAggregationsCountArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: SalesOrderDetailNumericAggregateFields;
  having?: InputMaybe<DecimalFilterInput>;
};


/** Aggregation type for SalesOrderDetail */
export type SalesOrderDetailAggregationsMaxArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: SalesOrderDetailNumericAggregateFields;
  having?: InputMaybe<DecimalFilterInput>;
};


/** Aggregation type for SalesOrderDetail */
export type SalesOrderDetailAggregationsMinArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: SalesOrderDetailNumericAggregateFields;
  having?: InputMaybe<DecimalFilterInput>;
};


/** Aggregation type for SalesOrderDetail */
export type SalesOrderDetailAggregationsSumArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: SalesOrderDetailNumericAggregateFields;
  having?: InputMaybe<DecimalFilterInput>;
};

/** The return object from a filter query that supports a pagination token for paging through results */
export type SalesOrderDetailConnection = {
  __typename?: 'SalesOrderDetailConnection';
  /** A pagination token to provide to subsequent pages of a query */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Group results by specified fields */
  groupBy: Array<SalesOrderDetailGroupBy>;
  /** Indicates if there are more pages of items to return */
  hasNextPage: Scalars['Boolean']['output'];
  /** The list of items that matched the filter */
  items: Array<SalesOrderDetail>;
};


/** The return object from a filter query that supports a pagination token for paging through results */
export type SalesOrderDetailConnectionGroupByArgs = {
  fields?: InputMaybe<Array<SalesOrderDetailScalarFields>>;
};

/** Filter input for SalesOrderDetail GraphQL type */
export type SalesOrderDetailFilterInput = {
  /** Filter options for ModifiedDate */
  ModifiedDate?: InputMaybe<DateTimeFilterInput>;
  /** Filter options for OrderQty */
  OrderQty?: InputMaybe<ShortFilterInput>;
  /** Filter options for ProductID */
  ProductID?: InputMaybe<IntFilterInput>;
  /** Filter options for SalesOrderDetailID */
  SalesOrderDetailID?: InputMaybe<IntFilterInput>;
  /** Filter options for SalesOrderID */
  SalesOrderID?: InputMaybe<IntFilterInput>;
  /** Filter options for UnitPrice */
  UnitPrice?: InputMaybe<DecimalFilterInput>;
  /** Filter options for UnitPriceDiscount */
  UnitPriceDiscount?: InputMaybe<DecimalFilterInput>;
  /** Conditions to be treated as AND operations */
  and?: InputMaybe<Array<InputMaybe<SalesOrderDetailFilterInput>>>;
  /** Conditions to be treated as OR operations */
  or?: InputMaybe<Array<InputMaybe<SalesOrderDetailFilterInput>>>;
  /** Filter options for rowguid */
  rowguid?: InputMaybe<UuidFilterInput>;
};

/** GroupBy type for SalesOrderDetail */
export type SalesOrderDetailGroupBy = {
  __typename?: 'SalesOrderDetailGroupBy';
  /** Aggregations for SalesOrderDetail */
  aggregations?: Maybe<SalesOrderDetailAggregations>;
  /** Grouped fields from SalesOrderDetail */
  fields?: Maybe<SalesOrderDetail>;
};

/** Fields available for aggregation in SalesOrderDetail */
export enum SalesOrderDetailNumericAggregateFields {
  OrderQty = 'OrderQty',
  ProductId = 'ProductID',
  SalesOrderDetailId = 'SalesOrderDetailID',
  SalesOrderId = 'SalesOrderID',
  UnitPrice = 'UnitPrice',
  UnitPriceDiscount = 'UnitPriceDiscount'
}

/** Order by input for SalesOrderDetail GraphQL type */
export type SalesOrderDetailOrderByInput = {
  /** Order by options for ModifiedDate */
  ModifiedDate?: InputMaybe<OrderBy>;
  /** Order by options for OrderQty */
  OrderQty?: InputMaybe<OrderBy>;
  /** Order by options for ProductID */
  ProductID?: InputMaybe<OrderBy>;
  /** Order by options for SalesOrderDetailID */
  SalesOrderDetailID?: InputMaybe<OrderBy>;
  /** Order by options for SalesOrderID */
  SalesOrderID?: InputMaybe<OrderBy>;
  /** Order by options for UnitPrice */
  UnitPrice?: InputMaybe<OrderBy>;
  /** Order by options for UnitPriceDiscount */
  UnitPriceDiscount?: InputMaybe<OrderBy>;
  /** Order by options for rowguid */
  rowguid?: InputMaybe<OrderBy>;
};

/** Scalar fields available in SalesOrderDetail */
export enum SalesOrderDetailScalarFields {
  ModifiedDate = 'ModifiedDate',
  OrderQty = 'OrderQty',
  ProductId = 'ProductID',
  SalesOrderDetailId = 'SalesOrderDetailID',
  SalesOrderId = 'SalesOrderID',
  UnitPrice = 'UnitPrice',
  UnitPriceDiscount = 'UnitPriceDiscount',
  Rowguid = 'rowguid'
}

export type SalesOrderHeader = {
  __typename?: 'SalesOrderHeader';
  AccountNumber?: Maybe<Scalars['String']['output']>;
  BillToAddressID?: Maybe<Scalars['Int']['output']>;
  Comment?: Maybe<Scalars['String']['output']>;
  CreditCardApprovalCode?: Maybe<Scalars['String']['output']>;
  CustomerID: Scalars['Int']['output'];
  DueDate: Scalars['DateTime']['output'];
  Freight: Scalars['Decimal']['output'];
  ModifiedDate: Scalars['DateTime']['output'];
  OnlineOrderFlag?: Maybe<Scalars['Boolean']['output']>;
  OrderDate: Scalars['DateTime']['output'];
  PurchaseOrderNumber?: Maybe<Scalars['String']['output']>;
  RevisionNumber: Scalars['Byte']['output'];
  SalesOrderID: Scalars['Int']['output'];
  ShipDate?: Maybe<Scalars['DateTime']['output']>;
  ShipMethod: Scalars['String']['output'];
  ShipToAddressID?: Maybe<Scalars['Int']['output']>;
  Status: Scalars['Byte']['output'];
  SubTotal: Scalars['Decimal']['output'];
  TaxAmt: Scalars['Decimal']['output'];
  rowguid: Scalars['UUID']['output'];
};

/** Aggregation type for SalesOrderHeader */
export type SalesOrderHeaderAggregations = {
  __typename?: 'SalesOrderHeaderAggregations';
  /** Average value */
  avg?: Maybe<Scalars['Float']['output']>;
  /** Count of numeric values */
  count?: Maybe<Scalars['Int']['output']>;
  /** Maximum value for numeric fields */
  max?: Maybe<Scalars['Float']['output']>;
  /** Minimum value for numeric fields */
  min?: Maybe<Scalars['Float']['output']>;
  /** Sum of values */
  sum?: Maybe<Scalars['Float']['output']>;
};


/** Aggregation type for SalesOrderHeader */
export type SalesOrderHeaderAggregationsAvgArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: SalesOrderHeaderNumericAggregateFields;
  having?: InputMaybe<DecimalFilterInput>;
};


/** Aggregation type for SalesOrderHeader */
export type SalesOrderHeaderAggregationsCountArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: SalesOrderHeaderNumericAggregateFields;
  having?: InputMaybe<DecimalFilterInput>;
};


/** Aggregation type for SalesOrderHeader */
export type SalesOrderHeaderAggregationsMaxArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: SalesOrderHeaderNumericAggregateFields;
  having?: InputMaybe<DecimalFilterInput>;
};


/** Aggregation type for SalesOrderHeader */
export type SalesOrderHeaderAggregationsMinArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: SalesOrderHeaderNumericAggregateFields;
  having?: InputMaybe<DecimalFilterInput>;
};


/** Aggregation type for SalesOrderHeader */
export type SalesOrderHeaderAggregationsSumArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: SalesOrderHeaderNumericAggregateFields;
  having?: InputMaybe<DecimalFilterInput>;
};

/** The return object from a filter query that supports a pagination token for paging through results */
export type SalesOrderHeaderConnection = {
  __typename?: 'SalesOrderHeaderConnection';
  /** A pagination token to provide to subsequent pages of a query */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Group results by specified fields */
  groupBy: Array<SalesOrderHeaderGroupBy>;
  /** Indicates if there are more pages of items to return */
  hasNextPage: Scalars['Boolean']['output'];
  /** The list of items that matched the filter */
  items: Array<SalesOrderHeader>;
};


/** The return object from a filter query that supports a pagination token for paging through results */
export type SalesOrderHeaderConnectionGroupByArgs = {
  fields?: InputMaybe<Array<SalesOrderHeaderScalarFields>>;
};

/** Filter input for SalesOrderHeader GraphQL type */
export type SalesOrderHeaderFilterInput = {
  /** Filter options for AccountNumber */
  AccountNumber?: InputMaybe<StringFilterInput>;
  /** Filter options for BillToAddressID */
  BillToAddressID?: InputMaybe<IntFilterInput>;
  /** Filter options for Comment */
  Comment?: InputMaybe<StringFilterInput>;
  /** Filter options for CreditCardApprovalCode */
  CreditCardApprovalCode?: InputMaybe<StringFilterInput>;
  /** Filter options for CustomerID */
  CustomerID?: InputMaybe<IntFilterInput>;
  /** Filter options for DueDate */
  DueDate?: InputMaybe<DateTimeFilterInput>;
  /** Filter options for Freight */
  Freight?: InputMaybe<DecimalFilterInput>;
  /** Filter options for ModifiedDate */
  ModifiedDate?: InputMaybe<DateTimeFilterInput>;
  /** Filter options for OnlineOrderFlag */
  OnlineOrderFlag?: InputMaybe<BooleanFilterInput>;
  /** Filter options for OrderDate */
  OrderDate?: InputMaybe<DateTimeFilterInput>;
  /** Filter options for PurchaseOrderNumber */
  PurchaseOrderNumber?: InputMaybe<StringFilterInput>;
  /** Filter options for RevisionNumber */
  RevisionNumber?: InputMaybe<ByteFilterInput>;
  /** Filter options for SalesOrderID */
  SalesOrderID?: InputMaybe<IntFilterInput>;
  /** Filter options for ShipDate */
  ShipDate?: InputMaybe<DateTimeFilterInput>;
  /** Filter options for ShipMethod */
  ShipMethod?: InputMaybe<StringFilterInput>;
  /** Filter options for ShipToAddressID */
  ShipToAddressID?: InputMaybe<IntFilterInput>;
  /** Filter options for Status */
  Status?: InputMaybe<ByteFilterInput>;
  /** Filter options for SubTotal */
  SubTotal?: InputMaybe<DecimalFilterInput>;
  /** Filter options for TaxAmt */
  TaxAmt?: InputMaybe<DecimalFilterInput>;
  /** Conditions to be treated as AND operations */
  and?: InputMaybe<Array<InputMaybe<SalesOrderHeaderFilterInput>>>;
  /** Conditions to be treated as OR operations */
  or?: InputMaybe<Array<InputMaybe<SalesOrderHeaderFilterInput>>>;
  /** Filter options for rowguid */
  rowguid?: InputMaybe<UuidFilterInput>;
};

/** GroupBy type for SalesOrderHeader */
export type SalesOrderHeaderGroupBy = {
  __typename?: 'SalesOrderHeaderGroupBy';
  /** Aggregations for SalesOrderHeader */
  aggregations?: Maybe<SalesOrderHeaderAggregations>;
  /** Grouped fields from SalesOrderHeader */
  fields?: Maybe<SalesOrderHeader>;
};

/** Fields available for aggregation in SalesOrderHeader */
export enum SalesOrderHeaderNumericAggregateFields {
  BillToAddressId = 'BillToAddressID',
  CustomerId = 'CustomerID',
  Freight = 'Freight',
  RevisionNumber = 'RevisionNumber',
  SalesOrderId = 'SalesOrderID',
  ShipToAddressId = 'ShipToAddressID',
  Status = 'Status',
  SubTotal = 'SubTotal',
  TaxAmt = 'TaxAmt'
}

/** Order by input for SalesOrderHeader GraphQL type */
export type SalesOrderHeaderOrderByInput = {
  /** Order by options for AccountNumber */
  AccountNumber?: InputMaybe<OrderBy>;
  /** Order by options for BillToAddressID */
  BillToAddressID?: InputMaybe<OrderBy>;
  /** Order by options for Comment */
  Comment?: InputMaybe<OrderBy>;
  /** Order by options for CreditCardApprovalCode */
  CreditCardApprovalCode?: InputMaybe<OrderBy>;
  /** Order by options for CustomerID */
  CustomerID?: InputMaybe<OrderBy>;
  /** Order by options for DueDate */
  DueDate?: InputMaybe<OrderBy>;
  /** Order by options for Freight */
  Freight?: InputMaybe<OrderBy>;
  /** Order by options for ModifiedDate */
  ModifiedDate?: InputMaybe<OrderBy>;
  /** Order by options for OnlineOrderFlag */
  OnlineOrderFlag?: InputMaybe<OrderBy>;
  /** Order by options for OrderDate */
  OrderDate?: InputMaybe<OrderBy>;
  /** Order by options for PurchaseOrderNumber */
  PurchaseOrderNumber?: InputMaybe<OrderBy>;
  /** Order by options for RevisionNumber */
  RevisionNumber?: InputMaybe<OrderBy>;
  /** Order by options for SalesOrderID */
  SalesOrderID?: InputMaybe<OrderBy>;
  /** Order by options for ShipDate */
  ShipDate?: InputMaybe<OrderBy>;
  /** Order by options for ShipMethod */
  ShipMethod?: InputMaybe<OrderBy>;
  /** Order by options for ShipToAddressID */
  ShipToAddressID?: InputMaybe<OrderBy>;
  /** Order by options for Status */
  Status?: InputMaybe<OrderBy>;
  /** Order by options for SubTotal */
  SubTotal?: InputMaybe<OrderBy>;
  /** Order by options for TaxAmt */
  TaxAmt?: InputMaybe<OrderBy>;
  /** Order by options for rowguid */
  rowguid?: InputMaybe<OrderBy>;
};

/** Scalar fields available in SalesOrderHeader */
export enum SalesOrderHeaderScalarFields {
  AccountNumber = 'AccountNumber',
  BillToAddressId = 'BillToAddressID',
  Comment = 'Comment',
  CreditCardApprovalCode = 'CreditCardApprovalCode',
  CustomerId = 'CustomerID',
  DueDate = 'DueDate',
  Freight = 'Freight',
  ModifiedDate = 'ModifiedDate',
  OnlineOrderFlag = 'OnlineOrderFlag',
  OrderDate = 'OrderDate',
  PurchaseOrderNumber = 'PurchaseOrderNumber',
  RevisionNumber = 'RevisionNumber',
  SalesOrderId = 'SalesOrderID',
  ShipDate = 'ShipDate',
  ShipMethod = 'ShipMethod',
  ShipToAddressId = 'ShipToAddressID',
  Status = 'Status',
  SubTotal = 'SubTotal',
  TaxAmt = 'TaxAmt',
  Rowguid = 'rowguid'
}

/** Input type for adding Short filters */
export type ShortFilterInput = {
  /** Equals */
  eq?: InputMaybe<Scalars['Short']['input']>;
  /** Greater Than */
  gt?: InputMaybe<Scalars['Short']['input']>;
  /** Greater Than or Equal To */
  gte?: InputMaybe<Scalars['Short']['input']>;
  /** In */
  in?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  /** Not null test */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less Than */
  lt?: InputMaybe<Scalars['Short']['input']>;
  /** Less Than or Equal To */
  lte?: InputMaybe<Scalars['Short']['input']>;
  /** Not Equals */
  neq?: InputMaybe<Scalars['Short']['input']>;
};

/** Input type for adding String filters */
export type StringFilterInput = {
  /** Contains */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Ends With */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** Equals */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** In */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Not null test */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Not Equals */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Not Contains */
  notContains?: InputMaybe<Scalars['String']['input']>;
  /** Starts With */
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Input type for updating Address */
export type UpdateAddressInput = {
  /** Input for field AddressLine1 on type UpdateAddressInput */
  AddressLine1?: InputMaybe<Scalars['String']['input']>;
  /** Input for field AddressLine2 on type UpdateAddressInput */
  AddressLine2?: InputMaybe<Scalars['String']['input']>;
  /** Input for field City on type UpdateAddressInput */
  City?: InputMaybe<Scalars['String']['input']>;
  /** Input for field CountryRegion on type UpdateAddressInput */
  CountryRegion?: InputMaybe<Scalars['String']['input']>;
  /** Input for field ModifiedDate on type UpdateAddressInput */
  ModifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field PostalCode on type UpdateAddressInput */
  PostalCode?: InputMaybe<Scalars['String']['input']>;
  /** Input for field StateProvince on type UpdateAddressInput */
  StateProvince?: InputMaybe<Scalars['String']['input']>;
  /** Input for field rowguid on type UpdateAddressInput */
  rowguid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Input type for updating BuildVersion */
export type UpdateBuildVersionInput = {
  /** Input for field DatabaseVersion on type UpdateBuildVersionInput */
  DatabaseVersion?: InputMaybe<Scalars['String']['input']>;
  /** Input for field ModifiedDate on type UpdateBuildVersionInput */
  ModifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field SystemInformationID on type UpdateBuildVersionInput */
  SystemInformationID?: InputMaybe<Scalars['Byte']['input']>;
  /** Input for field VersionDate on type UpdateBuildVersionInput */
  VersionDate?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Input type for updating CustomerAddress */
export type UpdateCustomerAddressInput = {
  /** Input for field AddressID on type UpdateCustomerAddressInput */
  AddressID?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field AddressType on type UpdateCustomerAddressInput */
  AddressType?: InputMaybe<Scalars['String']['input']>;
  /** Input for field CustomerID on type UpdateCustomerAddressInput */
  CustomerID?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field ModifiedDate on type UpdateCustomerAddressInput */
  ModifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field rowguid on type UpdateCustomerAddressInput */
  rowguid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Input type for updating Customer */
export type UpdateCustomerInput = {
  /** Input for field CompanyName on type UpdateCustomerInput */
  CompanyName?: InputMaybe<Scalars['String']['input']>;
  /** Input for field EmailAddress on type UpdateCustomerInput */
  EmailAddress?: InputMaybe<Scalars['String']['input']>;
  /** Input for field FirstName on type UpdateCustomerInput */
  FirstName?: InputMaybe<Scalars['String']['input']>;
  /** Input for field LastName on type UpdateCustomerInput */
  LastName?: InputMaybe<Scalars['String']['input']>;
  /** Input for field MiddleName on type UpdateCustomerInput */
  MiddleName?: InputMaybe<Scalars['String']['input']>;
  /** Input for field ModifiedDate on type UpdateCustomerInput */
  ModifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field NameStyle on type UpdateCustomerInput */
  NameStyle?: InputMaybe<Scalars['Boolean']['input']>;
  /** Input for field PasswordHash on type UpdateCustomerInput */
  PasswordHash?: InputMaybe<Scalars['String']['input']>;
  /** Input for field PasswordSalt on type UpdateCustomerInput */
  PasswordSalt?: InputMaybe<Scalars['String']['input']>;
  /** Input for field Phone on type UpdateCustomerInput */
  Phone?: InputMaybe<Scalars['String']['input']>;
  /** Input for field SalesPerson on type UpdateCustomerInput */
  SalesPerson?: InputMaybe<Scalars['String']['input']>;
  /** Input for field Suffix on type UpdateCustomerInput */
  Suffix?: InputMaybe<Scalars['String']['input']>;
  /** Input for field Title on type UpdateCustomerInput */
  Title?: InputMaybe<Scalars['String']['input']>;
  /** Input for field rowguid on type UpdateCustomerInput */
  rowguid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Input type for updating ErrorLog */
export type UpdateErrorLogInput = {
  /** Input for field ErrorLine on type UpdateErrorLogInput */
  ErrorLine?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field ErrorMessage on type UpdateErrorLogInput */
  ErrorMessage?: InputMaybe<Scalars['String']['input']>;
  /** Input for field ErrorNumber on type UpdateErrorLogInput */
  ErrorNumber?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field ErrorProcedure on type UpdateErrorLogInput */
  ErrorProcedure?: InputMaybe<Scalars['String']['input']>;
  /** Input for field ErrorSeverity on type UpdateErrorLogInput */
  ErrorSeverity?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field ErrorState on type UpdateErrorLogInput */
  ErrorState?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field ErrorTime on type UpdateErrorLogInput */
  ErrorTime?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field UserName on type UpdateErrorLogInput */
  UserName?: InputMaybe<Scalars['String']['input']>;
};

/** Input type for updating ProductCategory */
export type UpdateProductCategoryInput = {
  /** Input for field ModifiedDate on type UpdateProductCategoryInput */
  ModifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field Name on type UpdateProductCategoryInput */
  Name?: InputMaybe<Scalars['String']['input']>;
  /** Input for field ParentProductCategoryID on type UpdateProductCategoryInput */
  ParentProductCategoryID?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field rowguid on type UpdateProductCategoryInput */
  rowguid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Input type for updating ProductDescription */
export type UpdateProductDescriptionInput = {
  /** Input for field Description on type UpdateProductDescriptionInput */
  Description?: InputMaybe<Scalars['String']['input']>;
  /** Input for field ModifiedDate on type UpdateProductDescriptionInput */
  ModifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field rowguid on type UpdateProductDescriptionInput */
  rowguid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Input type for updating Product */
export type UpdateProductInput = {
  /** Input for field Color on type UpdateProductInput */
  Color?: InputMaybe<Scalars['String']['input']>;
  /** Input for field DiscontinuedDate on type UpdateProductInput */
  DiscontinuedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field ListPrice on type UpdateProductInput */
  ListPrice?: InputMaybe<Scalars['Decimal']['input']>;
  /** Input for field ModifiedDate on type UpdateProductInput */
  ModifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field Name on type UpdateProductInput */
  Name?: InputMaybe<Scalars['String']['input']>;
  /** Input for field ProductCategoryID on type UpdateProductInput */
  ProductCategoryID?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field ProductModelID on type UpdateProductInput */
  ProductModelID?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field ProductNumber on type UpdateProductInput */
  ProductNumber?: InputMaybe<Scalars['String']['input']>;
  /** Input for field SellEndDate on type UpdateProductInput */
  SellEndDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field SellStartDate on type UpdateProductInput */
  SellStartDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field Size on type UpdateProductInput */
  Size?: InputMaybe<Scalars['String']['input']>;
  /** Input for field StandardCost on type UpdateProductInput */
  StandardCost?: InputMaybe<Scalars['Decimal']['input']>;
  /** Input for field ThumbNailPhoto on type UpdateProductInput */
  ThumbNailPhoto?: InputMaybe<Scalars['ByteArray']['input']>;
  /** Input for field ThumbnailPhotoFileName on type UpdateProductInput */
  ThumbnailPhotoFileName?: InputMaybe<Scalars['String']['input']>;
  /** Input for field Weight on type UpdateProductInput */
  Weight?: InputMaybe<Scalars['Decimal']['input']>;
  /** Input for field rowguid on type UpdateProductInput */
  rowguid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Input type for updating ProductModel */
export type UpdateProductModelInput = {
  /** Input for field ModifiedDate on type UpdateProductModelInput */
  ModifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field Name on type UpdateProductModelInput */
  Name?: InputMaybe<Scalars['String']['input']>;
  /** Input for field rowguid on type UpdateProductModelInput */
  rowguid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Input type for updating ProductModelProductDescription */
export type UpdateProductModelProductDescriptionInput = {
  /** Input for field Culture on type UpdateProductModelProductDescriptionInput */
  Culture?: InputMaybe<Scalars['String']['input']>;
  /** Input for field ModifiedDate on type UpdateProductModelProductDescriptionInput */
  ModifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field ProductDescriptionID on type UpdateProductModelProductDescriptionInput */
  ProductDescriptionID?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field ProductModelID on type UpdateProductModelProductDescriptionInput */
  ProductModelID?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field rowguid on type UpdateProductModelProductDescriptionInput */
  rowguid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Input type for updating SalesOrderDetail */
export type UpdateSalesOrderDetailInput = {
  /** Input for field ModifiedDate on type UpdateSalesOrderDetailInput */
  ModifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field OrderQty on type UpdateSalesOrderDetailInput */
  OrderQty?: InputMaybe<Scalars['Short']['input']>;
  /** Input for field ProductID on type UpdateSalesOrderDetailInput */
  ProductID?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field SalesOrderID on type UpdateSalesOrderDetailInput */
  SalesOrderID?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field UnitPrice on type UpdateSalesOrderDetailInput */
  UnitPrice?: InputMaybe<Scalars['Decimal']['input']>;
  /** Input for field UnitPriceDiscount on type UpdateSalesOrderDetailInput */
  UnitPriceDiscount?: InputMaybe<Scalars['Decimal']['input']>;
  /** Input for field rowguid on type UpdateSalesOrderDetailInput */
  rowguid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Input type for updating SalesOrderHeader */
export type UpdateSalesOrderHeaderInput = {
  /** Input for field AccountNumber on type UpdateSalesOrderHeaderInput */
  AccountNumber?: InputMaybe<Scalars['String']['input']>;
  /** Input for field BillToAddressID on type UpdateSalesOrderHeaderInput */
  BillToAddressID?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field Comment on type UpdateSalesOrderHeaderInput */
  Comment?: InputMaybe<Scalars['String']['input']>;
  /** Input for field CreditCardApprovalCode on type UpdateSalesOrderHeaderInput */
  CreditCardApprovalCode?: InputMaybe<Scalars['String']['input']>;
  /** Input for field CustomerID on type UpdateSalesOrderHeaderInput */
  CustomerID?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field DueDate on type UpdateSalesOrderHeaderInput */
  DueDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field Freight on type UpdateSalesOrderHeaderInput */
  Freight?: InputMaybe<Scalars['Decimal']['input']>;
  /** Input for field ModifiedDate on type UpdateSalesOrderHeaderInput */
  ModifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field OnlineOrderFlag on type UpdateSalesOrderHeaderInput */
  OnlineOrderFlag?: InputMaybe<Scalars['Boolean']['input']>;
  /** Input for field OrderDate on type UpdateSalesOrderHeaderInput */
  OrderDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field PurchaseOrderNumber on type UpdateSalesOrderHeaderInput */
  PurchaseOrderNumber?: InputMaybe<Scalars['String']['input']>;
  /** Input for field RevisionNumber on type UpdateSalesOrderHeaderInput */
  RevisionNumber?: InputMaybe<Scalars['Byte']['input']>;
  /** Input for field SalesOrderID on type UpdateSalesOrderHeaderInput */
  SalesOrderID?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field ShipDate on type UpdateSalesOrderHeaderInput */
  ShipDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Input for field ShipMethod on type UpdateSalesOrderHeaderInput */
  ShipMethod?: InputMaybe<Scalars['String']['input']>;
  /** Input for field ShipToAddressID on type UpdateSalesOrderHeaderInput */
  ShipToAddressID?: InputMaybe<Scalars['Int']['input']>;
  /** Input for field Status on type UpdateSalesOrderHeaderInput */
  Status?: InputMaybe<Scalars['Byte']['input']>;
  /** Input for field SubTotal on type UpdateSalesOrderHeaderInput */
  SubTotal?: InputMaybe<Scalars['Decimal']['input']>;
  /** Input for field TaxAmt on type UpdateSalesOrderHeaderInput */
  TaxAmt?: InputMaybe<Scalars['Decimal']['input']>;
  /** Input for field rowguid on type UpdateSalesOrderHeaderInput */
  rowguid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Input type for adding Uuid filters */
export type UuidFilterInput = {
  /** Contains */
  contains?: InputMaybe<Scalars['UUID']['input']>;
  /** Ends With */
  endsWith?: InputMaybe<Scalars['UUID']['input']>;
  /** Equals */
  eq?: InputMaybe<Scalars['UUID']['input']>;
  /** In */
  in?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Not null test */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Not Equals */
  neq?: InputMaybe<Scalars['UUID']['input']>;
  /** Not Contains */
  notContains?: InputMaybe<Scalars['UUID']['input']>;
  /** Starts With */
  startsWith?: InputMaybe<Scalars['UUID']['input']>;
};

export type UspLogError = {
  __typename?: 'uspLogError';
  /** Contains output of stored-procedure execution */
  result?: Maybe<Scalars['String']['output']>;
};

export type VGetAllCategories = {
  __typename?: 'vGetAllCategories';
  ParentProductCategoryName?: Maybe<Scalars['String']['output']>;
  ProductCategoryID?: Maybe<Scalars['Int']['output']>;
  ProductCategoryName?: Maybe<Scalars['String']['output']>;
};

/** Aggregation type for vGetAllCategories */
export type VGetAllCategoriesAggregations = {
  __typename?: 'vGetAllCategoriesAggregations';
  /** Average value */
  avg?: Maybe<Scalars['Float']['output']>;
  /** Count of numeric values */
  count?: Maybe<Scalars['Int']['output']>;
  /** Maximum value for numeric fields */
  max?: Maybe<Scalars['Float']['output']>;
  /** Minimum value for numeric fields */
  min?: Maybe<Scalars['Float']['output']>;
  /** Sum of values */
  sum?: Maybe<Scalars['Float']['output']>;
};


/** Aggregation type for vGetAllCategories */
export type VGetAllCategoriesAggregationsAvgArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: VGetAllCategoriesNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for vGetAllCategories */
export type VGetAllCategoriesAggregationsCountArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: VGetAllCategoriesNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for vGetAllCategories */
export type VGetAllCategoriesAggregationsMaxArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: VGetAllCategoriesNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for vGetAllCategories */
export type VGetAllCategoriesAggregationsMinArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: VGetAllCategoriesNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for vGetAllCategories */
export type VGetAllCategoriesAggregationsSumArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: VGetAllCategoriesNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};

/** The return object from a filter query that supports a pagination token for paging through results */
export type VGetAllCategoriesConnection = {
  __typename?: 'vGetAllCategoriesConnection';
  /** A pagination token to provide to subsequent pages of a query */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Group results by specified fields */
  groupBy: Array<VGetAllCategoriesGroupBy>;
  /** Indicates if there are more pages of items to return */
  hasNextPage: Scalars['Boolean']['output'];
  /** The list of items that matched the filter */
  items: Array<VGetAllCategories>;
};


/** The return object from a filter query that supports a pagination token for paging through results */
export type VGetAllCategoriesConnectionGroupByArgs = {
  fields?: InputMaybe<Array<VGetAllCategoriesScalarFields>>;
};

/** Filter input for vGetAllCategories GraphQL type */
export type VGetAllCategoriesFilterInput = {
  /** Filter options for ParentProductCategoryName */
  ParentProductCategoryName?: InputMaybe<StringFilterInput>;
  /** Filter options for ProductCategoryID */
  ProductCategoryID?: InputMaybe<IntFilterInput>;
  /** Filter options for ProductCategoryName */
  ProductCategoryName?: InputMaybe<StringFilterInput>;
  /** Conditions to be treated as AND operations */
  and?: InputMaybe<Array<InputMaybe<VGetAllCategoriesFilterInput>>>;
  /** Conditions to be treated as OR operations */
  or?: InputMaybe<Array<InputMaybe<VGetAllCategoriesFilterInput>>>;
};

/** GroupBy type for vGetAllCategories */
export type VGetAllCategoriesGroupBy = {
  __typename?: 'vGetAllCategoriesGroupBy';
  /** Aggregations for vGetAllCategories */
  aggregations?: Maybe<VGetAllCategoriesAggregations>;
  /** Grouped fields from vGetAllCategories */
  fields?: Maybe<VGetAllCategories>;
};

/** Fields available for aggregation in vGetAllCategories */
export enum VGetAllCategoriesNumericAggregateFields {
  ProductCategoryId = 'ProductCategoryID'
}

/** Order by input for vGetAllCategories GraphQL type */
export type VGetAllCategoriesOrderByInput = {
  /** Order by options for ParentProductCategoryName */
  ParentProductCategoryName?: InputMaybe<OrderBy>;
  /** Order by options for ProductCategoryID */
  ProductCategoryID?: InputMaybe<OrderBy>;
  /** Order by options for ProductCategoryName */
  ProductCategoryName?: InputMaybe<OrderBy>;
};

/** Scalar fields available in vGetAllCategories */
export enum VGetAllCategoriesScalarFields {
  ParentProductCategoryName = 'ParentProductCategoryName',
  ProductCategoryId = 'ProductCategoryID',
  ProductCategoryName = 'ProductCategoryName'
}

export type VProductAndDescription = {
  __typename?: 'vProductAndDescription';
  Culture: Scalars['String']['output'];
  Description: Scalars['String']['output'];
  Name?: Maybe<Scalars['String']['output']>;
  ProductID: Scalars['Int']['output'];
  ProductModel?: Maybe<Scalars['String']['output']>;
};

/** Aggregation type for vProductAndDescription */
export type VProductAndDescriptionAggregations = {
  __typename?: 'vProductAndDescriptionAggregations';
  /** Average value */
  avg?: Maybe<Scalars['Float']['output']>;
  /** Count of numeric values */
  count?: Maybe<Scalars['Int']['output']>;
  /** Maximum value for numeric fields */
  max?: Maybe<Scalars['Float']['output']>;
  /** Minimum value for numeric fields */
  min?: Maybe<Scalars['Float']['output']>;
  /** Sum of values */
  sum?: Maybe<Scalars['Float']['output']>;
};


/** Aggregation type for vProductAndDescription */
export type VProductAndDescriptionAggregationsAvgArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: VProductAndDescriptionNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for vProductAndDescription */
export type VProductAndDescriptionAggregationsCountArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: VProductAndDescriptionNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for vProductAndDescription */
export type VProductAndDescriptionAggregationsMaxArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: VProductAndDescriptionNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for vProductAndDescription */
export type VProductAndDescriptionAggregationsMinArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: VProductAndDescriptionNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};


/** Aggregation type for vProductAndDescription */
export type VProductAndDescriptionAggregationsSumArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  field: VProductAndDescriptionNumericAggregateFields;
  having?: InputMaybe<IntFilterInput>;
};

/** The return object from a filter query that supports a pagination token for paging through results */
export type VProductAndDescriptionConnection = {
  __typename?: 'vProductAndDescriptionConnection';
  /** A pagination token to provide to subsequent pages of a query */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Group results by specified fields */
  groupBy: Array<VProductAndDescriptionGroupBy>;
  /** Indicates if there are more pages of items to return */
  hasNextPage: Scalars['Boolean']['output'];
  /** The list of items that matched the filter */
  items: Array<VProductAndDescription>;
};


/** The return object from a filter query that supports a pagination token for paging through results */
export type VProductAndDescriptionConnectionGroupByArgs = {
  fields?: InputMaybe<Array<VProductAndDescriptionScalarFields>>;
};

/** Filter input for vProductAndDescription GraphQL type */
export type VProductAndDescriptionFilterInput = {
  /** Filter options for Culture */
  Culture?: InputMaybe<StringFilterInput>;
  /** Filter options for Description */
  Description?: InputMaybe<StringFilterInput>;
  /** Filter options for Name */
  Name?: InputMaybe<StringFilterInput>;
  /** Filter options for ProductID */
  ProductID?: InputMaybe<IntFilterInput>;
  /** Filter options for ProductModel */
  ProductModel?: InputMaybe<StringFilterInput>;
  /** Conditions to be treated as AND operations */
  and?: InputMaybe<Array<InputMaybe<VProductAndDescriptionFilterInput>>>;
  /** Conditions to be treated as OR operations */
  or?: InputMaybe<Array<InputMaybe<VProductAndDescriptionFilterInput>>>;
};

/** GroupBy type for vProductAndDescription */
export type VProductAndDescriptionGroupBy = {
  __typename?: 'vProductAndDescriptionGroupBy';
  /** Aggregations for vProductAndDescription */
  aggregations?: Maybe<VProductAndDescriptionAggregations>;
  /** Grouped fields from vProductAndDescription */
  fields?: Maybe<VProductAndDescription>;
};

/** Fields available for aggregation in vProductAndDescription */
export enum VProductAndDescriptionNumericAggregateFields {
  ProductId = 'ProductID'
}

/** Order by input for vProductAndDescription GraphQL type */
export type VProductAndDescriptionOrderByInput = {
  /** Order by options for Culture */
  Culture?: InputMaybe<OrderBy>;
  /** Order by options for Description */
  Description?: InputMaybe<OrderBy>;
  /** Order by options for Name */
  Name?: InputMaybe<OrderBy>;
  /** Order by options for ProductID */
  ProductID?: InputMaybe<OrderBy>;
  /** Order by options for ProductModel */
  ProductModel?: InputMaybe<OrderBy>;
};

/** Scalar fields available in vProductAndDescription */
export enum VProductAndDescriptionScalarFields {
  Culture = 'Culture',
  Description = 'Description',
  Name = 'Name',
  ProductId = 'ProductID',
  ProductModel = 'ProductModel'
}

export type Get_CustomersQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<CustomerFilterInput>;
  orderBy?: InputMaybe<CustomerOrderByInput>;
}>;


export type Get_CustomersQuery = { __typename?: 'Query', customers: { __typename?: 'CustomerConnection', items: Array<{ __typename?: 'Customer', CustomerID: number, FirstName?: string | null, LastName?: string | null }> } };

export type Add_CustomerMutationVariables = Exact<{
  input: CreateCustomerInput;
}>;


export type Add_CustomerMutation = { __typename?: 'Mutation', createCustomer?: { __typename?: 'Customer', CustomerID: number, FirstName?: string | null, LastName?: string | null, Title?: string | null, Phone?: string | null, PasswordHash: string, PasswordSalt: string, rowguid: any, ModifiedDate: any, NameStyle?: boolean | null } | null };


export const Get_CustomersDocument = gql`
    query GET_CUSTOMERS($after: String, $first: Int, $filter: CustomerFilterInput, $orderBy: CustomerOrderByInput) {
  customers(after: $after, first: $first, filter: $filter, orderBy: $orderBy) {
    items {
      CustomerID
      FirstName
      LastName
    }
  }
}
    `;

/**
 * __useGet_CustomersQuery__
 *
 * To run a query within a React component, call `useGet_CustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_CustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_CustomersQuery({
 *   variables: {
 *      after: // value for 'after'
 *      first: // value for 'first'
 *      filter: // value for 'filter'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGet_CustomersQuery(baseOptions?: Apollo.QueryHookOptions<Get_CustomersQuery, Get_CustomersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Get_CustomersQuery, Get_CustomersQueryVariables>(Get_CustomersDocument, options);
      }
export function useGet_CustomersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Get_CustomersQuery, Get_CustomersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Get_CustomersQuery, Get_CustomersQueryVariables>(Get_CustomersDocument, options);
        }
export function useGet_CustomersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Get_CustomersQuery, Get_CustomersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Get_CustomersQuery, Get_CustomersQueryVariables>(Get_CustomersDocument, options);
        }
export type Get_CustomersQueryHookResult = ReturnType<typeof useGet_CustomersQuery>;
export type Get_CustomersLazyQueryHookResult = ReturnType<typeof useGet_CustomersLazyQuery>;
export type Get_CustomersSuspenseQueryHookResult = ReturnType<typeof useGet_CustomersSuspenseQuery>;
export type Get_CustomersQueryResult = Apollo.QueryResult<Get_CustomersQuery, Get_CustomersQueryVariables>;
export const Add_CustomerDocument = gql`
    mutation ADD_CUSTOMER($input: CreateCustomerInput!) {
  createCustomer(item: $input) {
    CustomerID
    FirstName
    LastName
    Title
    Phone
    PasswordHash
    PasswordSalt
    rowguid
    ModifiedDate
    NameStyle
  }
}
    `;
export type Add_CustomerMutationFn = Apollo.MutationFunction<Add_CustomerMutation, Add_CustomerMutationVariables>;

/**
 * __useAdd_CustomerMutation__
 *
 * To run a mutation, you first call `useAdd_CustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdd_CustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCustomerMutation, { data, loading, error }] = useAdd_CustomerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdd_CustomerMutation(baseOptions?: Apollo.MutationHookOptions<Add_CustomerMutation, Add_CustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Add_CustomerMutation, Add_CustomerMutationVariables>(Add_CustomerDocument, options);
      }
export type Add_CustomerMutationHookResult = ReturnType<typeof useAdd_CustomerMutation>;
export type Add_CustomerMutationResult = Apollo.MutationResult<Add_CustomerMutation>;
export type Add_CustomerMutationOptions = Apollo.BaseMutationOptions<Add_CustomerMutation, Add_CustomerMutationVariables>;