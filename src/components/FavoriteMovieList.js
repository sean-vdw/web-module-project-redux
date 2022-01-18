import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFavorite } from '../actions/favoritesActions';

const FavoriteMovieList = (props) => {
    console.log(props);
    const favorites = props.favorites;
    const displayFavorites = props.displayFavorites;

    const handleRemoveFav = (id) => {
        props.removeFavorite(id);
    }
    
    return (
        <div className="col-xs savedContainer">
            <h5>Favorite Movies</h5>
            {
                displayFavorites && favorites.map(movie=>{
                    return <div key={movie.id}>
                        <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                            {movie.title}
                            <span onClick={() => {handleRemoveFav(movie.id)}}><span class="material-icons">remove_circle</span></span>
                        </Link> 
                    </div>
                })
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites.favorites,
        displayFavorites: state.favorites.displayFavorites
    }
}

export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);