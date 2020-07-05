import React, { Component } from 'react'
import { FacebookShareButton, TwitterShareButton, EmailShareButton, FacebookIcon, TwitterIcon, EmailIcon } from 'react-share'
import ReactTooltip from 'react-tooltip'

class shareExamp extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginBottom:"auto" }}>
        <FacebookShareButton target="_blank" url={this.props.id} hashtag='#CSCI_571_NewsApp' className="network_share-button" data-tip="Facebook">
          <FacebookIcon round={true} size={23} />
        </FacebookShareButton>
        <TwitterShareButton url={this.props.id} hashtag='#CSCI_571_NewsApp' className="network_share-button" data-tip="Twitter">
          <TwitterIcon round={true} size={23} />
        </TwitterShareButton>
        <EmailShareButton url={this.props.id} hashtag='#CSCI_571_NewsApp' className="network_share-button" data-tip="Email">
          <EmailIcon round={true} size={23} />
        </EmailShareButton>
        <ReactTooltip place="top" type="dark" />
      </div>
    )
  }
}
export default shareExamp