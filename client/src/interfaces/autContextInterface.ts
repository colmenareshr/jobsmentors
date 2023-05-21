export interface AuthContextProps {
  currentUser: any
  login: (inputs: { email: string; password: string }) => Promise<void>
  logout: () => void
}
