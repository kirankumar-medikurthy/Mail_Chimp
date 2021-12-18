import React from "react";
import Button from "./Button";
import './organize.css';


const Organize = () => {

    return (
        <>
            <div className="cont8">
                <div className="cont81">
                    <div className="h81">Organize your contacts</div>
                    <div className="p81">Select a status</div>
                    <div className="cont811">
                        <select name="status" id="status">
                            <option value="Subscribed">Subscribed</option>
                            <option value="Unsubscribed">Unsubscribed</option>
                            <option value="free">Free</option>
                            <option value="Select">Select</option>
                        </select>
                    </div>
                    <div className="cont812">
                        <div className="p82">When you choose the ‘Subscribed’ status for your contacts, it indicates that you’ve gained
                            permission to market to them. Learn more about the
                        </div>
                        <div className="p83">Importance of Permission.</div>
                    </div>
                    <div className="cont813">
                        <input type="checkbox" />
                        <div className="p84">Update any existing contacts</div>
                    </div>
                    <div className="p85">If any imported contacts are already in your audience, we’ll automatically replace their information
                        with the data from your import.This option may make the import process take longer.
                    </div>
                    <Button name='Continue to Tag' />
                    <img className="q" src={require('../images/ques.svg').default} alt="" />
                </div>
            </div>
            <script>

            </script>
        </>
    )
}

export default Organize;




























