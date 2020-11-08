/*
 * @Author: Zeeshan  Ahmad
 * @Date:   2020-11-01 11:53:02
 * @Last Modified by:   Zeeshan  Ahmad
 * @Last Modified time: 2020-11-08 12:56:18
 */
import React from "react";
import ClassComponent from './ClassComponent';
import Empdata from './EmployData';

function ClassRender(){
  return Empdata.map((item)=>
  <ClassComponent
  name={item.name}
  designation={item.designation}
  />
  ) 
}
export default ClassRender;
  
   