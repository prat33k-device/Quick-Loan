import React from "react";
import { Fragment } from "react"; 
import Panel from "./Panel/Panel";
import Canvas from "./Canvas/Canvas";
import "./HomePage.css";

function HomePage() {

    return <Fragment>

        <div id="top-div">
            
            <div id="intro-div-outer">
                <h3 id="sub-heading">Apply for Loan</h3>
                <div id="intro-div-inner">Amet velit est fugiat occaecat veniam ad consectetur fugiat est eiusmod cillum dolore excepteur aute. In aliquip duis eiusmod commodo nostrud incididunt id aliqua nulla est consequat minim sint. Velit excepteur fugiat pariatur incididunt do eu elit incididunt qui ea. Incididunt deserunt eu adipisicing esse est Lorem magna fugiat sit nulla aute fugiat do. Non id anim voluptate fugiat nulla officia exercitation in culpa incididunt elit culpa.</div>
            </div>
            
            <div id="loan-panel-div-outer">
                <div id="complete-profile-div"><p>*Complete your profile first</p></div>
                <Panel />
            </div>

            
        </div>

        

        <div id="bottom-div">

            <div className="break-line" />

            <Canvas />

        </div>


    </Fragment>;

}

export default HomePage;