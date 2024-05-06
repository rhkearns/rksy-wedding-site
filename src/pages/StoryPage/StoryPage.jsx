import React from 'react';
import './StoryPage.scss';
import bosCommons from '../../images/bos-commons.jpg';
import firstTrip from '../../images/first-trip-nyc.JPG';
import nye from '../../images/nye.JPG';
import moving from '../../images/moving.JPG';
import zoom from '../../images/zoom.JPG';
import vaMountain from '../../images/va-mountain.jpg';

const StoryPage = () => {
	return (
		<>
			<h1>Our Story</h1>
			<div id="story-block">
				<p>
					Ryan and Sam of Park Slope were proud to say that they were perfectly
					nerdy, thank you very much. They were the last people you'd expect to
					be part of a magical love story, though they are exactly the kind of
					people who enjoy such nonsense.
				</p>
				<img src={bosCommons} alt="Boston Commons" className="cover-img bos" />
				<p>
					It was an oppressively hot day in late June 2020. At least, let’s
					pretend it was; we have no way of remembering what the weather was
					like three and a half years ago. But the streets of Manhattan were
					empty; it was the height of the COVID-19 pandemic, and the city was in
					lockdown. There was a pot next to the window, a hook devoted to cloth
					masks by the door, and a pile of dishes in the sink (we're assuming),
					as Samantha Yudin settled into her totally comfortable and not at all
					rigid armchair with her laptop (and bluetooth speaker because her
					laptop speakers were trash) on a stool next to her. It was Sunday
					afternoon and time for read-aloud, a chance to socialize with some
					random people from the internet with whom she had formed an unlikely
					friendship. Pulling up the Zoom link and entering the room, she
					scanned the small windows (because she obviously arrived late despite
					not doing anything), looking at a dozen familiar faces she had become
					accustomed to over the past three months. But there was someone new
					that day.
				</p>
				<p>
					That same Sunday, 300 miles away in Alexandria, Virginia, Ryan Kearns
					was sitting down at desk, his custom-built pc whirring beside him. He
					had only arrived back in Virginia a week earlier, after a long day of
					travel, including 5 airports across 4 countries and 9 time zones.
					After being stuck in his bedroom in Armenia for over 3 months, he was
					ready for some socialization with people whom he could understand. The
					small conversations in a Facebook group (that was spun off of another
					Facebook group that was for fans of a podcast) had provided some
					entertainment, but when he saw that a group was getting together every
					Sunday to read one of his favorite book series, he thought, “that’s
					perfect!” Unfortunately, they met at 1am Armenian time, so he’d have
					to wait until he got home. As the months of isolation ticked on, and 4
					trips home were canceled, he began to look forward to the day he’d
					finally be able to join; and when he finally got back to his bare
					apartment in Old Town, he made sure to have his computer set up ASAP,
					so that come Sunday, he’d be ready to make some new friends. As the
					faces began popping up on his screen (because, let’s be honest, he was
					there early), he eagerly began the first real socializing he’d had
					since March.
				</p>
				<div className="photo-group">
					<img
						src={zoom}
						alt="us meeting on Zoom"
						className="photo-group-img vert"
					/>
					<div className="photo-group-text">
						<p>
							Over the rest of the summer, they both settled into the routine of
							pulling up to their computers on Sunday afternoons, pulling a book
							off their shelves, and diving into their stories. Ryan became
							known for creating funny voices for familiar characters, and
							enjoyed hearing the suppressed laughter from others. While he was
							finding new ways to add his personality to a story they all knew
							by heart, Sam was charmed by his smile and his sense of humor.
							Steadily she started looking forward to read-aloud so she could
							see him.
						</p>{' '}
					</div>
				</div>
				<p>
					Finally in October, Sam decided to take matters into her own hands. She pulled
					open Facebook Messenger, typed out a message, and let it sit there
					unsent for…hours? Days? Who’s to say? But eventually, she hit send and
					waited anxiously for him to respond: <br />
					<span className="message">
						Samantha, 12:13am: “Hey! I just wanted to tell you that I love the
						voices you do during the read alouds! I know we haven't interacted
						on there much but I wanted to let you know”
						<br /> Ryan, 10:24am: “Haha glad you like them! I’ve got a couple
						prepped for this week, an old friend returning and a new one that
						everyone is going to hate”{' '}
					</span>
					<br />
					(Looking back at this over three years later, Ryan has no idea what
					voices he’s referring to).
				</p>
				<p>
					{' '}
					That was it, just a quick back and forth. Ryan thought nothing of it,
					but Sam hoped it was the start of something more. Two weeks later (and
					nothing more from Ryan), she decided to reach out again. This time,
					the conversation didn’t stop.
				</p>{' '}
				<div className="photo-group">
					<div className="photo-group-text">
						<p>
							They decided to conduct their first date via Zoom; when they
							finally hit “end call” after 6 hours, Ryan thought to himself,
							“Ok, this could be something”. That pattern continued; each time
							they spoke, neither seemed to want to hang up. They learned what
							they had in common, including but not limited to shared love for
							disappointing sports teams, proper bagels and pizza (don’t try to
							pretend that stuff in DC was worth eating), and fantastical
							stories that suck you in and keep hold of you for decades.
						</p>{' '}
						<p>
							Eventually, with a Thanksgiving in New Jersey coming up, Ryan
							suggested meeting in person, which Sam was eager to accept…at
							first; in the days leading up to the meet, the thoughts began to
							spiral. “What if we don’t get along? What if we have nothing to
							talk about? What if he smells bad?????” Finally the Saturday after
							Thanksgiving came. Ryan packed a few day’s belongings in his
							backpack, and made his way into Manhattan, following the familiar
							route he took to high school, hopeful that this trip would be the
							first of many.
						</p>{' '}
					</div>
					<img
						src={firstTrip}
						className="photo-group-img vert"
						alt="us in NYC"
					/>
				</div>
				<p>
					Sam spotted Ryan first, ascending the escalator from the PATH train.
					“He’s real,” she said to herself, as he scanned the crowd, his eyes
					finally alighting on her masked face just beyond the turnstiles. There
					in the World Trade Center Oculus, they embraced for the first time.
				</p>
				<p>
					{' '}
					Sam led Ryan on a walk around the Manhattan waterfront, showing off
					her City. Ryan, weighed down by a heavy backpack and not wearing the
					best shoes for walking, did his best to power through. (Sam’s still
					sorry about this!) Over the next two days they wandered the city,
					getting to know each other as much as possible before Ryan left on
					Monday. He ended up staying until Wednesday. He knew within 4 days
					that any day spent with Sam was better than any day without her.
				</p>
				<div className="photo-group">
					<img
						src={nye}
						alt="New Years Eve"
						className="photo-group-img horiz"
					/>
					<div className="photo-group-text">
						<p>
							{' '}
							They settled into a new routine. Texting or calling daily, Zoom
							dates every so often, and Facetiming every night before bed. It
							was during one of these Facetimes that Ryan admitted that he knew
							if they were to make it, he would have to move to New York; Sam,
							knowing that he didn’t want to live in Manhattan, decided to
							compromise, and said “well, we can live in Brooklyn.”
						</p>{' '}
						<p>
							After months of back and forth, New Years and Valentines in
							Virginia, trips to New York in January and March, New traditions
							were made, holidays celebrated, and they met each other’s friends
							and families.
						</p>
					</div>
				</div>
				<p>
					Ryan hadn’t been able to find work during the pandemic, nor was he
					entirely certain what he wanted to do. Eventually it became clear that
					with Sam in New York, moving back in with his parents in New Jersey
					while looking for work in New York became the logical next step
					(because he definitely could not fit in her tiny East Village
					apartment). Thankfully, Sam was able to assist in the move (and
					throwing out all the unnecessary clutter Ryan had accumulated in his 6
					years in the DC Metro area).
				</p>
				<div className="photo-group">
				<img
						src={moving}
						alt="moving ryan"
						className="photo-group-img vert"
					/>
					<div className="photo-group-text">
						<p>
							They settled again into another new routine, spending the work
							week apart, and weekends together in New York. Ryan began enjoying
							his time in the big city, something he wasn’t sure was going to
							happen. But the continual job hunting was weighing on him. The
							stay in East Hanover was only supposed to last a few months, but
							there was no end in sight. Finally, after Ryan voiced his regret
							that he changed his major from computer science in college, Sam
							provided the spark: “you can just do a software engineering
							bootcamp.” So that’s what he did, though the delay in starting a
							new career meant that Sam had to follow his lead and moved into
							her parent’s spare room and eventually bit the bullet and joined
							Ryan in NJ when her parents moved to Connecticut. When Ryan
							finished he bootcamp, and found a job, they were finally able to
							continue their lives together in Brooklyn.
						</p>
					</div>
					
				</div>
				<p>
					Daily walks in Prospect Park, trivia nights at Park Life, Van Lueween
					ice cream trips, dinners with friends, summer afternoons reading in
					the park, farmers market Saturdays and bagel breakfast Sundays, Mets
					games and Red Wings games, and of course the holiday tradition of
					ordering way too much Chinese food make up their lives together in
					their new home.
				</p>
				<p>
					In addition to their day-to-days in Brooklyn, they were able to spend
					holidays with family in New Jersey and Connecticut, weeks at LBI,
					visiting family and friends in Florida, Boston, Maryland, Virginia,
					Raleigh, South Carolina, Ohio, and Long Island. They were able to
					celebrate many friends' weddings together. A year of forming a new
					life together followed, during which Ryan began planning and designing
					a ring. Their daily walk in Prospect Park emerged as the obvious time
					to propose. So on a beautiful fall evening, on their daily walk, Ryan
					directed them to their summer reading spot on the main lawn. He began
					saying nice things about Sam and their life together, and Sam was
					caught completely by surprise - but happily said yes when he pulled
					out a ring.
				</p>
				<p>
					When Sam first sent that message in the fall of 2020, not knowing
					whether he would respond, not knowing he would be exactly what she was
					looking for, not knowing whether he would fall for her, not knowing
					that he would move 300 miles for her… she couldn’t know that 4 and a
					half years later, her favorite people would gather in a spot on the
					Hudson River, holding up their glasses and saying in loud voices: “To
					Ryan and Sam, husband and wife!“
				</p>
				<img src={vaMountain} alt="Us in Virginia" className="cover-img" />
			</div>
		</>
	);
};

export default StoryPage;
