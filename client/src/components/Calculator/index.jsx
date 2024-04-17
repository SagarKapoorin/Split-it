import React, { useEffect, useState } from 'react';
import "./cal.css";
function Calculator(){
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [ans, setAns] = useState('');
    const [nextNumber, setNextNumber] = useState(true);
    const [operation, setOperation] = useState('');
    const digit = (input) => {
      if (nextNumber) {
        if (input1 === '0') {
          setInput1(input);
          updatedisplay(input);
        } else {
          setInput1(prevInput1 => prevInput1 + input);
          updatedisplay(input);
        }
      } else {
        setInput2(prevInput2 => prevInput2 + input);
        updatedisplay(input);
      }
      console.log(input1+"->"+" <-"+input2)
    };
  
    const decimal = () => {
      if (nextNumber) {
        if (!input1.includes('.')) {
          setInput1(prevInput1 => prevInput1 + '.');
        }
      } else {
        if (!input2.includes('.')) {
          setInput2(prevInput2 => prevInput2 + '.');
        }
      }
    };
    const cClear = () => {
      setInput1('');
      setInput2('');
      setOperation('');
      setNextNumber(true);
    };

function add() {
    // better to make function for add,sub,divide all in one...
    calculate()
    if (nextNumber && input1 != "") {
        setNextNumber(false)
        setOperation("+")
        displayOperation("+");
    }
    // console.log(input1+" "+input2+" "+nextnumber);
}

function sub() {
    calculate()
    if (nextNumber && input1 != "") {
      setOperation("–");
      setNextNumber(false)
        displayOperation("–");
    }
    // console.log(input1+" "+input2+" "+nextnumber);
}

function div() {
    calculate()
    if (nextNumber && input1 != "") {
        setNextNumber(false);
        setOperation("÷")
        displayOperation("÷");
    }
}

function mul() {
    console.log(input2+"->"+input1+"->");
    calculate()
    if (nextNumber && input1 != "") {
        setNextNumber(false);
        setOperation("×");
        displayOperation("×");
    }
}

function log() {
    calculate()
    if (nextNumber && input1 != "") {
        setNextNumber(false);
        setOperation("log");
        displayOperation("log");
    }
    // console.log(input1+" "+input2+" "+nextnumber);
}

function getBaseLog(x, y) {

    return Math.log(y) / Math.log(x);
}

function pow() {
    calculate()
    if (nextNumber && input1 != "") {
        setNextNumber(false);
        setOperation("pow");
        displayOperation("pow");
    }
    // console.log(input1+" "+input2+" "+nextnumber);
}

function squareroot() {
    calculate()
    if (nextNumber && input1 != "") {
        setNextNumber(false);
        setOperation("squareroot");
        displayOperation("√");
    }
}

function rndx() {
    //round off to x
    calculate()
    if (nextNumber && input1 != "") {
        setNextNumber(false);
        setOperation("rndx");
        displayOperation("rndₓ");
    }
}

function calculate() {
    let _input1 = parseFloat(input1);
    let _input2 = parseFloat(input2);
  
    if (!isNaN(_input1) && !isNaN(_input2)) {
      let result;
      switch (operation) {
        case "+":
          result = _input1 + _input2;
          break;
        case "–":
          result = _input1 - _input2;
          break;
        case "÷":
          result = _input1 / _input2;
          break;
        case "×":
          result = _input1 * _input2;
          break;
        case "log":
          result = getBaseLog(_input1, _input2);
          break;
        case "pow":
          result = Math.pow(_input1, _input2);
          break;
        case "squareroot":
          result = Math.pow(_input1, 1 / _input2);
          break;
        case "rndx":
          result = Math.round(_input1 * (Math.pow(10, _input2))) / Math.pow(10, _input2);
          break;
        default:
          result = '';
      }
  
      setAns(result.toString());
    //   console.log(result + "=" + _input1 + "=" + _input2);
      showAns(result.toString());
    }
}

function showAns(answer) {
    setInput1( (Math.round(answer * 1000000000) / 1000000000).toString());
    console.log(input1);
    updatedisplay(input1);
    setInput2("")
    setNextNumber(true);
    displayOperation("");
    setOperation("");
}
useEffect(()=>{
    updatedisplay(input2);
},[input2]);
useEffect(() => {
    updatedisplay(input1);
  }, [input1]);


const neg = () => {
    if (nextNumber) {
      setInput1(prevInput1 => String(-1 * parseFloat(prevInput1)));
    } else {
      setInput2(prevInput2 => String(-1 * parseFloat(prevInput2)));
    }
  };
  const percent = () => {
    if (nextNumber) {
      setInput1(prevInput1 => String(parseFloat(prevInput1) / 100));
    } else {
      setInput2(prevInput2 => String(parseFloat(prevInput2) / 100));
    }
  };

  const sin = () => {
    if (nextNumber) {
      setInput1(prevInput1 => String(Math.sin(parseFloat(prevInput1))));
    } else {
      setInput2(prevInput2 => String(Math.sin(parseFloat(prevInput2))));
    }
  };
  const cos = () => {
    if (nextNumber) {
      setInput1(prevInput1 => String(Math.cos(parseFloat(prevInput1))));
    } else {
      setInput2(prevInput2 => String(Math.cos(parseFloat(prevInput2))));
    }
  };
  const tan = () => {
    if (nextNumber) {
      setInput1(prevInput1 => String(Math.tan(parseFloat(prevInput1))));
    } else {
      setInput2(prevInput2 => String(Math.tan(parseFloat(prevInput2))));
    }
  };
  const sin_i = () => {
    if (nextNumber) {
      setInput1(prevInput1 => String(Math.asin(parseFloat(prevInput1))));
    } else {
      setInput2(prevInput2 => String(Math.asin(parseFloat(prevInput2))));
    }
  };

  function cos_i() {
    if (nextNumber) {
        setInput1(prevInput1 => String(Math.acos(parseFloat(prevInput1))));
    } else {
        setInput2(prevInput2 => String(Math.cos(parseFloat(prevInput2))));
    }
}

function tan_i() {
    if (nextNumber) {
        setInput1(prevInput1 => String(Math.atan(parseFloat(prevInput1))));
    } else {
        setInput2(prevInput2 => String(Math.tan(parseFloat(prevInput2))));
    }
}

function square() {
    if (nextNumber) {
        setInput1(prevInput1 => String(Math.pow(parseFloat(prevInput1), 2)));
    } else {
        setInput2(prevInput2 => String(Math.pow(parseFloat(prevInput2), 2)));
    }
}

function sqrt() {
    if (nextNumber) {
        setInput1(prevInput1 => String(Math.pow(parseFloat(prevInput1), 0.5)));
    } else {
        setInput2(prevInput2 => String(Math.pow(parseFloat(prevInput2), 0.5)));
    }
}

function fac() {
    if (nextNumber) {
        setInput1(prevInput1 => String(factorial(parseFloat(prevInput1))));
    } else {
        setInput2(prevInput2 => String(factorial(parseFloat(prevInput2))));
    }
}

function factorial(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}

function tenPow() {
    if (nextNumber) {
        setInput1(prevInput1 => String(Math.pow(10, parseFloat(prevInput1))));
    } else {
        setInput2(prevInput2 => String(Math.pow(10, parseFloat(prevInput2))));
    }
}

function rnd() {
    if (nextNumber) {
        setInput1(prevInput1 => String(Math.round(parseFloat(prevInput1))));
    } else {
        setInput2(prevInput2 => String(Math.round(parseFloat(prevInput2))));
    }
}

function rand() {
    if (nextNumber) {
        setInput1(prevInput1 => String(Math.round(Math.random() * 100)));
    } else {
        setInput2(prevInput2 => String(Math.round(Math.random() * 100)));
    }
}

function e() {
    if (nextNumber) {
        setInput1('2.71828');
    } else {
        setInput2('2.71828');
    }
}

function Pi() {
    if (nextNumber) {
        setInput1('3.14159');
    } else {
        setInput2('3.14159');
    }
}




function updatedisplay(input) {

    document.getElementById("input-number").innerHTML = input;
}

function displayOperation(input) {

    document.getElementById("operation").innerHTML = input;
}

    return(
        <div id = "calc-container">
        <div id = "input-container">
            <p id = "input-number"></p>
            <p id = "operation"></p>
        </div>
        <div className = "Color1 button" onClick={() =>log()}>
            <p> logₓ </p>
        </div>
        <div className = "Color1 button" onClick={() =>sin()}>
            <p> sin </p>
        </div>
        <div className = "Color1 button" onClick={() =>cos()}>
            <p> cos </p>
        </div>
        <div className = "Color1 button" onClick={() =>tan()}>
            <p> tan </p>
        </div>
        <div className = "Color1 button" onClick={() =>cClear()}>
            <p  id = "clear-button"> C </p>
        </div>
        <div className = "Color1 button" onClick={() =>neg()}>
            <p> +/- </p>
        </div>
        <div className = "Color1 button" onClick={() =>percent()}>
            <p> % </p>
        </div>
        <div className = "Color2 button" onClick={() =>div()}>
            <p> ÷ </p>
        </div>
        <div className="Color1 button" style={{ gridRow: '3' }} onClick={() => log()}>
    <p> ln </p>
</div>
<div className="Color1 button" style={{ gridRow: '3' }} onClick={() => sin_i()}>
    <p> sin⁻¹ </p>
</div>
<div className="Color1 button" style={{ gridRow: '3' }} onClick={() => cos_i()}>
    <p> cos⁻¹ </p>
</div>
<div className="Color1 button" style={{ gridRow: '3' }} onClick={() => tan_i()}>
    <p> tan⁻¹ </p>
</div>
<div className="Color0 button" style={{ gridRow: '3' }} onClick={() => digit('7')}>
    <p> 7 </p>
</div>
<div className="Color0 button" style={{ gridRow: '3' }} onClick={() => digit('8')}>
    <p> 8 </p>
</div>
<div className="Color0 button" style={{ gridRow: '3' }} onClick={() => digit('9')}>
    <p> 9 </p>
</div>
<div className="Color2 button" style={{ gridRow: '3' }} onClick={() => add()}>
    <p> + </p>
</div>
<div className="Color1 button" style={{ gridRow: '4' }} onClick={() => square()}>
    <p> x² </p>
</div>
<div className="Color1 button" style={{ gridRow: '4' }} onClick={() => pow()}>
    <p> xʸ </p>
</div>
<div className="Color1 button" style={{ gridRow: '4' }} onClick={() => sqrt()}>
    <p> √x </p>
</div>
<div className="Color1 button" style={{ gridRow: '4' }} onClick={() => squareroot()}>
    <p> ʸ√x </p>
</div>
<div className="Color0 button" style={{ gridRow: '4' }} onClick={() => digit('4')}>
    <p> 4 </p>
</div>
<div className="Color0 button" style={{ gridRow: '4' }} onClick={() => digit('5')}>
    <p> 5 </p>
</div>
<div className="Color0 button" style={{ gridRow: '4' }} onClick={() => digit('6')}>
    <p> 6 </p>
</div>
<div className="Color2 button" style={{ gridRow: '4' }} onClick={() => sub()}>
    <p> – </p>
</div>
<div className="Color1 button" style={{ gridRow: '5' }} onClick={() => fac()}>
    <p> x! </p>
</div>
<div className="Color1 button" style={{ gridRow: '5' }} onClick={() => tenPow()}>
    <p> 10ˣ </p>
</div>
<div className="Color1 button" style={{ gridRow: '5' }} onClick={() => rnd()}>
    <p> rnd </p>
</div>
<div className="Color1 button" style={{ gridRow: '5' }} onClick={() => rndx()}>
    <p> rndₓ </p>
</div>
<div className="Color0 button" style={{ gridRow: '5' }} onClick={() => digit('1')}>
    <p> 1 </p>
</div>
<div className="Color0 button" style={{ gridRow: '5' }} onClick={() => digit('2')}>
    <p> 2 </p>
</div>
<div className="Color0 button" style={{ gridRow: '5' }} onClick={() => digit('3')}>
    <p> 3 </p>
</div>
<div className="Color2 button" style={{ gridRow: '5' }} onClick={() => mul()}>
    <p> × </p>
</div>
<div className="Color1 button" style={{ gridRow: '6' }} onClick={() => rand()}>
    <p> rand </p>
</div>
<div className="Color1 button" style={{ gridRow: '6' }} onClick={() => e()}>
    <p> e </p>
</div>
<div className="Color1 button" style={{ gridRow: '6' }} onClick={() => Pi()}>
    <p> π </p>
</div>
<div className="Color1 button" style={{ gridRow: '6' }} onClick={() => ans()}>
    <p> ans </p>
</div>


<div className="Color0 button" style={{ gridRow: '6', gridColumn: '5 / span 2' }} onClick={() => digit('0')}>
    <p> 0 </p>
</div>
<div className="Color2 button" style={{ gridRow: '6' }} onClick={() => decimal()}>
    <p> . </p>
</div>
<div className="Color2 button" style={{ gridRow: '6' }} onClick={() => calculate()}>
    <p> = </p>
</div>

    </div>
    )
}
export default Calculator;