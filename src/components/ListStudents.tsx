import React from 'react'
import {
    CardDeck,
    Card,
    CardImg,
    CardBody,
    CardText,
    Container,
    Row,
    Col,
    Button,
} from 'reactstrap'
import { Fade } from 'react-awesome-reveal'
import { Student, PropsCardHero } from '../types'
import { Link } from 'react-router-dom'

const ListStudents: React.FC<PropsCardHero> = ({ student }: PropsCardHero) => {
    return (
        <div className="list-student">
            <Container>
                <Fade cascade>
                    <CardDeck>
                        <Row>
                            {student.map((std: Student, i) => (
                                <Col
                                    md={3}
                                    sm={5}
                                    key={std._id}
                                    className="my-2"
                                >
                                    {i % 2 === 0 ? (
                                        <Card
                                            body
                                            outline
                                            color="primary"
                                            className="shadow"
                                        >
                                            <CardImg
                                                top
                                                width="10%"
                                                className="rounded-circle img-thumbnail"
                                                src={std.imageId.imageUrl}
                                                alt={std.name}
                                            />
                                            <CardBody className="text-center">
                                                <CardText className="h6 ">
                                                    {std.name}
                                                </CardText>
                                                <Link
                                                    className="btn btn-outline-primary btn-sm"
                                                    to={`/students/${std._id}`}
                                                >
                                                    show
                                                </Link>
                                            </CardBody>
                                        </Card>
                                    ) : (
                                        <Card
                                            body
                                            inverse
                                            color="primary"
                                            className="shadow"
                                        >
                                            <CardImg
                                                top
                                                className="rounded-circle img-thumbnail"
                                                src={std.imageId.imageUrl}
                                                alt={std.name}
                                            />
                                            <CardBody className="text-center">
                                                <CardText className="h6 ">
                                                    {std.name}
                                                </CardText>
                                                <Link
                                                    className="btn btn-outline-light btn-sm"
                                                    to={`/students/${std._id}`}
                                                >
                                                    show
                                                </Link>
                                            </CardBody>
                                        </Card>
                                    )}
                                </Col>
                            ))}
                        </Row>
                    </CardDeck>
                </Fade>
            </Container>
        </div>
    )
}

export default ListStudents
