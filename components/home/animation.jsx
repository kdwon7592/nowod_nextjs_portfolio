import React from 'react'
import Lottie from 'react-lottie-player'
import devloper_json from '/public/animation_devloper.json'
import welcom_json from '/public/animation_welcome.json'

export default function Animation({ data }) {
    return (
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Lottie
                loop
                animationData={data === 'welcome' ? welcom_json : devloper_json}
                play
            />
        </div>
    )
}