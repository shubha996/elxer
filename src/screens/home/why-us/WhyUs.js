import React from 'react'
import './WhyUs.css'

const WhyUs = () => {
  return (
    <>
        <div className="why-us">
            <center>
                <div className="whyusheading">
                    <h2>why choose Elxer as your Internet partner</h2>
                    <p>We make it easy for you to enjoy your favourite shows, work/learn online, play online battle and binge-watch without any interruption with Elxer's high-speed Internet.</p>
                </div>
            </center>
            <div className="cards-container">
                <div className="card-item">
                    <div className="leftcard-item">
                        <img id='cards-item-image' style={{borderBottomRightRadius: "0", borderTopRightRadius: "0"}} src='https://elxer.com/assets/images/4.jpg' alt="Elxer Item" />
                    </div>
                    <div className="rightcard-item">
                        <h3>Superior web browsing & consistent high-speed Internet</h3>
                        <p>We know the importance of high-speed Internet in our lives and thus as the best Internet service provider near you, we are obsessed to serve you the best of the Internet. Enjoy the ultra-speed Internet near you at a speed of up to 300 Mbps.</p>
                    </div>
                </div>
                <div className="card-item">
                    <div className="leftcard-item">
                        <img id='cards-item-image' style={{borderBottomLeftRadius: "0", borderTopLeftRadius: "0"}} src='https://elxer.com/assets/images/13.jpg' alt="Elxer Item" />
                    </div>
                    <div className="rightcard-item" style={{boxShadow:  "80px 0 90px rgba(255, 255, 255, 1)"}}>
                        <h3>Uninterrupted Connectivity</h3>
                        <p>We know that you love to experience uninterrupted connectivity while working, learning, or binge-watching. And thus, we ensure that you experience the best from the best Internet Service Provider near you. Every second counts and with every second we offer you the best Internet connectivity with Elxer.</p>
                    </div>
                </div>
                <div className="card-item">
                    <div className="leftcard-item">
                        <img id='cards-item-image' style={{borderBottomRightRadius: "0", borderTopRightRadius: "0"}} src='https://elxer.com/assets/images/21.jpg' alt="Elxer Item" />
                    </div>
                    <div className="rightcard-item">
                        <h3>24x7 Customer Support</h3>
                        <p>We are listening to your queries, requests or complaints, early in a day, or at night and our team of dedicated professionals have got your back. If you feel something has been wrong with your connection, you can generate a ticket via MyElxer App or WhatsApp at 0771-6777777</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
export default WhyUs;