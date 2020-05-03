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
    blogText2: "",
    blogText3: "",
    blogText4: "",
    blogText5: "",
    blogText6: "",
    blogText7: "",
    blogText8: "",
    blogText9: "",
    author: "",
    webAuthor: "",

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
               <h2>{post.blogTitle}</h2>
               <p>{post.blogText}</p>
               <p>{post.blogText2}</p>
               <p>{post.blogText3}</p>
               <p>{post.blogText4}</p>
               <p>{post.blogText5}</p>
               <p>{post.blogText6}</p>
               <p>{post.blogText7}</p>
               <p>{post.blogText8}</p>
               <p>{post.blogText9}</p>
               <p><em><a href={post.webAuthor}>{post.author}</a></em></p>

             </div>
             

          </Card>
        </div> 
   )

 }

export default BlogPost