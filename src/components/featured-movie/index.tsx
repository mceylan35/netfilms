import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa"; 
import styles from "./styles.module.css";

interface IMovie{
    id:number;
    poster_path:string;
    title:string;
    overview:string;
}
interface FeaturedMovieProps{
    movie:IMovie;
    isCompact?:boolean;
}

const FeaturedMovie : React.FC<FeaturedMovieProps>= ({movie, isCompact=true})=> {
    const {poster_path,title,overview}=movie;

  return (
    <div className={styles.moviewWrapper}>
        <h1 className={styles.movie}>{title}</h1>
        <p className={`${styles.overview} ${isCompact?styles.shortOverview:""}`}>

    
        {overview}
</p>
<div className={styles.actionButtons}>
        <Link className={styles.playButton} href={`/movie/${movie.id}`}>
          Play
        </Link>
        <button className={styles.addButton}>
          <FaPlus />
        </button>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          fill
        />
      </div>
    </div>
  );
}

export { FeatureMovieLoading } from "./loading";
export { FeaturedMovie };