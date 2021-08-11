import { Buckets, Identity, UserAuth } from '@textile/hub'

export const testKey = "bbaareqhhfwqmg6555iinyzfayrbw2mlovtjnhitmwnmynaxykigz7kburgwgakaodlcpkeqc6p23uljdyftgfganekatm6tzwjcwgdbuyoosk";
export const testThreadId = "bafk35hsmfrz27tjktnga237cq5u7d7hobbshasnkh5vrhk7n5zzwqfi";
export interface InternalBase {
  key: object
}

export const productSchema = {
  title: "Products",
  type: "object",
  required: ["_id"],
  properties: {
    _id: {
      type: "string",
      description: "The instance's id.",
    },
    name: {
      type: "string",
      description: "The product name.",
    },
    brand: {
      description: "The manufacturer of the product",
      type: "string"
    },
  },
}


export interface Product extends InternalBase {
  brand: string
  name: string
  itemUrl: string
  storeSku: number
  category: number
  thumbnailUrls: Array<string>
  featuredImageUrls: Array<string>
  detailedImageUrls: Array<string>
  price: Price
  weight: Weight
  //customAttributes: Map
  detailsHtml: string
  active: boolean
  auditLog: AuditLog
  stockStatus: string
  availability: number
}

export interface Category extends InternalBase {
  category: string
  subcategory: string
}

export interface Payment extends InternalBase {
  source: string
  type: string
  paymentId: number
  transactionId: number
  amountInUsd: Price
  exchangeRate: ExchangeRate
  amountInPaymentCurrency: Price
  paymentTxDetails: string

}

export interface ExchangeRate extends InternalBase {
  currency: string
  oneUsdEquals: number
}

export interface Price extends InternalBase {
  amount: number
  currency: string
}

export interface Weight extends InternalBase {
  quantity: number
  unit: string
}

export interface AuditLog extends InternalBase  {
  createdBy: string
  updatedBy: string
  createdOn: Date
  updatedOn: Date
}

export interface Order extends InternalBase {
    status: string
    cart: Cart
    userEmail: string
    mailingAddress: Address
    paymentInfo: Payment
    comments: Comments
    auditLog: AuditLog
}

export interface Comments extends InternalBase {
  content: string
  auditLog: AuditLog
}

export interface Cart extends InternalBase {
  products: Array<Product>
  counts: number
  aggregatedWeight: number
  aggregatedPrice: number
}

export interface Address extends InternalBase {
  firstName: string
  lastName: string
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  zipCode: string
  country: string
  mobilePhone: string
}

export interface AppState {
  products: Array<Product>
  categories: Array<Category>
  identity?: Identity
  userAuth?: UserAuth
  buckets?: Buckets
  bucketKey?: string
  www?: string
  url?: string
  ipns?: string
}

export interface Person {
  _id: string
  firstName: string
  lastName: string
}

const createSamplePerson = (): Person => {
  return {
    _id: '',
    firstName: 'Adam',
    lastName: 'Doe',
  }
}