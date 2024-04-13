import React from 'react';
import './directions.scss';

const Directions = () => {
	return (
		<div className="directions-page">
			<h1>Locations</h1>
			<div className="addresses">
				<div className="location-block" id="fcp">
					<div id="fcp-address">
						<h3>Factoria at Charles Point</h3>
						<a
							href="https://maps.app.goo.gl/dteKZEHsqECJ2xQC8"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p className="address">
								5 John Walsh Blvd
								<br />
								Peekskill, New York 10566
							</p>
						</a>
					</div>
				</div>
				<div className="location-block" id="hiex">
					<div id="hiex-address">
						<h3>Holiday Inn Express & Suites</h3>
						<a
							href="https://maps.app.goo.gl/kmcMrRKgJA8UwQZD9"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p className="address">
								2 John Wahsh Blvd
								<br />
								Peekskill, New york
							</p>
						</a>
					</div>
					<div id="hiex-address"></div>
				</div>
			</div>
			{/* <h1>Directions</h1>
			<div id="directions">
				<p className="compass-block">
					{' '}
					<span className="from-the">
						From the North (via Taconic State Parkway):
					</span>
					<br /> 1. Head south on the Taconic State Parkway.
					<br /> 2. Take the exit for US-6 West toward Peekskill.
					<br /> 3. Merge onto US-6 West. <br />
					4. Continue on US-6 West and take the exit toward Welcher
					Avenue/US-9/Business District. <br />
					5. Merge onto Welcher Avenue. <br />
					6. Continue onto John Walsh Boulevard. <br />
					7. Factoria at Charles Point will be on your left.
				</p>
				<p className="compass-block">
					<span className="from-the">
						From the South (via Taconic State Parkway or Sprain Brook Parkway):
					</span>{' '}
					<br />
					1. If coming from the Taconic State Parkway, head north until you
					reach the exit for US-6 West toward Peekskill. <br />
					2. Merge onto US-6 West. <br />
					3. If coming from the Sprain Brook Parkway, head north until you reach
					the exit for US-6 West toward Peekskill. <br />
					4. Merge onto US-6 West. <br />
					5. Continue on US-6 West and take the exit toward Welcher
					Avenue/US-9/Business District. <br />
					6. Merge onto Welcher Avenue. <br />
					7. Continue onto John Walsh Boulevard. <br />
					8. Factoria at Charles Point will be on your left.
				</p>
				<p className="compass-block">
					{' '}
					<span className="from-the">From the East (via I-84 West):</span>{' '}
					<br />
					1. Take I-84 West. <br />
					2. Merge onto US-6 West via exit 20 toward Middletown. <br />
					3. Continue on US-6 West until you reach Peekskill. <br />
					4. Merge onto Welcher Avenue from US-6 West. <br />
					5. Continue onto John Walsh Boulevard. <br />
					6. Factoria at Charles Point will be on your left.
				</p>{' '}
				<p className="compass-block">
					{' '}
					<span className="from-the">
						From the West (via Bear Mountain Bridge):
					</span>{' '}
					<br />
					1. Cross the Bear Mountain Bridge heading east. <br />
					2. Continue straight onto US-6 East. <br />
					3. Follow US-6 East until you reach Peekskill. <br />
					4. Merge onto Welcher Avenue from US-6 East. <br />
					5. Continue onto John Walsh Boulevard.
					<br />
					6. Factoria at Charles Point will be on your left.
				</p>
			</div> */}
		</div>
	);
};

export default Directions;
