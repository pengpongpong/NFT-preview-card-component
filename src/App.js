import './App.css';
import Nft from "./Nft";
import equilibrium from "./images/image-equilibrium.jpg";
import creator_avatar from "./images/image-avatar.png"

function App() {

  const sale = {
    item: "Equilibirum",
    id: "3429",
    item_img: equilibrium,
    description: "Our Equilibrium collection promotes balance and calm.",
    price: 0.041,
    days_left: 3,
    creator: "Jules Wyvern",
    creator_avatar: creator_avatar 
}

  return (
    <Nft 
      item_img={sale.item_img}
      item={sale.item} 
      id={sale.id}
      description={sale.description}
      price={sale.price}
      days_left={sale.days_left}
      creator={sale.creator}
      creator_avatar={sale.creator_avatar}/>
  );
}

export default App;
