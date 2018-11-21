import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './../images/newslogo.jpg';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Collapse, UncontrolledCollapse } from 'reactstrap';
import './Weather.css';
import Homepage from './Homepage.js';

class News extends Component {
  constructor(props) {
    super(props);


    this.state = {
      news: [],
      dropdownOpen: false,
      country: '',
      // date:[]


    };

    this.moreInformation = this.moreInformation.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    // this.toggle1 = this.toggle1.bind(this);




  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  renderHeadlines() {
    const { news } = this.state;

    return (
      news.map(contact =>
        <tr key={contact.id}>

          <td>{contact.title}</td>

        </tr>
      )
    );
  }
  moreInformation() {

    return (
      this.state.news.map(data => {
        return (
          <div>
            <CardSubtitle>{data.title}</CardSubtitle>
          </div>
        )

      })

    )

  }
  componentDidMount() {

    axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=3793f83bc3824d0e9179c7b431038155`,

    ).then(res => {
      const news = res.data.articles;
      this.setState({ news });
      console.log("news", news);
    });

  }

  handleClick(e) {

    console.log(e.target.value)
    axios.get(
      `https://newsapi.org/v2/top-headlines?country=${e.target.value}&apiKey=3793f83bc3824d0e9179c7b431038155`,

    ).then(res => {
      const news = res.data.articles;
      // const date = res.data.articles.publishedAt;
      this.setState({ news });
      // this.setState({ date });
      console.log("news", news);
      console.log("total", res.data);
      // console.log("date",date);     
    });

  }
  // toggle1() {
  //   this.setState({ collapse: !this.state.collapse });
  // }
  handleClick2(e) {

    console.log(e.target.value)
    axios.get(
      `https://newsapi.org/v2/top-headlines?country=${e.target.value}&apiKey=3793f83bc3824d0e9179c7b431038155`,

    ).then(res => {
      const news = res.data.articles;
      this.setState({ news });
      console.log("news", news);
    });

  }
  handleClick3(e) {

    console.log(e.target.value)
    axios.get(
      `https://newsapi.org/v2/top-headlines?country=${e.target.value}&apiKey=3793f83bc3824d0e9179c7b431038155`,

    ).then(res => {
      const news = res.data.articles;
      this.setState({ news });
      console.log("news", news);
    });

  }

  render() {
    debugger;
    return (
      <div>
        <div class="box">
          <div class="inner">
            <span>BREAKING NEWS!!</span>
          </div>
          <div class="inner">
            <span>BREAKING NEWS!!</span>
          </div>
        </div>
        <center>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
            <DropdownToggle caret className="ddcountry">
              SELECT COUNTRY
                    </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.handleClick} value='us'>United States</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={this.handleClick2} value='ae'>United Arab Emirates</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={this.handleClick3} value='in'>India</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </center>
        <div className="carddis">

          {
            this.state.news.map((data, index) => {
              return (
                <div>


                  <Card className="ncrd">
                    <CardBody>
                      <CardImg className='newslogo' src={require("./../images/newslogo.jpg")} />

                      <a id={['news', index].join('')} style={{ marginBottom: '1rem' }}><CardTitle className="cardtitle"><u>{data.title}</u></CardTitle></a>
                      {/* <a onClick={this.toggle1} style={{ marginBottom: '1rem' }}><u>Read More</u></a> */}
                      <CardSubtitle className="cardsubs21">{data.content}</CardSubtitle>
                      {/* <Button color="primary" onClick={this.toggle1} style={{ marginBottom: '1rem' }}>Read More</Button> */}
                      <UncontrolledCollapse toggler={['#news', index].join('')}>
                        {/* <Collapse isOpen={this.state.collapse}> */}
                        <CardSubtitle className="cardsubs1">{data.content ? data.content.slice(0,-13): ""}<a target="_blank" href={data.url}>Full News</a></CardSubtitle>
                      </UncontrolledCollapse>
                      {/* </Collapse> */}
                      <br />
                      <br />
                      <CardSubtitle className="cardsubs">{data.publishedAt}</CardSubtitle>

                       




                    </CardBody>
                  </Card>








                </div>
              )
            })
          }
        </div>
        <br />
        <br />
        <center>
          <a href='./' >

            {/* <Button color="success">Back to Homepage</Button> */}
          </a>
        </center>






      </div>
    );
  }
}

export default News;
