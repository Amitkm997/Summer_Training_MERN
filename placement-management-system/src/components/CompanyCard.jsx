import React from 'react'

export default function CompanyCard({name,package1,location}) {
    // const{name,package1,location}=props
    // console.log(name);
    
  return (
    <>
      <h4>{name}</h4>
      <h5>Comapany Package: {package1}</h5>
      <p>Location:{location}</p>
    </>
  )
}
