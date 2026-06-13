import React from 'react'
import CompanyCard from './CompanyCard'

export const Home = () => {
  return (
    <>
     <h2>Welcome To Placement Mangement System</h2>
     <h3>Manage Students and Placement Easily</h3>
     <h1>Featured Companies</h1>

      <CompanyCard name="TCS" package="6LPA" location="Delhi"/>
      <CompanyCard name="Infosys" package="7LPA" location="Banglore"/>
      <CompanyCard name="TCS" package="6LPA" location="Delhi"/>
      <CompanyCard name="TCS" package="6LPA" location="Delhi"/>
      <CompanyCard name="TCS" package="6LPA" location="Delhi"/>
      <CompanyCard name="TCS" package="6LPA" location="Delhi"/>
      <CompanyCard name="TCS" package="6LPA" location="Delhi"/>
    </>
  )
}
