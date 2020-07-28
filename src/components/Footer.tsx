import React from 'react'
import { DiReact, DiCode } from 'react-icons/di'

const Footer = () => {
    return (
        <>
            <footer className="bg-dark">
                <div className="footer text-center">
                    <span className="">
                        <DiCode className="h3" /> by <b>TeamRPL1</b> | Built
                        with <DiReact className="h3" />
                        <br />
                    </span>
                </div>
            </footer>
        </>
    )
}

export default Footer
