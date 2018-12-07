import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Currency from "./Currency/Currency";
import Input from "./Input/Input";
import Display from "./Display/Display";

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            bdtToUsd: true,
            amount: 0,
            display: false,
        };

        this.handleCurrency=this.handleCurrency.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleCurrency(){
        let bdtToUsd=!this.state.bdtToUsd;
        console.log("bdtToUsd: "+bdtToUsd);
        this.setState({
            ...this.state,
            bdtToUsd: bdtToUsd,
        });
    }

    handleSubmit(event){
        this.setState({
            ...this.state,
            display: true,
        });
    }

    handleChange(event){
        console.log(event.target.value);
        this.setState({
            ...this.state,
            amount: event.target.value,
        });
    }

    render() {
        let currencyStts=null;
        if (this.state.bdtToUsd){
            currencyStts="bdt->usd";
        }
        else{
            currencyStts="usd->bdt";
        }
        return (
            <div className="App">
                <div className="container">
                    <div className="row justify-content-md-center py-3">
                        <Currency stts={currencyStts} onClick={this.handleCurrency} />
                    </div>
                    <div className="row justify-content-md-center py-3">
                        <Input
                            amount={this.state.amount}
                            onClick={this.handleSubmit}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="row justify-content-md-center py-3">
                        <Display
                            bdtToUsd={this.state.bdtToUsd}
                            amount={this.state.amount}
                            display={this.state.display}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
