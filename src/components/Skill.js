import React from 'react';

export default function Skill(props) {
	const languages = ['Javascript', 'Python', 'SQL'];

	const frontend = ['Svelte', 'React', 'Vue'];
	const backend = ['Express', 'Node.Js', 'Django'];
	const database = ['MongoDB', 'MySQL', 'PostgreSQL'];

	const databaseList = database.map((dbSkill, index) => {
		return (
			<div
				id="button"
				key={index}
				className="p-2 m-1 badge w-25 rounded-pill bg-info text-dark"
			>
				{dbSkill}
			</div>
		);
	});
	const frontendList = frontend.map((feSkill, index) => {
		return (
			<div
				id="button"
				key={index}
				className="p-2 m-1 badge w-25  rounded-pill bg-info text-dark"
			>
				{feSkill}
			</div>
		);
	});

	const languageList = languages.map((lSkill, index) => {
		return (
			<div
				id="button"
				key={index}
				className="p-2 m-1 badge w-25  rounded-pill bg-info text-dark"
			>
				{lSkill}
			</div>
		);
	});
	const backendList = backend.map((beSkill, index) => {
		return (
			<div
				id="button"
				key={index}
				className="p-2 m-1 badge w-25  rounded-pill bg-info text-dark"
			>
				{beSkill}
			</div>
		);
	});

	return (
		<>
			<div className="container p-2">
				<div className="d-flex justify-content-evenly">
					Front-End {frontendList}
				</div>
				<div className="d-flex justify-content-evenly">
					Back-End {backendList}
				</div>
				<div className="d-flex justify-content-evenly">
					Databases {databaseList}
				</div>
				<div className="d-flex justify-content-evenly">
					Languages {languageList}
				</div>
			</div>
		</>
	);
}
