import 'server-only'
const api_key = process.env.GAMEZOP_API

export async function getData() {
    if (!api_key) {
        throw new Error('API_KEY is not defined in environment variables');
    }
    const res = await fetch(api_key)
    return res.json()
}