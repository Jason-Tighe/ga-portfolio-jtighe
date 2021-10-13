import Contact from './Contact';
import React from 'react';

export default function Footer(props) {
	return (
		<div id="footer" className="navbar navbar bg-info">
			<Contact
				className="d-flex flex-column justify-content-center w-100"
				email=" Tighe@gmail.com "
				phone="(201)-560-3414 "
				id="footerColor"
				color="light"
			/>
		</div>
	);
}
