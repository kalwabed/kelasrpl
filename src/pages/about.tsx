import React from 'react'
import Header from '../components/Header'
import { Container } from 'reactstrap'

const About = () => {
    return (
        <>
            <Header navLink="/about" />
            <section className="hero-about">
                <img src="undraw-starry.svg" alt="about" />
            </section>
            <Container>
                <h1>hai dunia</h1>
            </Container>
        </>
    )
}

export default About
