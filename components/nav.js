import nav_styles from "../styles/Nav.module.css";
import React from "react";

import Link from "next/link";

import GithubBrandIcon from "../public/svg/github-brands.svg";
import HomeIcon from "../public/svg/house-user-solid.svg";

const Nav = ({ theme, theme_callback, toggle_callback }) => {
	const GetThemeType = () => {
		if(theme == "dark")
			return <DarkIcon/>
		else if(theme == "light")
			return <LightIcon/>
		else
			return <SolarIcon/>
	}
	
	return (
		<nav className={nav_styles.navbar}>
			<ul className={nav_styles.navbar_nav}>
				<li className={nav_styles.nav_item}>
					<Link href="/"><a className={nav_styles.nav_link}>
						<HomeIcon/>
						<span className={nav_styles.link_text}>Home</span>
					</a>
					</Link>
				</li>
				<li className={nav_styles.nav_item}>
					<Link href="https://github.com/randomdude3600/aapp5_zion_1st_qtr_pt"><a className={nav_styles.nav_link}>
						<GithubBrandIcon/>
						<span className={nav_styles.link_text}>Repo</span>
					</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;