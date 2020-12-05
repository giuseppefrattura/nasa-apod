import React from 'react';
import {Link} from 'react-router-dom';

export default function Home(){
    return(
        <>
        <div>
            <Link to="/nasaphoto">See into the stars</Link> 
        </div>
        <br/>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/H1nENYv-r_w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </>
    )
}