import Card from "../../components/card/Card"

const Home = () => {
  return (
    <div className="home container__S">
        <Card 
        image={'https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
        title ={'This is a card title'} 
        subtext={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, architecto rerum, omnis explicabo cum repellat aspernatur facere deleniti numquam quaerat impedit modi! Velit porro repellat eaque minima perspiciatis tempore libero.'}/>
        <Card 
        image={'https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
        title ={'This is a card title'} 
        subtext={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, architecto rerum, omnis explicabo cum repellat aspernatur facere deleniti numquam quaerat impedit modi! Velit porro repellat eaque minima perspiciatis tempore libero.'}/>
        <Card 
        image={'https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
        title ={'This is a card title'} 
        subtext={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, architecto rerum, omnis explicabo cum repellat aspernatur facere deleniti numquam quaerat impedit modi! Velit porro repellat eaque minima perspiciatis tempore libero.'}/>
    </div>
  )
}

export default Home