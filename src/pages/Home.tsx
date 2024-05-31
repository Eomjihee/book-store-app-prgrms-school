import React from 'react'
import Header from '../components/common/Header'
import { formatNumber } from '../utils/format'

const COUNT = 10000;

const Home = () => {
  return (
    <>
      <Header />
      <div>home body</div>
      <div>count: {formatNumber(COUNT)}</div>
    </>
  )
}

export default Home