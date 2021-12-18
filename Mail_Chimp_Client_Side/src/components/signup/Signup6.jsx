import "./singup.css";
export const Signup6 = () =>{
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
            <div>
                <div className="helpustodetermine">Help us determine the
best experience for you</div>
                <div className="serviceonline">Do you sell products or sevices online?</div>
                <div>
                    <div className="products">
                        <input type="radio"/>
                        <label>Products</label>
                    </div>
                    <div className="services">
                        <input type="radio"/>
                        <label>Services</label>
                    </div>
                    <div className="both">
                        <input type="radio"/>
                        <label>Both</label>
                    </div>
                    <div className="neither">
                        <input type="radio"/>
                        <label>Neither</label>
                    </div>
                </div>
                {/* secondpart */}
                <div className="intendtosell">Do you intend to sell product or services online in the future?</div>
                <div>
                    <div className="products">
                        <input type="radio"/>
                        <label>Products</label>
                    </div>
                    <div className="services">
                        <input type="radio"/>
                        <label>Services</label>
                    </div>
                    <div className="both">
                        <input type="radio"/>
                        <label>Both</label>
                    </div>
                    <div className="neither">
                        <input type="radio"/>
                        <label>Neither</label>
                    </div>
                </div>
                <button className="continuebtnsignup6">Continue</button>
            </div>
            <div className="rightsreservedsignup6">2001-2021 All Rights Reserved. Mailchimp is a registered trademark of The Rocket Science Group, LLC. Cookie Preferences, Privacy, and Terms.</div>
        </div>
        <div className="flowerlayoutsignup6">
            <img className="flowerimagelayoutsingup6" src="/project_images/signup_images/flowerentireimage.png" alt="flowerimage.png"/>
        </div>
    </div>)
}