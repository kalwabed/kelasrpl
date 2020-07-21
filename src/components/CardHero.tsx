import React from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Row,
    Col,
    CardImg,
} from 'reactstrap'

const CardHero = () => {
    return (
        <Row>
            <Col md={4} sm={1}>
                <Card className="my-3 hi">
                    <CardImg top width="100%" src="sample.jpg" />
                    <CardBody>
                        <CardTitle>Ketua</CardTitle>
                    </CardBody>
                    <CardBody>
                        <CardText>nama</CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col md={4} sm={1}>
                <Card className="my-3 hi">
                    <CardImg top width="100%" src="sample.jpg" />
                    <CardBody>
                        <CardTitle>Ketua</CardTitle>
                    </CardBody>
                    <CardBody>
                        <CardText>nama</CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col md={4} sm={1}>
                <Card className="my-3 hi">
                    <CardImg top width="100%" src="sample.jpg" />
                    <CardBody>
                        <CardTitle>Ketua</CardTitle>
                    </CardBody>
                    <CardBody>
                        <CardText>nama</CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default CardHero
