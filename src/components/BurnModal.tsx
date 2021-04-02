import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import { Button, Modal } from 'kebabfinance-uikit'
import ModalActions from 'components/ModalActions'
import TokenInput from 'components/TokenInput'
import Slider from 'components/Slider'
import useI18n from 'hooks/useI18n'
import { getFullDisplayBalance } from 'utils/formatBalance'

interface BurnModalProps {
  max: BigNumber
  onConfirm: (amount: string) => void
  onDismiss?: () => void
  tokenName?: string
}

const marks = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 25,
    label: '25%',
  },
  {
    value: 50,
    label: '50%',
  },
  {
    value: 75,
    label: '75%',
  },
  {
    value: 100,
    label: '100%',
  },
];

const BurnModal: React.FC<BurnModalProps> = ({ max, onConfirm, onDismiss, tokenName = '' }) => {
  const [val, setVal] = useState('')
  const [percent, setPercent] = useState(0)
  const [pendingTx, setPendingTx] = useState(false)
  const TranslateString = useI18n()
  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max)
  }, [max])

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (parseFloat(e.currentTarget.value) > parseFloat(fullBalance)) {
        setVal(fullBalance)
        setPercent(100)
      }
      else {
        setVal(e.currentTarget.value)
        setPercent(Math.floor((parseFloat(e.currentTarget.value) / parseFloat(fullBalance)) * 100))
      }
    },
    [setVal, fullBalance, setPercent],
  )

  const handleSelectPercent = useCallback(
    (v) => {
      setPercent(parseInt(v))
      setVal((parseInt(v) * parseFloat(fullBalance) / 100).toString())
    },
    [setPercent, setVal, fullBalance],
  )

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance)
    setPercent(100)
  }, [fullBalance, setVal, setPercent])

  return (
    <Modal title={`${TranslateString(316, 'Add an Amount for Burning')}`} onDismiss={onDismiss}>
      <TokenInput
        value={val}
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        max={fullBalance}
        symbol={tokenName}
      />
      <Slider 
        defaultValue={percent} 
        marks={marks}
        onSelectValue={handleSelectPercent}
      />
      <ModalActions>
        <Button fullWidth variant="secondary" onClick={onDismiss}>
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
    </Modal>
  )
}

export default BurnModal
