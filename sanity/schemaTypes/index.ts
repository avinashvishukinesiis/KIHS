import { type SchemaTypeDefinition } from 'sanity'
import { eventType } from './eventType'
import { homeType } from './HomePageSchema/homesTypes'
import { section1Type } from './HomePageSchema/section1'
import { section2Type } from './HomePageSchema/section2'
import { section3Type } from './HomePageSchema/section3'
import { testimonialType } from './HomePageSchema/testimonial'
import { aboutUsType } from './AboutUsSchema/aboutUsTypes'
import { ourJourneyType } from './AboutUsSchema/ourJourney'
import { visionMissionType } from './AboutUsSchema/vissionMission'
import { leadershipType } from './AboutUsSchema/leadershipValue'
import { serviceStandardsType } from './AboutUsSchema/serviceStandardsTypes'
import { stateOfTheArtType } from './AboutUsSchema/stateOfTheArt'
import { footerType } from './FooterSchema/FooterTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    eventType,
    footerType,
    homeType,
    section1Type,
    section2Type,
    section3Type,
    testimonialType,
    aboutUsType,
    ourJourneyType,
    visionMissionType,
    leadershipType,
    serviceStandardsType,
    stateOfTheArtType,
  ],
}
