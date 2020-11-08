/*
 * @Author: Zeeshan  Ahmad
 * @Date:   2020-11-01 12:38:22
 * @Last Modified by:   Zeeshan  Ahmad
 * @Last Modified time: 2020-11-08 12:33:19
 */
import React from 'react';

const Welcome=(props)=>
{
    return(
        <div>
            <h2>List of Students Using Functional Component</h2>
            <p>My Name is {props.name}</p>
            <p>I am from {props.address}</p>
        </div>
    );
}
export default Welcome;