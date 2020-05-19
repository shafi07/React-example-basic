import React, { useEffect, useState } from "react";
import Header from "./Header";
import Movie from "./Movie.js";
import API_KEY from "../api.config";
import ModelComponent from './Model'

const dataFetcher = async (url, setMovieArr) => {
	const request = await fetch(url);
	const data = await request.json();

	setMovieArr(data.results);
	console.log(data.results);

	return data;
};

function App() {
	const trendingMoviesUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
	const [movieArr, setMovieArr] = useState([]);
	const [modelSelectedMovie, setModelSelectedMovie]= useState();
	const [modalInitialState, setModalInitialState]= useState(false);

	useEffect(() => {
		dataFetcher(trendingMoviesUrl, setMovieArr);
	}, [trendingMoviesUrl]);

	return (
		<>
			<Header title="Movie SA" />
			<div className="movies-grid-container">
				{movieArr.length > 0
					? movieArr.map((itemMovie, index) => {
							console.log(itemMovie);
							return (
								<Movie
									key={index}
									setModalInitialState = {setModalInitialState}
									itemMovie = {itemMovie}
									setModalSelectedMovie = {setModelSelectedMovie}
								/>
							);
					  })
					: ""}
			</div>
			<ModelComponent
			 modalState = {modalInitialState} 
			 setModalState = {setModalInitialState}
			 modalSelectedMovie={modelSelectedMovie} 
			 />
		</>
	);
}

export default App;
