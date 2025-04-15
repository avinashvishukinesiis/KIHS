import { type SchemaTypeDefinition } from 'sanity'
import { eventType } from './eventType'
import { homeType } from './HomePageSchema/homesTypes'
import { section1Type } from './HomePageSchema/section1'
import { section2Type } from './HomePageSchema/section2'
import { section3Type } from './HomePageSchema/section3'
import { testimonialType } from './HomePageSchema/testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    eventType,
    homeType,
    section1Type,
    section2Type,
    section3Type,
    testimonialType,
  ],
}
