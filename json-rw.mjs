const data = await Bun.file('./data.json').json()

data.updated = new Date().toISOString()

await Bun.write('./data.json', JSON.stringify(data, null, 2))

console.log('Done:', data)
