import React, { Component } from 'react'
import { PageHeader, Image } from 'react-bootstrap'
import { connect } from 'react-redux'

@connect(store => {
  return {
    userName: store.fb ? store.fb.userName : 'Loading...',
    profilePicture: store.fb ? store.fb.profilePicture : '/profile_picture.png'
  }
})
export default class Home extends Component {
  static get id () {
    return 'page_home'
  }

  static get title () {
    return 'Home'
  }

  static get href () {
    return '/home'
  }

  render () {
    return (
      <div>
        <div className='head'>
          <PageHeader>
            <small>{this.props.userName}</small>
          </PageHeader>
        </div>
        <div className='tail'>
          <Image id='profile-pic' src={this.props.profilePicture} rounded responsive />
        </div>
      </div>
    )
  }
}
