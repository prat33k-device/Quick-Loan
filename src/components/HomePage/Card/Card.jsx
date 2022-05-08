import React from "react";
import "./Card.css";

function Card() {

    return <div id="card">
        <div id="card-body">

            <div className="card-body-sub-div">
                <div className="card-body-element card-body-name">Jessy Pinkman</div>
                <div className="card-body-element">Time: 18 Months</div>
            </div>
            <div className="card-body-sub-div">
                <div className="card-body-element">Rs. 1,25,000</div>
                <div className="card-body-element">Interest: 3.8%</div>
            </div>
            
        </div>

        <div className="card-line-break" />

        <div id="accept-reject-div">
            <button id="modify-btn">Modify</button>
            <button id="reject-btn">Reject</button>
            <button id="accept-btn">Accept</button>
        </div>

    </div>;
}

export default Card;