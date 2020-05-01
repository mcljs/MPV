import React, {useState,useEffect} from 'react';
import './style.css';
import Card from '../Ul/Card';
import blogPost from '../../data/blog.json'
/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

  const[post,setPost]= useState({
    id: "" ,
    blogCategory: "",
    blogTitle: "",
    blogOn: "" ,
    blogImage: "",
    blogText: "",


  });
  const[slug,setSlug]=useState ('');

  useEffect(()=>{
  const slug = props.match.params.slug;
  const post = blogPost.data.find(post => post.slug == slug);
  setPost(post);
  setSlug(slug)
  }, [post,props.match.params.slug]);
  
  if(post.blogImage == "") return null;

  return(

        <div className="blogNoticeContainer">
          <Card>
            <div className="blogHeader">
            <span className='noticeCategory'>{post.blogCategory}</span>
  <h1 className="noticeTitle">{post.blogTitle}</h1>
  <span className="noticeBy">Publicado {post.postedOn}</span> 
             </div>
             <div className="noticeimageContainer">
             <img src={require('../../blogNoticeimages/'+ post.blogImage)} alt="Notice Image"/>
             </div>

             <div className="noticeContent">
               <h3>{post.blogTitle}</h3>
               <p>{post.blogText}</p>
             </div>
             

          </Card>
        </div> 
   )

 }

export default BlogPost