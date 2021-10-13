import React from 'react';

export default function Project(props) {
	return (
		<>
			<div className="container">
				<div
					id="carouselExampleCaptions"
					className="carousel slide"
					data-bs-ride="carousel"
				>
					<div className="carousel-indicators visually-hidden">
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="0"
							className="active"
							aria-current="true"
							aria-label="Slide 1"
						></button>
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="1"
							aria-label="Slide 2"
						></button>
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="2"
							aria-label="Slide 3"
						></button>
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="3"
							aria-label="Slide 4"
						></button>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src="../img/Cube.png" className="d-block w-100" alt="..." />
							<div className="card">
								<div className="card-body">
									<h5 className="card-title display-6">
										<u>
											<b>QR Cube</b>
										</u>
									</h5>
									<p className="card-text">
										The inspiration behind this project came from the a
										favorite's list or top friends from old social media sites.
										I have a lot of ideas to add, but for now, it is a way to
										share links, images, contact info, really anything that can
										be turned into a QR code. Aside from sharing, it could be
										used a quick and mobile bookmark.
									</p>
									<a
										id="button"
										href="https://github.com/slowdolphin/QRCube"
										target="_blank"
										rel="noreferrer"
										className="btn btn-primary"
									>
										Deployed Site
									</a>{' '}
									<a
										id="button"
										href="https://qrcube-cap.herokuapp.com/"
										target="_blank"
										rel="noreferrer"
										className="btn btn-primary"
									>
										Repo
									</a>
								</div>
							</div>
						</div>

						<div className="carousel-item">
							<img src="../img/Funk.png" className="d-block w-100" alt="..." />
							<div className="card">
								<div className="card-body">
									<h5 className="card-title display-6">
										<u>
											<b>Funk!</b>
										</u>
									</h5>
									<p className="card-text">
										This web app was created as a way to post anonymously about
										how you're doing. Whether it was a good day or a bad one, or
										when you just need to get something off your chest, this web
										app is a place for your. Additionally, it pulls Dad jokes
										and motivational quotes as a "Mood booster".{' '}
										<b>Press the + button to add begin adding a post.</b>
									</p>
									<a
										id="button"
										href="https://funk-that.herokuapp.com/home"
										target="_blank"
										rel="noreferrer"
										className="btn btn-primary"
									>
										Deployed Site
									</a>{' '}
									<a
										id="button"
										href="https://github.com/slowdolphin/expression"
										target="_blank"
										rel="noreferrer"
										className="btn btn-primary"
									>
										Repo
									</a>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<img src="../img/Covid.png" className="d-block w-100" alt="..." />
							<div className="card">
								<div className="card-body">
									<h5 className="card-title display-6">
										<u>
											<b>CovidTRKR</b>
										</u>
									</h5>
									<p className="card-text">
										This web app allows the user to register an account,
										sign-in, log their sypmtoms, research data realted to covid,
										and locate a nearby facility. This is a helpful tool that
										any company, school, or othe facility can use to monitor
										their communities health. You can registar an account or use
										the test account credientails:{' '}
										<b> Email: test@email.com PW: test</b>
									</p>
									<a
										id="button"
										href="https://covid-tracker-jt.herokuapp.com/"
										className="btn btn-primary"
										target="_blank"
										rel="noreferrer"
									>
										Deployed Site
									</a>{' '}
									<a
										id="button"
										href="https://github.com/slowdolphin/Unit4-project"
										className="btn btn-primary"
										target="_blank"
										rel="noreferrer"
									>
										Repo
									</a>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<img src="../img/Dino.png" className="d-block w-100" alt="..." />
							<div className="card">
								<div className="card-body">
									<h5 className="card-title display-6">
										<u>
											<b>DinoRunner</b>
										</u>
									</h5>
									<p className="card-text">
										This was one my biggest steps forward towards becoming a
										software engineer. It is a simple Javascript game modeled
										after Google's "No-internet-DinoRunner". This uses css
										animation for game play, but uses javascript code it define
										parameters for collision and jumping.
										<b>Controls: use Left-Click or SpaceBar to jump.</b>
									</p>
									<a
										id="button"
										href="https://dino-runner-p1.herokuapp.com/"
										className="btn btn-primary"
										target="_blank"
										rel="noreferrer"
									>
										Deployed Site
									</a>{' '}
									<a
										id="button"
										href="https://github.com/slowdolphin/Project1-GameTime/tree/master"
										className="btn btn-primary"
										target="_blank"
										rel="noreferrer"
									>
										Repo
									</a>
								</div>
							</div>
						</div>
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</>
	);
}
