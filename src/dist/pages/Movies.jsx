import React, { useState,useEffect } from 'react'
import axios from 'axios'
const API_URL="https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";

export default function Movies() {
    const [movieData,setMovieData]=useState()
    const [pageLoad,setPageLoad]=useState(true)
    const [error,setError]=useState(false)
   
    useEffect(() => {
        fetchData()
        return () => { }
    }, [])

    const fetchData= async ()=>{
        try{
            setPageLoad(true)
            const response= await axios.get(API_URL);
            const movdata=response.data.entries.filter((value)=>{
                return (
                    value.releaseYear >= 2010 &&  value.programType === "movie"
                )
            }).sort((a,b)=>{
                return a.title > b.title ? 1 :-1
            }).slice(0,21) 
            setMovieData(movdata)
            setPageLoad(false)
        }
        catch(error){
            setError(error)    
        }
         
    }
    
    
    return (
        <>
            {
                pageLoad && !error? <p className="text-center m-4 txt-danger">loading ...</p> :
                <div className="movies ">
                    <div className="tag rounded">
                       <h4 className="container p-4 mb-2 ">Popular Movies</h4>
                    </div>
                    <div className="row gx-0 mx-auto container my-2">
                        
                        {
                            movieData.map((value)=>{
                                return(
                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                        <img src={value.images['Poster Art'].url} width="100%" height="200px" className="rounded" alt="" />
                                        <p className="text-center mt-2"> {value.title}</p>
                                    </div>

                                )
                            })
                        }
                        
                    </div>
                </div>
            }
            {
                error && <p>{error}</p>
            }
            
        </>
    )
}
