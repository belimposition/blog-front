import React, { Fragment } from 'react';
import Head from 'next/head';

import RegistrationPageContent from '@pages-content/registration';
import BaseLayout from '@components/layouts/BaseLayout';
import Header from '@components/Header';


const RegistrationPage = () => (
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
      <RegistrationPageContent />
    </BaseLayout>
  </Fragment>
);

RegistrationPage.getInitialProps = async (ctx) => {
  // await Promise.all([someSaga]);
  return {};
};

export default RegistrationPage;

