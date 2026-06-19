
import React from 'react'

export default function StudentCard({student}) {
  return (
    <>
      <div className='rounded-xl shadaow-lg p-6 hover:shadow-2xl'>
        <img src={student.image} 
             alt={student.name} 
             className='w-24 h-24 rounded-lg mx-auto mb-4 border-4'
             />
        <h2 className='text-2xl font-bold text-center text-gray-800'>{student.name}</h2>
        <p className='text-center text-gray-500 mb-4'>{student.course}</p>
        <div className=''>
          <p>
            <span className='font-semibold'>College:</span>
            {student.college}</p>
          <p>
             <span className='font-semibold'>Skills:</span>
            {student.skills}</p>
        </div>
      </div>
    </>
  )
}
