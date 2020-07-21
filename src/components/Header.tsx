import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Navbar,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    Container,
} from 'reactstrap'
import { PropsHeader } from '../types'

const Header: React.FC<PropsHeader> = ({ navLink = '' }: PropsHeader) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <>
            <Navbar
                expand="md"
                dark
                color={navLink !== '/' ? 'dark' : ''}
                className="p-0 navbar-dark"
            >
                <Container>
                    <Link to="/" className="navbar-brand mx-3">
                        #kitarpl1
                    </Link>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar color="primary">
                        <Nav className="mr-2" navbar>
                            <NavItem
                                className={navLink === '/' ? 'active' : ''}
                            >
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </NavItem>
                        </Nav>
                        <Nav className="mr-auto" navbar>
                            <NavItem
                                className={navLink === '/about' ? 'active' : ''}
                            >
                                <Link to="/about" className="nav-link">
                                    About
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
