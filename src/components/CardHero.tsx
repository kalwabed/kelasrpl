import React from 'react'
import { IoIosHome, IoMdStarOutline, IoMdQuote } from 'react-icons/io'
import moment from 'moment'
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Row,
    Col,
    CardImg,
    CardHeader,
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
        <Row>
            {staff.map((st: Staff) => (
                <Col md={4} sm={1} key={st._id}>
                    <Card className="my-3 shadow">
                        <CardHeader tag="h2" className="text-center">
                            {posChecker(st.position)}
                        </CardHeader>
                        <CardImg top width="100%" src={st.imageId.imageUrl} />
                        <CardBody>
                            <CardTitle tag="h4">
                                <u>{st.name}</u>
                            </CardTitle>
                            <CardText>
                                <IoIosHome /> {st.address}
                            </CardText>
                            <IoMdStarOutline />
                            <CardText tag="span" className="badge badge-light">
                                {st.birthPlace},{' '}
                                {moment(st.birthDate).format('DD-MMM-YYYY')} (
                                {moment(st.birthDate).toNow(true)})
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
                                    key={st._id}
                                />
                            ))}
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default CardHero
