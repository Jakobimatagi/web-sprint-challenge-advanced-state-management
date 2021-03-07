import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


import * as smurfActions from './actions/index'
import { bindActionCreators } from "redux";
import {connect} from 'react-redux'
import {fetchSmurfs} from './actions/index';

class App extends Component {
  constructor(props){
    super(props)
    

    const { dispatch } = props;

    this.boundActionCreator = bindActionCreators(smurfActions, dispatch)
  }
  componentDidMount(){
    this.props.fetchSmurfs()
  }

  

  render() {
    return (
      
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = {fetchSmurfs}

export default connect(null,mapDispatchToProps) (App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.