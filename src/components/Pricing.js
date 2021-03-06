import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import { FaFire } from 'react-icons/fa'
import { BsXDiamondFill } from 'react-icons/bs'
import { GiCrystalize } from 'react-icons/gi'
import { IconContext } from 'react-icons/lib'

import './Pricing.css'

const Pricing = () => (
  <IconContext.Provider value={{ color: '#fff', size: 64 }}>
    <>
      <div className="pricing-section">
        <div className="pricing-wrapper">
          <h1 className="pricing-heading">pricing</h1>
          <div className="pricing-container">
            <Link to="/sign-up" className="pricing-card">
              <div className="pricing-cardInfo">
                <div className="icon">
                  <FaFire />
                </div>
                <h3>Starter</h3>
                <h4>€9.99</h4>
                <p>per month</p>
                <ul className="pricing-features">
                  <li>100 Transactions</li>
                  <li>2% Cash Back</li>
                  <li>€10,000 Limit</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Choose Plan
                </Button>
              </div>
            </Link>

            <Link to="/sign-up" className="pricing-card">
              <div className="pricing-cardInfo">
                <div className="icon">
                  <BsXDiamondFill />
                </div>
                <h3>Gold</h3>
                <h4>€29.99</h4>
                <p>per month</p>
                <ul className="pricing-features">
                  <li>1000 Transactions</li>
                  <li>3.5% Cash Back</li>
                  <li>€100,000 Limit</li>
                </ul>
                <Button
                  buttonStyle="btn--primary"
                  buttonSize="btn--wide"
                  buttonColor="primary"
                >
                  Choose Plan
                </Button>
              </div>
            </Link>

            <Link to="/sign-up" className="pricing-card">
              <div className="pricing-cardInfo">
                <div className="icon">
                  <GiCrystalize />
                </div>
                <h3>Diamond</h3>
                <h4>€89.99</h4>
                <p>per month</p>
                <ul className="pricing-features">
                  <li>Unlimited Transactions</li>
                  <li>5% Cash Back</li>
                  <li>Unlimited Spending</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Choose Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  </IconContext.Provider>
)

export default Pricing
