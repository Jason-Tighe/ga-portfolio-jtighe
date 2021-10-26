import Hobby from './Hobby';
import React from 'react';

export default function Body(props) {
	return (
		<div>
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 id="title" className="display-3 p-3">
						<u>
							<b>About Me: </b>
						</u>
					</h1>
					<p id="body" className="lead text-start ">
						I am a New Jersey based software engineer with a background in
						accounting and information systems. I am skilled at tackling complex
						problems using quick wit and a calm mentality. I've always been
						passionate about growth and creativity, which has been made possible
						by developing my skills with software development. Additionally, my
						experience in accounting and information systems has allowed me to
						engage each project with a well rounded and fresh perspective.
					</p>
				</div>
			</div>
			<div className="container p-1">
				<h1 id="title">
					<u>
						<b>Hobbies and Interests:</b>
					</u>
				</h1>
				<p id="body" className="text-center">
					When I'm not expanding on my software development skills I like to
					spend my time playing videogames with friends, reading comics, trying
					new recipes and ways to brew coffee, and as you can see I also enjoy
					drawing.
				</p>
			</div>
			<Hobby />
		</div>
	);
}
