import { useState } from 'react'
import { ItemFilms } from './components/ItemFilms'
import { Spinner } from './components/UI/Spinner'
import useApiById from './hooks/useApiById'

function App() {
	const [id, setId] = useState(0)

	const { data, isError } = useApiById(id)
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

				{isError && <p>Произошла ошибка при загрузке данных.</p>}

				{id !== 0 ? (
					data ? (
						<ItemFilms data={data} />
					) : (
						!isError && <Spinner />
					)
				) : (
					<></>
				)}
			</section>
		</>
	)
}

export default App
