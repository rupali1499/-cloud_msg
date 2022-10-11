import React from 'react';
import styles from './remove.module.css';
import { counterSlice, remove } from './slice';
import { removeElement } from './slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { counterSlice } from './slice';


const RemoveElements = () => {
  const dispatch = useDispatch();

  const removeElement = useSelector(state => state);

  const handleChange = (e) => {
    val = e.target.value

  }
  let val;
  const removeitem = () => {
    console.log('remove item clicked', typeof remove, 'hjjhjh');
    console.log("remove element:", val)

    console.log(removeElement.counterSlice.value)

    dispatch(remove(val))
  }
  // console.log(`${counterSlice.reducer.remove.state.value}`)


  return (
    <div className={styles.container}>
      <div className={styles.map}>
        {removeElement.counterSlice.value.map(v => (<p >{v}</p>))}</div>
      <input placeholder='enter no from 1 to 10' onChange={handleChange} />
      <button onClick={removeitem}>remove</button>

    </div>
  )
}
export default RemoveElements;
