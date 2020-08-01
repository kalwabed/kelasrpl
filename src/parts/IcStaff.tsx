import React from 'react'
import { IoMdBowtie } from 'react-icons/io'

const PosChecker = (position: number | undefined) => {
    return <>{position! !== 0 ? <IoMdBowtie /> : ''}</>
}

export default PosChecker
