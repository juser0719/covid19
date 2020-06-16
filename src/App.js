import React from 'react';
import './App.css';
import { Cards, Chart, CountryList } from './components';
import styles from './App.module.css'; 
import { fetchData } from './api';
class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
  
    this.setState({data : fetchedData});
  }
 
  CountryChage =  async(country) =>{
    const fetchedData = await fetchData(country);
    
    this.setState = ({data: fetchedData, country: country});
    console.log(fetchedData);
  }
 
render(){
  const {data , country} = this.state;
  
  return (
    <div className={styles.container}>
      <Cards data = {data} />
      <CountryList CountryChage = {this.CountryChage}  />
      <Chart data = {data} country = {country}/>  
    </div>
  );
 }  
}

export default App;
