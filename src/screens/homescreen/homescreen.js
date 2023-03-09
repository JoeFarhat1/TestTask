import React from "react";
import { Navbar } from "../../components/navBar/navbar";
import Constants from '../../Config/Constants.json'
export const HomeScreen = () =>{
    return <div>
        <Navbar data={Constants.navBarData}/>
    </div>
}