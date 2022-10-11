
import React, { useState, useCallback } from 'react'
import ListItem from './ListItem';
import styles from './style.module.css';

const PETS = [
  { id: 1, name: 'dog' },
  { id: 2, name: 'cat' },
  { id: 3, name: 'fish' },
  { id: 4, name: 'hamster' },
  { id: 5, name: "Crocodile" }
]

const List = () => {

  const [pets, setPets] = useState(PETS)

  const movePetListItem = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = pets[dragIndex]
      const hoverItem = pets[hoverIndex]

      setPets(pets => {
        const updatedPets = [...pets]
        updatedPets[dragIndex] = hoverItem
        updatedPets[hoverIndex] = dragItem
        return updatedPets
      })
    },
    [pets],
  )

  return (
    <div className={styles.list}>{pets.map((pet, index) => (
      <ListItem
        className={styles.listItem}
        key={pet.id}
        index={index}
        text={pet.name}
        moveListItem={movePetListItem}
      />
    ))}
    </div>
  )
}
export default List;