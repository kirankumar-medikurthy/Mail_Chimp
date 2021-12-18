import "./singup.css";
export const Signup4 = () =>{
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
                    <div className="letsetupaccount">Let’s set up your account</div>
                    <div className="inputtypelayouts">
                            <div className="firstnamelastnamelayout">
                                <div>
                                    <label className="firstname" for="firstname">First Name</label>
                                    <br/>
                                    <input className="firstname_inputbox" type="text" placeholder="Enter your First Name"/>
                                </div>
                                <div>
                                    <label className="lastname" for="lastname">Last Name</label>
                                    <br/>
                                    <input className="lastname_inputbox" type="text" placeholder="Enter your Last Name"/>
                                </div>
                            </div>
                            <div>
                                <label className="businessname" for="businessname">Business Name</label>
                                <br/>
                                <input className="businessname_inputbox" type="text" placeholder="Enter your Bussiness Name"/>
                            </div>
                            <div>
                                <label className="companyname" for="companyname">Company Name</label>
                                <br/>
                                <input className="companyname_inputbox" type="text" placeholder="Enter the Company Name"/>
                            </div>
                            <div>
                                <label className="phonenumber" for="phonenumber">Phone Number</label>
                                <br/>
                                <input className="phonenumber_inputbox" type="text" placeholder="Enter the Phone Number"/>
                            </div>
                            <button className="continue">Continue</button>
                </div>
            </div>
            <div className="rightsreserved">2001-2021 All Rights Reserved. Mailchimp is a registered trademark of The Rocket Science Group, LLC. Cookie Preferences, Privacy, and Terms.</div>
        </div>
        <div className="flowerlayoutsignup4">
            <img className="flowerimagelayoutsingup4" src="/project_images/signup_images/flowerentireimage.png" alt="flowerimage.png"/>
        </div>
    </div>)
}