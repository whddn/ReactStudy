import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail.js'

function App() {

  let [shoes] = useState(data)
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
       </>
        } />
        <Route path="/detail" element={<Detail/>} />

        <Route path="/about" element={<About/>} />
        <Route path="/about/member" element={<About/>} />
        <Route path="/about/location" element={<About/>} />

        <Route path="*" element={<div>없는페이지임</div>} />
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
