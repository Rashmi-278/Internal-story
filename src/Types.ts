import { Buckets, Identity, UserAuth } from '@textile/hub'

export const testKey = "bbaareqhhfwqmg6555iinyzfayrbw2mlovtjnhitmwnmynaxykigz7kburgwgakaodlcpkeqc6p23uljdyftgfganekatm6tzwjcwgdbuyoosk";
export const testThreadId = "bafk35hsmfrz27tjktnga237cq5u7d7hobbshasnkh5vrhk7n5zzwqfi";
export interface InternalBase {
  key: object
}

export const productSchema = {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "http://example.com/example.json",
  "type": "object",
  "title": " Product schema",
  "description": "product schema representing the item sold in ecommerce store",
  "default": {},
  "required": [
      "_id",
      "thumbnailUrls",
      "featuredImageUrls",
      "detailedImageUrls",
      "active",
      "brand",
      "name",
      "item_url",
      "category",
      "store_sku",
      "price",
      "weight",
      "details_html",
      "auditLog",
      "__v"
  ],
  "properties": {
      "_id": {
          "$id": "#/properties/_id",
          "type": "string",
          "title": "The _id schema",
          "description": "",
          "default": ""
      },
      "thumbnailUrls": {
          "$id": "#/properties/thumbnailUrls",
          "type": "array",
          "title": "The thumbnailUrls schema",
          "description": "",
          "default": [],
          "additionalItems": true,
          "items": {
              "$id": "#/properties/thumbnailUrls/items",
              "anyOf": [
                  {
                      "$id": "#/properties/thumbnailUrls/items/anyOf/0",
                      "type": "string",
                      "title": "The first anyOf schema",
                      "description": "",
                      "default": ""
                  }
              ]
          }
      },
      "featuredImageUrls": {
          "$id": "#/properties/featuredImageUrls",
          "type": "array",
          "title": "The featuredImageUrls schema",
          "description": "",
          "default": [],
          "additionalItems": true,
          "items": {
              "$id": "#/properties/featuredImageUrls/items"
          }
      },
      "detailedImageUrls": {
          "$id": "#/properties/detailedImageUrls",
          "type": "array",
          "title": "The detailedImageUrls schema",
          "description": "",
          "default": [],
          "additionalItems": true,
          "items": {
              "$id": "#/properties/detailedImageUrls/items",
              "anyOf": [
                  {
                      "$id": "#/properties/detailedImageUrls/items/anyOf/0",
                      "type": "string",
                      "title": "The first anyOf schema",
                      "description": "",
                      "default": ""
                  }
              ]
          }
      },
      "active": {
          "$id": "#/properties/active",
          "type": "boolean",
          "title": "The active schema",
          "description": "",
          "default": false
      },
      "brand": {
          "$id": "#/properties/brand",
          "type": "string",
          "title": "The brand schema",
          "description": "",
          "default": ""
      },
      "name": {
          "$id": "#/properties/name",
          "type": "string",
          "title": "The name schema",
          "description": "",
          "default": ""
      },
      "item_url": {
          "$id": "#/properties/item_url",
          "type": "string",
          "title": "The item_url schema",
          "description": "",
          "default": ""
      },
      "category": {
          "$id": "#/properties/category",
          "type": "string",
          "title": "The category schema",
          "description": "",
          "default": ""
      },
      "store_sku": {
          "$id": "#/properties/store_sku",
          "type": "string",
          "title": "The store_sku schema",
          "description": "",
          "default": ""
      },
      "price": {
          "$id": "#/properties/price",
          "type": "object",
          "title": "The price schema",
          "description": "",
          "default": {},
          "required": [
              "amount",
              "currency"
          ],
          "properties": {
              "amount": {
                  "$id": "#/properties/price/properties/amount",
                  "type": "integer",
                  "title": "The amount schema",
                  "description": "",
                  "default": 0
              },
              "currency": {
                  "$id": "#/properties/price/properties/currency",
                  "type": "string",
                  "title": "The currency schema",
                  "description": "",
                  "default": ""
              }
          },
          "additionalProperties": true
      },
      "weight": {
          "$id": "#/properties/weight",
          "type": "object",
          "title": "The weight schema",
          "description": "",
          "default": {},
          "required": [
              "quantity",
              "unit"
          ],
          "properties": {
              "quantity": {
                  "$id": "#/properties/weight/properties/quantity",
                  "type": "number",
                  "title": "The quantity schema",
                  "description": "",
                  "default": 0.0
              },
              "unit": {
                  "$id": "#/properties/weight/properties/unit",
                  "type": "string",
                  "title": "The unit schema",
                  "description": "",
                  "default": ""
              }
          },
          "additionalProperties": true
      },
      "details_html": {
          "$id": "#/properties/details_html",
          "type": "string",
          "title": "The details_html schema",
          "description": "",
          "default": ""
      },
      "auditLog": {
          "$id": "#/properties/auditLog",
          "type": "object",
          "title": "The auditLog schema",
          "description": "",
          "default": {},
          "required": [
              "createdBy",
              "updatedBy",
              "createdOn",
              "updatedOn"
          ],
          "properties": {
              "createdBy": {
                  "$id": "#/properties/auditLog/properties/createdBy",
                  "type": "object",
                  "title": "The createdBy schema",
                  "description": "",
                  "default": {},
                  "required": [
                      "email",
                      "name"
                  ],
                  "properties": {
                      "email": {
                          "$id": "#/properties/auditLog/properties/createdBy/properties/email",
                          "type": "string",
                          "title": "The email schema",
                          "description": "",
                          "default": ""
                      },
                      "name": {
                          "$id": "#/properties/auditLog/properties/createdBy/properties/name",
                          "type": "string",
                          "title": "The name schema",
                          "description": "",
                          "default": ""
                      }
                  },
                  "additionalProperties": true
              },
              "updatedBy": {
                  "$id": "#/properties/auditLog/properties/updatedBy",
                  "type": "object",
                  "title": "The updatedBy schema",
                  "description": "",
                  "default": {},
                  "required": [
                      "email",
                      "name"
                  ],
                  "properties": {
                      "email": {
                          "$id": "#/properties/auditLog/properties/updatedBy/properties/email",
                          "type": "string",
                          "title": "The email schema",
                          "description": "",
                          "default": ""
                      },
                      "name": {
                          "$id": "#/properties/auditLog/properties/updatedBy/properties/name",
                          "type": "string",
                          "title": "The name schema",
                          "description": "",
                          "default": ""
                      }
                  },
                  "additionalProperties": true
              },
              "createdOn": {
                  "$id": "#/properties/auditLog/properties/createdOn",
                  "type": "string",
                  "title": "The createdOn schema",
                  "description": "",
                  "default": ""
              },
              "updatedOn": {
                  "$id": "#/properties/auditLog/properties/updatedOn",
                  "type": "string",
                  "title": "The updatedOn schema",
                  "description": "",
                  "default": ""
              }
          },
          "additionalProperties": true
      },
      "__v": {
          "$id": "#/properties/__v",
          "type": "integer",
          "title": "The __v schema",
          "description": "",
          "default": 0
      }
  },
  "additionalProperties": true
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