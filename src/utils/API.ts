export const fetchStaff = async () => {
    const endpoint = String(process.env.REACT_APP_ENDPOINT) || ''
    const data = await (await fetch(endpoint)).json()
    return data.siswa.map((d: any) => d)
}
