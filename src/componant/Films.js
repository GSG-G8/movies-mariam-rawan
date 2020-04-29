import React,{useState,useEffect} from 'react';
import axios from 'axios'
import './Films.css'

export default function Films(){ 

    const [searchFilm,setSearchFilm]=useState('');
    const [searchFilmValue,setSearchFilmValue]=useState([]);
    const [error,setError]=useState(null);

    useEffect(()=>{
        if(searchFilm){
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=304ac5e762f0abd7fc2c27e96bd42840&query=${searchFilm}
            `)
            .then(({data})=>{
                if(data.total_results){
                    setSearchFilmValue(data.results)
                }else{
                    setSearchFilmValue([])
                }
            })
            .catch((error)=> {
                setError(error)
            })
        }
        else{
            setSearchFilmValue('')
        }
    },[searchFilm])
    return(
        <div>
            films componant
            <input
            name="serach"
            placeholder="search about film"
            value={searchFilm}
            onChange={(e)=>{
                setSearchFilm(e.target.value)
            }}
            />
            <div>
                {(error)?'error on search'
                :(searchFilmValue)?
                searchFilmValue.map((x,index)=><div key={index}>{x.original_title}</div>):'display all films'}
            </div>
        </div>
    )
}