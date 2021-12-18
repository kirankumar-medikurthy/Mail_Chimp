
import React from 'react'
import './account.css'
function Account() {
    return (
        <div className='abox'>
            <div className='sideyrec'>
                
            </div>
            <div className='mainsbox'>
            <div className='navnote'>
                <h2 className='accountset'>Account Set Up</h2>
                <h2 className='rot'>plan {">"} profile {">"}<span className='adresapan'> Adress </span>{">"} contact {">"}  costamize {">"}  finish</h2>
                <div className='bottomline'></div>
            </div>
            <div className='formdatadiv'>

            <div>
                <label className='add_text'>Add your address</label>
                <p className='formdis'>But why? Believe it or not, we need a physical address to make sure
your emails comply with international anti-spam laws. Don’t have an
official business address? Learn about physical address alternatives</p>
            </div>
            <div>
                <h3 className='inpttext'>Address line 1 (Street address or post office box)</h3>
                <input className='addres1' />
            </div>
            <div>
                <div className='addres2box'>
                <h3 className='inpttex'>Address line 2 </h3>
                <h5 className='optioninput'>optional</h5>
                </div>
                <input className='addres1' />
            </div>

         {/* dd */}

         <div  className='detailbox'>
         
         <div className='citybox'>
             <label className='citylabel'>City</label>
             <input className='cityinput'/>

         </div>

         <div className='citybox'>
             <label className='citylabel'>State / Province / Region</label>
             <input className='cityinput'/>

         </div>
         </div>
         <div className=''>
                <h3 className='zipttext'>Zip / Postal code</h3>
                <input className='addres1' />
            </div>

            <div>
                <h3 className='countrylabel'>Countary</h3>
                <input className='addres1'  />
            </div>


            
             <button className='Continuebut'>Continue</button>



            </div>

           
            </div>
            
            <div className='yrect'>
            <img className='sidepic3' src='sidepic.png'/>
            </div>
            
        </div>
    )
}

export default Account
