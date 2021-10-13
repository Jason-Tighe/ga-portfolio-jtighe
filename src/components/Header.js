import Contact from './Contact';
import React from 'react';

export default function Header(props) {
	return (
		<>
			<div id="header" className="p-2 navbar navbar bg-info">
				<div id="header" className="mr-auto p-2">
					<h1 className="m-2 p-1 display-2 text-light text-start">
						Jason Tighe
					</h1>
					<figure>
						<small>
							<blockquote id="Hbody" className="blockquote text-dark">
								<small>
									It's never too late to be who you might have been.
								</small>
							</blockquote>
							<figcaption id="Hbody" className="blockquote-footer text-dark">
								George Eliot
							</figcaption>
						</small>
					</figure>
				</div>
			</div>
			<Contact
				className="d-flex flex-row justify-content-evenly bg-d border border-dark"
				display="display-6"
				id="link"
				color="dark"
			/>
		</>
	);
}
