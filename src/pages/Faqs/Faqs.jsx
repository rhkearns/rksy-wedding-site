import React from 'react';
import './Faqs.scss';
import questions from '../../data/faqs';
import Question from '../../components/Question/Question';

const Faqs = () => {
	return (
		<div className="questions">
			{questions.map(q => (
				<Question question={q.question} answer={q.answer} />
			))}
			<h4>
				If you have any other questions, feel free to email Sam and Ryan:{' '}
				<a
					href="mailto:rksy18371@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
					id="email-link"
				>
					rksy18371@gmail.com
				</a>
			</h4>
		</div>
	);
};

export default Faqs;
