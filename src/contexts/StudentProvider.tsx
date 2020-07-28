import React, { createContext, useState, useEffect, useContext } from 'react'

import { fetchStudent } from '../utils/API'
import { stdContext } from '../types'

// CONTEXT
const studentContext = createContext<stdContext | undefined>(undefined)

const StudentProvider = ({ children }: any) => {
    const [student, setStudent] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchs = async () => {
            setIsLoading(true)
            const data = await fetchStudent()
            setStudent(data)
            setIsLoading(false)
        }
        fetchs()
    }, [])

    return (
        <studentContext.Provider value={{ student, isLoading }}>
            {children}
        </studentContext.Provider>
    )
}

export const useStdCtx = () => {
    const ctx = useContext(studentContext)
    if (ctx === undefined) throw new Error('Expected a value in the context')
    return ctx
}

export default StudentProvider
