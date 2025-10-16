import logs from '../../data/experience.json';

const importImage = (filename) => {
  return new URL(`../../assets/logos/${filename}`, import.meta.url).href;
};

const Experience = () => {
	return (
		<section className="experience" id='experience'>
			<div className="experience-title"><p>Work Experience<span>.</span></p></div>

			<div className='experience-logs'>
				{logs.map((log, index) => (
					<div className='experience-log'>
						<div>
							<img className='logo' src={importImage(log.Src)} />
							<div>
								<strong><p className='timeline'>{log.Years}</p></strong>
								<p className='position'>{log.Position}</p>
								<p className='institution-info'>{log.Institution}, {log.Location}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)	
}

export default Experience;