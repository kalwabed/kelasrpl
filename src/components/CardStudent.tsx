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
    CardFooter,
} from 'reactstrap'
import {
    IoMdArrowRoundBack,
    IoIosQuote,
    IoIosHome,
    IoIosContact,
    IoIosHeart,
    IoIosGitCommit,
} from 'react-icons/io'

import { Student, PropsCard } from '../types'
import icStaff from '../parts/IcStaff'
import SocialSect from '../parts/SocialCheck'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

const CardStudent: React.FC<PropsCard<Student | undefined>> = ({
    student,
}: PropsCard<Student | undefined>) => {
    const PosChecker = (pos?: number) => {
        if (pos !== 0)
            if (pos === 1) return 'chairman'
            else if (pos === 2) return 'vice chairman'
            else return false
    }

    return (
        <div>
            <Card outline color="light">
                <div className="divider-show mx-auto"></div>
                <CardHeader>
                    <Link to="/students" style={{ textDecoration: 'none' }}>
                        <div className="nav-back">
                            <IoMdArrowRoundBack />
                            List students
                        </div>
                    </Link>
                </CardHeader>
                <Row noGutters className="my-1">
                    <Col sm={3} md={4}>
                        <Card>
                            <CardBody>
                                <Fade delay={300}>
                                    <CardImg src={student?.imageId.imageUrl} />
                                </Fade>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={'auto'} className="ml-3">
                        <CardBody>
                            <Fade cascade>
                                <CardTitle>
                                    <h3>
                                        <IoIosContact /> {student?.name}
                                    </h3>
                                    <div className="divider-profile"></div>
                                </CardTitle>
                                <div>
                                    {PosChecker(student?.position) ? (
                                        <span className="badge badge-dark h6">
                                            {icStaff(student?.position)}{' '}
                                            {PosChecker(student?.position)}
                                        </span>
                                    ) : null}
                                </div>
                                <CardText tag="h6">
                                    <IoIosHeart /> {student?.birthPlace},
                                    {'    '}
                                    {moment(student?.birthDate).format(
                                        'DD-MMM-YYYY'
                                    )}{' '}
                                    <b>
                                        (
                                        {moment(student?.birthDate).toNow(true)}
                                        )
                                    </b>
                                </CardText>
                                <CardText tag="h6">
                                    <IoIosHome /> {student?.address}
                                </CardText>
                                <CardText tag="h4">
                                    <code>
                                        <IoIosQuote /> {student?.description}
                                    </code>
                                </CardText>
                            </Fade>
                            <SocialSect />
                        </CardBody>
                    </Col>
                </Row>
                <CardFooter className="text-center" tag="h5">
                    <IoIosGitCommit />
                </CardFooter>
            </Card>
        </div>
    )
}

export default CardStudent
