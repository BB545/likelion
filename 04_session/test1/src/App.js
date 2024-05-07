import React, {components} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Main myName="Jhon" />
      <Footer />
    </div>
  );
}

export default App;