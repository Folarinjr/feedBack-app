import React from 'react';

import Header from './components/Header';
import FeedBackList from './components/FeedBackList';

import FeedBackStats from './components/FeedBackStats';
import FeedBackForm from './components/FeedBackForm';

import { FeedBackProvider } from './context/FeedBackContext';

const App = () => {

  return (
    <FeedBackProvider>
      <>
        <Header />
        <div className="container">
          <FeedBackForm />
          <FeedBackStats />
          <FeedBackList />
        </div>
      </>
    </FeedBackProvider>
  );
}

export default App;
