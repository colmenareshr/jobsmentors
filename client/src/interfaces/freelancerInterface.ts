import { InformationInfo } from './informationInterface'
import { NetworkInfo } from './networkInterface'

export interface FreelancerInfo {
  user_id: number
  name: string
  email: string
  phone: string
  birth: Date
  gender: string
  address: string
  bio: string
  about: string
  img: string
  career:
    | ''
    | 'Front-end'
    | 'Back-end'
    | 'QA'
    | 'Full-Stack'
    | 'DBA'
    | 'DevOps'
    | 'PM'
    | 'Tech Lead'
    | 'UX Design'
  hard_skills: string
  contract: '' | 'CLT' | 'PJ'
  open_to_work: boolean
  information: InformationInfo
  network: NetworkInfo
}
