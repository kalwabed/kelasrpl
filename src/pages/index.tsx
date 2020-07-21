import React from 'react'
import {
    Container,
    Jumbotron,
    Row,
    Col,
    UncontrolledCarousel,
} from 'reactstrap'

import Header from '../components/Header'
import CardHero from '../components/CardHero'

const Index = () => {
    return (
        <>
            <Header navLink="/" />
            <section className="hero"></section>
            <Container>
                <CardHero />
            </Container>
        </>
    )
}

export default Index
