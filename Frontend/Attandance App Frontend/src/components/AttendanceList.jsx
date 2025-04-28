import React from 'react'
import namesObject from '../Names.json'

export default function AttendanceList() {

 

  return (
    <>
    <div>AttendanceList</div>
    <ul>
    {namesObject.names.map((item,idx)=>{
        return (
        <li key={idx}>{item.name}</li>
        )
    })}
    </ul>
    </>
  )
}
