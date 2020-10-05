import React, { Fragment } from 'react';
import Head from 'next/head';

import LoginPageContent from '@pages-content/login';
import BaseLayout from '@components/layouts/BaseLayout';
import Header from '@components/Header';


const LoginPage = () => (
  <Fragment>
    <Head>
      <title>Pet blog login</title>
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
      <LoginPageContent />
    </BaseLayout>
  </Fragment>
);

LoginPage.getInitialProps = async (ctx) => {
  // await Promise.all([someSaga]);
  return {};
};

export default LoginPage;

