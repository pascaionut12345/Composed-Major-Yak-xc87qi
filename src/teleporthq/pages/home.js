import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Composed Major Yak</title>
        <meta property="og:title" content="Composed Major Yak" />
      </Helmet>
    </div>
  )
}

export default Home
