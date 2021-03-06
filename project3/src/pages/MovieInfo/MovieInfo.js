import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import EmailPassword from "../../components/EmailPassword/EmailPassword.js";
import MovieCard from "../../components/MovieCard/MovieCard.js";
import Searchbar from "../../components/Searchbar/Searchbar.js"
import Footer from "../../components/Footer/Footer.js"

// import Navbar from "./components/Navbar/Navbar.js";
// import { Link } from "react-router-dom";
// import MovieCard from "../components/MovieCard/MovieCard.js";
import API from '../../utils/API';

class MovieInfo extends React.Component {
  state = {
    movie: {}
  }


  componentDidMount() {
   
    API.getMovieById(this.props.match.params.movieId) 
        .then(res => this.setState({ movie: res.data }))
      
        .catch(err => console.log(err));
}

  render() {
    return  <div>
        <h1>
          {this.state.movie.original_title}
          {/* { this.props.match.params.movieId} */}
        </h1>

        <article>
          <h3>Release Date:</h3>
          <p>
            {this.state.movie.release_date}
            </p>
		      <h3>Summary:</h3>
			      <p>
				      {this.state.movie.overview}
			      </p>
	      </article>

  </div> 

  };

}




  




export default withRouter(MovieInfo);
