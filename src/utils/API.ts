import jwt from 'jsonwebtoken'

export const fetchStudent = async () => {
    const endpoint = String(process.env.REACT_APP_ENDPOINT) || ''
    try {
        const data = await (await fetch(endpoint)).json()
        const token = JSON.stringify(data).slice(1, -1)
        //? data yang diperoleh dijadikan string dan menghapus tanda petik sehingga menghasilkan 'plain string' tanpa tanda petik, yang selanjutnya akan dicek oleh jwt
        const newData: any = jwt.verify(
            token,
            String(process.env.REACT_APP_SECRET_KEY)
        )
        return newData.siswa.map((res: any) => res)
    } catch (err) {
        console.error(err)
    }
}
