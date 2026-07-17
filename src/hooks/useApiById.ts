import { useQuery } from '@tanstack/react-query'
import { getMovieBuId } from '../service/api.service'

function useApiById(id: number) {
	const { data, isError } = useQuery({
		queryKey: ['api', id],
		queryFn: async () => {
			// const response = await apiService.getApiById(id)
			const response = await getMovieBuId(id)
			return response
		}
	})
	return { data, isError }
}
export default useApiById
