import React from 'react'

export default function CompanyCard({name,role,salaryPackage}) {
    // const{name,package1,location}=props
    // console.log(name);
    
  return (
    <>
       <div className='bg-white p-6 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold mb-3'>{name}</h2>
        <p>
          <strong>Role:</strong>{role}
        </p>
        <p>
           <strong>Package:</strong>{salaryPackage}
        </p>
        <button  className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 mt-4'>
          View Details
        </button>
       </div>
    </>
  )
}
