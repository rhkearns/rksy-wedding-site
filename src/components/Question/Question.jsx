import React from 'react'

const Question = (q) => {
  return (
    <>
      <h2>{q.question}</h2>
      <h3>{q.answer}</h3>
    </>
 )
}

export default Question