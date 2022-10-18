import Image from "next/image";
import Head from 'next/head';
import Link from 'next/link';

import React, { useState, useEffect } from "react";
import matter from "gray-matter";

import debug_ from '../../components/debug_helper';

import home_styles from '../../styles/Home.module.css';

import { getStaticPathsHelper  } from "../../components/page_generator";

const file_path = "posts/rational_equations/examples";
const cwd_file_path = "rational_equations/examples";

export default function rational_equation({paths}) {

	return (
		<>
			<Head>
				<title>Rational Equations</title>
			</Head>
			<main className={""}>
				<h1>Rational Equations Page</h1>
				<p>
					What are rational Equations
					lorem...
				</p>
				{paths.map((i, k) => {
					return (
						<div>
							<Link href={`${cwd_file_path}/${i.params.slug}`}>
								<a>go here</a>
							</Link>
							{debug_(`${cwd_file_path}/${i.params.slug}`)}
						</div>
					)
				})}
				</main>
		</>	
	)
}

export async function getStaticProps() {
	const static_paths = getStaticPathsHelper(file_path);
	
	return { props: { paths: (await static_paths).paths, } };
}