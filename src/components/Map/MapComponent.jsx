import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const MapComponent = () => {
	const API_KEY = process.env.GOOGLE_MAPS_API_KEY
	const { isLoaded } = useLoadScript({
		apiKey: API_KEY,
	});

	const defaultProps = {
		center: {
			lat: 41.27564239501953,
			lng: -73.94300079345703,
		},
		zoom: 11,
	};
	return (
		<div className='map'>
			{isLoaded && (
				<GoogleMap
					key={API_KEY}
					zoom={defaultProps.zoom}
					center={defaultProps.center}
					mapContainerClassName='map-container'
				></GoogleMap>
			)}
		</div>
	);
};

export default MapComponent;
