import React from 'react'
import Movies from "@/mocks/movies.json"
import Genres from "@/mocks/genres.json"
import { FeaturedMovie } from '@/components/featured-movie'
import Categories from '@/components/categories'
import MovieSection from '@/components/movie-section'

function HomeContainer() {
  return (
    <div>
        <FeaturedMovie   movie={Movies.results[0]}  />
        <Categories categories={Genres.genres.slice(0,6)} />
        <MovieSection movies={Movies.results.slice(1,7)} title={'Popular Films'}/>
        <MovieSection movies={Movies.results.slice(7,15)} title={'Your Favorites'}/>  
         </div>
  )
}

export default HomeContainer