import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client';
import BlockContent from '@sanity/block-content-to-react';

function Article() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  console.log(slug);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current =="${slug}"] {
                title, 
                _id,
                mainImage{
                  asset->{
                      _id,
                      url
                  },
                  alt
              },
              "imageUrl": mainImage -> asset -> url,
              "imageAlt" : mainImage -> alt,
              body
                
            }`
      )
      .then((data) => {
        setPost(data[0]);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [slug]);
  return (
    <div className="page-container">
      <h1> Article {slug && slug.current}</h1>
      {post && (
        <div>
          <h1>{post.title}</h1>
          <img src={post.mainImage.asset.url} alt={post.mainImage.alt} />
          <div>
            <BlockContent
              blocks={post.body}
              projectId="chi1bzlr"
              dataset="production"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Article;
