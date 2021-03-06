import React from "react";

// RecipeList renders a bootstrap list item
export const MovieList = props => (
  <ul className="list-group">{ props.children }</ul>
);


// import React, {Component} from 'react';
// import movieItem from './movieItem';

// export default class movieList extends Component {

//   render() {

// 	    const { searchResults, movieInput } = this.props;

// 	    const appendMovies = () => {

// 			if(searchResults && movieInput.length > 0){

// 				return (

// 					<ul>

// 					{

// 					searchResults.map((res, index) => {

// 						    return (

// 						    	<movieItem

// 						    		key={index}

// 						    		imdbID={res.imdbID}

// 						    		title={res.Title}

// 						    		poster={res.Poster}

// 						    	/>

// 						    )

// 					    })

// 					}

// 					</ul>

// 				)

// 			} else if (movieInput.length === 0) {

// 				return (

// 					<p>Please enter text to search movies</p>

// 				)

// 			} else {

// 				return (

// 					<p>No Movie Found</p>

// 				)

// 			}

// 		}

// 		return (

// 			<div>

// 				{appendMovies()}

// 			</div>

// 		);

//   	}

// };

