import { User } from './AuthInterfaces'

export interface AuthContextProps {
  token: string | User
  currentUser: User | null
  login: (inputs: { email: string; password: string }) => Promise<void>
  logout: () => void
}
