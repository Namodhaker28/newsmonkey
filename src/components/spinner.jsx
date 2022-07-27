import React, { Component } from 'react'
import loading from '../assets/loading.gif'

export default class spinner extends Component {
  render() {
    return (
      <img src={loading} alt="loading" />
    )
  }
}
