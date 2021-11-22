import React from 'react'
import styled from 'styled-components'
import { Flex, IconButton, CogIcon, useModal } from '@pancakeswap/uikit'
import SettingsModal from './SettingsModal'

const CoIconX = styled(CogIcon)`
  color:#212121;
  font-size: 22px;
  fill:#212121;
`

const GlobalSettings = () => {
  const [onPresentSettingsModal] = useModal(<SettingsModal />)

  return (
    <Flex>
      <IconButton onClick={onPresentSettingsModal} variant="text" scale="sm" mr="8px" id="open-settings-dialog-button">
        <CoIconX height={24} width={24} color="textSubtle" />
      </IconButton>
    </Flex>
  )
}

export default GlobalSettings
