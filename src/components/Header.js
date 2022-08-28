import React from 'react'
import styled from 'styled-components';
import '../style/Header.css'


function header() {
  return (
    <Container>
        <Logo>
            <a><img src='./logo.png'/></a>
        </Logo>
        <Menu>
          <ul>
          <li><a href="default.asp">Home</a></li>
          <li><a href="default.asp">Products</a></li>
          <li><a href="default.asp">About US</a></li>
          <li><a href="default.asp">Contact US</a></li>
          </ul>
        </Menu>
    </Container>
  )
}

export default header

const Container = styled.div`

`

const Logo = styled.div`
margin-right:1300px;
margin-top:20px;


`

const Menu = styled.div`

margin-left:300px;
padding-right:140px;
font-size:20px;
list-style-type: none;


 
`