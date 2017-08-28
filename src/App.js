import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar' 
import VedioList from './components/vedio_list' 


const API_KEY= "App Key";


class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
        vedios:  []
      };

    this.vedioSearch('iron man')
  }

  vedioSearch(search_term){
    YTSearch({key: API_KEY, term: search_term }, (vedios) => {
        this.setState({vedios})
    });
  }


  render() {
    return (
      <div>
         <div> < SearchBar onSerchTermChanage = { term => this.vedioSearch(term) }  /> </div>
         <div> < VedioList vedios = { this.state.vedios} /> </div>
      </div>
    )
  }

}

export default App;

