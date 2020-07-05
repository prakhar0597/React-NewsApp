import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Icon from './shareIconDetail'
import { Card, CardDeck, Container, Row, Col } from 'react-bootstrap'
import Bookmark from './bookmark2'
import TextTruncate from 'react-text-truncate'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import * as Scroll from 'react-scroll'

// , CardImg, CardText, CardBody, CardLink,
//     CardTitle, CardSubtitle

let scroll = Scroll.animateScroll
class DetailExample extends Component {
  constructor () {
    super()
    this.state = {
      desp: false,
      des1: '',
      des2: ''
    }
    this.showangle = this.showangle.bind(this)
    this.showall = this.showall.bind(this)
    this.showless = this.showless.bind(this)
  }

  showangle () {
    if (this.state.des2.length !== 0) {
      return <FaAngleDown />
    }
  }

  showall () {
    // console.log("hdbjdbfjegbj")
    this.setState({ desp: true })
    scroll.scrollToBottom({ smooth: true })
  }

  showless () {
    // console.log("hdbjdbfjegbj")
    this.setState({ desp: false })
    scroll.scrollToTop({ smooth: true })
  }

  componentDidMount () {
    console.log(this.props.description)
    const d = this.props.description
    let des = d.split('.')
    this.setState({ length: des.length })
    // console.log(des);

    let des_small = '',
      des_big = ''
    for (var i = 0; i < des.length - 1 && i < 4; i++) {
      des_small = des_small + des[i] + '.'
    }
    this.setState({ des1: des_small })
    if (des.length - 1 > 4) {
      for (var i = 4; i < des.length - 1; i++) {
        des_big = des_big + des[i] + '.'
      }
      this.setState({ des2: des_big })
    }
  }

  render () {
    if (this.state.desp === false) {
      return (
        <div>
          <Card
            style={{
              width: '98%',
              margin: 'auto', cursor: "pointer",
              boxShadow: '-3px 3px 3px lightgrey, 3px 3px 3px lightgrey'
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontStyle: 'italic', fontSize: '25px' }}>
                {this.props.title}
              </Card.Title>
              {/* <Card.Text style={{marginLeft: "1%", marginRight: "1%", display: "flex"}}>
                                <div style={{fontStyle: "italic", width:"90%"}}>{this.props.date.substring(0, 10)}</div>
                                <div style={{ color: "red", display: 'flex' }}>
                                    <Icon title={this.props.title} id={this.props.url} />
                                    <Bookmark key={this.props.id} url={this.props.url} source={this.props.source} section={this.props.section} id={this.props.id} title={this.props.title} date={this.props.date} image_url={this.props.image_url} />
                                </div>
                            </Card.Text> */}
              <Container fluid>
                <Row>
                  <Col lg={9} xs={5}>
                    <Card.Text>
                      <span style={{ fontStyle: 'italic' }}>
                        {this.props.date.substring(0, 10)}
                      </span>
                    </Card.Text>
                  </Col>
                  <Col className="align_dateline col-lg-2 col-5">
                    <Icon title={this.props.title} id={this.props.url} />
                  </Col>
                  <Col className="align_dateline col-lg-1 col-2">
                    <Bookmark
                      key={this.props.id}
                      url={this.props.url}
                      source={this.props.source}
                      section={this.props.section}
                      id={this.props.id}
                      title={this.props.title}
                      date={this.props.date}
                      image_url={this.props.image_url}
                    />
                  </Col>
                </Row>
              </Container>
              <Card.Img variant='top' src={this.props.image_url} />
              <Card.Text style={{ fontSize: '15px', color: '1f1f1f', textAlign: 'justify' }}>
                {this.state.des1}
                <span style={{ float: 'right' }} onClick={this.showall}>
                  <br />
                  {this.showangle()}
                  {/* <FaAngleDown /> */}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )
    } else {
      return (
        <div>
          <Card
            style={{
              width: '98%',
              margin: 'auto', cursor: "pointer",
              boxShadow: '-3px 3px 3px lightgrey, 3px 3px 3px lightgrey'
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontStyle: 'italic', fontSize: '25px' }}>
                {this.props.title}
              </Card.Title>
              <Container fluid>
                <Row>
                  <Col lg={9} xs={5}>
                    <Card.Text>
                      <span style={{ fontStyle: 'italic' }}>
                        {this.props.date.substring(0, 10)}
                      </span>
                    </Card.Text>
                  </Col>
                  <Col className="align_dateline col-lg-2 col-5">
                    <Icon title={this.props.title} id={this.props.url} />
                  </Col>
                  <Col className="align_dateline col-lg-1 col-2">
                    <Bookmark
                      key={this.props.id}
                      url={this.props.url}
                      source={this.props.source}
                      section={this.props.section}
                      id={this.props.id}
                      title={this.props.title}
                      date={this.props.date}
                      image_url={this.props.image_url}
                    />
                  </Col>
                </Row>
              </Container>
              <Card.Img variant='top' src={this.props.image_url} />
              <Card.Text style={{ fontSize: '15px', color: '1f1f1f', textAlign:'justify' }}>
                {this.state.des1}
                <br />
                <br />
                {this.state.des2}
                <span style={{ float: 'right' }} onClick={this.showless}>
                  <br />
                  <FaAngleUp />
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )
    }
  }
}

export default DetailExample
