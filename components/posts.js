import Link from "next/link"
import Image from "next/image"

import debug_ from "./debug_helper"

export default function Posts({props}) {
	return (
		<div>
			{debug_(props.fontmatter)}
			<Image
				className={``}
					width={`100pt`}
					height={`100pt`}
					src={props.frontmatter.cover_image}
					layout="intrinsic"
			/>
			<h1>{props.frontmatter.title}</h1>
			<h3>{props.frontmatter.date}</h3>
			<h3>{props.frontmatter.excerpt}</h3>

			<Link href={`/subpage/${props.slug}`}>
				<a>Read More</a>
			</Link>
		</div>
	)
}