import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { getStaticPathsHelper, getStaticPropsHelper  } from "../../../components/page_generator";

import post_styles from "../../../styles/Posts.module.css"

var marked = require('marked-katex');
import katex from 'katex';

const file_path = "posts/rational_equations/examples";

marked.setOptions({
	kaTex: katex
});

export default function PostPage({ frontmatter: {
	title,
	date,
	excerpt,
	cover_image
}, slug, content }) {
	
	const html = marked(content);

	return (
		<>
			<Head>
				<title>{slug}</title>
			</Head>
			<div className={post_styles.post_container}>
				<div className={post_styles.post_meta_data}>
					{(cover_image ? 
						<Image
							className={``}
							width={`100pt`}
							height={`100pt`}
							src={cover_image}
							layout="intrinsic"
					/> : <></>				
					)}
					<h1>{title}</h1>
					<h2>{date}</h2>
					<p>{excerpt}</p>
				
				<div className={post_styles.post_content}>
					<div dangerouslySetInnerHTML={{__html: html}}>
					</div>
				</div>
				</div>

			</div>
		</>
	)
}

export async function getStaticPaths() {
	return getStaticPathsHelper(file_path);
}
export async function getStaticProps({params: {slug}}) {
	return getStaticPropsHelper(file_path, slug);
}