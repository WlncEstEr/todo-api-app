import axios from 'axios'
import type { IApiResponse } from '../types/api.types'

class ApiService {
	public URL = 'https://api.poiskkino.dev/v1.4/movie'

	apiKey = import.meta.env.VITE_API_KEY || ''

	async getApiById(endpoint: number) {
		const response = await axios.get<IApiResponse | null>(
			`${this.URL}/${endpoint}`,
			{
				headers: {
					'X-API-KEY': this.apiKey,
					'Content-Type': 'application/json'
				}
			}
		)
		return response.data
	}
}

export const apiService = new ApiService()
