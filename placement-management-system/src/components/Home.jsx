import React from 'react'
import CompanyCard from './CompanyCard'
import StudentCard from './StudentCard'
import StudentRegistration from '../pages/StudentRegistration'

export const Home = () => {
  const companies=[
    {
      id:1,
      name:"Google",
      role:"Software Enginner",
      salaryPackage:"18 LPA"
    },
    {
      id:2,
      name:"Microsoft",
      role:"Frontend Developer",
      salaryPackage:"14 LPA"
    },
    {
      id:3,
      name:"Amazon",
      role:"Backend Developer",
      salaryPackage:"25 LPA"
    }
  ]
  return (
    <>
       {/* Hero Section  */}
       <section className='bg-blue-100 py-20'>
           <div className='max-w-7xl mx-auto text-center'>
            <h1 className='text-5xl font-bold text-blue-700 mb-4'>Welcome to Placement Portal</h1>
            <p className='text-xl text-gray-700 mb-8' >Helping Students Get their Dream Job</p>

            <div className='flex justify-center gap-4'>
              <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700'>Register Now</button>
              <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700'>View Companies</button>
            </div>
           </div>
       </section>

       {/* Statistics Section  */}
       <section className='max-w-7xl mx-auto px-6 py-16'>
            <h2 className='text-3xl font-bold text-center mb-10'>Placement Statistics</h2>
            <div className='grid md:grid-cols-3 gap-6'>
              <div className='bg-white shadow-lg p-8 rounded-lg text-center'>
                <h3 className='text-4xl font-bold text-blue-600'>500+</h3>
                <p className='mt-2 text-gray-600'>Students Placed</p>
              </div>
              <div className='bg-white shadow-lg p-8 rounded-lg text-center'>
                <h3 className='text-4xl font-bold text-blue-600'>50+</h3>
                <p className='mt-2 text-gray-600'>Companies Visited</p>
              </div>
              <div className='bg-white shadow-lg p-8 rounded-lg text-center'>
                <h3 className='text-4xl font-bold text-blue-600'>25 LPA</h3>
                <p className='mt-2 text-gray-600'>Highest Package</p>
              </div>
            </div>
       </section>

       {/* Top Hiring Comapanies  */}
       <section className='bg-gray-100 py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-3xl font-bold text-center mb-10'>Top Hiring Comanies</h2>
          <div>
            {/* <CompanyCard name="Google" role="Software Enginner" salaryPackage="18 LPA" />
            <CompanyCard name="Google" role="Software Enginner" salaryPackage="18 LPA" />
            <CompanyCard name="Google" role="Software Enginner" salaryPackage="18 LPA" /> */}
            {companies.map((cur)=>{
              <CompanyCard name={cur.name} role={cur.role} salaryPackage={cur.salaryPackage}/>
            })}
          </div>
        </div>
       </section>
    </>
  )
}
