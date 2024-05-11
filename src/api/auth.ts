import axios from 'axios'

const base_URL = import.meta.env.VITE_API_BASE_URL

interface LoginInput {
  email: string
  password: string
}

interface LoginResponse {
  status: string
  message: string
  data: string
}

export async function login(loginInput: LoginInput): Promise<LoginResponse> {
  const response = await axios.post(`${base_URL}/login`, loginInput)
  return response.data as LoginResponse
}
