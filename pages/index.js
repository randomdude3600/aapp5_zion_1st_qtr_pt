import Image from "next/image";
import Head from 'next/head';
import Link from 'next/link';

import React, { useState, useEffect } from "react";

import debug_ from '../components/debug_helper';

import inner_nav from '../styles/InnerNav.module.css';

import FunctionIcon from '../public/svg/function-solid.svg';
import EqualsIcon from '../public/svg/equals-solid.svg';
import LessThanEqualIcon from '../public/svg/less-than-equal-solid.svg';

export default function Home({m_posts}) {

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<nav className={inner_nav.navbar}>
				<ul className={inner_nav.navbar_nav}>
					<li className={inner_nav.nav_item}>
						<Link href="/rational_functions"><a className={inner_nav.nav_link}>
							<FunctionIcon/>
							<span className={inner_nav.link_text}>Rational Functions</span>
						</a>
						</Link>
					</li>
					<li className={inner_nav.nav_item}>
						<Link href="/rational_equations"><a className={inner_nav.nav_link}>
							<EqualsIcon/>
							<span className={inner_nav.link_text}>Rational Equations</span>
						</a>
						</Link>
					</li>
					<li className={inner_nav.nav_item}>
							<Link href="/rational_inequalities"><a className={inner_nav.nav_link}>
								<LessThanEqualIcon/>
								<span className={inner_nav.link_text}>Rational Inequalities</span>
							</a>
							</Link>
					</li>
				</ul>
			</nav>
		</>	
	)
}
