import React from 'react'
import WideCardMain1 from '../components/widecard_section/WideCardMain1'
import WideCardMain2 from '../components/widecard_section/WideCardMain2'
import WideCardMain3 from '../components/widecard_section/WideCardMain3'

const WideCard = () => {
  return (
    <main id='wide_card_container'>
        <WideCardMain1 />
        <WideCardMain2 />
        <WideCardMain3 />
    </main>
  )
}

export default WideCard