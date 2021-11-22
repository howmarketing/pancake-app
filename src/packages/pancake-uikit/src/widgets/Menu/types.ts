import { ReactElement } from 'react'
import { DropdownMenuItems } from '../../components/DropdownMenu/types'
import { FooterLinkType } from '../../components/Footer/types'
import { MenuItemsType } from '../../components/MenuItems/types'
import { SubMenuItemsType } from '../../components/SubMenuItems/types'
import { Colors } from '../../theme/types'

export interface Language {
  code: string
  language: string
  locale: string
}

export interface LinkStatus {
  text: string
  color: keyof Colors
}

export interface NavProps {
  userMenu?: ReactElement
  banner?: ReactElement
  globalMenu?: ReactElement
  links: Array<MenuItemsType>
  subLinks: Array<SubMenuItemsType> | Array<DropdownMenuItems> | Array<any>
  footerLinks: Array<FooterLinkType> | Array<any>
  activeItem: string
  activeSubItem: string
  isDark: boolean
  toggleTheme: (isDark: boolean) => void
  cakePriceUsd?: number
  currentLang: string
  buyCakeLabel: string
  langs: Language[]
  setLang: (lang: Language) => void
}
