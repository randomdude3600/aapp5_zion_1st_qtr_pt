import fs from "fs";
import path from "path";
import debug_ from "./debug_helper";
import matter from "gray-matter";

export async function getStaticPathsHelper(file_path) {
	const files = fs.readdirSync(path.join(file_path));

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

export async function getStaticPropsHelper(file_path, slug) {
	const md_path = path.join(file_path, slug + '.md');

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

export async function getStaticPropsPageHelper(file_path) {
	const md_path = path.join(file_path);

    const dirents = fs.readdirSync(md_path, { withFileTypes: true });
    const files = dirents
        .filter(dirent => dirent.isFile())
        .map(dirent => dirent.name);    

    debug_(files);

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

	debug_("files: " + files );

	return {
		props: {
			m_posts: posts,
		},
	}
}
