import React from 'react'
import './Referal.css';
import Button from '@mui/material/Button';

const Referal = () => {
  return (
    <>
        <div className="referal-container">
            <div className="inner-container-1">
                <h3>Refer and Earn</h3>
            </div>
            <div className="inner-container-2">
                <div className="container-2-item">
                    <h4>Refer Elxer Internet services to your friends or family and get the <strong>DISCOUNT</strong> of <strong>₹250</strong> on your next bill!</h4>
                </div>
                <div className="container-2-item-btn">
                    <Button variant="contained">REFER NOW</Button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Referal