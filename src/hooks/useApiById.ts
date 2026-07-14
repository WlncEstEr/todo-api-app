import { useQuery } from '@tanstack/react-query'
import { apiService } from '../service/api.service'

function useApiById(id: number) {
	const { data, isError } = useQuery({
		queryKey: ['api', id],
		queryFn: async () => {
			const response = await apiService.getApiById(id)
			return response
		}
	})
	return { data, isError }
}
export default useApiById
