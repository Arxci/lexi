import { useState } from 'react';

const useFavorites = () => {

    const [favorites, setFavorites] = useState([])

    function addFavorite(cardToAdd) {
        favorites.push(cardToAdd);
    }

    function removeFavorite(key) {
        var temp = []
        favorites.map((card) => {
            if (card.key !== key ) {
                temp.push(card)
            }  
        })
        setFavorites(temp)
    }
      
    return {favorites, setFavorites, removeFavorite, addFavorite}
}

export default useFavorites