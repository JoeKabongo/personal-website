import React, { useEffect, useState } from 'react';
import sanityClient from '../client';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

export default function Blog() {
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
              <img alt={post.title} src={post.mainImage.asset.url} />

              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
