import React from 'react';

export default function Contact(props) {
	return (
		<div id="banner" className={props.className}>
			<a
				id={props.id}
				className={`link-${props.color}`}
				href="https://www.linkedin.com/in/jsntighe/"
				target="_blank"
				rel="noreferrer"
			>
				<i className={`bi bi-linkedin ${props.display}`}> {props.linkedin} </i>
			</a>
			<a
				id={props.id}
				className={`link-${props.color}`}
				target="_blank"
				rel="noreferrer"
				href="https://github.com/Jason-Tighe"
			>
				<i className={`bi bi-github ${props.display}`}> {props.github}</i>
			</a>
			<a
				id={props.id}
				className={`link-${props.color}`}
				href="../img/JTResume.pdf"
				target="_blank"
				rel="noreferrer"
			>
				<i className={`bi bi-file-earmark-text ${props.display}`}>
					{' '}
					{props.resume}
				</i>
			</a>
			<a
				id={props.id}
				className={`link-${props.color}`}
				href="mailto:Tighe59@gmail.com"
				target="_blank"
				rel="noreferrer"
			>
				<i className={`bi bi-envelope ${props.display}`}> {props.email}</i>
			</a>
			<a id={props.id} className={`link-${props.color}`} href="tel:+2015603414">
				<i className={`bi bi-telephone ${props.display}`}> {props.phone}</i>
			</a>
		</div>
	);
}
