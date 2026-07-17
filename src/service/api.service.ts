import axios from 'axios'
import type { IApiResponse } from '../types/api.types'

const URL = 'https://api.poiskkino.dev/v1.4/movie'
const apiKey = import.meta.env.VITE_API_KEY

const apiClient = axios.create({
	baseURL: URL,
	headers: {
		'X-API-KEY': apiKey,
		'Content-Type': 'application/json'
	}
})

export async function getMovieBuId(id: number) {
	const { data } = await apiClient.get<IApiResponse | null>(`/${id}`)
	return data
}

class ApiService {
	public URL = 'https://api.poiskkino.dev/v1.4/movie'

	apiKey = import.meta.env.VITE_API_KEY || ''

	async getApiById(endpoint: number) {
		const data = await axios.get<IApiResponse | null>(
			`${this.URL}/${endpoint}`,
			{
				headers: {
					'X-API-KEY': this.apiKey,
					'Content-Type': 'application/json'
				}
			}
		)
		return { data }
	}
}

export const apiService = new ApiService()
