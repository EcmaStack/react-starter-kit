import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './NotFound.css';

function NotFound({ title }) {
  return (
    <Layout full={false}>
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <p>Sorry, the page you were trying to view does not exist.</p>
        </div>
      </div>
    </Layout>
  );
}

NotFound.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(NotFound);
