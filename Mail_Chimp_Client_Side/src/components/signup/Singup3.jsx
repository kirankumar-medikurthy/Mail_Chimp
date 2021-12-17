import "./singup.css";
export const Signup3 = () =>{
    return (<div id="singup4layout">
        <div className="horizantalline"></div>
        <div className="middleboxes">
            <div className="accountsetup">Account Set Up</div>
            <div className="planprofileicons">
                <div className="plan">Plan <span className="greaterthan">{">"}</span> </div>
                <div className="profile">Profile <span className="greaterthan">{">"}</span></div>
                <div className="Address">Address <span className="greaterthan">{">"}</span></div>
                <div className="contact">Contacts <span className="greaterthan">{">"}</span></div>
                <div className="customize">Customize <span className="greaterthan">{">"}</span></div>
                <div className="finish">Finish</div>
            </div>
            <div className="selectionbar">
                <div className="selection">Selection <span className="greaterthan">{">"}</span> </div>
                <div className="payment">Payment <span className="greaterthan">{">"}</span></div>
                <div className="conformation">Confirmation</div>
            </div>
            <div className="boxes">
                <div className="box1">
                    <div className="insidebox1">
                        <div className="premium">Premium</div>
                        <input className="radiobtn"type="radio" />
                    </div>
                    <div className="advancedfeatures">Advanced features for pros who need more customization.</div>
                    <div className="youwillpay">You’ll pay</div>
                    <div className="signuprupees">Rs. 23000</div>
                    <div className="amonth">a month</div>
                    <div className="with10000contacts">with 10,000 contacts</div>
                </div>
                <div className="box2">
                <div className="insidebox1">
                        <div className="premium">Research</div>
                        <input className="radiobtn"type="radio" />
                    </div>
                    <div className="advancedfeatures">Advanced features for pros who need more customization.</div>
                    <div className="youwillpay">You’ll pay</div>
                    <div className="signuprupees">Rs. 23000</div>
                    <div className="amonth">a month</div>
                    <div className="with10000contacts">with 500 contacts</div>
                </div>
                <div className="box3">
                <div className="insidebox1">
                        <div className="premium">Essential</div>
                        <input className="radiobtn"type="radio" />
                    </div>
                    <div className="advancedfeatures">Advanced features for pros who need more customization.</div>
                    <div className="youwillpay">You’ll pay</div>
                    <div className="signuprupees">Rs. 770</div>
                    <div className="amonth">a month</div>
                    <div className="with10000contacts">with 500 contacts</div>
                </div>
                <div className="box4">
                <div className="insidebox1">
                    <div className="premium">Free</div>
                        <input className="radiobtn"type="radio" />
                    </div>
                    <div className="advancedfeatures">Advanced features for pros who need more customization.</div>
                    <div className="youwillpay">You’ll pay</div>
                    <div className="signuprupees">Rs. 0</div>
                    <div className="amonth">a month</div>
                    <div className="with10000contacts">with 200 contacts</div>
                </div>
                <div>
                <div className="purchasesummarylayout">
                    <div className="purchasesummarytext">Purchase Summary</div>
                    <div className="buildindian">Billed in <span className="buildindianrupees">Indian Rupee</span></div>
                </div>
                <div className="freeplanlayout">
                    <div className="freeplaninnerflex">
                        <div className="freeplantext">Free plan</div>
                        <div className="rs0000">Rs.0.00</div>
                    </div>
                    <div className="contact2000">2000 contacts*</div>
                    <div className="contact10000">10000 contact*</div>
                    <button className="next">Next</button>
                </div>
                </div>
            </div>
            <div>
                <select className="selectplans">
                    <option value="">Compare Plan Features</option>
                </select>
            </div>
            <div className="rightsreserved">2001-2021 All Rights Reserved. Mailchimp is a registered trademark of The Rocket Science Group, LLC. Cookie Preferences, Privacy, and Terms.</div>
        </div>
        <div className="flowerlayout">
            <img className="flowerimagelayout" src="/project_images/signup_images/flowerimage.png" alt="flowerimage.png"/>
        </div>
    </div>)
}