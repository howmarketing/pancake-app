import { useContext } from 'react'
import { LanguageContext } from './Provider'
import { ContextApi } from './types'

const useTranslation = (): ContextApi => {
  const languageContext = useContext(LanguageContext)

  if (languageContext === undefined) {
    throw new Error('Language context is undefined')
  }

  return languageContext
}

export default useTranslation
