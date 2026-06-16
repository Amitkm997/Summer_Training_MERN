import React from 'react'

export default function CompanyCard({name,role,salaryPackage}) {
    // const{name,package1,location}=props
    // console.log(name);
    
  return (
    <>
      <h4>{name}</h4>
      <h2>{role}</h2>
      <h5>Comapany Package: {salaryPackage}</h5>
      
    </>
  )
}
