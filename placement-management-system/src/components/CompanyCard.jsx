import React from 'react'

export default function CompanyCard(props) {
    console.log(props)
    // {
    //    name:"TCS",
    //    a 
    // }
  return (
    <>
      <h4>{props.name}</h4>
      <h5>Comapany Package: {props.package}</h5>
      <p>Location:{props.location}</p>
      
    </>
  )
}
