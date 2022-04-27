import React from 'react';

const Grade1 = ({arr1})=>{
    
    return(
        <table border='1px'>
            <thead>
                <tr>
                {arrr1[0].map(keyName, index) => return <th key={index}>{keyName}</th>;
}}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {arr1.map(personObj,index)=>{
                        return(
                           Object.keys(personObj).forEach((key)=>{
                               <td>{personObj[key]}</td>
                           })
                        )
                    }}
                </tr>
            </tbody>
        </table>
    )
} 
export default Grade1;