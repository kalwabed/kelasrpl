export const fetchStaff = async () => {
    console.log(process.env.ENDPOINT)
    const endpoint = String(process.env.REACT_APP_ENDPOINT) || ''
    const data = await (await fetch(endpoint)).json()
    return data.siswa.map((d: any) => d)
}
