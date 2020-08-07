import React from 'react'
import { CardBody, Col } from 'reactstrap'
import { Fade } from 'react-awesome-reveal'
import { IoLogoGithub, IoLogoFacebook, IoMdMail } from 'react-icons/io'
import { socialProps } from '../types'
import { FaTelegramPlane } from 'react-icons/fa'

const SocialSection: React.FC<socialProps> = ({ social }: socialProps) => {
    return (
        <>
            <Fade delay={2500} className="mt-3 card border-light row">
                <CardBody>
                    <span className="badge badge-light">
                        Contact / Social Media :
                    </span>

                    {social?.map(soc => {
                        if (soc.socialName === 'github') {
                            return (
                                <Col
                                    key={soc.socialName}
                                    className="bg-dark text-light py-1"
                                    tag="h6"
                                >
                                    <IoLogoGithub />{' '}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={soc.socialUrl}
                                        style={{ color: 'inherit' }}
                                    >
                                        Github
                                    </a>
                                </Col>
                            )
                        } else if (soc.socialName === 'facebook') {
                            return (
                                <Col
                                    key={soc.socialName}
                                    className="bg-primary text-light py-1"
                                    tag="h6"
                                >
                                    <IoLogoFacebook />{' '}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={soc.socialUrl}
                                        style={{ color: 'inherit' }}
                                    >
                                        Facebook
                                    </a>
                                </Col>
                            )
                        } else if (soc.socialName === 'email') {
                            return (
                                <Col
                                    key={soc.socialName}
                                    className="bg-secondary text-light py-1"
                                    tag="h6"
                                >
                                    <IoMdMail />{' '}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={soc.socialUrl}
                                        style={{ color: 'inherit' }}
                                    >
                                        Email
                                    </a>
                                </Col>
                            )
                        } else if (soc.socialName === 'telegram') {
                            return (
                                <Col
                                    key={soc.socialName}
                                    className="bg-info text-light py-1"
                                    tag="h6"
                                >
                                    <FaTelegramPlane />{' '}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={soc.socialUrl}
                                        style={{ color: 'inherit' }}
                                    >
                                        Telegram
                                    </a>
                                </Col>
                            )
                        } else {
                            return <div key={soc.socialName}></div>
                        }
                    })}
                </CardBody>
            </Fade>
        </>
    )
}

export default SocialSection
