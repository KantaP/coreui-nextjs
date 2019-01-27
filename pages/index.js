import React, { Component } from 'react';
import Loadable from 'react-loadable';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const DefaultLayout = () => (
  <div>
    test
  </div>
)


// Containers
const DefaultLayoutWithLoadable = Loadable({
  loader: () => DefaultLayout,
  loading
});

export default DefaultLayout;