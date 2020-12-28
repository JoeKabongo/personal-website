import React, { useEffect, useState } from 'react';
import sanityClient from '../client';
import { data } from './blogdata';
import { Link } from 'react-router-dom';

function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] {
                title, 
                slug,
                mainImage{
                  asset->{
                      _id,
                      url
                  },
                  alt
              },
              content
                
            }`
      )
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="page-container">
      <h1> BLOG</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          alignContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        {posts.map((post, index) => {
          console.log(post);
          return (
            <Link
              to={`/blog/${post.slug.current}`}
              className="blog-card"
              key={index}
            >
              <img
                alt={post.title}
                src={post.mainImage.asset.url}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderBottom: '3px solid #36D7B7',
                }}
              />

              <h2 style={{ padding: '10px' }}>{post.title}</h2>
              <p style={{ padding: '10px' }}>{post.content}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
export default Blog;
