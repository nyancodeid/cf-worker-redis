export function sendResponse(response) {
  const init = {
      headers: { 'content-type': 'application/json' },
  }
  const body = JSON.stringify(response)
  return new Response(body, init)
}