import React from 'react'
import Lottie from 'react-lottie-player'
import devloper_json from '/public/animation_devloper.json'
import welcom_json from '/public/animation_welcome.json'
import language_json from '/public/animation_languages2.json'

export default function Animation({ data }) {
    let animation_json = '';

    switch (data) {
        case 'welcome':
            animation_json = welcom_json;
            break;
        case 'language':
            animation_json = language_json;
            break;
        default:
            animation_json = devloper_json;
            break;
    }

    return (
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Lottie
                loop
                animationData={animation_json}
                play
            />
        </div>
    )
}