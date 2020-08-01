import React from 'react'
import { CardBody, Col } from 'reactstrap'
import { Fade } from 'react-awesome-reveal'
import { IoLogoGithub, IoLogoFacebook } from 'react-icons/io'

const SocialCheck = () => {
    return (
        <>
            <Fade delay={2500} className="mt-3 card border-light row">
                <CardBody>
                    <Col className="bg-dark text-light py-1" tag="h6">
                        <IoLogoGithub /> Github
                    </Col>
                    <Col className="bg-primary text-light py-1" tag="h6">
                        <IoLogoFacebook /> Facebook
                    </Col>
                </CardBody>
            </Fade>
        </>
    )
}

// kasih link dan username

export default SocialCheck
