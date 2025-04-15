// sanity/lib/queries.ts

export const homePageQuery = `
  *[_type == "home"][0]{
    section1,
    section2,
    section3,
    testimonials[]->{
      _id,
      quote,
      name,
      title,
      "avatar": avatar.asset->url
    },
  }
`
