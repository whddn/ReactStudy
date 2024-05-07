/*eslint-disable*/

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail.js'
import axios from 'axios'
import Cart from './routes/Cart.js'

export let Context1 = createContext()


function App() {

  useEffect(()=>{

    localStorage.setItem('watched', JSON.stringify( [] ))
  },[])

  let [shoes, setShoes] = useState(data)
  let [재고] = useState([10, 11, 12])
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#home">Ai농가집성마켓</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=> { navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    

      <Routes>
        <Route path="/" element={
        <>
        <div className="main-bg"></div>
        <div className="container">
          <div className="row">
          { shoes.map((a, i)=>{
              return <Card shoes={shoes[i]} i={i}></Card>
            })}
          </div>
        </div> 
        <button onClick={()=>{
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((결과)=>{ 
            console.log(결과.data)
            let copy = [...shoes, ...결과.data];
            setShoes(copy);
           })
           
        }}>더보기</button>
       </>
        } />
        <Route path="/detail/:id" element={
          <Detail shoes={shoes}/>  
        } />

        <Route path="/cart" element={ <Cart/> } />

      </Routes>

      

    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사정보</h4>
    </div>
  )
}

function Card(props){
  return(
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%"/>
      <h5>{props.shoes.title}</h5>
       <p>{props.shoes.price}</p>
    </div>
  )
}


export default App;
