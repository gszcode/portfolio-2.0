import "./Home.css";
import profile from "/assets/profile.jpeg";
import logo from "/assets/logo.png";
import linkedin from "/assets/icons/linkedin.svg";
import github from "/assets/icons/github.svg";
import Skills from "../Skills/Skills";

function Home() {
	return (
		<section className='home_container'>
			<div className='home'>
				<div className='profile_image'>
					<img src={profile} alt='Foto Personal' />
				</div>
				<div className='main_logo'>
					<img src={logo} alt='Logo' />
				</div>
				<div className='introduction'>
					<h1>
						Hola, Soy <span className='color'>Gabriel Sanchez.</span>
						<br />
						Soy un entusiasta de la creación y el <span className='color'>Desarrollo Web</span>.
						<br />
						<br />
					</h1>
					<p>
						Mi experiencia como desarrollador e interés están en el <span className='color'>Frontend</span> y es donde
						mejor me desenvuelvo y me gusta trabajar, aúnque cuento con conocimientos en el{" "}
						<span className='color'>Backend</span> y me gusta estar al tanto de ambas partes de un proyecto.
					</p>
					<span className='location color'>Buenos Aires, Argentina.</span>
				</div>
				<div className='social'>
					<a href='https://www.linkedin.com/in/gszcode/' rel='noreferrer' title='Linkedin' target='_blank'>
						<img src={linkedin} alt='Linkedin Icon' />
						<span>Linkedin</span>
					</a>
					<a href='https://github.com/gszcode' rel='noreferrer' title='GitHub' target='_blank'>
						<img src={github} alt='Github Icon' />
						<span>Github</span>
					</a>
				</div>
			</div>
			<Skills />
		</section>
	);
}

export default Home;
