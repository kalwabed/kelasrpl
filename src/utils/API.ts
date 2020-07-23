import jwt from 'jsonwebtoken'

export const fetchStudent = async () => {
    const endpoint = String(process.env.REACT_APP_ENDPOINT) || ''
    try {
        let token: any
        if (!localStorage.getItem('student')) {
            const data = await (await fetch(endpoint)).json()
            token = JSON.stringify(data).slice(1, -1)
            //? data yang diperoleh dijadikan string dan menghapus tanda petik sehingga menghasilkan 'plain string' tanpa tanda petik, yang selanjutnya akan dicek oleh jwt
            localStorage.setItem('student', token)
            // ? data disimpan di localstorage supaya request ke API hanya ketika baru masuk dan saat refresh page
        } else {
            token = localStorage.getItem('student')
        }

        console.log(process.env.REACT_APP_SECRET_KEY)

        const newData: any = jwt.verify(
            token,
            String(process.env.REACT_APP_SECRET_KEY)
        )
        return newData.siswa.map((res: any) => res)
    } catch (err) {
        console.error(err)
    }
}
