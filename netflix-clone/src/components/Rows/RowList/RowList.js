import React from 'react'
import "./RowList.css"
import Row from '../Row/Row'
import requests from '../../../utils/requests'
const RowList = () => {
  return (
    <>
      <Row  title= "NETFLIX ORIGINALS"  fetchUrl={requests.fetchNetflixOrginals} isLargeRow={true} />
        <Row  title="Trainding Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRateMovies} />
        <Row  title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row  title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
         <Row  title="Horror Movies"  fetchUrl={requests.fetchHorrorMovies} />
         <Row  title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row  title="Tv Show" fetchUrl={requests.fetchTvShow} />
        <Row  title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </>
  )
}

export default RowList
