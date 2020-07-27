export type PropsHeader = {
    navLink: string
}

export type PropsCardHero = {
    staff: any[]
}

export type Staff = {
    _id: string
    address: string
    name: string
    birthPlace: string
    position: number
    birthDate: Date
    description: string
    imageId: {
        imageUrl: string
    }
    socialId: [
        {
            socialName: string
            socialUrl: string
        }
    ]
}

export interface stdContext {
    staff: any[]
    isLoading: boolean
}
