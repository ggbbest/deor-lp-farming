import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import useYam from '../../../hooks/useYam'
import { getERC20Address } from '../../../farm/utils'

import useTokenBalance from '../../../hooks/useTokenBalance'
import {
  getBalanceNumber,
} from '../../../utils/formatBalance'

import Button from '../../Button'
import CardIcon from '../../CardIcon'
import Label from '../../Label'
import Modal, { ModalProps } from '../../Modal'
import ModalActions from '../../ModalActions'
import ModalContent from '../../ModalContent'
import ModalTitle from '../../ModalTitle'
import Spacer from '../../Spacer'
import Value from '../../Value'
import {getEthChainInfo} from "../../../utils/getEthChainInfo";

import imageCeik from '../../../assets/img/logo.svg'

const {
  ethscanType
} = getEthChainInfo();

const AccountModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { account, reset } = useWallet()

  const handleSignOutClick = useCallback(() => {
    onDismiss!()
    reset()
  }, [onDismiss, reset])

  const yam = useYam()
  const erc20address = getERC20Address(yam)
  const erc20Balance = useTokenBalance(erc20address)

  return (
    <Modal>
      <ModalTitle text="My Account" />
      <ModalContent>
        <Spacer />

        <div style={{ display: 'flex' }}>
          <StyledBalanceWrapper>
            <CardIcon>
              <img src={imageCeik} height="100" style={{ marginTop: -4 }} />
            </CardIcon>
            <StyledBalance>
              <Value value={getBalanceNumber(erc20Balance, 18)} />
              <Label text="sCEIK Balance" />
            </StyledBalance>
          </StyledBalanceWrapper>
        </div>

        <Spacer />
        <Button
          // href={`https://${ethscanType}scope.klaytn.com/address/${account}`}
          href={`https://scope.klaytn.com/address/${account}`}
          text="View on scopeklaytn"
          variant="secondary"
        />
        <Spacer />
        <Button
          onClick={handleSignOutClick}
          text="Sign out"
          variant="secondary"
        />
      </ModalContent>
      <ModalActions>
        <Button
            onClick={onDismiss}
            text="Cancel"
            variant="secondary"
        />
      </ModalActions>
    </Modal>
  )
}

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const StyledBalanceWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;
`

export default AccountModal;
