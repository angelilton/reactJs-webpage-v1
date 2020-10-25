import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'

import './HeroSection.css'

const HeroSection = ({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) => {
  return (
    <>
      <div className={lightBg ? 'homeHero-section' : 'homeHero-section darkBg'}>
        <div className="container">
          <div
            className="row homeHero-row"
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className="col">
              <div className="homeHero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? ' homeHero-subtitle'
                      : 'homeHero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link to="/sign-up">
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="homeHero-img-wrapper">
                <img src={img} alt={alt} className="homeHero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
