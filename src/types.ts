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
    position: number
    birthDate: Date
    description: string
    imageId: {
        imageUrl: string
    }
}
