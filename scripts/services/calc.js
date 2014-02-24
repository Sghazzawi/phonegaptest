'use strict';

angular.module('testyoApp')
  .service('Calc', function Calc() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      digits: [1,2,3,4,5,6,7,8,9,0],
      operators: ['+','-','/','x','='],
      leftOperand: 0,
      rightOperand: null,
      currentOperator: null,
      decimalPlace: 0,
      process: function () {
        switch (this.currentOperator) {
          case '+':
            return this.rightOperand + this.leftOperand;
          case '-':
            return this.rightOperand - this.leftOperand;
          case 'x':
            return this.rightOperand * this.leftOperand;
          case '/':
            return this.rightOperand / this.leftOperand;
          default:
            return null;
        }
      },

      inputDigit: function(digit) {
        if (this.decimalPlace < 1) {
          this.leftOperand = (this.leftOperand * 10) + digit;
        } else {
          this.leftOperand = this.leftOperand + ((1 / Math.pow(10,this.decimalPlace)) * digit);
          this.decimalPlace += 1;
        }
      },

      toggleDecimal: function () {
        if (this.decimalPlace === 0) {
          this.decimalPlace = 1;
        }
      },

      inputOperator: function(operator) {
        if (this.rightOperand === null) {
          this.currentOperator = operator;
          this.rightOperand = this.leftOperand;
          this.leftOperand = 0;
          this.decimalPlace = 0;
        } else {
          if (operator === '=') {
            this.leftOperand = this.process();
            this.rightOperand = null;
            this.decimalPlace = 0;
          } else {
            this.rightOperand = this.process();
            this.currentOperator = operator;
            this.leftOperand = 0;
            this.decimalPlace = 0;
          }
        }
      },

      clearAll: function() {
        this.rightOperand = null;
        this.currentOperator = null;
        this.leftOperand = 0;
        this.decimalPlace = 0;
      }
    };
  });
