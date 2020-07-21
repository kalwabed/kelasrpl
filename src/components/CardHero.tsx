import React from 'react'
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
                            <CardText>Rumah: {st.address}</CardText>
                            <CardText
                                tag="span"
                                className="badge badge-primary"
                            >
                                Banyuwangi,{' '}
                                {moment(st.birthDate).format('DD-MMM-YYYY')}
                            </CardText>
                            <br />
                            <CardText tag="code">{st.description}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default CardHero
