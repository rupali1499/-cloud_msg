import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import styles from './api.module.css';


const Api = () => {
  const [photos, setPhotos] = useState([]);
  const [loadmore, setLoadmore] = useState("false");
  const [endpoint, setEndpoint] = useState(15);
  const [query, setQuery] = useState();
  const [temp, setTemp] = useState([]);

  const list = {
    method: 'GET',
    url: `https://jsonplaceholder.typicode.com/photos/${query ? '?albumId=' + query : ''}`,
  };

  const fetchList = () => {
    console.log("fn call")
    axios.request(list)
      .then(function (response) {
        console.log(response.data);
        setPhotos(response.data);
      }).catch(function (error) {
        console.error(error);
      }).finally(() => console.log('i am in a finally stage'))
  }

  useEffect(() => {
    console.log('inuse effect')
    fetchList();


  }, [query, temp])

  const loadmoreimg = () => {
    setEndpoint(endpoint + 15)
  }
  const loadlessimg = () => {
    setEndpoint(endpoint - 15)
  }

  const inputchange = (e) => {
    setQuery(e.target.value)
    setEndpoint(15);
    console.log(query);
  }
  // const showList = () => {
  //   setTemp(photos.slice(0, endpoint));
  //   console.log(temp)
  //   return temp;
  // }
  // const linkName = loadmore ? 'Load more...' ;

  return (
    <div className={styles.page}>
      <div>
        <input placeholder='enter album id' onChange={inputchange} />
      </div>
      <div className={styles.container}>
        {
          photos.slice(0, endpoint).map(item => (
            <div className={styles.card} >
              <div >
                <img src={item.thumbnailUrl} />
                <p>{item.id}</p>
                <p>{item.albumId}</p>

              </div>
            </div>))
        }
        {/* // : (
            //   <p>
            //     no data found
            //   </p>
            // ) */}

      </div>
      {photos?.slice(0, endpoint)?.length < photos.length &&
        <div className={styles.loadMoreLink}>
          <a onClick={loadmoreimg} >
            Load more...</a>
        </div>}

      {/* {photos?.slice(0, endpoint)?.length == photos.length &&
        <div className={styles.loadMoreLink}>
          <a onClick={loadlessimg} >
            Load less...</a>
        </div>} */}

    </div>
  )
}

export default Api;
