import { type SchemaTypeDefinition } from 'sanity'
import chef from './chefs'
import food from './foods'
import recent from './recent'
import cart from './cart'
import filter from './filter'
import popular from './popular'
import gallery from './gallery'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [chef,food,recent,cart,filter,popular,gallery],
}
