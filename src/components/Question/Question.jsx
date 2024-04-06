import React from 'react';
import './Question.scss';

const Question = q => {
	return (
		<div className='question-block'>
			<h2 className="question">{q.question}</h2>
			<p className="answer">{q.answer}</p>
		</div>
	);
};

export default Question;
