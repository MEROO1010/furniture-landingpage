import React from 'react'

import styled from 'styled-components';
import '../style/Header.css'
import img from '../assets/bg1n.png';




function header() {

  return (
    <Container>

    {/*start the logo*/}
        <Logo>
            <img src='./logo.png' alt=''/>
        </Logo>

        {/*end the logo*/}

        {/*start the Menu*/}
        <Menu>
          <ul>
          <li><a href="default.asp">Home</a></li>
          <li><a href="Proudcts">Products</a></li>
          <li><a href="default.asp">About Us</a></li>
          <li><a href="default.asp">Contact Us</a></li>
          </ul>
        </Menu>
          {/*end the Menu*/}
        <BGImg>
       <img src={img} alt=""/>

       
       </BGImg>
       
       {/* start the big title*/}

       <BIGText>
         <p>Choose your best<br/> <div id='center-text'>furniture</div></p>   
       </BIGText>


       {/*start the btn*/}

       <Btn>
       <button type="button">Browse</button>


       </Btn>

       {/*end the btn*/}
    </Container>
  )
}

export default header

const Container = styled.div`

`

const Logo = styled.div`
margin-left:40px;
margin-top:20px;


`

const Menu = styled.div`

margin-left:300px;
padding-right:110px;
font-size:20px;
list-style-type: none;
text-decoration: none;

  a{
    text-decoration: none;
    color:black;
    font-weight:620;
    font-size:25px;
  }


 
`

const BGImg = styled.div`

max-width:100%;
 width: 100%;
 height: 100%;
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
 
`

const BIGText = styled.div`
  margin: -800px  240px;
  font-size: 50px;
  font-weight:bold;
  color:#575757;

  #center-text{
    margin-left:100px;
  }  
`

const Btn  = styled.div`
  button{
    margin: 828px 280px;
    color:black;
    width:340px;
    height:60px;
    border-radius:40px;
    background-color:#FFE280;
    border:none;
    font-size:24px;
    font-weight:bold;
    color:white;
    cursor: pointer;
  }
`