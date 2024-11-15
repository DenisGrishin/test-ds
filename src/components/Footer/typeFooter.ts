import { TypeLinks } from '../Header/typeHeader'
import { TypeSubscription } from '../Sections/typeSections'

export interface TypeContacts {
  email: string
  facebook: string
  instagram: string
  linkedin: string
  phone: string
  whatsapp: string
  youtube: string
  subscription: TypeSubscription
  links: TypeLinks[]
}

export interface TypeMenuFooter {
  label: string
  items: TypeLinks[]
}
