import { User } from './AuthInterfaces'

export interface AuthContextProps {
  token: User | null
  currentUser: User | null
  login: (inputs: { email: string; password: string }) => Promise<void>
  logout: () => void
}
