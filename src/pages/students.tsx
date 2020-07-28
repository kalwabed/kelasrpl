import React from 'react'
import { Spinner } from 'reactstrap'

import Footer from '../components/Footer'
import Headers from '../components/Header'
import ListStudents from '../components/ListStudents'
import { useStdCtx } from '../contexts/StudentProvider'

const Students = () => {
    const { isLoading, student } = useStdCtx()
    return (
        <div>
            <Headers navLink="/students" />
            <div className="mx-auto divider mt-3">
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
            {!isLoading && <Footer />}
        </div>
    )
}

export default Students
