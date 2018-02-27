import React, { Component } from 'react'
import { FormGroup, PageHeader, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'

export default class MeetingEvents extends Component {
  static get id () {
    return 'page_meeting_events'
  }

  static get title () {
    return 'Meeting events'
  }

  static get href () {
    return '/meeting-events'
  }

  static get propTypes () {
    return {}
  }

  handleChange () {
    console.log('inside on change')
  }

  render () {
    return (
      <div>
        <div className='head'>
          <PageHeader>
            <small>Meetings</small>
          </PageHeader>
        </div>
        <div className='tail'>
          <form>
            <FormGroup
              controlId='formBasicText'
              validationState={null} >
              <ControlLabel>Working example with validation</ControlLabel>
              <FormControl
                type='text'
                value='sample value'
                placeholder='Enter text'
                onChange={this.handleChange.bind(this)} />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length.</HelpBlock>
            </FormGroup>
          </form>
        </div>
      </div>
    )
  }
}
