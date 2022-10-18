import Image from "next/image";
import Head from 'next/head';
import Link from 'next/link';

import React, { useState, useEffect } from "react";

import debug_ from '../components/debug_helper';

import home_styles from '../styles/Home.module.css';

export default function Home({m_posts}) {

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main className={home_styles.main_div}>
				<div className={home_styles.inner_div} >
				<Link href={`/rational_equations`}>
					<a>Rational Equations</a>
				</Link>
				<Link href={`/rational_expressions`}>
					<a>Rational Expressions</a>
				</Link>
				<Link href={`/rational_inequalities`}>
					<a>Rational Inequalities</a>
				</Link>
				</div>
			</main>
		</>	
	)
}
