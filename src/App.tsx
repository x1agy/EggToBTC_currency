import React from 'react';
import Header from './components/header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { setBTCValue } from './state/BTCValue/btcValueSlice';
import './App.css'
import Converter from './components/converter/Converter';
import { RootState } from './state/store';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetchBTCData()
  }, [])

  async function fetchBTCData(){
    const response = await fetch('https://blockchain.info/ticker')
    const data = await response.json()
    dispatch(setBTCValue(data.RUB.last))
  }

  return (
    <div className='App'>
      <Header />
      <Converter />
    </div>
  );
}

export default App;
