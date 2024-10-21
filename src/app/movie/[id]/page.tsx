import React from 'react'
import MovieContainer from '@/containers/movie'
import Movies from '@/mocks/movies.json'
import notFound from './not-found';

interface IParams{
    id:number; 
} 
interface ISearchParams{
    error:string; 
    searchParams:string;
} 
interface IStateParams{
    params:IParams;
    searchParams:ISearchParams;
} 

  const MoviePage:React.FC<IStateParams> =({params,searchParams})=> {
    const movieDetail=Movies.results.find(movie=>movie.id==params.id);
    
    if (movieDetail === null) {
        notFound();
      }

    if (searchParams.error === "true") {
        throw new Error("Something went wrong!");
      }
    
  return (
    <div><MovieContainer movie={movieDetail} /></div>
  )
}
export default MoviePage;