import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import Details from './pages/Details/Details';
import StoryPage from './pages/StoryPage/StoryPage';
import Faqs from './pages/Faqs/Faqs';

function App() {
	return (
		<div id="app">
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/story" element={<StoryPage />} />
				<Route path="/details" element={<Details />} />
				<Route path="/faqs" element={<Faqs />} />
			</Routes>
		</div>
	);
}

export default App;
