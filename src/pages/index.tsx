import React from 'react'
import { Container, Spinner, Row, Col } from 'reactstrap'
import { Fade } from 'react-awesome-reveal'

import Footer from '../components/Footer'
import Header from '../components/Header'
import CardHero from '../components/CardHero'
import { useStdCtx } from '../contexts/StudentProvider'

const Index = () => {
    const { student, isLoading } = useStdCtx()
    document.title = 'Home | #kitarpl1'
    window.scrollTo(0, 0)

    return (
        <>
            <Header navLink="/" />
            <section className="hero">
                <Container>
                    <Row>
                        <Col md={{ size: 8, offset: 2 }}>
                            <div className="hero-text text-center">
                                <Fade duration={3000}>
                                    <div className="h3 hero-title">
                                        Hai Dunia
                                    </div>
                                    <div>
                                        Selamat Datang di Laman Resmi{' '}
                                        <span className="bld">
                                            XII RPL 1 [2019/2020]
                                        </span>{' '}
                                        <p className="bld">
                                            SMK Negeri 1 Banyuwangi
                                        </p>
                                    </div>
                                </Fade>
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
                </div>
                {!isLoading && <CardHero student={student} />}
            </Container>
            {!isLoading && <Footer />}
        </>
    )
}

export default Index
