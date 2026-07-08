import type { IApiResponse } from '../types/api.types'

export function ItemFilms({ data }: { data: IApiResponse }) {
	return (
		<div className="flex gap-5 px-3 py-5 ">
			<img
				src={data?.poster?.previewUrl}
				alt={data?.name}
				className="w-64 h-auto"
			/>
			<div className="flex flex-col gap-3">
				<h1 className="text-2xl font-bold ">{data?.name}</h1>
				<p className="text-sm text-gray-500">{data?.year}</p>
				<p className="text-sm text-gray-500">
					{data?.countries?.map(country => country.name).join(', ')}
				</p>
				<p className="text-sm text-gray-500">{data?.description}</p>
				<div className="flex flex-col gap-3">
					<p className="text-sm text-gray-500">
						Rating: {data?.rating?.kp} / 10
						<p className="text-sm text-gray-500">
							IMDB: {data?.rating?.imdb} / 10
						</p>
					</p>
				</div>
			</div>
		</div>
	)
}
