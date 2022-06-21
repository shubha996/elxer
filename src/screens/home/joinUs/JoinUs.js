import React from 'react'
import './joinus.css';

function JoinUs() {
  return (
        <div className="joinus-section">
            <div className="joinus-left">
                <div className='joinus-section-heading'>
                    <h2>Join us on mobile!</h2>
                    <p>Download MyElxer app to stay updated and get in touch right from your phone.</p>
                </div>
                <div>
                    <div className='internal'>
                        <div className='internal-left'>
                            <img src="https://elxer.com/assets/images/icons/server.svg" alt="" />
                        </div>
                        <div className='internal-right'>
                            <h4>Manage your Subscriptions</h4>
                            <p>All your Elxer Broadband Subscription at one place</p>
                        </div>
                    </div>
                    <div className='internal'>
                        <div className='internal-left'>
                            <img src="https://elxer.com/assets/images/icons/24-hours-support.svg" alt="" />
                        </div>
                        <div className='internal-right'>
                            <h4>24x7 Customer Support</h4>
                            <p>Raise/track all your complaints from the app</p>
                        </div>
                    </div>
                    <div className='internal'>
                        <div className='internal-left'>
                            <img src="https://elxer.com/assets/images/icons/bill.svg" alt="" />
                        </div>
                        <div className='internal-right'>
                            <h4>Recharge or Pay your Bills</h4>
                            <p>Recharge your broadband subscription, pay your outstanding bills</p>
                        </div>
                    </div>
                    <div className='internal'>
                        <div className='internal-left'>
                            <img src="https://elxer.com/assets/images/icons/speedometer.svg" alt="" />
                        </div>
                        <div className='internal-right'>
                            <h4>Speedtest</h4>
                            <p>Check your broadband connection speed from In-app Speedtest with High Accuracy Rate</p>
                        </div>
                    </div>
                    <div className='internal'>
                        <div className='internal-left'>
                            <img src="https://elxer.com/assets/images/icons/graph.svg" alt="" />
                        </div>
                        <div className='internal-right'>
                            <h4>Track Data Usage</h4>
                            <p>Track your data usage with real-time update</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='download-app' src="https://elxer.com/assets/images/svg/google-play-store-badge.svg" alt="" />
                    <img className='download-app' src="https://elxer.com/assets/images/svg/app-store-badge-coming-soon.svg" alt="" />
                    <p><small>Available on Android device</small></p>
                </div>
            </div>
            <div className="joinus-right">
                <img src="https://elxer.com/assets/media/app/myelxer.png" alt="" />
            </div>
        </div>
  )
}
export default JoinUs;