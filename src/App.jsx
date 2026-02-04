import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Gallery from './components/pages/Gallery'
import Inventory from './components/pages/Inventory'
import Trades from './components/pages/Trades'
import {jwtDecode} from 'jwt-decode' ;
import Dashboard from "./components/Admin/Dashboard";
import Publish from "./components/Admin/Publish";
import Remove from "./components/Admin/Remove";
import ATrades from "./components/Admin/Trades";



function App() {
  return (
		<>
			<Router>
				<Home />
				<Routes>
					<Route path="/" element={<Gallery />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/inventory" element={<Inventory />} />
					<Route path="/trades" element={<Trades />} />
					<Route path="/admin" element={<Dashboard />} />
					<Route path="/admin/publish" element={<Publish />} />
					<Route path="/admin/remove" element={<Remove />} />
					<Route path="/admin/trades" element={<ATrades />} />
				</Routes>
			</Router>
		</>
	);
}

export default App
