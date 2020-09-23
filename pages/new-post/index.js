import React, { Fragment } from 'react';
import Head from 'next/head';

import NewPostPageContent from '@pages-content/new-post';
import BaseLayout from '@components/layouts/BaseLayout';
import Header from '@components/Header';


const NewPostPage = () => (
  <Fragment>
    <Head>
      <title>Pet blog new post</title>
      <meta
        name='description'
        content=''
      />
      <meta
        name='keywords'
        content=''
      />
    </Head>
    <BaseLayout header={<Header />}>
      <NewPostPageContent />
    </BaseLayout>
  </Fragment>
);

NewPostPage.getInitialProps = async (ctx) => {
  // await Promise.all([someSaga]);
  return {};
};

export default NewPostPage;

