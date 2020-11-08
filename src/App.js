/*
 * @Author: Zeeshan  Ahmad
 * @Date:   2020-11-01 11:53:02
 * @Last Modified by:   Zeeshan  Ahmad
 * @Last Modified time: 2020-11-08 12:33:59
 */
import React from "react";
import Welcome from './Welcome';
import studentData from "./StudentData";

function App(){
  return studentData.map((item)=>
  <Welcome
  name={item.name}
  address={item.address}
  />
  ) 
}

export default App;
  
   