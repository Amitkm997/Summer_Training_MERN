import React from 'react'
import CompanyCard from './CompanyCard'
import StudentCard from './StudentCard'
import StudentRegistration from '../pages/StudentRegistration'

export const Home = () => {
  return (
    <>
      <h2>Welcome To Placement Mangement System</h2>
      <h3>Manage Students and Placement Easily</h3>
      
<StudentRegistration />
     
      <h1>Featured Companies</h1>
      <CompanyCard name="TCS" package1="6LPA" location="Delhi" />
      <CompanyCard name="Infosys" package1="7LPA" location="Banglore" />
      <CompanyCard name="TCS" package1="6LPA" location="Delhi" />
      <CompanyCard name="TCS" package1="6LPA" location="Delhi" />
      <CompanyCard name="TCS" package1="6LPA" location="Delhi" />
      <CompanyCard name="TCS" package1="6LPA" location="Delhi" />
      <CompanyCard name="TCS" package1="6LPA" location="Delhi" />


      {/* student cart  */}
      <StudentCard name="Amit" course="MERN" college="Noida" />
    </>
  )
}
