import axios from 'axios'
import type { IApiResponse } from '../types/api.types'

class ApiService {
	public URL = 'https://api.poiskkino.dev/v1.4/movie'

	async getApiById(endpoint: number) {
		const response = await axios.get<IApiResponse | null>(
			`${this.URL}/${endpoint}`,
			{
				headers: {
					'X-API-KEY': 'ED1N4EH-3P14Y6B-JPPQMR6-50MCFZ4',
					'Content-Type': 'application/json'
				}
			}
		)
		return response.data
	}
}

export const apiService = new ApiService()
