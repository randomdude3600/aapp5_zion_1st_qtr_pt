import footer_style from "../styles/Footer.module.css";

const Footer = () => {
	return (
		<div className={footer_style.m_footer}>
			<div className={footer_style.m_footer_elm}>
				<h2>Members</h2>
				<h3>GROUP </h3>
				<p>Daniel Benedict, Aracan</p>
				<p>Angel Casaer, Farrarons</p>
				<p>Zion, Delos Angelos</p>
			</div>
			<div className={footer_style.m_footer_elm}>
				<h2>INFO</h2>
				<h3>11-marksdfsifjd</h3>
				<p>1st Qtr AAPP PT</p>
			</div>
			<div className={footer_style.m_footer_elm}>
				<h2>Made by</h2>
				<h3>Gian Cedrick G. Epilan</h3>
				<h3>With Nextjs Framework</h3>
				<p>
					<a href="https://nextjs.org/"><u>here</u></a>
				</p>
			</div>
		</div>
	);
}

export default Footer;