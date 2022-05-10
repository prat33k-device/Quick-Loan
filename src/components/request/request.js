import React from 'react';
import './request.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DeleteIcon from '@mui/icons-material/Delete';
import CurrloanOffers from './subcomp/currloan/currloan';
import Approved from './subcomp/approvedloan/approved';

function Request(){
      return (<div>
          <div id='request-page'>
               <span id='pending-approval-heading'>Pending Approvals</span>
               <hr className='hr-request-page'/>
               <section id='approval-section'>
               <div id='approval-outer-box'>
               {/* Pending Request Box Starts */}
                <div id='pending-approvals'>
                   <div><span id='loan-id'>Loan ID:324987252</span><span id='loan-delete'><DeleteIcon/></span></div>
                   <div id='pending-inner-box'>
                    {/* Original Offer Box Starts */}
                     <div id='original-offer-box'>
                         <span id='org-cont'>Original offer</span>
                         <hr/>
                         <div id="original-offer-list">
                            <div>
                                <div className='original-offer-content'>Amount</div>
                                <div><span id='curr-rupee'><CurrencyRupeeIcon/> <strong>18000</strong></span></div>
                            </div>
                            <div>
                                <div className='original-offer-content'>Tenure (months)</div>
                                <div><strong>18</strong></div>
                            </div>
                            <div>
                                <div className='original-offer-content'>Interest Rate</div>
                                <div><strong>5.6%</strong></div>
                            </div>
                            <div>
                                <div>Status<span id='span-pending-button'>Pending</span></div>
                            </div>
                         </div>
                     </div>
                     {/* Original Offer Box ends */}


                     {/* Modified Rate Box Starts */}
                     <div id='modified-rates-and-tenures'>
                       <span id='modified-rate-heading'>*Modified Rates and Tenures</span>
                         <div id='list-modified-loan-heading'>
                             <div>Provider Name</div>
                             <div>Tenure (months)</div>
                             <div>Interest Rate</div>
                             <div>Accept</div>
                         </div>
                         <hr/>
                          <CurrloanOffers/>
                          <CurrloanOffers/>
                          
                     </div>
                     {/* Modified Rate Box Ends */}
                
                   </div>

                 </div>
                 {/* Pending Request Box Ends */}
               </div>
               </section>
               <span id='pending-approval-heading'>Approved Loans</span>
               <hr className='hr-request-page'/>
               <div id='approved-loan'>
                      <Approved/>
                      <Approved/>
                      <Approved/>
                      <Approved/>

               </div>
          </div>

      </div>)
}
export default Request;