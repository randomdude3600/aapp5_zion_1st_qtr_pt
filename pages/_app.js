import '../styles/globals.css';

import Nav from "../components/nav";
import Scbtn from "../components/scroll_to_top";
import Footer from "../components/footer";

import React, { useState, useCallback,  useEffect } from "react";

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Nav/>
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