import React, { useState, useEffect } from 'react'
import { Container, Spinner, Row, Col } from 'reactstrap'

import Header from '../components/Header'
import CardHero from '../components/CardHero'
import { fetchStudent } from '../utils/API'

const Index = () => {
    const [staff, setStaff] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        async function fetch() {
            setIsLoading(true)
            const data = await fetchStudent()
            setStaff(data)
            setIsLoading(false)
        }
        fetch()
    }, [])

    return (
        <>
            <Header navLink="/" />
            <section className="hero">
                <Container>
                    <Row>
                        <Col md={{ size: 8, offset: 2 }}>
                            <div className="hero-text text-center">
                                <div className="h3 hero-title">Hai Dunia</div>
                                <div>
                                    Selamat Datang di Laman Resmi{' '}
                                    <span className="bld">
                                        XII RPL 1 [2019/2020]
                                    </span>{' '}
                                    <p className="bld">
                                        SMK Negeri 1 Banyuwangi
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Container>
                <div
                    className="text-center"
                    style={{ margin: '3rem 0 3rem 0' }}
                >
                    <h1>Daftar Siswa</h1>
                    <div className="divider mx-auto"></div>
                </div>
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
