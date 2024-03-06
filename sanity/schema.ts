import { type SchemaTypeDefinition } from "sanity"
import { product,category } from "./schemas/product-schema"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category]
}
