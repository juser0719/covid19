import React from 'react';
import './App.css';
import { Cards, Chart, CountryList } from './components';
import styles from './App.module.css'; 
import { fetchData } from './api';
import imgsrc from '../src/covid19.jpg';
class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
  
    this.setState({data : fetchedData});
  }
 
  CountryChange =  async(country) =>{
    const fetchedData = await fetchData(country);
    
    this.setState ({data: fetchedData, country: country});
    console.log(fetchedData);
  }
 
render(){
  const {data , country} = this.state;
  
  return (
    <div className={styles.container}>
      <img className="IMG" src={imgsrc} alt="covid19Img"/>
      <Cards data = {data} />
      <CountryList CountryChange = {this.CountryChange}  />
      <Chart data = {data} country = {country}/>  
    </div>
  );
 }  
}

export default App;
