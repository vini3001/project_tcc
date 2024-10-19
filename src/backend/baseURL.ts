import axios from 'axios'

export const API_SITE_URL = process.env.NEXT_PUBLIC_API_URL
export const API_WHATSAPP_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL
console.log('[ApiUrl] ' + API_SITE_URL + " / " + process.env.NEXT_PUBLIC_API_URL)
export const api = axios.create({ baseURL: API_SITE_URL })
export const apiWhatsapp = axios.create({baseURL: API_WHATSAPP_URL})
