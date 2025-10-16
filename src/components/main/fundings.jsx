import funds from '../../data/fundings.json';

const importImage = (filename) => {
  return new URL(`../../assets/funds/${filename}`, import.meta.url).href;
};

const Research = () => {
	return (
		<section className="funds-section">
			<h1 className='section-title'>Research Fundings</h1>
			<div className='funded-projects'>
				{funds.map((fund, index) => (
					<div className='funded-project'>
						<img src={importImage(fund.Src)} alt="" />

						<div className='fund-details'>
							<div>
								<strong><p className='year'>{fund.Year}</p></strong>
								<strong><p className='position'>{fund.Position}</p></strong>
								<strong><p>{fund.Amount}</p></strong>
							</div>
							<h1>{fund.Title}</h1>
							<strong><p>{fund.Source}</p></strong>
						</div>
					</div>
				))}
			</div>
		</section>
	)	
}

export default Research;