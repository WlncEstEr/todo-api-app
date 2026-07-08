export interface IApiResponse {
	countries: {
		name: string
		id: number
	}[]
	id: number
	name: string
	alternativeName: string
	enName: string
	names: {
		name: string
		enName: string
		type: string
	}[]
	type: string
	typeNumber: number
	year: number
	description: string
	shortDescription: string
	slogan: string
	status: string
	rating: {
		kp: number
		imdb: number
		tmdb: number
		filmCritics: number
		russianFilmCritics: number
		await: number
	}
	movieLength: number
	ratingMpaa: string
	ageRating: number
	logo: {
		url: string
	}
	poster: {
		url: string
		previewUrl: string
	}
	pearsons: {
		name: string
		enName: string
		id: string
	}[]
	releaseYears: {
		start: number
		end: number
	}[]
	seriesLength: number
	isSeries: boolean
	updatedAt: string
	createdAt: string
}
