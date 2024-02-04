import React from 'react';
import './Question.scss';

const Question = q => {
	return (
		<div className='question-block'>
			<h2 className="question">{q.question}</h2>
			<h3 className="answer">{q.answer}</h3>
		</div>
	);
};

export default Question;
