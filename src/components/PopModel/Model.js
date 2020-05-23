import React from "react";
import MovieImage from "../Movieimage/movieimage";
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModelComponent = ({ className, modalState, modalSelectedMovie, toggle }) => {

	return (
		<div>
			<Modal isOpen={modalState} toggle={toggle} className={className}>
				<ModalHeader toggle={toggle}>{modalSelectedMovie ? modalSelectedMovie.title : ""}</ModalHeader>
				<ModalBody>
					<MovieImage
						movieImageUrl={modalSelectedMovie ? modalSelectedMovie.backdrop_path : ""}
						movieTitle={modalSelectedMovie ? modalSelectedMovie.title : "No title"}
						width="100%"
					/>
					{modalSelectedMovie ? modalSelectedMovie.overview : ""}
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={toggle}>
						Close
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default ModelComponent;
