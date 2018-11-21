import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Weather from './Weather.js'
import News from './News.js'
import './../images/bbc.jpg';
import './../images/wthr.jpg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import { Badge } from 'reactstrap';
class Homepage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
          {/* <center>
              <div className="total">
                <div className="bbc">
                <a href='./News' >
                <img border="0"  src={require("./../images/bbc.jpg")} width="300" height="300"></img>
                </a>
                </div>
                <div className="wthr">
                <a href='./Weather' >
                <img border="0"  src={require("./../images/wthr.jpg")} width="300" height="300"></img>
                </a>
                </div>
              </div>    
          </center> */}
          
          <div className="displaying">
              <div className="newsdisplay">
              <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Today's News</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink >Notifications <Badge color="danger">10</Badge></NavLink>
              </NavItem>
              <NavItem>
                <NavLink>ShareMarket</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Entertainment
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Cinema News
                  </DropdownItem>
                  <DropdownItem>
                    Sports News
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
              <News />
              </div>
              <div className="weatherdisplay">
                  
                      <Navbar className="nvclr" color="dark" dark expand="md">
                  <NavbarBrand href="/">Today's Weather</NavbarBrand>
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                      <NavLink >Notifications <Badge color="danger">2</Badge></NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink>Humidity</NavLink>
                      </NavItem>
                      <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                         Temprature
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem>
                            MaximumTemp
                          </DropdownItem>
                          <DropdownItem>
                            MinimumTemp
                          </DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>
                            Reset
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Nav>
                  </Collapse>
                </Navbar>
              
              <Weather />
              </div>
           
            
              

          </div>
      </div>
    );
  }
}

export default Homepage;
