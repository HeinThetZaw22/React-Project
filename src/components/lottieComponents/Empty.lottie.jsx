import React from 'react'
import Lottie from "lottie-react";
import emptyJson from '../../lottie/empty.json'

const EmptyLottie = () => {
  return (
    <div>
        <Lottie className=' w-[300px]' animationData={emptyJson} loop />
    </div>
  )
}

export default EmptyLottie