import React from 'react';
import './style.css';
import Card from '../../components/Ul/Card';
import Sidebar from '../../components/Sidebar';
import RecentPosts from './RecentPosts';
import blogData from '../../data/blog.json';
import Layout from '../../components/Layout'


const ImageGallary = props => (
        <div className="gallaryPost">
                <div className={"sideImageWrapper"}>
                    
                  <img  src={require("../showcase/showcase.png")} />     
                    
                </div>
        </div>
);

const Home  = props => {
    const gallaryHeight = 450;
    const gallaryStyle = {
        height: gallaryHeight+'px',
        overflow: 'hidden'
    }
    const sideImageHeight = gallaryHeight / 3;
   const imgAr = blogData.data.map(post => post.blogImage)
    return (
        <div>
          
          
                <Layout>
                    <RecentPosts style={{width: '70%'}}/>
                </Layout>
        </div>
    );
}

export default Home;