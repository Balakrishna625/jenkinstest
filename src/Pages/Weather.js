import React from "react";




import axios from 'axios';
import './Weather.css';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';
import Homepage from './Homepage.js';
import './../images/sunny.jpg';

const API_KEY = "82bd5a2cade872666f4dcc1aa0dad9c2";

class Weather extends React.Component {
    constructor(props) {
        super(props);
    
    
        this.state = {
            weather:[],
            position:'',
            ll:[],
            latitude:'',
            longitude:'',
            
          
    
        };

        this.getWeather = this.getWeather.bind(this);
        // this.check = this.check.bind(this);
        // this.check1 = this.check1.bind(this);
        this.showPosition = this.showPosition.bind(this);
        
        const x = document.getElementById("demo");
       
        
      }
      componentDidMount(){
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition);
      }

      }
  getWeather() {
      
    axios.get(`https://openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}9&appid=b6907d289e10d714a6e88b30761fae22`

    ).then(res => {
        const weather = res.data.main;
        this.setState({ weather });
        console.log(weather);
      });
      
  }
//   check(){
//     axios.get(`http://api.ipstack.com/125.18.138.98?access_key=d65d35775f235f1cef78f65d9b5fddb2`

// ).then(res => {
//     const ll = res.data;
//     this.setState({ ll });
//     console.log("lattitude",ll);
//   });

//   const publicIp = require('public-ip');
 
//     publicIp.v4().then(ip => {
//         console.log(ip);
//         //=> '46.5.21.123'
//     });
    
//     publicIp.v6().then(ip => {
//         console.log(ip);
//         //=> 'fe80::200:f8ff:fe21:67cf'
//     });

    

    

   
//   }
  
 

    

   
  
  showPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    this.setState({latitude:position.coords.latitude});
    this.setState({longitude:position.coords.longitude});
    
  }



  


  render() {
    return (
      <div>

         <div class="box">
                <div class="inner">
                    <span>Today's Weather</span>
                </div>
                <div class="inner">
                    <span>Today's Weather</span>
                </div>
            </div>
          
        
        <center>
            {/* <Button color="danger" onClick={this.check1}>Accept Sharing Your Location</Button> */}
            {/* <Button color="danger" onClick={this.check}>Accept Sharing Your Location</Button> */}
            <Card className="wcrd" align="left">                            
              <CardBody>
                <CardImg className='wthrlogo'  src={require("./../images/sunny.jpg")}/>
                 
                <CardTitle><span className="head">Temperature:</span><span id="tempid">{this.state.weather.temp}°C</span><br />
                <span className="head">Pressure:</span><span id="presid">{this.state.weather.pressure}</span><br />
                <span className="head">Humidity:</span><span id="humid">{this.state.weather.humidity}</span><br />
                <span className="head">MIN_Temperature:</span><span id="temp_minid">{(this.state.weather.temp_min)} °C</span><br />
                <span className="head">MAX_Temperature:</span><span id="temp_maxid">{this.state.weather.temp_max} °C</span><br /></CardTitle>
               
                     
                <Button color="info" onClick={this.getWeather}>getWeather</Button>

       
                                
                                
                </CardBody>
            </Card>

             
             
        </center>
        <center>
        <a href='./' >

        {/* <Button color="success">Back to Homepage</Button> */}
        </a>
        </center>

       

      
      </div>
    )
  }
}
  


export default Weather;


