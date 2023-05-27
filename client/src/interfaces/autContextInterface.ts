import { User } from './AuthInterfaces'

export interface AuthContextProps {
  currentUser: User | null
  login: (inputs: { email: string; password: string }) => Promise<void>
  logout: () => void
}
