import React, { Component } from 'react'
import { PageHeader, Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

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

  static get propTypes () {
    return {
      userName: PropTypes.string,
      profilePicture: PropTypes.string
    }
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
