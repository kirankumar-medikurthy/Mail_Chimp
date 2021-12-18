import './contacts.css';
import Button from '../components/Button';


const Contacts = () => {
    return (
        <>
            <div className="cont9">
                <div className="cont91">
                    <div className="h91">Tag your contacts</div>
                    <div className="p91">Easily organise your contacts using simple words or phrases that make the most sense to you.</div>
                    <div className='cont911'>
                        <div className='p92'>Search for or create tags</div>
                        <div className='p92'>Choose from popular tags</div>
                    </div>
                    <div className='cont92'>
                        <select name="tag" id="tags">
                            <option value=""></option>
                            <option value="2021">2021</option>
                            <option value="Staff">Staff</option>
                            <option value="Influencer">Influencer</option>
                            <option value="Member">Member</option>
                        </select>
                        <div className='tag'>
                            <div>2021</div>
                            <div>Staff</div>
                            <div>Influencer</div>
                            <div>Member</div>
                        </div>
                    </div>
                    <div className='p93'>Start typing to add a custom tag</div>
                    <Button name='Continue to Match'/>
                    <img className="qu" src={require('../images/ques.svg').default} alt="" />
                </div>
            </div>
        </>
    )
}


export default Contacts;