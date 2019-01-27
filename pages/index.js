import React, { Component } from 'react';
// import Loadable from 'react-loadable';
import dynamic from 'next/dynamic'
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;



// Containers
const DefaultLayoutWithDynamic = dynamic(
  import('../components/Home'),
  {
    loading: loading
  }
)

export default DefaultLayoutWithDynamic;