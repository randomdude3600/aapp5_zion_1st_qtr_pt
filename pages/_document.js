import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="icon" href="/favicon/32.png" type="image/png" sizes="32x32" />
					<link rel="icon" href="/favicon/16.png" type="image/png" sizes="16x16" />
					<link rel="icon" href="/favicon/48.png" type="image/png" sizes="48x48" />
					<link rel="icon" href="/favicon/svg" type="image/svg+xml" sizes="any" />
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css" integrity="sha384-wITovz90syo1dJWVh32uuETPVEtGigN07tkttEqPv+uR2SE/mbQcG7ATL28aI9H0" crossorigin="anonymous"/>
					<meta name="AAPP5 PT" content="made with nextjs" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument