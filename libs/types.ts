export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Author {
    _id: string
    name: string
    image?: string
    title: string
    bio: string
    linkedin?: string
  }
  
  export interface BlogPost {
    _id: string
    title: string
    slug: string
    publishedAt: string
    excerpt: string
    mainImage?: string
    author: Author
    content: any[] // This would be Portable Text from Sanity
  }
  
  export interface HomeSection1{
    mainHeading: string
    mobileImage: object
    desktopImage: object
    ctaButtons: object[]
    _type: string
    description: string
    tagline: string
  }
  
  export interface Service {
    _key: string;
    _type: 'service';
    label: string;
    url?: string;
    icon: SanityImage;
  }

  export interface HomeSection2{
    heading: string
    _type: string
    services: Service[]
    subheading: string
  }

  export interface TabItem {
    _key?: string;
    _type?: string;
    date?: string;
    isNew: boolean;
    info: string;
  }
  
  export interface Tab {
    _key: string;
    _type: string;
    // title: 'Announcements' | 'Notices' | 'Events' | 'Quick Links';
    title: string;
    items: TabItem[];
  }
  
  export interface HomeSection3 {
    _type: 'section3';
    tabs: Tab[];
  }

  export interface Testimonial {
    _id: string
    quote: string;
    name: string;
    title: string;
    avatar: string;
  }