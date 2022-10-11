import React, { useState, useSearchParams } from 'react';
import Card from '../../cards/Card';
import Navbar from '../../navbar/Navbar';
import axios from 'axios';
import { useEffect } from 'react';
import styles from './landingPage1.module.css';
import { createSearchParams, Link, useNavigate } from "react-router-dom";





const LandingPage = () => {

        const navigate = useNavigate()

        const [albumList, setalbumList] = useState([]);



        const options = {
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/photos',
                // headers: {
                //   'X-RapidAPI-Key': 'd74eed7382mshb581bf67310af63p150f59jsnab2b4105dd3a',
                //   'X-RapidAPI-Host': 'recipesapi2.p.rapidapi.com'
                // }
        };

        const fetchAlbums = () => {
                console.log("fn call")
                axios.request(options)
                        .then(function (response) {
                                console.log(response.data);
                                setalbumList(response.data);
                        }).catch(function (error) {
                                console.error(error);
                        }).finally(() => console.log('dsfjh'))
        }

        useEffect(() => {
                console.log('inuse effect')
                fetchAlbums();

        }, [])

        const handleChange = (id) => {
                // navigate('/about-us')
                navigate({
                        pathname: '/product_details',
                        search: `?${createSearchParams({
                                id: id
                        })}`
                        // search: `?id=${id}`,


                });
                // console.log(id)
        }

        return (
                <>
                        <div>
                                <Navbar />

                        </div>
                        <div className={styles.cardContainer}>
                                {
                                        albumList?.map(item => (
                                                <Card data={item} key={item.id} onClick={() => handleChange(item.id)} />
                                        ))

                                }
                        </div>



                </>
        )
}

export default LandingPage;
