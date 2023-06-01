export interface User {
  token: User | null
  id: number
  email: string
  role: string
}

export interface SignUpData {
  email: string
  password: string
  role: string
}

export interface LoginData {
  email: string
  password: string
}
