import fs from 'fs';
import path from 'path';

import Image from "next/image";
import Head from 'next/head';

import React, { useState, useEffect } from "react";
import matter from "gray-matter";

import debug_ from '../components/debug_helper';

import home_styles from '../styles/Home.module.css';

import Posts from "../components/posts";

export default function Home({m_posts}) {

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main className={home_styles.main_div}>
				<div className={home_styles.inner_div} >
					{debug_(m_posts)}
					{m_posts.map((posts, i) => {
						return (
							<Posts props={posts}/>
						)
					})}
				</div>
			</main>
		</>	
	)
}

export async function getStaticProps() {
	const md_path = path.join('pages/posts');
	const files = fs.readdirSync(md_path);

	const posts = files.map((filename) => {
		const slug = filename.replace('.md', '');
		
		const markdown_with_meta = fs.readFileSync(
			path.join(md_path, filename),
			'utf-8'
		);

		const {data:frontmatter} = matter(markdown_with_meta)

		return {
			slug,
			frontmatter,
		}
	})

	// debug_(posts);

	return {
		props: {
			m_posts: posts,
		},
	}
}