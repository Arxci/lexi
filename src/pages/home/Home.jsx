import Bottombar from "../../components/bottombar/Bottombar"
import Card from "../../components/card/Card"
import { useEffect, useState } from "react"
import useFavorites from '../../hooks/useFavorites';

const Home = ({imageDetails}) => {
  const [cards, setCards] = useState(null)
  const {removeFavorite, addFavorite} = useFavorites();

  useEffect(() => {
    let myData = require('../../data/data.json').cards;
    setCards(myData)
  }, [])

  return (
    <div className="home container__S">
            <Bottombar />
      <div className="home__content">
        {
          cards && cards.map((card) => (
            <Card key={card.key} removeFavorite={removeFavorite} addFavorite={addFavorite} index={card.key} image={card.image} title={card.title} subtext={card.subtext}/>
          ))
        }
      </div>
    </div>
  )
}

export default Home