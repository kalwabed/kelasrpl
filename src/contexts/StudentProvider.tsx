import React, { createContext, useState, useEffect, useContext } from 'react'
import { fetchStudent } from '../utils/API'

import { stdContext, Student } from '../types'

// CONTEXT
const studentContext = createContext<stdContext | undefined>(undefined)

const StudentProvider = ({ children }: any) => {
	const [student, setStudent] = useState<any[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [showStudent, setShowStudent] = useState<Student | undefined>(
		undefined,
	)

	useEffect(() => {
		const fetchs = async () => {
			setIsLoading(true)
			const data = await fetchStudent()
			setStudent(data)
			setIsLoading(false)
			if (!showStudent && document.location.pathname[2]) {
				await getOneStudent(document.location.pathname.split('/')[2])
			}
		}
		fetchs()
	}, [])

	const getOneStudent = async (id: string | number) => {
		const data = await fetchStudent()
		const student = data.find((std: Student) => std._id === id)
		setShowStudent(student)
	}

	return (
		<studentContext.Provider
			value={{ showStudent, student, isLoading, getOneStudent }}
		>
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
