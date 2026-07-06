import React from 'react'
import CompanyCard from '../pages/CompanyCard'
export default function Company() {
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
    <section className='bg-gray-100 py-16'>
         {/* Top Hiring Comapanies  */}
            <div className='max-w-7xl mx-auto px-6'>
              <h2 className='text-3xl font-bold text-center mb-10'>Top Hiring Comanies</h2>
              <div className='grid md:grid-cols-3 gap-6'>
                {/* <CompanyCard name="Google" role="Software Enginner" salaryPackage="18 LPA" />
                <CompanyCard name="Google" role="Software Enginner" salaryPackage="18 LPA" />
                <CompanyCard name="Google" role="Software Enginner" salaryPackage="18 LPA" /> */}
                {companies.map((cur)=>{
                   return <CompanyCard name={cur.name} role={cur.role} salaryPackage={cur.salaryPackage}/>
                })}
              </div>
    
            </div>
           </section>
  )
}
