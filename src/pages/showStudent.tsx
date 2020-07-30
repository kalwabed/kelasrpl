import React from 'react'

import { useStdCtx } from '../contexts/StudentProvider'
import CardStudent from '../components/CardStudent'
import Headers from '../components/Header'
import Footer from '../components/Footer'

const ShowStudent = () => {
    const { showStudent } = useStdCtx()

    return (
        <>
            <Headers navLink="" />
            <div className="container" style={{ marginTop: '70px' }}>
                <CardStudent student={showStudent} />
            </div>
            <Footer marginTop={300} />
        </>
    )
}

export default ShowStudent
