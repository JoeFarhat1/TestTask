import React from "react"
import { ClipLoader } from "react-spinners"
import './loaderstyles.css'
export const Loader = () =>{

    return <div className="loader-container">
        <ClipLoader />
    </div>
}