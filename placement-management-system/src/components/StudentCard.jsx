
import React from 'react'

export default function StudentCard(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.course}</p>
      <p>{props.college}</p>
    </>
  )
}
