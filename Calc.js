function flashingZero()
{
    let screen = document.getElementById("screen")
    if(screen.style.color === "black"){
        screen.style.color = "rgb(211, 210, 210)";
    }
    else{
        screen.style.color = "black";

    }
}



class Calculator {
    constructor(screenLabel) {
        this.screenLabel = screenLabel;
        this.firstValue = 0;
        this.secondValue = 0;
        this.operation = "";
        this.actionDelete = function (){
            this.firstValue = 0;
            this.secondValue = 0;
            this.operation = "";
            this.screenLabel.innerHTML = "0";
        }
        

        this.calculation = function (){
            switch (this.operation){
                case "+":
                    return this.firstValue + this.secondValue
                case "-":
                    return this.firstValue - this.secondValue
                case "/":
                    return this.firstValue / this.secondValue
                case "*":
                    return this.firstValue * this.secondValue
            }
        }

        this.tap = function (buttonClicked){
            if (!isNaN(Number(buttonClicked))){
                if (this.screenLabel.innerHTML === "0"){
                    this.screenLabel.innerHTML = ""
                }
            }
            switch(buttonClicked){
                case "CE":
                    this.actionDelete();
                    break;
                case "Enter":
                    this.secondValue = Number(this.screenLabel.innerHTML)
                    this.screenLabel.innerHTML = this.calculation()
                    break;
                case "+":
                    this.firstValue = Number(this.screenLabel.innerHTML)
                    this.screenLabel.innerHTML = "0";
                    this.operation = "+"                    
                    break;
                case "-":
                    this.firstValue = Number(this.screenLabel.innerHTML)
                    this.screenLabel.innerHTML = "0";
                    this.operation = "-"                    
                    break;
                case "*":
                    this.firstValue = Number(this.screenLabel.innerHTML)
                    this.screenLabel.innerHTML = "0";
                    this.operation = "*"                    
                    break;
                case "/":
                    this.firstValue = Number(this.screenLabel.innerHTML)
                    this.screenLabel.innerHTML = "0";
                    this.operation = "/"                    
                    break;
                case "=":
                    this.secondValue = Number(this.screenLabel.innerHTML)
                    this.screenLabel.innerHTML = this.calculation()
                    break;
                case '1':
                    this.screenLabel.innerHTML = this.screenLabel.innerHTML + "1";
                    break;
                case '2':
                    this.screenLabel.innerHTML = this.screenLabel.innerHTML + "2";
                    break;
                case '3':
                    this.screenLabel.innerHTML = this.screenLabel.innerHTML + "3";
                    break;
                case '4':
                    this.screenLabel.innerHTML = this.screenLabel.innerHTML + "4";
                    break;
                case '5':
                    this.screenLabel.innerHTML = this.screenLabel.innerHTML + "5";
                    break;
                case '6':
                    this.screenLabel.innerHTML = this.screenLabel.innerHTML + "6";
                    break;
                case '7':
                    this.screenLabel.innerHTML = this.screenLabel.innerHTML + "7";
                    break;
                case '8':
                    this.screenLabel.innerHTML = this.screenLabel.innerHTML + "8";
                    break;
                case '9':
                    this.screenLabel.innerHTML = this.screenLabel.innerHTML + "9";
                    break;
                
            }
        }
    }
}



setInterval(flashingZero,400)
let screenLabel = document.getElementById("screen")
var Calc = new Calculator(screenLabel)
