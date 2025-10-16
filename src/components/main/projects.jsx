import project from '../../assets/book_cover.jpg'

const Projects = () => {

	return (
		<section className="project">
			<img src={project} alt="Book Cover" />
			<div>
				<h1>Acid Attacks in India: Representations of survivors and their recovery.</h1>
				<button><a href="#">Order Now</a></button>
			</div>
		</section>
	)	
}

export default Projects;