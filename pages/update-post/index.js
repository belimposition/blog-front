import React, { Fragment } from 'react';
import Head from 'next/head';

import BaseLayout from '@components/layouts/BaseLayout';
import Header from '@components/Header';

const UpdatePostMainPage = () => (
  <Fragment>
    <Head>
      <title>Pet blog UpdatePostMainPage</title>
      <meta
        name='description'
        content=''
      />
      <meta
        name='keywords'
        content=''
      />
    </Head>
    <BaseLayout header={<Header />} />
  </Fragment>
);

UpdatePostMainPage.getInitialProps = async (ctx) => {
  // await Promise.all([]);

  return {};
};

export default UpdatePostMainPage;

