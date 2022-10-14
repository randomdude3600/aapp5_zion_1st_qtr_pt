import fs from 'fs';
import path from 'path';

import Image from "next/image";
import Head from 'next/head';

import React, { useState, useEffect } from "react";
import image from 'next/image';

import debug_ from '../components/debug_helper';

import home_styles from '../styles/Home.module.css';

export default function Home(props) {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main className={""}>
				<div className={""}>
					<h1>{props.posts}</h1>

					{debug_(props.main_obj)}
				</div>
			</main>
		</>	
	)
}

export async function getStaticProps() {
	const image_path = `public/img/posts`;
	const files = fs.readdirSync(image_path);

	debug_(files);

	return{
		props: {
			posts: "The post",
		},
	}
}