import React from 'react';
import App from 'next/app';
import RootLayout from '@/app/layout'; // Adjust the import path as necessary

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    );
  }
}

export default MyApp;