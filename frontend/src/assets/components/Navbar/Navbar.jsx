import { useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import "../Navbar/Navbar.css"

function Navbar() {

	const [activeLink, setActiveLink] = useState("home");


	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};


	return (

		<header>
			<Link to="/"><h3 className="fonteLogo">ALÔ COMUNIDADES</h3></Link>
			<nav ref={navRef} >
				<ul className="nav-ul">
				<li>
						<Link to="/" onClick={() => { showNavbar(); setActiveLink("home") }} className={activeLink === "home" ? "active-link" : ""}>HOME</Link>
					</li>
					<li>
						<Link to="/sobre" onClick={() => { showNavbar(); setActiveLink("sobre") }} className={activeLink === "sobre" ? "active-link" : ""}>QUEM SOMOS</Link>
					</li>

					<li>
						<Link to="/noticias" onClick={() => { showNavbar(); setActiveLink("noticias") }} className={activeLink === "noticias" ? "active-link" : ""}>NOTÍCIAS</Link>
					</li>
					
					<li>
						<Link to="/contato" onClick={() => { showNavbar(); setActiveLink("contato") }} className={activeLink === "contato" ? "active-link" : ""}>CONTATO</Link>
					</li>
					<li>
						<Link to="/login" onClick={() => { showNavbar(); setActiveLink("login") }} className={activeLink === "login" ? "active-link" : ""}> <FaUser />  </Link>
					</li>
					<li>
					<Link to="/doe" onClick={() => { showNavbar(); setActiveLink("doe") }} className={activeLink === "login" ? "active-link" : ""}> <button className="doarBtn">DOAR AGORA</button>  </Link>
					</li>
				</ul>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
