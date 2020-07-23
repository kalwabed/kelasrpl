import React from 'react'
import {
    IoIosHome,
    IoMdStarOutline,
    IoMdQuote,
    IoMdBowtie,
} from 'react-icons/io'
import moment from 'moment'
import _ from 'lodash'
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Row,
    Col,
    CardImg,
} from 'reactstrap'

import { PropsCardHero, Staff } from '../types'
import SocialChecker from '../utils/socialChecker'

const CardHero: React.FC<PropsCardHero> = ({ staff }: PropsCardHero) => {
    const posChecker = (pos: number) => {
        if (pos !== 0)
            if (pos === 1) return 'Ketua'
            else if (pos === 2) return 'Wakil'
            else return 'ANGGOTA'
    }

    return (
        <>
            <Row>
                {staff.map((st: Staff) => (
                    <Col md={3} sm={1} key={st._id}>
                        <Card className="my-3 shadow">
                            <CardImg
                                top
                                width="80%"
                                src={st.imageId.imageUrl}
                            />
                            <CardBody>
                                <CardTitle tag="h4">
                                    <u>{st.name}</u>
                                </CardTitle>
                                {st.position !== 0 && (
                                    <CardText
                                        tag="span"
                                        className="badge badge-light"
                                    >
                                        <IoMdBowtie /> {posChecker(st.position)}
                                    </CardText>
                                )}
                                <CardText>
                                    <IoIosHome /> {st.address}
                                </CardText>
                                <CardText
                                    tag="span"
                                    className="badge badge-light"
                                >
                                    <IoMdStarOutline /> {st.birthPlace},{' '}
                                    {moment(st.birthDate).format('DD-MMM-YYYY')}{' '}
                                    ({moment(st.birthDate).toNow(true)})
                                </CardText>
                                <br />
                                <CardText tag="code">
                                    <IoMdQuote /> {st.description}
                                </CardText>{' '}
                                <br />
                                <hr />
                                {st.socialId.map(sc => (
                                    <SocialChecker
                                        name={sc.socialName}
                                        url={sc.socialUrl}
                                        key={st._id + _.random(13 * 71, false)}
                                    />
                                ))}
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default CardHero
