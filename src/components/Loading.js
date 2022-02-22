import spinner from '../1476.gif'
import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={spinner} alt="loading"/>
      </div>
    )
  }
}
