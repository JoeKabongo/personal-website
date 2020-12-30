import React from 'react';

export default function ErrorPage(props) {
  return (
    <section className="page-container">
      <h1> ERROR PAGE</h1>
      <h3> {props.message || 'Page Not Found'}</h3>
    </section>
  );
}
