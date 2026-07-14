import http from 'http'
import { URL } from 'url'

const PORT = process.env.PORT || 3000

const routes = {
	'GET /': (req, res) => {
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify({ message: 'Hello, World!' }))
	},
	'GET /health': (req, res) => {
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(
			JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() })
		)
	},
	'POST /echo': async (req, res) => {
		const body = await readBody(req)
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(body)
	}
}

function readBody(req) {
	return new Promise((resolve, reject) => {
		const chunks = []
		req.on('data', chunk => chunks.push(chunk))
		req.on('end', () => resolve(Buffer.concat(chunks).toString()))
		req.on('error', reject)
	})
}

const server = http.createServer(async (req, res) => {
	const url = new URL(req.url, `http://localhost:${PORT}`)
	const key = `${req.method} ${url.pathname}`
	const handler = routes[key]

	if (!handler) {
		res.writeHead(404, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify({ error: 'Not Found' }))
		return
	}

	try {
		await handler(req, res)
	} catch (err) {
		res.writeHead(500, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify({ error: 'Internal Server Error' }))
	}
})

server.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`)
})
