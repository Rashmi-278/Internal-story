import { Buckets, Identity, UserAuth } from '@textile/hub'

export interface Product {
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

export interface Category {
  category: string
  subcategory: string
}

export interface Payment {
  source: string
  type: string
  paymentId: number
  transactionId: number
  amountInUsd: Price
  exchangeRate: ExchangeRate
  amountInPaymentCurrency: Price
  paymentTxDetails: string

}

export interface ExchangeRate {
  currency: string
  oneUsdEquals: number
}

export interface Price {
  amount: number
  currency: string
}

export interface Weight {
  quantity: number
  unit: string
}

export interface AuditLog  {
  createdBy: string
  updatedBy: string
  createdOn: Date
  updatedOn: Date
}

export interface Order {
    status: string
    cart: Cart
    userEmail: string
    mailingAddress: Address
    paymentInfo: Payment
    comments: Comments
    auditLog: AuditLog
}

export interface Comments {
  content: string
  auditLog: AuditLog
}

export interface Cart {
  products: Array<Product>
  counts: number
  aggregatedWeight: number
  aggregatedPrice: number
}

export interface Address {
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