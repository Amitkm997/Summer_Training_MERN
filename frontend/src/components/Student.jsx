import React from 'react'
import StudentCard from '../pages/StudentCard'
export default function Student() {
      const students=[
     {
      id:1,
      name:"Amit Kumar",
      course:"B.Tech IT",
      skills:"Reactjs,Nodejs,Mongodb",
      college:"AIT Kanpur",
      image:"https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
     },
     {
      id:2,
      name:"Amit Kumar",
      course:"B.Tech IT",
      skills:"Reactjs,Nodejs,Mongodb",
      college:"AIT Kanpur",
      image:"https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
     },
     {
      id:2,
      name:"Amit Kumar",
      course:"B.Tech IT",
      skills:"Reactjs,Nodejs,Mongodb",
      college:"AIT Kanpur",
      image:"https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
     }
  ]
  return (
    <>
       {/* StudentCard  */}
      <section>
        <h2 className='text-3xl font-bold text-center mb-10 mt-10'>Featured Students</h2>

        <div className='grid md:grid-cols-3 gap-6 '>
            {
              students.map((student)=>(
                <StudentCard student={student}/>
              ))
            }
        </div>
       </section>
    </>
  )
}
