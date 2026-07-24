const RUNS = 100
const URL = 'https://jsonplaceholder.typicode.com/todos/1'
const FILE = 'data.json'

const isBun = typeof Bun !== 'undefined'
const isDeno = typeof Deno !== 'undefined'

const nodeFs = isNode() ? await import('node:fs/promises') : null
const nodeHr = isNode() ? await import('node:perf_hooks') : null

function isNode() {
  return !isBun && !isDeno
}

function nowMs() {
  if (isBun) return performance.now()
  if (isDeno) return performance.now()
  return nodeHr.performance.now()
}

async function readFileNative(path) {
  if (isBun) return Bun.file(path).text()
  if (isDeno) return Deno.readTextFile(path)
  return nodeFs.readFile(path, 'utf-8')
}

async function bench(label, fn) {
  const start = nowMs()
  for (let i = 0; i < RUNS; i++) await fn(i)
  return { label, ms: (nowMs() - start).toFixed(2) }
}

const results = await Promise.all([
  bench('readFile', () => readFileNative(FILE)),
  bench('HTTP fetch', () => fetch(URL).then((r) => r.json()))
])

const total = results.reduce((s, r) => s + parseFloat(r.ms), 0)
console.log(
  `Runtime: ${isBun ? 'Bun' : isDeno ? 'Deno' : 'Node'} ${process.version}`
)
console.table(results)
console.log(`Total: ${total.toFixed(2)}ms`)
