import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
	const location = useLocation();
	// This will be true only when you are on the homepage.
	const isHomePage = location.pathname === '/';

	return (

		<section className="navbar">
				<div className="nav-links">
					<a href="/">Home</a>
					<a href="/#experience">Experience</a>
					{/* <a href="#">Acheivements</a> */}
					<Link to="/publications">Publications</Link>
					<a href="/#contact">Contact</a>
					
				</div>
		</section>
	)	
}

export default Navbar;