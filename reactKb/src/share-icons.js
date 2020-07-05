import React, { Component } from 'react'
import { FacebookShareButton, TwitterShareButton, EmailShareButton, FacebookIcon, TwitterIcon, EmailIcon } from 'react-share'

class shareEx extends Component {
  render() {
    return <span>
      <div style={{ textAlign: "center", fontSize: '19px', fontWeight: '500' }}>Share Via</div>
      <div style={{ textAlign: "center" }}>
        <FacebookShareButton target="_blank" url={this.props.id} hashtag='#CSCI_571_NewsApp' className="network_share-button">
          <FacebookIcon round={true} size={52} />
        </FacebookShareButton>
        <TwitterShareButton url={this.props.id} hashtag='#CSCI_571_NewsApp' style={{ marginLeft: '22%' }} className="network_share-button">
          <TwitterIcon round={true} size={52} />
        </TwitterShareButton>
        <EmailShareButton url={this.props.id} hashtag='#CSCI_571_NewsApp' style={{ marginLeft: '22%' }} className="network_share-button">
          <EmailIcon round={true} size={52} />
        </EmailShareButton>
      </div>
    </span>
  }
}
export default shareEx