import React, { useEffect, useState } from "react";
import { productsReq } from "../../Requests/Request";
import { Navbar } from "../../components/navBar/navbar";
import Constants from '../../Config/Constants.json'
import { Loader } from "../../components/loader/loader";
import { ProductItem } from "../../components/productItem/productItem";
import './dashboardStyles.css'

export const Dashboard = () =>{
    const [data,setData] = useState([])
    
    useEffect(()=>{
        productsReq(setData)
    },[])
 
    if(data.length == 0) return <Loader />
    
    return<div>
         <Navbar data={Constants.navBarData}/>
         <div className="products-container">
            {
                data.length > 0 ? data.map((item)=>{
                    return <ProductItem item={item} key={item.id.toString()} />
                })
            : null}
         </div>
    </div>
}