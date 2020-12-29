import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client';
import BlockContent from '@sanity/block-content-to-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import ClipLoader from 'react-spinners/ClipLoader';

const serializers = {
  types: {
    code: (props) => (
      <SyntaxHighlighter language={props.node.language} showLineNumbers={true}>
        {props.node.code}
      </SyntaxHighlighter>
    ),
  },
};

function convertNumberToMonth(month) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  if (month < 0 || month > 12) {
    return 'NaN';
  }
  return months[month - 1];
}
function handleTimeStamp(timeStamp) {
  let [year, month, day] = timeStamp.split('-');
  month = convertNumberToMonth(month);
  day = day.slice(0, 2);
  return month + ' ' + day + ', ' + year;
}

function Article() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
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
              publishedAt,
              body
                
            }`
      )
      .then((data) => {
        setPost(data[0]);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [slug]);

  if (post) {
    document.title = post.title;
  }
  if (isLoading) {
    return (
      <div style={{ marginTop: '200px', textAlign: 'center' }}>
        <ClipLoader size={150} color={'#123abc'} loading={true} />
      </div>
    );
  }
  return (
    <article className="page-container" id="article-container">
      {post && (
        <div>
          <header>
            <img src={post.mainImage.asset.url} alt={post.mainImage.alt} />
            <h1> {post.title}</h1>
            <p>
              By <b> Jonathan Tshimpaka</b> on{' '}
              {handleTimeStamp(post.publishedAt)}
            </p>
          </header>
          <div>
            <BlockContent
              style={{ wordWrap: 'break-word' }}
              blocks={post.body}
              projectId="chi1bzlr"
              dataset="production"
              serializers={serializers}
            />
          </div>
        </div>
      )}
    </article>
  );
}

export default Article;
