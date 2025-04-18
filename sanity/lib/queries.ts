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

export const aboutUsPageQuery = `
  *[_type == "AboutUs"][0]{
    ourJourney,
    visionMission {
      visionTitle,
      visionDescription,
      missionTitle,
      missionStatements,
      commitmentTitle,
      commitmentDescription,
      commitmentImage {
        asset -> { url }
      }
    },
    leadership {
      founders[] {
        name,
        title,
        subTitle,
        description,
        image { asset -> { url } },
        socialLinks[] {
          icon,
          url
        }
      },
      administrators[] {
        name,
        title,
        subTitle,
        image { asset -> { url } },
        socialLinks[] {
          icon,
          url
        }
      },
      coreValues[] {
        title,
        description,
        icon { asset -> { url } }
      }
    },
    serviceStandards {
      sectionTitle,
      sectionSubtitle,
      standards[] {
        title,
        description,
        image {
          asset -> {
            url
          }
        }
      }
    },
    stateOfTheArt {
      facilities {
        title,
        subtitle,
        image { asset -> { url } },
        features[] {
          text,
          listItems
        }
      },
      patientCare {
        title,
        image { asset -> { url } },
        features[] {
          text,
          listItems
        }
      },
      bulletIcon {
         asset -> {
               url
         }
      },
     }
    }
`

export const footerQuery = `
  *[_type == "footer"][0] {
    logo { asset -> { url } },
    companyLinks,
    pagesLinks,
    address,
    mapUrl,
    inquiries {
      phone,
      email
    },
    socialLinks[] {
      label,
      url,
      icon { asset -> { url } }
    }
  }
  `