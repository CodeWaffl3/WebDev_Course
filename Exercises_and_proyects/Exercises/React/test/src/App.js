import logo from './logo.svg';
import './App.css';
import Card from './card';
import contacts from "./data/contacts"

function createCard(contact){
  return (
      <Card
        name={contact.name}
        img={contact.img}
        adress={contact.adress}
      />
  )
}

function App() {
  const customStyle = {
    color: "black",
    fontSize: "25px",
    backgroundColor: "orange"
  };

  const num = 7;
  const name = "Gabe";
  const lastname = "Cardenas";
  const randomNum = Math.floor(Math.random()*100);
  var currentDate = Date();
  if (randomNum > 50){
    customStyle.color = "white";
    customStyle.backgroundColor = "green";
  }
  const imgUrl = "http://picsum.photos/200";
  return (
    <div className="App">
      <h1 style={customStyle} >Hello World</h1>
        {contacts.map(createCard)}

        <p>Is like EJS: {num}</p>
        <p>Just a ramdom number { randomNum }</p>
        <p>Name:  { name + " " + lastname }</p>
        <p>We are in { currentDate }</  p>
        <img src= { imgUrl } alt="Dog"/>
    </div>
  );
}

export default App;
