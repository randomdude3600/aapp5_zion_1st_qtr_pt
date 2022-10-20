import Image from "next/image";
import Head from 'next/head';
import Link from 'next/link';

import React, { useState, useEffect } from "react";

import debug_ from '../components/debug_helper';

import home_styles from '../styles/Home.module.css';

import FunctionIcon from '../public/svg/function-solid.svg';
import EqualsIcon from '../public/svg/equals-solid.svg';
import LessThanEqualIcon from '../public/svg/less-than-equal-solid.svg';

export default function Home({m_posts}) {

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<nav className={home_styles.navbar}>
				<ul className={home_styles.navbar_nav}>
					<li className={home_styles.nav_item}>
						<Link href="/rational_functions"><a className={home_styles.nav_link}>
							<FunctionIcon/>
							<span className={home_styles.link_text}>Rational Functions</span>
						</a>
						</Link>
					</li>
					<li className={home_styles.nav_item}>
						<Link href="/rational_equations"><a className={home_styles.nav_link}>
							<EqualsIcon/>
							<span className={home_styles.link_text}>Rational Equations</span>
						</a>
						</Link>
					</li>
					<li className={home_styles.nav_item}>
							<Link href="/rational_inequalities"><a className={home_styles.nav_link}>
								<LessThanEqualIcon/>
								<span className={home_styles.link_text}>Rational Inequalities</span>
							</a>
							</Link>
					</li>
				</ul>
			</nav>
		</>	
	)
}
