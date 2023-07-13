import { useState } from 'react';

import './App.css';
import NumberButton from './Components/NumberButton';
import RegButton from './Components/RegButton'
import UnaryButton from './Components/UnaryButton';

function App() {
  const [currentVal, setCurrentVal] = useState('0');
  const [processingVal, setProcessingVal] = useState('');
  const updateCurrentVal = (newNum) => {
    if (currentVal.includes('.') && newNum == '.') {
      return;
    } else if (newNum == 'del' && currentVal == '0') {
      return;
    } else if (currentVal == '0') {
      if (newNum == '.') {
        setCurrentVal('0.');
        return;
      }
      setCurrentVal(newNum);
    } else if (newNum == 'del' && currentVal != '0') {
      setCurrentVal(currentVal.slice(0,currentVal.length-1));
    } else {
      setCurrentVal(currentVal + newNum);
    }
  }
  const sqrFunc = () => {
    let currentVal2 = parseFloat(currentVal);
    if (currentVal == '0') {
      return;
    } else if (isNaN(currentVal2)) {
      setCurrentVal('0');
    } else {
      setCurrentVal((currentVal2*currentVal2).toString());
    }
  }
  const sqrtFunc = () => {
    let currentVal2 = parseFloat(currentVal);
    if (currentVal == '0') {
      return;
    } else if (isNaN(currentVal2)) {
      setCurrentVal('0');
    } else {
      setCurrentVal(Math.sqrt(currentVal2).toString());
    }
  }
  const cFunc = () => {
    setCurrentVal('0');
    setProcessingVal('');
  }
  const finishProcessing = (input) => {
    if (processingVal && processingVal.includes(' ')) {
      let val = parseFloat(processingVal.slice(0,processingVal.length - 2));
      let operator = processingVal.slice(processingVal.length-1,processingVal.length);
      if (operator == '/') {
        let finalVal = val / input;
        return finalVal;
      } else if (operator == 'x') {
        let finalVal = val * input;
        return finalVal;
      } else if (operator == '-') {
        let finalVal = val - input;
        return finalVal;
      } else if (operator == '+') {
        let finalVal = val + input;
        return finalVal;
      }
    }
  }
  const divFunc = () => {
    let currentVal2 = parseFloat(currentVal);
    let finalVal;
    if (processingVal && processingVal.includes(' ')) {
      finalVal = finishProcessing(currentVal2);
    }
    if (currentVal == '0') {
      return;
    } else if (isNaN(currentVal2)) {
      setCurrentVal('0');
    } else if (!processingVal) {
      setCurrentVal('0');
      setProcessingVal(currentVal2 + " " + "/");
    } else {
      setProcessingVal(finalVal + " " + "/");
      setCurrentVal('0');
    }
  }
  const xFunc = () => {
    let currentVal2 = parseFloat(currentVal);
    let finalVal;
    if (processingVal && processingVal.includes(' ')) {
      finalVal = finishProcessing(currentVal2);
    }
    if (currentVal == '0') {
      return;
    } else if (isNaN(currentVal2)) {
      setCurrentVal('0');
    } else if (!processingVal) {
      setCurrentVal('0');
      setProcessingVal(currentVal2 + " " + "x");
    } else {
      setProcessingVal(finalVal + " " + "x");
      setCurrentVal('0');
    }
  }
  const minusFunc = () => {
    let currentVal2 = parseFloat(currentVal);
    let finalVal;
    if (processingVal && processingVal.includes(' ')) {
      finalVal = finishProcessing(currentVal2);
    }
    if (currentVal == '0') {
      return;
    } else if (isNaN(currentVal2)) {
      setCurrentVal('0');
    } else if (!processingVal) {
      setCurrentVal('0');
      setProcessingVal(currentVal2 + " " + "-");
    } else {
      setProcessingVal(finalVal + " " + "-");
      setCurrentVal('0');
    }
  }
  const plusFunc = () => {
    let currentVal2 = parseFloat(currentVal);
    let finalVal;
    if (processingVal && processingVal.includes(' ')) {
      finalVal = finishProcessing(currentVal2);
    }
    if (currentVal == '0') {
      return;
    } else if (isNaN(currentVal2)) {
      setCurrentVal('0');
    } else if (!processingVal) {
      setCurrentVal('0');
      setProcessingVal(currentVal2 + " " + "+");
    } else {
      setProcessingVal(finalVal + " " + "+");
      setCurrentVal('0');
    }
  }
  const equalFunc = () => {
    let currentVal2 = parseFloat(currentVal);
    let finalVal;
    if (processingVal && processingVal.includes(' ')) {
      finalVal = finishProcessing(currentVal2);
    }
    setProcessingVal('');
    setCurrentVal(finalVal.toString());
  }
  const toggleNegative = () => {
    if (currentVal.startsWith('-')) {
      setCurrentVal(currentVal.slice(1,currentVal.length));
    } else {
      setCurrentVal("-"+currentVal);
    }
  }
  return (
    <div className="App">
      <div className="container">
        <h1>My Unremarkable Calculator</h1>
        <br></br>
        <div className='container'>
          <div className="text-body-secondary">Processing: {processingVal}</div>
          <div className="text-body-secondary">Current Value: {currentVal}</div>
        </div>
        <br></br>
        <div className="gridContainer container">
          <RegButton value={'sqr'} func={sqrFunc}/>
          <RegButton value={'sqrt'} func={sqrtFunc}/>
          <NumberButton value={'del'} updateCur={updateCurrentVal}/>
          <RegButton value={'/'} func={divFunc}/>
          <NumberButton value={'1'} updateCur={updateCurrentVal}/>
          <NumberButton value={'2'} updateCur={updateCurrentVal}/>
          <NumberButton value={'3'} updateCur={updateCurrentVal}/>
          <RegButton value={'x'} func={xFunc}/>
          <NumberButton value={'4'} updateCur={updateCurrentVal}/>
          <NumberButton value={'5'} updateCur={updateCurrentVal}/>
          <NumberButton value={'6'} updateCur={updateCurrentVal}/>
          <RegButton value={'-'} func={minusFunc}/>
          <NumberButton value={'7'} updateCur={updateCurrentVal}/>
          <NumberButton value={'8'} updateCur={updateCurrentVal}/>
          <NumberButton value={'9'} updateCur={updateCurrentVal}/>
          <RegButton value={'+'} func={plusFunc}/>
          <UnaryButton value={'(-)'} updateCur={toggleNegative}/>
          <NumberButton value={'0'} updateCur={updateCurrentVal}/>
          <NumberButton value={'.'} updateCur={updateCurrentVal}/>
          <RegButton value={'='} func={equalFunc}/>
          <RegButton value={'C'} func={cFunc}/>
        </div>
      </div>
    </div>
  );
}

export default App;
