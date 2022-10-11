import React, { useState } from 'react'
// import Common from './common';
import styles from './card.module.css'

const Card = ({ data, onClick }) => {


        return (
                <>
                        <div className={styles.cardbox} onClick={onClick} >
                                <div className={styles.img}>
                                        <img src={data.thumbnailUrl} />
                                </div>
                                <div className={styles.productInfo}>
                                        <h3>{data.title}</h3>
                                        <button>Product details</button>

                                </div>
                        </div>
                </>
        )
}

export default Card;