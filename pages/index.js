import Image from "next/image";

import Head from 'next/head';

import home_styles from '../styles/Home.module.css';

import React, { useState, useEffect } from "react";

export default function Home(props) {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main className={""}>
				<div className={""}>
					<h1>Hello</h1>


					
					{(process && process.env.NODE_ENV === 'development') ? console.log(props.main_obj) : <></>}
				</div>
			</main>
		</>	
	)
}