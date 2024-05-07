/*eslint-disable*/
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from 'react-bootstrap'
import { addItem } from "../store";
import { useDispatch } from "react-redux";



function Detail(props){

  
  let {id} = useParams();
  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  });
  
  let [count, setCount] = useState(0)
  let [alert, setAlert] = useState(true)
  let [tab, setTab ] = useState(0)
  let [fade2, setFade2] = useState('')
  let dispatch = useDispatch()

  useEffect(()=>{
    setFade2('end')
    return ()=>{
      setFade2('')
    }
  },[])

  useEffect(()=>{
    let a = setTimeout(()=> { setAlert(false) }, 2000)
    return ()=>{
      clearTimeout(a)
    }
  }, [])

  return(
    <div className={'container start ' + fade2}>
      {
        alert == true
        ? <div className="alert alert-warning">
        2초이내 구매시 할인
          </div>
         : null
      }


      <button onClick={()=>{
        setCount(count+1)
      } }>버튼</button>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger" onClick={()=>{
            dispatch(addItem( {id : 1, name : 'Red Knit', count : 1 }))
          }}>주문하기</button> 
        </div>
  </div>

  <Nav variant="tabs"  defaultActiveKey="link0">
    <Nav.Item>
      <Nav.Link onClick={()=>{ setTab( 0 )}}
       eventKey="link0">버튼0</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=>{ setTab( 1 )}}
       eventKey="link1">버튼1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=>{ setTab( 2 )}}
       eventKey="link2">버튼2</Nav.Link>
    </Nav.Item>
</Nav>
<TabContent shoes={props.shoes} tab={tab}/>



</div>
  )
};

function TabContent({tab, shoes}){

  let [fade, setFade] = useState('')

  useEffect(()=>{
    setTimeout(()=>{ setFade('end') }, 10)
    
    return ()=>{
      setFade('')
    }
  }, [tab])

  return (
    <div className={'start ' + fade}>
      {  [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab] }
    </div>)
}

export default Detail;