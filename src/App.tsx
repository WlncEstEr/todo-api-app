import { useState } from 'react'
import { ItemFilms } from './components/ItemFilms'
import useApiById from './hooks/useApiById'

function App() {
	const [id, setId] = useState(0)

	const { data } = useApiById(id)
	console.log(data)
	return (
		<>
			<section id="center">
				<input
					type="text"
					name="search"
					id="search"
					placeholder="Введите id фильма от 300 до 2500"
					className="border-b w-60 border-gray-700 text-sm py-1 my-3 focus:outline-none focus:border-blue-500 top-0"
					onChange={e => {
						setId(Number(e.target.value))
					}}
				/>
				{id !== 0 ? (
					data ? (
						<ItemFilms data={data} />
					) : (
						<p>Фильм не найден</p>
					)
				) : (
					<></>
				)}
			</section>
		</>
	)
}

export default App
