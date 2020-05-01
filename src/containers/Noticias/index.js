import React from 'react';
import './style.css';
import Card from '../../components/Ul/Card';
import BlogNotice from '../../components/BlogNotice';
import Sidebar from '../../components/Sidebar';
import Layout from '../../components/Layout';
/**
* @author
* @function Noticias
**/

const Noticias = (props) => {

  console.log(props);
  return(
    <section className='container'>
      
     <BlogNotice {...props}/>
     <Sidebar/>

    </section>
   )
 }

export default Noticias;