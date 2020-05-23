import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import Header from "../components/Header";
import Movie from "../components/Movie.js";
import API_KEY from "../api.config";
import ModelComponent from "../components/Model";

const dataFetcher = async (url, setMovieArr) => {
	const request = await fetch(url);
	const data = await request.json();

	setMovieArr(data.results);
	console.log(data.results);

	return data;
};

const Mainpage = () => {
	const trendingMoviesUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
	const [movieArr, setMovieArr] = useState([]);
	const [modelSelectedMovie, setModelSelectedMovie] = useState();
	const [modalInitialState, setModalInitialState] = useState(false);

	useEffect(() => {
		dataFetcher(trendingMoviesUrl, setMovieArr);
	},[]);

	return (
		<>
			<Header title="Movie SA" />
			<div className="movies-grid-container">
				{!isEmpty(movieArr)
					? movieArr.map((itemMovie, index) => {
							console.log(itemMovie);
							return (
								<Movie
									key={index}
									setModalInitialState={setModalInitialState}
									itemMovie={itemMovie}
									setModalSelectedMovie={setModelSelectedMovie}
								/>
							);
					  })
					: ""}
			</div>
			<ModelComponent
				modalState={modalInitialState}
				setModalState={setModalInitialState}
				modalSelectedMovie={modelSelectedMovie}
			/>
		</>
	);
};

export default Mainpage;
