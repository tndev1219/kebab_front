import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Button, Modal } from 'kebabfinance-uikit'
import ModalActions from 'components/ModalActions'
import TokenInput from 'components/TokenInput'
import useI18n from 'hooks/useI18n'
import { getFullDisplayBalance } from 'utils/formatBalance'

interface WithdrawModalProps {
  max: BigNumber
  onConfirm: (amount: string) => void
  onDismiss?: () => void
  tokenName?: string
}

const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 45px 0px 45px;
`

const WithdrawModal: React.FC<WithdrawModalProps> = ({ onConfirm, onDismiss, max, tokenName = '' }) => {
  const [val, setVal] = useState('')
  const [pendingTx, setPendingTx] = useState(false)
  const TranslateString = useI18n()
  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max)
  }, [max])

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal(e.currentTarget.value)
    },
    [setVal],
  )

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance)
  }, [fullBalance, setVal])

  return (
    <Modal title={`Withdraw ${tokenName}`} onDismiss={onDismiss}>
      <TokenInput
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        value={val}
        max={fullBalance}
        symbol={tokenName}
      />
      <ActionWrapper>
        <ModalActions>
          <Button variant="secondary" fullWidth onClick={onDismiss}>
            {TranslateString(462, 'Cancel')}
          </Button>
          <Button
            fullWidth
            disabled={pendingTx}
            onClick={async () => {
              setPendingTx(true)
              await onConfirm(val)
              setPendingTx(false)
              onDismiss()
            }}
          >
            {pendingTx ? TranslateString(488, 'Pending Confirmation') : TranslateString(464, 'Confirm')}
          </Button>
        </ModalActions>
      </ActionWrapper>
    </Modal>
  )
}

export default WithdrawModal
