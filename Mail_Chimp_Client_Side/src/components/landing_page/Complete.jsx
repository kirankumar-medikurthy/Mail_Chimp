import './complete.css';
import Button from './Button';
import Button1 from './Button1';



const Complete = () => {


    return (
        <>
            <div className="cont11">
                <div className="cont111">
                    <div className="h111">Match column labels to contact information</div>
                    <div className="p111">10 contacts were recognised in this file</div>


                    <ul>
                        <li><b>Imported from: </b>Copy and Paste</li>
                        <li><b>Email marketing status: </b>Subscribed</li>
                        <li><b>Update existing contatcs: </b>Yes</li>
                        <li><b>Tagged: </b>Customer</li>
                    </ul>


                    <div className='cont113'>The maximum number of contacts allowed on your Free plan is 2,000. If you go 2,000
                        contacts with this import, your ability to send email campaigns may be imposed.
                    </div>


                    <div className='cont114'>
                        <Button name='Complete Import'/>
                        <Button1 name1='Cancel Import'/>
                    </div>


                    <img className='quest' src={require('../../../public/project_images/landingpage_images/ques.svg').default} alt="" />
                </div>

                
            </div>
        </>
    )
}




export default Complete;