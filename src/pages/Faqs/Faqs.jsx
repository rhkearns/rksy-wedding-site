import React from 'react';
import "./Faqs.scss";
import questions from '../../data/faqs';
import Question from '../../components/Question/Question';

const Faqs = () => {
	return (
		<div className='questions'>
			{questions.map(q => (
        <Question question={q.question} answer={q.answer} />
			))}
		</div>
	);
};

export default Faqs;
