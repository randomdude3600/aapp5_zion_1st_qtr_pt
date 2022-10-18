import Image from "next/image";
import Head from 'next/head';

import React, { useState, useEffect } from "react";
import matter from "gray-matter";

import debug_ from '../../components/debug_helper';

import home_styles from '../../styles/Home.module.css';

export default function rational_equation({m_posts}) {

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
			</main>
		</>	
	)
}