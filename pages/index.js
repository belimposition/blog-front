import React, { Fragment } from 'react';
import Head from 'next/head';

import MainPageContent from '@pages-content/main';
import BaseLayout from '@components/layouts/BaseLayout';
import Header from '@components/Header';



const MainPage = () => (
  <Fragment>
    <Head>
      <title>Pet blog</title>
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
      <MainPageContent />
    </BaseLayout>
  </Fragment>
);

MainPage.getInitialProps = async (ctx) => {
  return {};
};

export default MainPage;

