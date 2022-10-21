import '../styles/globals.css';

import Nav from "../components/nav";
import Scbtn from "../components/scroll_to_top";
import Footer from "../components/footer";

import React, { useState, useCallback,  useEffect } from "react";

function MyApp({ Component, pageProps }) {
	const theme_map = {
		dark: 'light',
		light: 'solar',
		solar: 'dark'
	};

	let [currentTheme, useTheme] = useState(
		(Object.keys(theme_map)[0]));

	const toggle_theme = useCallback(() => {
		useTheme(theme_map[currentTheme]);
	});

	return (
		<div className={currentTheme}>
			<Nav theme={currentTheme} theme_callback={toggle_theme} theme_map={theme_map} />
			{/* TODO: window resize event set transition property */}
			<false_body style={{transition: 1 ? 'none' : '',}}></false_body>
			<article>
				<div className={`inner_root`}>
					<Component {...pageProps} />
				</div>
				<Footer />
			</article>
			<Scbtn />
		</div>
	)
}

export default MyApp