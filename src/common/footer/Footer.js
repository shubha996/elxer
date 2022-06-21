import React from 'react'
import './Footer.css';
import { Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <>
        <div className="container-footer">
        {/* --------------------Footer Top Section Starts-------------------- */}
            <div className="footer-top">
                <div className="top-left-heading">
                    <h2>Find the right Broadband Internet plan for you.</h2>
                    <h4>Get Discount upto 20% on Quarterly, Half yearly and Annual plans!</h4>
                </div>
                <div className="top-right-heading">
                    <Button variant='contained'>Get Started</Button>
                </div>
            </div>
        {/* --------------------Footer Top Section Ends-------------------- */}

        {/* --------------------Footer Bottom Section Starts-------------------- */}
            <div className="bottom">
            {/* Footer Bottom Head Starts */}
                <div className="bottom-head">
                    <h2>ELXER</h2>
                </div>
            {/* Footer Bottom Head Ends */}

            {/* Footer Bottom Foot Starts */}
                <div className="bottom-foot">
                    {/* Column One Starts*/}
                    <div className="column-one">
                        <table>
                            <tr><th>Our Offerings</th></tr>
                            <tr><td>New Broadband Connection</td></tr>
                            <tr><td>Broadband plans for Raipur</td></tr>
                            <tr><td>Broadband plans for Bhilai</td></tr>
                            <tr><td>Broadband plans for Durg</td></tr>
                            <tr><td>Broadband plans for Bhatapara</td></tr>
                            <tr><td>Broadband plans for Raigarh</td></tr>
                            <tr><td>Broadband plans for Kanker</td></tr>
                            <tr><td>Broadband plans for Korba</td></tr>
                        </table>
                        <table>
                            <tr><th>About Us</th></tr>
                            <tr><td>Who We Are?</td></tr>
                            <tr><td>Careers <Button variant='contained'>We're hiring!</Button></td></tr>
                        </table>
                    </div>
                    {/* Column One Ends */}

                     {/* Column Two Starts*/}
                    <div className="column-two">
                        <table>
                            <tr><th>Services</th></tr>
                            <tr><td>Enterprise Leased Line</td></tr>
                            <tr><td>Commercial Broadband</td></tr>
                        </table>
                        <table>
                            <tr><th>I want to</th></tr>
                            <tr><td>Recharge Online</td></tr>
                            <tr><td>Pay My Bill Online</td></tr>
                            <tr><td>Order Service</td></tr>
                        </table>
                        <table>
                            <tr><th>Compliance</th></tr>
                            <tr><td>Terms of Use</td></tr>
                            <tr><td>Privacy Policy</td></tr>
                        </table>
                    </div>
                    {/* Column Two Ends */}

                     {/* Column Three Starts */}
                    <div className="column-three">
                        <table>
                            <tr><th>Contact</th></tr>
                            <tr><td><h3>0771-677-7777</h3></td></tr>
                            <tr><td>support@elxer.com</td></tr>
                            <tr><td>or Contact Us</td></tr>
                        </table>
                        <table>
                            <tr><th>Help & Support</th></tr>
                            <tr><td>Support</td></tr>
                            <tr><td>FAQs</td></tr>
                            <tr><td>Knowledge Base</td></tr>
                        </table>
                        <table>
                            <tr><th>Join the community</th></tr>
                            <tr><FacebookIcon style={{color:"#4267B2", fontSize:"40px"}}/><TwitterIcon style={{color:"00ACEE", fontSize:"40px"}}/><InstagramIcon style={{color: "#fe4164", fontSize:"40px"}}/><LinkedInIcon style={{color: "#0077b5", fontSize:"40px"}}/></tr>
                        </table>
                    </div>
                    {/* Column Three Ends */}

                     {/* Column Four Starts */}
                    <div className="column-four">
                    {/* We're Listening Card Starts */}
                        <div className="card-container-column-four">
                            <div>
                                <div className="card-container-heading">
                                    <div className="pulse-footer"></div>
                                    <p>We're Listening!!</p>
                                </div>
                                <div className="card-container-text">
                                    <p>Your feedback matters!</p>
                                </div>
                            </div>
                            <div className="card-container-image">
                                <svg fill="#233141" enable-background="new 0 0 511.987 511.987" height="48" viewBox="0 0 511.987 511.987" width="48" xmlns="http://www.w3.org/2000/svg"><g id="XMLID_75_"><g id="XMLID_724_"><path id="XMLID_816_" d="m491.007 5.907c-20.045-11.575-45.767-4.681-57.338 15.364l-57.212 99.095h-123.383c-5.523 0-10 4.478-10 10s4.477 10 10 10h111.836l-41.518 71.912h-233.39c-5.523 0-10 4.478-10 10 0 5.523 4.477 10 10 10h221.842l-23.094 40h-198.748c-5.523 0-10 4.478-10 10s4.477 10 10 10h194.612l-4.309 40h-190.303c-5.523 0-10 4.478-10 10s4.477 10 10 10h188.148l-.532 4.939c-.424 3.936 1.514 7.752 4.942 9.731 1.553.897 3.278 1.34 4.999 1.34 2.079 0 4.151-.647 5.9-1.925l63.851-46.645c1.125-.822 2.065-1.869 2.761-3.075l77.929-134.975v193.827c0 22.406-18.229 40.636-40.636 40.636h-231.751c-3.573 0-6.874 1.906-8.66 5l-34.967 60.565-34.967-60.565c-1.786-3.094-5.087-5-8.66-5h-17.723c-22.407 0-40.636-18.23-40.636-40.636v-194.493c0-22.406 18.229-40.636 40.636-40.636h102.439c5.523 0 10-4.478 10-10 0-5.523-4.477-10-10-10h-102.439c-33.435 0-60.636 27.201-60.636 60.636v194.493c0 33.435 27.201 60.636 60.636 60.636h11.949l40.741 70.565c1.786 3.094 5.087 5 8.66 5s6.874-1.906 8.66-5l40.741-70.565h225.978c33.435 0 60.636-27.201 60.636-60.636v-194.493c0-8.572-1.818-17.04-5.295-24.804l53.666-92.952c11.572-20.044 4.68-45.766-15.365-57.339zm-10 17.32c10.494 6.059 14.102 19.525 8.043 30.019l-5.714 9.897-38.061-21.975 5.714-9.897c6.059-10.493 19.524-14.1 30.018-8.044zm-176.679 272.779 28.786 16.62-33.188 24.245zm43.423 1.977-38.061-21.975 125.585-217.52 38.061 21.975z"></path><path id="XMLID_819_" d="m208.07 140.367c2.63 0 5.21-1.07 7.08-2.93 1.86-1.86 2.93-4.44 2.93-7.07s-1.07-5.21-2.93-7.07c-1.87-1.859-4.44-2.93-7.08-2.93-2.63 0-5.21 1.07-7.07 2.93s-2.92 4.44-2.92 7.07 1.059 5.21 2.92 7.07c1.87 1.86 4.44 2.93 7.07 2.93z"></path></g></g></svg>
                            </div>
                        </div>
                    {/* We're Listening Card Ends */}

                    {/* Refer a Friend Card Starts */}
                        <div className="card-container-column-four">
                            <div>
                                <div className="card-container-heading">
                                    <p>Refer a Friend</p>
                                </div>
                                <div className="card-container-text">
                                    <p>You both will receive exciting offers!</p>
                                </div>
                            </div>  
                        </div>
                    {/* Refer a Friend Card Ends */}

                    {/* Facbook Page iframe Start*/}
                        <div id='iframe-div' class="features-box m-0" style={{minHeight:"200px"}}>
                            <div class="fb-page fb_iframe_widget" data-href="https://www.facebook.com/elxercommunications" data-tabs="timeline,messages" data-width="" data-height="200" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=&amp;container_width=246&amp;height=200&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Felxercommunications&amp;locale=en_GB&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline%2Cmessages&amp;width=">
                                <span style={{verticalAlign: "bottom", width: "246px", height: "200px"}}>
                                    <iframe name="fd4b960f779308" width="1000px" height="200px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v6.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3a744660b7b5a4%26domain%3Delxer.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Felxer.com%252Ff3665ba6649725c%26relation%3Dparent.parent&amp;container_width=246&amp;height=200&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Felxercommunications&amp;locale=en_GB&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline%2Cmessages&amp;width=" style={{border: "none", visibility: "visible", width: "246px", height: "200px"}} class=""></iframe>
                                </span>
                            </div>
                        </div>
                    {/* Facebook Page iframe Ends */}
                    </div>
                    {/* Column Four Ends */}
                </div>
            </div>
            {/* Column Four Ends */}
            <div className="copyright">
                <div>
                    <p>&copy; Copyright 2022 Elxer Communications Private Limited. All Rights Reserved.</p>
                </div>
                <div>
                    <p>*All the prices are exclusive of GST. *Installation, equipment fees, taxes & other fees apply</p>
                </div>
            </div>
        </div>
        {/* Footer Bottom Foot Ends */}
        {/* --------------------Footer Bottom Section Ends-------------------- */}
    </>
  )
}

export default Footer