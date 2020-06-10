import React from 'react';
import './App.css';
import { Cards, Chart, CountryList } from './components';
import styles from './App_module.css'; 
import { fetchData } from './api';
class App extends React.Component {

  async componentDidMount(){
    const data = await fetchData();
    console.log(data);
  }
render(){
  return (
    <div className={styles.container}>
      <Cards />
      <CountryList />
      <Chart />  
    </div>
  );
 }
}

export default App;
