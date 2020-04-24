import React from 'react';
import styles from './App.module.css'
import {fetchData} from './api'

import {Cards, Chart, CountryPicker, Footer} from './components'

class App extends React.Component{

  state = {
    data: {},
    country: '',
  }

  async componentDidMount (){
    const fetchedData = await fetchData()
    // console.log(fetchedData);
    // console.log(data.confirmed);
    this.setState({data: fetchedData})
  }

  handleCountryChange = async (country) => {

    const fetchedData = await fetchData(country)

    this.setState({data: fetchedData, country: country})
    console.log(fetchedData);
    console.log(country);
  }



  render(){

    const {data, country}  = this.state;  // this destructures the data from state
    // const country = this.state.country
    return(
      <div className={styles.container}>
        <div className= {styles.logo}>
          <h1> {this.state.country ? country : "Global"}</h1>
        </div>
        <Cards  data = {data}/>  {/* from the destructured data in line 22.*/}
        <CountryPicker  handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>

        <Footer />
      </div>

    )

  }

}

export default App;
