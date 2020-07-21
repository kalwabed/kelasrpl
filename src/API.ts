import React from 'react'

export const fetchStaff = async () => {
    const endpoint = 'https://serverkelas-rpl.herokuapp.com/v1'
    const data = await (await fetch(endpoint)).json()
    console.log(data)
}
