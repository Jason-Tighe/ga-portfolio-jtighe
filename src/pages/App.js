import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Project from '../components/Project';
import Skill from '../components/Skill';
import Body from '../components/Body';

export default function App() {
	return (
		<div className="App">
			<Header />
			<Project />
			<Skill />
			<Body />
			<Footer />
		</div>
	);
}
