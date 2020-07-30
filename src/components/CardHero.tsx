import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'
import { IoMdQuote, IoMdArrowRoundForward } from 'react-icons/io'
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Row,
    CardImg,
    Col,
    CardDeck,
} from 'reactstrap'

import { PropsCard, Student } from '../types'

const CardHero: React.FC<PropsCard<any[]>> = ({
    student,
}: PropsCard<any[]>) => {
    return (
        <>
            <Fade cascade>
                <CardDeck>
                    {student.map((st: Student, i) =>
                        i <= 3 ? (
                            <Card
                                className="my-3 mx-2 shadow border-light"
                                key={st._id}
                                style={{ maxWidth: '640px' }}
                            >
                                <Row noGutters>
                                    <Col className="m-1" xs={4}>
                                        <CardImg
                                            className="rounded-circle img-thumbnail"
                                            src={st.imageId.imageUrl}
                                        />
                                    </Col>
                                    <Col>
                                        <CardBody>
                                            <CardTitle tag="h6">
                                                <u>{st.name}</u>
                                            </CardTitle>
                                            <CardText
                                                tag="code"
                                                className="text-center"
                                            >
                                                <IoMdQuote /> {st.description}
                                            </CardText>{' '}
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        ) : null
                    )}
                </CardDeck>
            </Fade>
            <Row>
                <Col md={{ size: 10 }} />
                <Col>
                    <Link to="/students" style={{ textDecoration: 'none' }}>
                        {' '}
                        Show more
                        <IoMdArrowRoundForward />
                    </Link>
                </Col>
            </Row>
        </>
    )
}

export default CardHero
