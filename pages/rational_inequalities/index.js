import Image from "next/image";
import Head from 'next/head';
import Link from 'next/link';

import React, { useState, useEffect } from "react";
import matter from "gray-matter";

import debug_ from '../../components/debug_helper';

import inner_nav from '../../styles/InnerNav.module.css';

import { getStaticPathsHelper  } from "../../components/page_generator";

const file_path = "posts/rational_inequalities/examples";
const cwd_file_path = "rational_inequalities/examples";

export default function rational_functions({paths}) {

	return (
		<>
			<Head>
				<title>Rational Equations</title>
			</Head>
			<main className={""}>
				<h1>Rational Function</h1>
				<p>
					What are Rational Inequalities
				</p>
				<nav className={inner_nav.navbar}>
					<ul className={inner_nav.navbar_nav}>
						{paths.map((i, k) => {
							return (
								<li className={inner_nav.nav_item}>
									<Link key={k} href={`${cwd_file_path}/${i.params.slug}`}><a className={inner_nav.nav_link}>
										<span className={inner_nav.link_text}>{i.params.slug}</span>
										</a>
										</Link>
									{debug_(`${cwd_file_path}/${i.params.slug}`)}
								</li>
							)
						})}

					</ul>
				</nav>
			</main>
		</>	
	)
}

export async function getStaticProps() {
	const static_paths = getStaticPathsHelper(file_path);
	
	return { props: { paths: (await static_paths).paths, } };
}