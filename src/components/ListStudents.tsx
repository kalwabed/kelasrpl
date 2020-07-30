import React from 'react'
import {
    CardDeck,
    Card,
    CardImg,
    CardBody,
    CardText,
    Container,
    Col,
    Row,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
} from 'reactstrap'
import { Fade } from 'react-awesome-reveal'
import { Student, PropsCard } from '../types'
import { Link } from 'react-router-dom'
import { IoIosSearch } from 'react-icons/io'

import { useStdCtx } from '../contexts/StudentProvider'

const ListStudents: React.FC<PropsCard<any[]>> = ({
    student,
}: PropsCard<any[]>) => {
    const { getOneStudent } = useStdCtx()
    return (
        <div className="list-student">
            <Row>
                <Col md={6}>
                    <div className="text-center">
                        <h2>List Students</h2>
                    </div>
                    <div className="divider-ls  mb-3 mx-auto"></div>
                </Col>
                <Col md={3}>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <IoIosSearch />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Cari seseorang" />
                    </InputGroup>
                </Col>
                <Col md={2}></Col>
            </Row>
            <Container>
                <Fade cascade>
                    <CardDeck>
                        {student.map((std: Student, i) => (
                            <Col md={3} sm={5} key={std._id} className="my-2">
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
                                                onClick={() =>
                                                    getOneStudent(std._id)
                                                }
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
                                                onClick={() =>
                                                    getOneStudent(std._id)
                                                }
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
                    </CardDeck>
                </Fade>
            </Container>
        </div>
    )
}

export default ListStudents
