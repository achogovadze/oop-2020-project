/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import offer1 from '../../../assets/images/offer1.PNG'
import offer2 from '../../../assets/images/offer2.PNG'
import offer3 from '../../../assets/images/offer3.PNG'

const Slide = ({ content, width }) => (
  <div
    css={css`
      height: 100%;
      width: ${width}px;
      background-image: url(${content});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
  />
)

export default Slide