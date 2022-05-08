import React from "react";
import { Fragment } from "react";
import CardCanvas from "../CardCanvas/CardCanvas";
import "./Canvas.css";

function Canvas() {

    return <Fragment>

            <div id="current">

                <div id="current-offer">
                    <div id="img-name-div">
                        <img className="current-img" src="https://picsum.photos/200/300" alt="profile" />
                        <div id="name-div">Kathy Ford</div>
                    </div>
                    <div id="history-cibil-div">
                        <div id="history-div">History</div>
                        <div id="all-history">
                            <p>Amount Dispersed: 20,000 Rs</p>
                        </div>
                        <div id="cibil-current-div">
                            <p>CIBIL Score: 540</p>
                        </div>
                    </div>
                </div>

                <div id="current-details">
                    <h5>Loan Details Update</h5>
                    <form>
                        <label>Name: Kathy Ford</label>
                        <input type="text" />
                        <label>Amount: Rs. 1,25,000</label>
                        <input type="text" />
                        <label>Time: 13 Months</label>
                        <input type="text" />
                        <label>Interest: 5%</label>
                        <input type="text" />
                        
                        <button id="send-update-rates-btn" type="submit">Send Update Rates</button>
                    </form>
                </div>

            </div>
            
            <div id="loan-offers">

                <h3>Loan Offers</h3>
                <CardCanvas />

            </div>

    </Fragment>;
}

export default Canvas;