import React from 'react';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
import './App.css';
import Nave from './components/Nave';

function App() {
  return (
    <div className="App">
      <Nave />
      {/* <h1>Let's build netflix clone</h1> */}
      <Banner />

      <Row 
      title="NETFLIX ORIGINALS"
       fetchUrl={requests.fetchNetflixOriginals} 
       isLargeRow
       />

      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated } />
      <Row title="Action Movie" fetchUrl={requests.fetchActionMovies } />
      <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies } />
      <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies   } />
      <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies } />
      <Row title="Documentries" fetchUrl={requests.fetchDocumantaries } />


    </div>
  );
}

export default App;
