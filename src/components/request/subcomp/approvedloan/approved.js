import React from 'react';
import './approved.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function Approved(){
      return (<div>
          <div id='list-approved-loans'>
               <div id='approved-inner-content'>
                 <div>Amount</div>
                 <div className='approved-value' ><span id="curr-rupee"><CurrencyRupeeIcon/>18000</span></div>
               </div>
               <div id='approved-inner-content'>
                 <div>Tenure</div>
                 <div className='approved-value'><span>18 months</span></div>  
               </div>
               <div id='approved-inner-content'>
                 <div>Interest Rate</div>
                 <div className='approved-value'><span>6.5</span>%</div>
               </div>
               <div id='approved-inner-content'>
                 <div>Provider Name</div>
                 <div className='approved-value'><span>Laurel Murphy</span></div>
               </div>
               <div id='approved-inner-content'>
                 <div>Status</div>
                 <div className='approved-value'><span id='approved-status'>Approved</span></div>
               </div>
          </div>

      </div>)
}
export default Approved;