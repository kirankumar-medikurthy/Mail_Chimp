import "./page4.css"

const plusStyle= {float:"right",paddingTop:"5px"}
export const Page4 = () =>{
    return (<div>
        <h1>Welcome to the Page 4</h1>
        <div id="navbar">
            <div className="text1">Marketing smart for growing business</div>
            <div className="boxes">
                <div className="Box1">Marketing Platform</div>
                <div className="Box2">Website & Commerce</div>
                <div className="Box3">Transactional Email</div>
            </div>
            <div className="premiumboxes">
                <div className="prembox1">
                    <div className="titleprem">Premium</div>
                    <p className="Advanced">Advanced features for pros who need more customization.</p>
                    <p className="startsat">Starts at</p>
                    <div className="rs" >Rs <h1 style={{display:"inline"}}>23,000</h1></div>
                    <p className="monthlycontact">/month based on 10,000 contacts*</p>
                    <p className="contact">How  many contacts do you have?</p>
                    <button className="btn">Buy Now</button>
                    <p className="everything">Everything in Standard, plus:</p>
                    <div className="tickboxes">
                        <div className="insideTextpremium">
                            <img src="/project_images/page4_images/tick.svg" alt="tick.svg"/>
                            <p style={{paddingLeft:"10px"}}>Advanced Segmentation</p>
                        </div>
                        <div className="insideTextpremium">
                            <img src="/project_images/page4_images/tick.svg" alt="tick.svg"/>
                            <p style={{paddingLeft:"10px"}}>Multivariate Testing</p>
                        </div>
                        <div className="insideTextpremium">
                            <img src="/project_images/page4_images/tick.svg" alt="tick.svg"/>
                            <p style={{paddingLeft:"10px"}} >Comparative Reporting</p>
                        </div>
                        <div className="insideTextpremium">
                            <img src="/project_images/page4_images/tick.svg" alt="tick.svg"/>
                            <p style={{paddingLeft:"10px"}}>Unlimited seats & Role-Based Access</p>
                        </div>
                        <div className="insideTextpremium">
                            <img src="/project_images/page4_images/tick.svg" alt="tick.svg"/>
                            <p style={{paddingLeft:"10px"}} >Phone Support</p>
                        </div>
                    </div>
                    <div className="aboutpremium1">About Premium</div>
                </div>
                <div className="prembox2">
                    <div className="titlestan">Standard</div>
                    <p className="datadriven">Data-driven automation and optimization faster.</p>
                    <p className="startsat">Starts at</p>
                    <div className="rs">Rs <h1 style={{display:"inline"}}>1,150</h1></div>
                    <p className="monthlycontact">/month based on 10,000 contacts*</p>
                    <p className="contact">How  many contacts do you have?</p>
                    <button className="btn">Buy Now</button>
                    <p className="everything">Everything in Standard, plus:</p>
                    <div className="tickbox">
                        <div className="insideTextpremium">
                            <img src="/project_images/page4_images/tick.svg" alt="tick.svg"/>
                            <p style={{paddingLeft:"10px"}}>Customer Journey Builder+ Branching Points</p>
                        </div>
                        <div className="insideTextpremium">
                            <img src="/project_images/page4_images/tick.svg" alt="tick.svg"/>
                            <p style={{paddingLeft:"10px"}}>Send Time Optimization</p>
                        </div>
                        <div className="insideTextpremium">
                            <img src="/project_images/page4_images/tick.svg" alt="tick.svg"/>
                            <div style={{paddingLeft:"10px"}} >Behavioral Targeting</div>
                        </div>
                        <div className="insideTextpremium">
                            <img src="/project_images/page4_images/tick.svg" alt="tick.svg"/>
                            <p style={{paddingLeft:"10px"}}>Custom Templates</p>
                        </div>
                        <div className="insideTextpremium">
                            <img src="/project_images/page4_images/tick.svg" alt="tick.svg"/>
                            <p style={{paddingLeft:"10px"}} >Dynamic Content</p>
                        </div>
                    </div>
                    <div className="aboutpremium2">About Premium</div>
                </div>
                <div className="prembox3">
                    <div className="titleessen">Essentials</div>
                    <p className="GreatEmail">Great for email-only senders who want around-the-clock support.</p>
                    <p className="startsat">Starts at</p>
                    <div className="rs">Rs <h1 style={{display:"inline"}}>770</h1></div>
                    <p className="monthlycontact">/month based on 10,000 contacts*</p>
                    <p className="contact">How  many contacts do you have?</p>
                    <button className="btn">Buy Now</button>
                    <p className="everything">Everything in Standard, plus:</p>
                    <div className="tickbox">
                        <div className="insideTextpremium">
                            <img src="/project_images/page4_images/tick.svg" alt="tick.svg"/>
                            <p style={{paddingLeft:"10px"}}>Email Templates</p>
                        </div>
                        <div className="insideTextpremium">
                            <img src="/project_images/page4_images/tick.svg" alt="tick.svg"/>
                            <p style={{paddingLeft:"10px"}}>Multi-Step Journey</p>
                        </div>
                        <div className="insideTextpremium">
                            <img src="/project_images/page4_images/tick.svg" alt="tick.svg"/>
                            <p style={{paddingLeft:"10px"}} >Custom Branding</p>
                        </div>
                        <div className="insideTextpremium">
                            <img src="/project_images/page4_images/tick.svg" alt="tick.svg"/>
                            <p style={{paddingLeft:"10px"}}>A/B Testing</p>
                        </div>
                        <div className="insideTextpremium">
                            <img src="/project_images/page4_images/tick.svg" alt="tick.svg"/>
                            <p style={{paddingLeft:"10px"}} >24/7 Email & Chat Support</p>
                        </div>
                    </div>
                    <div className="aboutpremium3">About Premium</div>
                </div>
                <div className="prembox4">
                <div className="titlefree">Free</div>
                    <p className="AllMultiple">All the multi-channel tools you need to audience.</p>
                    <p className="startsat">Starts at</p>
                    <div className="rs">Rs <h1 style={{display:"inline"}}>0</h1></div>
                    <p className="monthlycontact">/month based on 10,000 contacts*</p>
                    <p className="contact">How  many contacts do you have?</p>
                    <button className="btn">Buy Now</button>
                    <p className="everything">Everything in Standard, plus:</p>
                    <div className="tickbox">
                        <div className="insideTextpremium">
                            <img src="/project_images/page4_images/tick.svg" alt="tick.svg"/>
                            <p style={{paddingLeft:"10px"}}>Marketing CRM</p>
                        </div>
                        <div className="insideTextpremium">
                            <img src="/project_images/page4_images/tick.svg" alt="tick.svg"/>
                            <p style={{paddingLeft:"10px"}}>Creative Assistant</p>
                        </div>
                        <div className="insideTextpremium">
                            <img src="/project_images/page4_images/tick.svg" alt="tick.svg"/>
                            <p style={{paddingLeft:"10px"}} >Website Builder</p>
                        </div>
                        <div className="insideTextpremium">
                            <img src="/project_images/page4_images/tick.svg" alt="tick.svg"/>
                            <p style={{paddingLeft:"10px"}}>Mailchimp Domain</p>
                        </div>
                        <div className="insideTextpremium">
                            <img src="/project_images/page4_images/tick.svg" alt="tick.svg"/>
                            <p style={{paddingLeft:"10px"}} >Forms & Landing Pages</p>
                        </div>
                    </div>
                    <div className="aboutpremium4">About Premium</div>
                </div>
            </div>
            <div>
                <button className="compareplans">Compare our Plans</button>
            </div>
            <div className="calculateprice">Calculate your price</div>
            <div className="calculatepricebox">
                <div className="selectplan">
                    <div className="selectplantext">Select a plan:</div>
                    <div className="selecttabflex">
                        <div className="selecttabs1">
                            <span className="premium">Premium</span>
                        </div>
                        <div className="selecttabs2">
                            <span className="premium">Standard</span>
                        </div>
                        <div className="selecttabs3">
                        <span className="premium">Premium</span>
                        </div>
                    </div>
                    <div className="contacts">Contacts :</div>
                    <div className="contactContext">
                    Plan pricing starts at 500 contacts, Select your audience size to calculate your price. The monthly email send limit for Standard plans is 12 times your maximum contact count.*
                    </div>
                    <div className="contactcountlayout">
                        <div>Upto</div>
                        <div><b>500</b></div>
                        <div>Contacts</div>
                    </div>
                    <div className="polygon">V</div>
                    <div className="contactline">
                        <div className="l1"></div>
                        <img className="sliderimg" src="/project_images/page4_images/slider.png" alt="slider.png"/>
                        <div className="l2"></div>
                        <div className="l3"></div>
                        <div className="l4"></div>
                        <div className="l5"></div>
                        <div className="l6"></div>
                        <div className="l7"></div>
                        <div className="l8"></div>
                        <div className="l9"></div>
                        <div className="l10"></div>
                        <div className="l11"></div>
                    </div>
                </div>
                <div className="mail_chiprecommendationlayout">
                    <div className="mail_chimp_box">
                     <span className="mail_chimp_text">Mailchimp Recommends</span>
                    </div>
                    <div className="mail_recommendation_standerd_text">Standard</div>
                    <div className="mail_chimp_start_at">Starts at</div>
                    <div className="rs1150">Rs <b>1,150</b></div>
                    <div className="monthlyContent">/month based on 10,000 contacts*</div>
                    <button className="buynowbtn_recommendation">Buy Now</button>
                    <div className="monthlyemailcontent">*To see the monthly emails send limit included with your specific plan, click Calculate my price. If your plan’s contact or email send limit is exceeded, you will be charged for overages (except for Free plan, where sending will be paused until the next monthly plan cycle).</div>
                </div>
            </div>
            <div className="actualprice">*Actual price may vary. Prices displayed exclude VAT, which will be added to the cost of all services purchased. If you select USD, the price displayed are estimates based on the INR-USD exchange rate. Exact amounts charged for payments made in USD will vary based on the exchange rate at the time of payment processing. For exact base pricing, please refer to prices listed in INR.</div>
            <div className="FeaturedproductsLayout">
                <div className="featureproductitle">Featured Product :</div>
                <div className="unlimitedoneone">Create unlimited one-on-one and group services with our new <span className="advancedscheduled">Advnced <br/>Scheduling</span> add-on for $8/month.</div>
                <button className="buynowactualpricebtn">Buy Now</button>
            </div>
            <div>
                <div className="businessOnlineImagelayout1">
                    <img className="businessOnlineImage" src="/project_images/page4_images/business_online.png" alt="Business Online.png"></img>
                    <div>
                        <div className="freetools">Also include: Free tools for getting your business online</div>
                        <div className="businessOnlineMarketing" >All Marketing plans come with Free website commerce fea-tures, so you can build your dream online presence. But if youwant more advanced tools for selling and scheduling, try combining your Marketing plan with a paid Websites & commerce plan.</div>
                        <button className="seewebsite">See Website & Commerce plans</button>
                    </div>
                </div>
                <div className="businessOnlineImagelayout2">
                    <img className="prefer_to_pay" src="/project_images/page4_images/prefer_to_pay.png" alt="prefer_to_pay.png"></img>
                    <div>
                        <div className="prefer_to_pay_you">Prefer to pay as you go?</div>
                        <div className="insteadofpaying" >Instead of paying a monthly recurring charge, you can buy email credits as needed through our PayAs You Go plan.It’s best for infrequent senders.</div>
                        <button className="learnmore">Learn More</button>
                    </div>
                </div>
                <div className="businessOnlineImagelayout3">
                    <img className="businessOnlineImage" src="/project_images/page4_images/client.png" alt="client.png"></img>
                    <div>
                        <div className="freetools">Need to help clients use Mailchimp?</div>
                        <div className="businessOnlineMarketing" >Unlock the tools you need to get work done for clients when you sign up through Mailchimp & Co. our community for freelancers and agencies. It’s free to join with any Mailchimp plan.</div>
                        <button className="getstarted">Get Started</button>
                    </div>
                </div>
                <div className="twofactorauthentication">
                    <div>
                        <div className="twofactortitle">Two-Factor authentication discount</div>
                        <div className="twofactorcontent">At Mailchimp, we’re serious about security. We offer a 10% discount for 3 months when you add two-factor authentication to your Mailchimp account with an app like Google Authentication or SMS two-factor authentication.</div>
                        <button className="getstartedtwofactor">Get Started</button>
                    </div>
                    <div className="horizantalLine"></div>
                    <div>
                        <div className="ratefornonprofits">Rates for nonprofits and charities</div>
                        <div className="ratefornonprofitscontent">Mailchimp offers a 15% discount to nonprofits and charitie. To request the discount, sign up for a free account, and contact our Billing team with your username and a link to your organization’s website.</div>
                        <button className="getstartedtwofactor">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="sendinglimit">What happens if I hit my contact or sending limit?</div>
            <div>
                <div className="FAQs">FAQs</div>
                <div className="tablecontent">
                    <div className="paymentmethodoffer">What payment methods do you offer? <span><img style={plusStyle} src="/project_images/page4_images/pluscircle.png" alt="pluscircle.png"/></span></div>
                    <div className="paymentmethodoffer1">How do I switch to a different plan?<span><img style={plusStyle} src="/project_images/page4_images/pluscircle.png" alt="pluscircle.png"/></span></div>
                    <div className="paymentmethodoffer2">Can I buy credit instead?<span><img style={plusStyle} src="/project_images/page4_images/pluscircle.png" alt="pluscircle.png"/></span></div>
                    <div className="paymentmethodoffer3">Do you have pricing for high-volume email senders?<span><img style={plusStyle} src="/project_images/page4_images/pluscircle.png" alt="pluscircle.png"/></span></div>
                    <div className="paymentmethodoffer4">What happens if I hit my contact or sending limit?<span><img style={plusStyle} src="/project_images/page4_images/pluscircle.png" alt="pluscircle.png"/></span></div>
                </div>
            </div>
            <div className="goodcompany">You’ll be in good company</div>
            <div className="footerimages">
                <img className="eastfork" src="/project_images/page4_images/eastfork.png" alt="eastfork.png"/>
                <img className="cronicalimage" src="/project_images/page4_images/cronicalimage.png" alt="cronicalimage.png"/>
                <img className="fader" src="/project_images/page4_images/fader.png" alt="fader.png"/>
                <img className="sweat" src="/project_images/page4_images/sweat.png" alt="sweat.png"/>
            </div>
        </div>
    </div>)
}