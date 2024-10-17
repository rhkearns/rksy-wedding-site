import React from 'react';
import './directions.scss';
import hotelImg from '../../images/hotel-screenshot.png';

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
						<div id="reservation">
							<p id="hotel-instructions">
								A room block is available for the night of Saturday, April 26.
								Please select "Group Rate" in the "Rate Preference dropdown and
								enter code "YKW" to receive the discounted price.
							</p>
							<a 
								href="https://www.hiexpress.com/peekskillny" 
								target="_blank" 					
								rel="noopener noreferrer"
								id="hotel-link" >
								Reserve your room here
							</a>
							<img
								src={hotelImg}
								alt="screenshot of the hotel website"
								id="hotel-img"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Directions;
