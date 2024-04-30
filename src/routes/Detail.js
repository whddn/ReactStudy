/*eslint-disable*/
import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
  background: ${props => props.bg };
  color: ${props => props.bg == 'blue' ? 'white' : 'black' };
  padding: 10px;
`



function Detail(props){

  let {id} = useParams();
  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  });

  return(
    <div className="container">
      <YellowBtn bg="blue">버튼</YellowBtn>

      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
  </div>
</div>
  )
};

export default Detail;