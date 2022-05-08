import React from "react";
import "./Panel.css";

function Panel() {

    return <div id="loan-panel-div-inner">

                <div id="loan-panel-inner-inner-div">

                    <div id="user-info">
                        <div id="cibil-div">
                            <p>Your CIBIL Score</p>
                            <p id="cibil-score">530</p>
                        </div>
                        <div id="max-loan-div">
                            <p>Max Loan Amount</p>
                            <p>Rs. 2,00,000</p>
                        </div>
                    </div>

                    <div className="vertical-line"/>

                    <form id="create-loan-post">
                        <label>Loan Amount</label>
                        <input type="text" />
                        <label>Tenure (Months)</label>
                        <input type="text" />
                        <label>Interest Rate (%)</label>
                        <input type="text" />

                        <button type="submit">Submit</button>
                    </form>

                </div>
                
            </div>;
}

export default Panel