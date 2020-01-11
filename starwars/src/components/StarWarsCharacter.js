import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


let Char = styled.div`
background-color:yellow;
width: 300px;
height: auto;
margin-top: 4em;
margin-bottom: 4em;
padding-bottom: 1em;
text-align:center;
margin:0 auto;
opacity: 0.7;
border-radius: 2em;
`

let Name = styled.h2`
text-shadow: 1px 1px 5px white;
`

let Stats = styled.p`
font-size: 1.3em;
opacity: 1;
background-color: orange;
`

function StarWarsCharacter(props) {
    return (
        <Char>
            <Name>{props.person.name}</Name>
            <Stats>Height: {props.person.height}</Stats>
            <Stats>Mass: {props.person.mass}</Stats>
            <Stats>Eye Color: {props.person.eye_color}</Stats>

        </Char>
    )
}

export default StarWarsCharacter