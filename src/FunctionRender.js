/*
 * @Author: Zeeshan  Ahmad
 * @Date:   2020-11-01 11:53:02
 * @Last Modified by:   Zeeshan  Ahmad
 * @Last Modified time: 2020-11-08 13:06:56
 */
import React from "react";
import Welcome from './Welcome';
import studentData from "./StudentData"

function FunctionRender(){
  return(
  
studentData.map((item)=>
  <Welcome
  name={item.name}
  address={item.address}/>)
  )
}

export default FunctionRender;
  
   