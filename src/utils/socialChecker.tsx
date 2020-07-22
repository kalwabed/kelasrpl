import React from 'react'
import {
    IoLogoGithub,
    IoLogoFacebook,
    IoLogoInstagram,
    IoMdMail,
} from 'react-icons/io'
import { FaTelegram } from 'react-icons/fa'
import { CardLink } from 'reactstrap'

const socialChecker = ({ name, url }: { name: string; url: string }) => {
    if (name === 'github') {
        return (
            <CardLink href={url}>
                <IoLogoGithub /> Github
            </CardLink>
        )
    } else if (name === 'facebook') {
        return (
            <CardLink href={url}>
                <IoLogoFacebook /> Facebook
            </CardLink>
        )
    } else if (name === 'instagram') {
        return (
            <CardLink href={url}>
                <IoLogoInstagram /> Instagram
            </CardLink>
        )
    } else if (name === 'email') {
        return (
            <CardLink href={url}>
                <IoMdMail /> Email
            </CardLink>
        )
    } else if (name === 'telegram') {
        return (
            <CardLink href={url}>
                <FaTelegram /> Telegram
            </CardLink>
        )
    } else {
        return <CardLink href="#"></CardLink>
    }
}

export default socialChecker
