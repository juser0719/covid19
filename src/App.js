import React from 'react';
import './App.css';
import { Cards, Chart, CountryList } from './components';
import styles from './App.module.css'; 
import { fetchData } from './api';
class App extends React.Component {

  state = {
    data: {},
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
  
    this.setState({data : fetchedData});
  }
render(){
  const {data} = this.state;
  
  return (
    <div className={styles.container}>
      <Cards data = {data} />
      <CountryList />
      <Chart />  
    </div>
  );
 }
}

export default App;
