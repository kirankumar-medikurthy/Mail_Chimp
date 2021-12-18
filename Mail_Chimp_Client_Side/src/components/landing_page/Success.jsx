import React from "react";
import Button from "./Button";
import Button1 from './Button1';
import './success.css';


const Success = () => {

    return (

        <>
            <div className="cont12">
                <div className="cont121">
                    <div className="cont122">

                        <div>
                            <div className="h121">Your Import was successful</div>
                            <div className="p121">We’ve updated 0 contacts in your “Freelancing” audience</div>
                            <div className="cont124">
                                <Button name='Start a Campaign' />
                                <Button1 name1='View contacts' />
                            </div>
                        </div>


                        <img className="im39" src={require('../../../public/project_images/landingpage_images/image 39.svg').default} alt="" />
                    </div>

                    <img className="q" src={require('../../../public/project_images/landingpage_images/ques.svg').default} alt="" />
                </div>
            </div>
        </>
    )
}


export default Success;