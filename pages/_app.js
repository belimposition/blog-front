/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import App from 'next/app';
import React, { Fragment } from 'react';
import Head from 'next/head';

import { wrapper } from '@store';
import GlobalStyles from '@styles/global';

import { getPostsSaga } from '@store/posts/saga';


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {

    if (typeof window === 'undefined') {
      await Promise.all([
        ctx.store.runSaga(getPostsSaga).toPromise(),
      ]);
    }

    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
    };
  }


  render() {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <Head>
          <link
            rel='shortcut icon'
            type='image/x-icon'
            href='/static/favicon.ico'
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, maximum-scale=1'
          />
          <meta
            name="format-detection"
            content="telephone=no"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </Fragment>
    );
  }
}

export default wrapper.withRedux(MyApp);
