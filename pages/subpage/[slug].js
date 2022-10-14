import fs from "fs";
import path from "path";

import Image from "next/image";
import Link from "next/link";

import debug_ from "../../components/debug_helper";

import post_styles from "../../styles/Posts.module.css"

import matter from "gray-matter";
var marked = require('marked-katex');
import katex from 'katex';

var renderer = new marked.Renderer();

marked.setOptions({
	kaTex: katex
});

export default function PostPage({ frontmatter: {
	title,
	date,
	cover_image
}, slug, content }) {
	
	const html = marked(content);

	console.log(content)

	return (
		<div className={post_styles.post_container}>
			<Image
				className={``}
					width={`100pt`}
					height={`100pt`}
					src={cover_image}
					layout="intrinsic"
			/>
			<h1>{title}</h1>
			<h4>{date}</h4>

			<div className={post_styles.katex_container}>
				<div dangerouslySetInnerHTML={{__html: html}}>
				</div>
			</div>
		</div>
	)
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("pages/posts"));

	debug_("files: " + files );
	const paths = files.map(filename => ({
		params: {
			slug: filename.replace('.md', '')
		} 
	}))

	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({params: {slug}}) {
	const md_path = path.join('pages/posts', slug + '.md');

	const markdown_with_meta = fs.readFileSync(md_path, 'utf-8');

	debug_("slug.js: " + markdown_with_meta);

	const {data:frontmatter, content} = matter(markdown_with_meta)	

	return {
		props: {
			frontmatter,
			slug,
			content,
		}
	}
}
