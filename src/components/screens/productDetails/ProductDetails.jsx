import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './productDetails.module.css'
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART } from '../../../REdux/action/index';
import reducer from '../../../REdux/reducer/reducer';
import { increment } from '../../../reduxNew/slices/slice';


const ProductDetails = (props) => {

        const dispatch = useDispatch();
        const val = useSelector(s => s)

        const [counter, updateCounter] = useState(0);
        const [value, setValue] = React.useState('address 1');
        const [details, setdetails] = useState("");
        function handleIncrement() {
                updateCounter(counter + 1);
        }

        function handleDecrement() {
                updateCounter(counter <= 0 ? 0 : counter - 1);
        }
        const handleChange = (event) => {
                setValue(event.target.value);
        };
        const [searchParams, setSearchParams] = useSearchParams();
        const id = searchParams.get("id");
        console.log(searchParams.get("id"));
        // console.log(state.cartItems)

        const options = {
                method: 'GET',
                url: `https://jsonplaceholder.typicode.com/photos/${id}`,
                // headers: {
                //   'X-RapidAPI-Key': 'd74eed7382mshb581bf67310af63p150f59jsnab2b4105dd3a',
                //   'X-RapidAPI-Host': 'recipesapi2.p.rapidapi.com'
                // }
        };

        useEffect(() => {
                console.log(val, 'dfs')
        }, [val])


        const fetchDetails = () => {
                console.log("fn call")
                axios.request(options)
                        .then(function (response) {
                                console.log(response.data);
                                setdetails(response.data);
                        }).catch(function (error) {
                                console.error(error);
                        }).finally(() => console.log('dsfjh'))
        }

        useEffect(() => {
                console.log('inuse effect')
                fetchDetails();
        }, [])

        const counterValue = () => {
                let product = {
                        image: details.url,
                        name: details.title,
                        quantity: counter,
                        address: value
                }
                dispatch({
                        type: ADD_TO_CART,
                        payload: product
                })
                // dispatch(increment())
        }




        return (
                <>
                        <div>
                                <Navbar />

                        </div>
                        <div className={styles.container}>
                                <div className={styles.imgdiv}>
                                        <img src={details.url} />

                                </div>
                                <div className={styles.description}>
                                        <div className={styles.titleDiv}>
                                                <p>{details.title}</p>
                                        </div>
                                        <div className={styles.counterDiv}>
                                                <button onClick={handleIncrement}>+</button>
                                                <span className={styles.counter} >{counter}</span>
                                                <button onClick={handleDecrement}>-</button>

                                        </div>
                                        <div className={styles.addressDiv}>
                                                <label>
                                                        Select delivery address
                                                        <select value={value} onChange={handleChange}>
                                                                <option value="address1">Address1</option>
                                                                <option value="address2">Address2</option>
                                                                <option value="address3">Address3</option>
                                                        </select>
                                                </label>
                                        </div>
                                        <div>
                                                <button onClick={counterValue}>ADD TO CART</button>
                                        </div>


                                </div>

                        </div>
                </>
        )
}
export default ProductDetails;
