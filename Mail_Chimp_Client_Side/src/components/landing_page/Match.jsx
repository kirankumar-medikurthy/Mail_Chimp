import React from "react";
import Button from "./Button";
import './match.css';


const Match = () => {

    return (
        <>
            <div className="cont10">
                <div className="cont101">
                    <div className="h101">Match column labels to contact information</div>
                    <div className="p101">10 contacts were recognised in this file</div>
                    <div className="cont102">
                        <div className="cont103">
                            <div className="cont104">
                                <div className="cont105">
                                    <img className="pencil" src={require('../images/pencil.svg').default} alt="" />
                                    <img className="line" src={require('../images/line.svg').default} alt="" />
                                </div>
                                <div>Email Address</div>
                            </div>
                            <input className="cont106" type="checkbox" />
                        </div>
                        <div className="cont103">
                            <div className="cont104">
                                <div className="cont105">
                                    <img className="pencil" src={require('../images/pencil.svg').default} alt="" />
                                    <img className="line" src={require('../images/line.svg').default} alt="" />
                                </div>
                                <div>First Name</div>
                            </div>
                            <input className="cont106" type="checkbox" />
                        </div>
                        <div className="cont103">
                            <div className="cont104">
                                <div className="cont105">
                                    <img className="pencil" src={require('../images/pencil.svg').default} alt="" />
                                    <img className="line" src={require('../images/line.svg').default} alt="" />
                                </div>
                                <div>Address - ZIP/Postal</div>
                            </div>
                            <input className="cont106" type="checkbox" />
                        </div>
                    </div>
                    <div className="p102">3 columns will be imported.0 columns will not be imported.</div>
                    <Button name='Finalize Import' />
                    <img className="que" src={require('../images/ques.svg').default} alt="" />
                </div>
            </div>
        </>
    )
}

export default Match;