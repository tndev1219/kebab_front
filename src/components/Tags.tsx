import React from 'react'
import { Tag, VerifiedIcon, CommunityIcon, BinanceIcon, VerifyInfoIcon } from 'kebabfinance-uikit'

const CoreTag = () => (
  <Tag variant="secondary" outline startIcon={<VerifiedIcon />}>
    Core
  </Tag>
)

const CommunityTag = () => (
  <Tag variant="info" outline startIcon={<CommunityIcon />}>
    Community
  </Tag>
)

const BinanceTag = () => (
  <Tag variant="binance" outline startIcon={<BinanceIcon />}>
    Binance
  </Tag>
)

const Defcon1 = () => (
  <Tag variant="success" outline startIcon={<VerifyInfoIcon />}>
    Risk 1
  </Tag>
)

const Defcon2 = () => (
  <Tag variant="secondary" outline startIcon={<VerifyInfoIcon />}>
    Risk 2
  </Tag>
)

const Defcon3 = () => (
  <Tag variant="secondary" outline startIcon={<VerifyInfoIcon />}>
    Risk 3
  </Tag>
)

const Defcon4 = () => (
  <Tag variant="secondary" outline startIcon={<VerifyInfoIcon />}>
    Risk 4
  </Tag>
)

const Defcon5 = () => (
  <Tag variant="primary" outline startIcon={<VerifyInfoIcon />}>
    Risk 5
  </Tag>
)

const DualTag = (props) => (
  <Tag variant="textSubtle" outline {...props}>
    Dual
  </Tag>
)

export { CoreTag, CommunityTag, BinanceTag, Defcon1, Defcon2, Defcon3, Defcon4, Defcon5, DualTag }
