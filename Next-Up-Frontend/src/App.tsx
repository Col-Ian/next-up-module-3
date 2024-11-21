// import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
// import CharacterSheet from './states/CharacterSheet/CharacterSheet.tsx';
// import CreateCharacter from './states/CreateCharacter/CreateCharacter.tsx';
// import NavBar from './states/NavBar/NavBar.tsx';
// import LevelUpPage from './components/level-up-components/LevelUpPage/LevelUpPage.tsx';
// import HomePage from './states/HomePage/HomePage.tsx';
import api from './axios/axiosPost';

import { useEffect, useState } from 'react';

// const Dashboard = () => {
// 	return (
// 		<div className='appParent'>
// 			<div className='navBar'>
// 				<NavBar />
// 			</div>
// 			<div className='outletBody'>
// 				<Outlet />
// 			</div>
// 		</div>
// 	);
// };

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Dashboard />,
// 		children: [
// 			{
// 				path: '/Next-Up/charactersheet/:characterID',
// 				element: <CharacterSheet />,
// 			},
// 			{
// 				path: '/Next-Up/',
// 				element: <HomePage />,
// 			},
// 			{
// 				path: '/Next-Up/create-character',
// 				element: <CreateCharacter />,
// 			},
// 			{
// 				path: '/Next-Up/level-up/:characterID',
// 				element: <LevelUpPage />,
// 			},
// 		],
// 	},
// ]);

// function App() {
// 	return (
// 		<div className='backgroundDiv'>
// 			<RouterProvider router={router} />
// 		</div>
// 	);
// }

function App() {
	const [backendData, setBackendData] = useState<{
		status: string;
		data: {
			id: number;
			name: string;
			email: string;
		};
	}>();

	useEffect(() => {
		// fetch('http://localhost:5001/api/user/12345')
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		setBackendData(data);
		// 	});
	}, []);

	return (
		<div>
			{backendData === undefined ? <p>Loading...</p> : backendData.data.name}
		</div>
	);
}

export default App;
