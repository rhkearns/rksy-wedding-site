import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import StoryPage from './pages/StoryPage/StoryPage';
import Directions from './pages/Directions/Directions';
import Schedule from './pages/Schedule/Schedule';
import Faqs from './pages/Faqs/Faqs';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/story" element={<StoryPage />} />
        <Route path="/directions" element={<Directions />} />
        <Route path="/schedule" element={<Schedule /> } />
				<Route path="/faqs" element={<Faqs />} />
			</Routes>
		</>
	);
}

export default App;
