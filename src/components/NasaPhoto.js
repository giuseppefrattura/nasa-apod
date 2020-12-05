import React from 'react';
import { useState, useEffect }  from 'react';
import NavBar from "./NavBar";

const nasaKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto(){
    const [ photoData, setPhotoData ] = useState(null);
    
    useEffect( ()=> {
        fetchPhoto();

        async function fetchPhoto(){
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`);
            const data = await res.json();
            setPhotoData(data);
        }
    },[]);
    
    if(!photoData) return <div />
    
    return(

        <>
        <NavBar />

        <div>
            
            { photoData.media_type === "image" ? ( 
                <img src={photoData.url} alt={photoData.title} ></img>
            ) : (
                <iframe 
                src={photoData.url}
                title={photoData.title}
                frameBorder="0"
                gesture="media"
                allow="encripted-media" 
                allowFullScreen
                className="photo"
                />
                )
            }
        
            
            <h1>{photoData.title}</h1>
            <div>{photoData.date}</div>
            <div>{photoData.explanation}</div>
        </div>
        </>
    )
}