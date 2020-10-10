import jwt from 'jsonwebtoken'
import cookie from 'js-cookie'

function decode(token: string) {
	return jwt.verify(token, String(process.env.REACT_APP_SECRET_KEY))
}

async function fetchToApi(endpoint: string) {
	const data = await (await fetch(endpoint)).json()
	return JSON.stringify(data).slice(1, -1)
}

export const fetchStudent = async () => {
	const endpoint = String(process.env.REACT_APP_ENDPOINT) || ''
	let token: any
	let resultData: any = '' || null
	try {
		if (!cookie.get('exp-token') || !localStorage.getItem('student')) {
			try {
				const data = await fetchToApi(endpoint)
				//? data yang diperoleh dijadikan string dan menghapus tanda petik sehingga menghasilkan 'plain string' tanpa tanda petik, yang selanjutnya akan dicek oleh jwt
				cookie.set('exp-token', 'hi', { expires: 1 / 48 })
				localStorage.setItem('student', data)
				// ? data disimpan di localstorage supaya request ke API hanya ketika baru masuk dan saat refresh page
				resultData = decode(localStorage.getItem('student')!)
			} catch (err) {
				console.error(err)
			}
		} else {
			token = localStorage.getItem('student')
			resultData = decode(token)
			if (resultData.exp !== 'undefined' && resultData.exp < Date.now().valueOf() / 1000) {
				// token expired
				console.log('token has been epired')
				const data = await fetchToApi(endpoint)
				localStorage.clear()
				localStorage.setItem('student', data)
				resultData = decode(localStorage.getItem('student')!)
			}
		}
		return resultData.siswa.map((res: any) => res)
	} catch (err) {
		console.error(err)
	}
}
