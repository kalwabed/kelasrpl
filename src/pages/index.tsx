import React, { useState, useEffect } from 'react'
import { Container, Spinner } from 'reactstrap'

import Header from '../components/Header'
import CardHero from '../components/CardHero'
import { fetchStaff } from '../utils/API'

const Index = () => {
    const [staff, setStaff] = useState<[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        async function fetch() {
            setIsLoading(true)
            const data = await fetchStaff()
            setStaff(data)
            setIsLoading(false)
        }
        fetch()
    }, [])

    return (
        <>
            <Header navLink="/" />
            <section className="hero"></section>
            <Container>
                {isLoading && (
                    <Spinner
                        style={{
                            width: '3rem',
                            height: '3rem',
                            marginTop: '3rem',
                        }}
                        color="primary"
                    />
                )}

                {!isLoading && <CardHero staff={staff} />}
            </Container>
        </>
    )
}

export default Index
