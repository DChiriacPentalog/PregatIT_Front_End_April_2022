import React from "react";
import "./Calculator.css";
const Calculator = () => {
  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="wrapper">
          <div className="padding title">Calculator</div>
          <div className="padding screen">
            <div className="result">
              <span>0</span>
            </div>
          </div>

          <div className="padding calculate">
            <button className="c-reverse" value="rv">
              DEL
            </button>
            <span>{/* 123 + 123 */}</span>
          </div>
          <div className="keypad">
            <button type="button" className="top-btn" value="ac">
              ac
            </button>
            <button type="button" className="top-btn" value="pm">
              &plusmn;
            </button>
            <button type="button" className="top-btn" value="%">
              %
            </button>
            <button type="button" className="top-btn" value="/">
              /
            </button>

            <button className="number" value="7">
              7
            </button>
            <button className="number" value="8">
              8
            </button>
            <button className="number" value="9">
              9
            </button>

            <button className="" value="*">
              x
            </button>
            <button className="number" value="4">
              4
            </button>
            <button className="number" value="5">
              5
            </button>
            <button className="number" value="6">
              6
            </button>

            <button className="" value="-">
              -
            </button>
            <button className="number" value="1">
              1
            </button>
            <button className="number" value="2">
              2
            </button>
            <button className="number" value="3">
              3
            </button>
            <button className="special" value="+">
              +
            </button>

            <button className="number" value="0">
              0
            </button>
            <button className="" value=".">
              .
            </button>
            <button className="span-two" value="=">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
