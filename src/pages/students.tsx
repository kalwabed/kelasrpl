import React from 'react'
import { Spinner } from 'reactstrap'

import Footer from '../components/Footer'
import Headers from '../components/Header'
import ListStudents from '../components/ListStudents'
import { useStdCtx } from '../contexts/StudentProvider'

const Students = () => {
    const { isLoading, student } = useStdCtx()
    document.title = 'Students | #kitarpl1'
    window.scrollTo(0, 0)

    return (
        <div>
            <Headers navLink="/students" />
            <div className="mx-auto text-center mt-3">
                {isLoading && (
                    <Spinner
                        style={{
                            width: '3rem',
                            height: '3rem',
                            marginTop: '3rem',
                        }}
                        color="primary"
                    />
                )}
            </div>
            {!isLoading && <ListStudents student={student} />}
            {!isLoading && <Footer marginTop={'20rem'} />}
        </div>
    )
}

export default Students
