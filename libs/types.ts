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
  