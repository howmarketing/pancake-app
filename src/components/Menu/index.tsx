import React from 'react'
import { useLocation } from 'react-router'
// import { Menu as UikitMenu } from '@pancakeswap/uikit'
import UikitMenus from 'packages/pancake-uikit/src/widgets/Menu/Menu'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import PhishingWarningBanner from 'components/PhishingWarningBanner'
import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { usePhishingBannerManager } from 'state/user/hooks'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'
import { footerLinks } from './config/footerConfig'
import UserMenu from './UserMenu'
import GlobalSettings from './GlobalSettings'

import config from './config/config'

const Menu = (props: Record<any, any>): JSX.Element => {
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { pathname } = useLocation()
  const [showPhishingWarningBanner] = usePhishingBannerManager()

  const activeMenuItem = getActiveMenuItem({ menuConfig: config(t), pathname })
  const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })

  return (
    <UikitMenus
      userMenu={<UserMenu />}
      // userMenu={() => {return (<h1>user menu</h1>)}}
      globalMenu={<GlobalSettings />}
      banner={showPhishingWarningBanner && <PhishingWarningBanner />}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      cakePriceUsd={cakePriceUsd.toNumber()}
      links={config(t)}
      subLinks={activeMenuItem?.hideSubNav ? [] : activeMenuItem?.items || []}
      footerLinks={footerLinks(t)}
      activeItem={activeMenuItem?.href}
      activeSubItem={activeSubMenuItem?.href}
      buyCakeLabel={t('Buy ARZ')}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  )
}

export default Menu
