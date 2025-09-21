import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./StayHealthy.png"; // Import the logo image
import { useState } from "react";

const Navbar = () => {
	const loggedIn = false;

	// Define the handleClick function to toggle the navigation menu

	const handleClick = () => {
		const navLinks = document.querySelector(".nav__links");
		const navIcon = document.querySelector(".nav__icon i"); // Toggle the 'active' class on the navigation links
		navLinks.classList.toggle("active"); // Toggle the Font Awesome icons (bars and times)
		if (navLinks.classList.contains("active")) {
			navIcon.classList.remove("fa-bars");
			navIcon.classList.add("fa-times");
		} else {
			navIcon.classList.remove("fa-times");
			navIcon.classList.add("fa-bars");
		}
	};
	return (
		<>
			<nav>
				{/* <!-- Navigation logo section --> */}
				<div className="nav__logo">
					{/* <!-- Link to the home page --> */}
					<Link
						to="/"
						style={{
							textDecoration: "none",
							display: "flex",
							marginLeft: "20px",
						}}
					>
						StayHealthy
						{/* <!-- Insert an SVG icon of a doctor with a stethoscope --> */}
						<img
							src={logo}
							alt="main icon"
							style={{
								width: "40px",
								height: "40px",
								marginBottom: "8px",
								marginLeft: "5px",
							}}
						/>
					</Link>
					{/* <!-- A span element for styling purposes --> */}
					<span></span>
				</div>
				{/* <!-- Navigation icon section with an onClick event listener --> */}
				<div className="nav__icon" onClick={handleClick}>
					{/* <!-- Font Awesome icon for bars (hamburger menu) --> */}
					<i className="fa fa-times fa fa-bars"></i>
				</div>

				{/* <!-- Unordered list for navigation links with 'active' className --> */}
				<ul className="nav__links active">
					{/* <!-- List item for the 'Home' link --> */}
					<li className="link">
						<Link to="/">Home</Link>
					</li>
					{/* <!-- List item for the 'Appointments' link --> */}
					<li className="link">
						<Link to="/instant-consultation">Appointments</Link>
					</li>
					{/* <!-- List item for the 'Sign Up' link with a button --> */}
					{loggedIn ? (
						<>
							<li className="link">
								<Link to="#">Welcome, ABDALLA</Link>
							</li>
							<li className="link">
								<Link to="/signup">
									<button className="btn1">Logout</button>
								</Link>
							</li>
						</>
					) : (
						<>
							<li className="link">
								<Link to="/signup">
									<button className="btn1">Sign Up</button>
								</Link>
							</li>
							{/* <!-- List item for the 'Login' link with a button --> */}
							<li className="link">
								<Link to="/login">
									<button className="btn1">Login</button>
								</Link>
							</li>
						</>
					)}{" "}
				</ul>
			</nav>
		</>
	);
};

export default Navbar;

