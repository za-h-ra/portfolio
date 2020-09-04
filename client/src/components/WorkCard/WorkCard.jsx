import React from 'react'
import styled from 'styled-components'

export default function WorkCard(props) {
  return (
    <div>
      <img src={props.image} />
      <a href={props.url}>{props.title}</a>
      <p>{props.description}</p>
    </div>
  )
}
