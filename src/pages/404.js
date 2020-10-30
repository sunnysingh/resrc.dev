import React from 'react';

import Layout from '../components/Layout';
import Metadata from '../components/Metadata';

export default function NotFoundPage({ location }) {
  return (
    <Layout location={location}>
      <Metadata title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
}
