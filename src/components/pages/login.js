import React, { Component } from "react";
import lstyles from '../styles/login.module.css';
class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
         username: "",
         password: ""
        }
    }
    
    gotoHotel = () => {
        if(this.state.username === 'aziz' && this.state.password === '1234'){
            this.props.history.push(`/hotels`);
        }
        else{
            window.alert("Invalid Credentials")
        }
    }

    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet"/>
                <link rel='stylesheet' type='text/css' href='./login.css' />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <div className={lstyles.cont}>
                        <div className={lstyles.box1}>
                            <img  src={require('../assets/header.jpg')} className={lstyles.image} />
                        </div>
                        <div className={lstyles.box2}>
                            <img style={{width: 100}} src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.eatlogos.com%2Ffood_and_drinks%2Fpng%2Fvector_green_coffee_logo.png&f=1&nofb=1' />
                            <form className={lstyles.containflex}>
                                <p className={lstyles.headtext}>Foodie</p> 
                                <p className={lstyles.smoltext}>Login</p>
                                <input className={lstyles.inputtext} placeholder="   Enter username" type='text' onChange={(e) => {this.setState({username: e.target.value})}}/>
                                <br/>
                                <input className={lstyles.inputtext} placeholder="   Enter Password" type='password' onChange={(e) => {this.setState({password: e.target.value})}}/>
                                <br/>
                                <input className={lstyles.butt} type="submit" value="Login" onClick= { () => {this.gotoHotel()}} />
                            </form>
                            <p className={lstyles.subtext}>#ORDER<span style={{color: '#94b637'}}>FOOD</span>ONLINE</p> 
                        </div>
                </div>    
            </div>
        )
    }
}

export default App;