import React from 'react';
import questions from '../../data/faqs';
import Question from '../../components/Question/Question';

const Faqs = () => {
	return (
		<>
			{questions.map(q => (
        <Question question={q.question} answer={q.answer} />
			))}
		</>
	);
};

export default Faqs;
