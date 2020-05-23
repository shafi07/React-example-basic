import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import Header from "../components/Header/Header";
import Movie from "../components/Movie/Movie";
import API_KEY from "../api.config";
import ModelComponent from "../components/PopModel/Model";

const Mainpage = () => {
	const trendingMoviesUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
	const [movieArr, setMovieArr] = useState([]);
	const [modalSelectedMovie, setModalSelectedMovie] = useState();
	const [modalInitialState, setModalInitialState] = useState(false);

	useEffect(() => {
		dataFetcher(trendingMoviesUrl, setMovieArr);
	},[]);

	const dataFetcher = async () => {
		const request = await fetch(trendingMoviesUrl);
		const data = await request.json();

		setMovieArr(data.results);
		console.log(data.results);
	};

	const movieClickHandler = (itemMovie) => {
		setModalInitialState(true);
		setModalSelectedMovie(itemMovie);
	};

	const toggle = () => setModalInitialState(!modalInitialState);

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
									itemMovie={itemMovie}
									movieClickHandler={movieClickHandler}
								/>
							);
					  })
					: ""}
			</div>
			<ModelComponent
				modalState={modalInitialState}
				toggle = {toggle}
				modalSelectedMovie={modalSelectedMovie}
			/>
		</>
	);
};

export default Mainpage;
