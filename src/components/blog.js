import React, { useEffect, useState } from 'react';
import sanityClient from '../client';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

function Blog() {
  document.title = 'Blog | Jonathan Tshimpaka';
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
              description
                
            }`
      )
      .then((data) => {
        console.log(data);
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  if (isLoading) {
    return (
      <div style={{ marginTop: '200px', textAlign: 'center' }}>
        <ClipLoader size={150} color={'#123abc'} loading={true} />
      </div>
    );
  }

  return (
    <section className="page-container">
      <h1> BLOG</h1>
      <div id="blog-container">
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
              <p style={{ padding: '10px' }}>{post.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
export default Blog;
