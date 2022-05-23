import React, {useState} from "react";
import "./Calculator.css";
const Calculator = () => {
  const [result, setResult] = useState("0");
  const [number, setNumber] = useState("");

  const handleNumber = (e) => {
    const value = e.target.value;
    setNumber(operand => operand + value);
  }

  const handleOperator = (e) => {
    const value = e.target.value;


    if (value === "=") {
      if (number === "") return;
    }

    if (value === "ac") {
      setNumber("");
      setResult(0);
      return;
    }


    if (value === "pm") {
      if (number === "") return;

      //get the last char
      let calculated;
      if (Number(number.slice(-1))) {
        calculated = eval(number);

        if (Math.sign(calculated) < 0) {
          calculated = Math.abs(calculated);
          setNumber(calculated.toString());
        } else {
          setNumber(`-` + calculated.toString());
        }

      } else {
        calculated = (eval(number.slice(0, -1)));
        if (Math.sign(calculated)) {
          setNumber((`-` + calculated.toString()))
        } else {
          setNumber((calculated.toString()))
        }
      }
      return;
    }



    if (value === "%") {
      if (number === "") return;
    }

    let newOperand;

    if (number.slice(-1) === value) {
      newOperand = number.slice(0, -1);
      setNumber(newOperand + value);
    } else {

      if (!Number(number.slice(-1))) {

        newOperand = number.slice(0, -1);

        if (Number(number.slice(-1)) === 0) {
          setNumber(newOperand + `0` + value); return
        } else {
          setNumber(newOperand + value);
          return;
        }

      } else if (number.slice(-1) === "ac") {

        setNumber("");

        if (result > 0)
          setResult(0)
      }
      else if (number.includes("/")) {
        newOperand = eval(number);
        setNumber(newOperand);
      }
    }



    const lastDigit = number.slice(-1);
    if (!Number(lastDigit)) return;


    if (!(number === "." || number.includes("."))) {
      setNumber(operand => operand + value);
    }


    switch (value) {
      case "ac":
        setNumber("");
        break;
      case "+":
        setNumber(eval(number) + value)
        break;
      case "-":
        setNumber(`${eval(number)}${value}`)
        break;
      case "*":
        setNumber(`${eval(number)}${value}`)
        break;
      case "/":
        setNumber(`${eval(number)}${value}`);
        break;
      case "=":
        setNumber("");
        setResult(eval(number));
        break;
      default:
        return;
    }

  }


  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="wrapper">
          <div className="padding title">Calculator</div>
          <div className="padding screen">
            <div className="result">
              <span>
              {result}
              </span>
            </div>
          </div>

          <div className="padding calculate">
            <button className="c-reverse" value="rv">
              DEL
            </button>
            <span>
            {number ? number : '0'}
            </span>
          </div>
          <div className="keypad">
            <button type="button " className="top-btn span-two" value="ac" onClick={handleOperator}>
              ac
            </button>
            <button type="button" className="top-btn" value="pm" onClick={handleOperator}>
              &plusmn;
            </button>
            <button type="button" className="top-btn" value="/" onClick={handleOperator}>
              /
            </button>

            <button className="number" value="7" onClick={handleNumber}>
              7
            </button>
            <button className="number" value="8" onClick={handleNumber}>
              8
            </button>
            <button className="number" value="9" onClick={handleNumber}>
              9
            </button>

            <button className="" value="*" onClick={handleOperator}>
              x
            </button>
            <button className="number" value="4" onClick={handleNumber}>
              4
            </button>
            <button className="number" value="5" onClick={handleNumber}>
              5
            </button>
            <button className="number" value="6" onClick={handleNumber}>
              6
            </button>

            <button className="" value="-" onClick={handleOperator}>
              -
            </button>
            <button className="number" value="1" onClick={handleNumber}>
              1
            </button>
            <button className="number" value="2" onClick={handleNumber}>
              2
            </button>
            <button className="number" value="3" onClick={handleNumber}>
              3
            </button>
            <button className="special" value="+" onClick={handleOperator}>
              +
            </button>

            <button className="number" value="0" onClick={handleNumber}>
              0
            </button>
            <button className="" value="." onClick={handleOperator}>
              .
            </button>
            <button className="span-two" value="=" onClick={handleOperator}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
