import fs from "fs";
import path from "path";

import Image from "next/image";
import Link from "next/link";

import debug_ from "../../components/debug_helper";

import matter from "gray-matter";
import {marked} from "marked";

export default function PostPage({ frontmatter: {
	title,
	date,
	cover_image
}, slug, content }) {

	return (
		<div>
			<Image
				className={``}
					width={`100pt`}
					height={`100pt`}
					src={cover_image}
					layout="intrinsic"
			/>
			<h1>{title}</h1>
			<h4>{date}</h4>
			{/* parse content with marked */}
			<div dangerouslySetInnerHTML={{__html: marked(content)}}>
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
