import React, {useState,useEffect} from 'react';
import './style.css';
import Card from '../Ul/Card';
import { NavLink } from 'react-router-dom';

import blogPost from '../../data/blog.json'; 

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

  const[posts,setPosts]= useState([]);

  useEffect(()=>{
  
  const posts = blogPost.data;
  setPosts(posts);
  }, [posts]);

  return(
    <div className="sidebarContainer" style={{width:props.width}}>
      <Card style={{marginBottom: '20px', padding:'20px',boxSizing:'border-box'}}>
      <div className="cardHeader">
      <span>Nosotros</span>
      </div>
      <div className="profileimageContainer">
      <img src="http://4.bp.blogspot.com/-C9uQfZcq7Ac/UvLHFjJprsI/AAAAAAAABKo/kPUqRQu9ds0/s1600/pazy_vida_logo.png"/>
      </div>
      <div className="cardBody">
        <p className="personalBlo">
        La Fundación Movimiento por la Paz y la Vida tiene 
        como propósito apoyar e impulsar una cultura a favor 
        de la convivencia pacífica y solidaria... 
        </p>
        <a><NavLink to="/nosotros"
        style={{textDecoration:'none', color: '#e41e25', textAlign: 'center',fontSize: '18px'}}>Leer Mas</NavLink></a>
      </div>
    </Card>

    <Card style={{marginBottom: '20px', padding:'20px',boxSizing:'border-box'}}>
      <div className="cardHeader">
      <span>Red Social</span>
      <div className="socialimagencontainer">
      <a href={`https://twitter.com/AsuntosDPaz`}>
      <img src={require('../Sidebar/img/twitter.png')}/>
      </a>
      </div>
      </div>
    </Card>

    <Card style={{marginBottom: '20px', padding:'20px',boxSizing:'border-box'}}>
    <div className="cardHeader">
      <span>Publicaciones Recientes</span>
      </div>
    <div className="recentPost">

      {
        posts.map( post =>{
          return (
            <NavLink key={post.id} to={`/Noticias/${post.slug}`}>
              <div className="recentPost">
      <h3>{post.blogTitle}</h3>
      <span>{post.postedOn}</span>
      </div>
            </NavLink>
        
          );
        })
      }
      

    </div>

    </Card>

    </div>
   )

 }

export default Sidebar