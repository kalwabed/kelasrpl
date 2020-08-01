import React from 'react'
import { DiReact, DiCode } from 'react-icons/di'

const Footer = ({ marginTop }: number | any) => {
    return (
        <>
            <footer className="bg-dark" style={{ marginTop }}>
                <div className="text-center">
                    <span>
                        <DiCode className="h3" /> by <b>Kalwabed Rizki</b> |
                        Built with <DiReact className="h3" />
                        <br />
                    </span>
                </div>
            </footer>
        </>
    )
}

export default Footer
