import React from 'react'
import moment from 'moment'
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    Row,
    Col,
    CardImg,
} from 'reactstrap'

import { Student, PropsCard } from '../types'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

const CardStudent: React.FC<PropsCard<Student | undefined>> = ({
    student,
}: PropsCard<Student | undefined>) => {
    return (
        <div>
            <Card outline color="light">
                <div className="divider-show mx-auto"></div>
                <CardHeader className="mb-2">
                    <Link to="/students" style={{ textDecoration: 'none' }}>
                        <div className="nav-back">
                            <IoMdArrowRoundBack />
                            List students
                        </div>
                    </Link>
                </CardHeader>
                <Row noGutters>
                    <Col>
                        <CardImg src={student?.imageId.imageUrl} />
                    </Col>
                    <Col>
                        <CardBody>
                            <CardTitle>{student?.name}</CardTitle>
                            <CardText>
                                {student?.birthPlace},{' '}
                                {moment(student?.birthDate).format(
                                    'DD-MMM-YYYY'
                                )}{' '}
                                ({moment(student?.birthDate).toNow(true)})
                            </CardText>
                            <CardText>{student?.address}</CardText>
                            <CardText>{student?.description}</CardText>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default CardStudent
