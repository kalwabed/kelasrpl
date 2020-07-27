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

import { PropsCardHero, Staff } from '../types'

const CardHero: React.FC<PropsCardHero> = ({ staff }: PropsCardHero) => {
    return (
        <>
            <Fade>
                <CardDeck>
                    {staff.map((st: Staff) => (
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
                    ))}
                </CardDeck>
            </Fade>
            <Row>
                <Col md={{ size: 10 }} />
                <Col>
                    <Link to="#">
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
