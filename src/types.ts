export type PropsHeader = {
    navLink: string
}

export type PropsCardHero = {
    student: any[]
}

export type Student = {
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
    student: any[]
    isLoading: boolean
}
