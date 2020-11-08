/*
 * @Author: Zeeshan  Ahmad
 * @Date:   2020-11-01 14:47:57
 * @Last Modified by:   Zeeshan  Ahmad
 * @Last Modified time: 2020-11-08 12:55:00
 */
'use strict';

import React,{Component} from 'react';
class ClassComponent extends Component
{
    render()
    {
        return(
            <div>
                <h2>List of Employees Using Class Component</h2>
                <p>My Name is {this.props.name}</p>
                <p>I am from {this.props.designation}</p>
            </div>
        );
    }
}

export default ClassComponent;