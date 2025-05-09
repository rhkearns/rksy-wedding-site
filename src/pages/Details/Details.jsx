import React from 'react';
import './details.scss';
// import hotelImg from '../../images/hotel-screenshot.png';

const Details = () => {
	return (
		<div className="details-page">
			<h1 id="page-title">Wedding Weekend Details</h1>
			<h5 id="disclaimer">
				See below for weekend activities and hotel information
			</h5>
			<div className="event-info">
				<h2>Friday, April 25th</h2>
				<p>
					For those who would like to stay in Peekskill for two nights {<br />}{' '}
					we will be hosting a prosecco toast to welcome you at The Abbey Hotel,
					900 Fort Hill Rd, Peekskill, at 8:00pm. The Abbey is a 7 minute drive from the
					Holiday Inn Express. {<br />} We then welcome you to join us at the
					bar at the Abbey (while Ryan and Sam go to sleep to get ready for the
					big day!)
				</p>
			</div>
			<div className="event-info">
				<h2>Saturday, April 26th - Wedding Day!</h2>
				<h4 id="location-title">Factoria at Charles Point</h4>
				<a
					href="https://maps.app.goo.gl/dteKZEHsqECJ2xQC8"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className="address">
						5 John Walsh Blvd
						<br />
						Peekskill, New York 10566
					</span>
				</a>
				<div className="ceremony-info">
					<p>
						Shuttle bus will be leaving at 3:50pm, making 3 trips between the
						Holiday Inn Express (hotel information below) and Factoria (it's
						just down the block!)
					</p>
					<p>
						Ceremony begins at 4pm and goes to 5pm {<br />} Cocktail Hour begins
						at 5pm, followed by the reception from 6pm to 10pm
					</p>
					<p>
						At 10pm, we will head downstairs to the River Outpost Brewery for a
						cash bar to continue the celebrations
					</p>
					<p>
						Shuttle buses will run between Factoria and the Holiday Inn Express
						throughout the 10pm to 11:30pm time frame
					</p>
				</div>
			</div>
			<div className="event-info">
				<h2>Sunday, April 27th</h2>
				<p>
					We invite everyone who is staying the night to join us for breakfast
					at the Abbey Hotel, 900 Fort Hill Rd, Peekskill, from 9am to 11am on
					Sunday morning. Breakfast will be held in the Cornerstone room on the
					2nd floor of the hotel.
				</p>
			</div>
			<div className="hotel-details">
				<h2>Hotel Details</h2>
				<div id="reservation">
					<p id="hotel-instructions">
						Holiday Inn Express & Suites{<br />}
						<a
							href="https://maps.app.goo.gl/kmcMrRKgJA8UwQZD9"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="address">
								2 John Wahsh Blvd
								<br />
								Peekskill, New York
							</span>
						</a>{' '}
						<a
							href="https://www.hiexpress.com/peekskillny"
							target="_blank"
							rel="noopener noreferrer"
							id="hotel-link"
						>
							{<br />}
							Reserve your room here
						</a>
						{<br />}
						{<br />}
						Our room block is full.{<br />} There may still be rooms available
						at the Holiday Inn Express & Suites, but if there aren't when you go
						to book, please try one of the hotels listed below, or you can look
						at{' '}
						<a
							href="https://www.airbnb.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							airbnb
						</a>{' '}
						or{' '}
						<a
							href="https://www.vrbo.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							vrbo
						</a>
						.{<br />}
						<p>
							The Holiday Inn Express is a less than 2 minute drive from
							Factoria --- we would not recommend walking though, it's pretty
							industrial and there are no sidewalks.
						</p>
					</p>
					<h5>
						If you would like to stay at another hotel, here are some options,
						but keep in mind that we will not have shuttle services to and from
						these hotels:
					</h5>
					<span className="address">
						<a
							href="https://www.theabbeyinn.com/"
							target="_blank"
							rel="noopener noreferrer"
							id="hotel-link"
						>
							<h4 id="location-title">The Abbey Inn and Spa</h4>{' '}
						</a>
						900 Fort Hill Road, Peekskill, New York{<br />}
						7-10 minute drive to Factoria
					</span>
					{<br />}
					{<br />}
					<span className="address">
						<a
							href="https://visitbearmountain.com/book"
							target="_blank"
							rel="noopener noreferrer"
							id="hotel-link"
						>
							<h4 id="location-title">Bear Mountain Inn</h4>{' '}
						</a>
						3020 Seven Lakes Drive, Tomkins Cove, New York{<br />}
						16-20 Minute Drive to Factoria
					</span>
					{<br />}
					{<br />}
					<span className="address">
						<a
							href="https://www.ihg.com/holidayinnexpress/hotels/us/en/fort-montgomery/ftmny/hoteldetail"
							target="_blank"
							rel="noopener noreferrer"
							id="hotel-link"
						>
							<h4 id="location-title">
								Holiday Inn Express & Suites {<br />}West Point-Fort Montgomery
							</h4>{' '}
						</a>
						1106 Rte 9W, Fort Montgomery, New York{<br />}
						17-20 Minute Drive to Factoria
					</span>
				</div>
			</div>
			<div className="event-info">
				<h2>Transportation</h2>
				<p>
					Public transportation from NYC is available via Metro North from Grand
					Central Station to Peekskill. The train ride is about an hour and ten
					minutes and runs about every hour.{<br />}
					The train station is a 2 minute drive (ubers are available) to the
					Holiday Inn Express and a 4 minute drive to Factoria.
				</p>
			</div>
			<div className="event-info">
				<h2>
					Please reach out to Ryan and Sam if you have any questions on any of
					this!{<br />} We can't wait to celebrate with you!
				</h2>
			</div>
		</div>
	);
};

export default Details;
