import publications from '../../data/research_papers.json';
import books from '../../data/books.json'
import chapters from '../../data/book_chapters.json'

import React, { useState } from 'react';

const Publications = () => {
	const [activeTab, setActiveTab] = useState('papers')

	return (
		<section className="publications">

			{/* <button className='home-nav'>
				<a href="/">Home
				</a>
			</button> */}
			<div className='publication-info'>
				<ul className="categories">
          <li onClick={() => setActiveTab('papers')} className={activeTab === 'papers' ? 'active' : ''}><a href="#">Peer Reviewed</a></li>
          <li onClick={() => setActiveTab('books')} className={activeTab === 'books' ? 'active' : ''}><a href="#">Books</a></li>
          <li onClick={() => setActiveTab('chapters')} className={activeTab === 'chapters' ? 'active' : ''}><a href="#">Chapters</a></li>
        </ul>

				{/* Peer Publications */}
				{activeTab === 'papers' && (
					<section className="articles">
          	{publications.map((publication, index) => (
						<div className='pub-article'>
							<div>
								<strong><p>{publication.Year}</p></strong>
								<strong><p>{publication.Author}</p></strong>
							</div>
							<h1>{publication.Title}</h1>
							<strong><p><a href={publication.Link}>Read More</a></p></strong>
						</div>
				))}
        </section>
				)}
        

				{/* Books */}
				{activeTab === 'books' && (
					<section className="articles">
						{books.map((book, index) => (
						<div className='pub-article'>
							<div>
								<strong><p>{book.Year}</p></strong>
								<strong><p>{book.Author}</p></strong>
							</div>
							<h1>{book.Title}</h1>
							<p>{book.Publisher}</p>
							<strong><p><a href={book.Link}>Read More</a></p></strong>
						</div>
						))}
					</section>
				)}

				{/* Chapters */}
				{activeTab === 'chapters' && (
					<section className="articles">
						{chapters.map((chapter, index) => (
						<div className='pub-article'>
							<div>
								<strong><p>{chapter.Year}</p></strong>
								<strong><p>{chapter.Author}</p></strong>
							</div>
							<h1>{chapter.Title}</h1>
							<p>{chapter.Publisher}</p>
							<strong><p><a href={chapter.Link}>Read More</a></p></strong>
						</div>
						))}
					</section>
				)}
			</div>
		</section>
	)	
}

export default Publications;