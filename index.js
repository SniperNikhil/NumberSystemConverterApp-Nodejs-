const express = require("express");
const path = require("path")
const http = require('http');

const app = express();
const server = http.createServer(app);
const socketIO = require('socket.io');
const { Console } = require("console");
const io = socketIO(server);

const port = 4001;

const home = path.join(__dirname, "/public")
app.use(express.static(home))

app.set("view engine", "hbs");
app.get("/", async (req, res) => {
    res.render("index");
})

function convertToAllNumberSystems(value, currentBase) {
    // Validate input
    if (isNaN(parseInt(value, currentBase))) {
        return "Invalid input. Please provide a valid number and its base.";
    }

    const result = {};

    // Convert to decimal
    const decimalValue = parseInt(value, currentBase);
    result.decimal = decimalValue;

    // Convert to binary
    result.binary = decimalValue.toString(2);

    // Convert to octal
    result.octal = decimalValue.toString(8);

    // Convert to hexadecimal
    result.hexadecimal = decimalValue.toString(16).toUpperCase();

    // Convert to bases 2 through 16
    for (let base = 2; base <= 16; base++) {
        result[`base${base}`] = decimalValue.toString(base);
    }

    // Convert to bases 24 and 32
    result.base24 = decimalValue.toString(24);
    result.base32 = decimalValue.toString(32);

    return result;
}

function CalculateBase(initailbase){
    if(initailbase == "Decimal"){
        return 10;
    }else if(initailbase == "Binary"){
        return 2
    }else if(initailbase == "Octal"){
        return 8
    }else if(initailbase == "Hexadecimal"){
        return 16
    }else if(initailbase == "base 24"){
        return 24
    }else if(initailbase == "base 32"){
        return 32
    }else if(initailbase == "base 2"){
        return 2
    }else if(initailbase == "base 3"){
        return 3
    }else if(initailbase == "base 4"){
        return 4
    }else if(initailbase == "base 5"){
        return 5
    }else if(initailbase == "base 6"){
        return 6
    }else if(initailbase == "base 7"){
        return 7
    }else if(initailbase == "base 8"){
        return 8
    }else if(initailbase == "base 9"){
        return 9
    }else if(initailbase == "base 10"){
        return 10
    }else if(initailbase == "base 11"){
        return 11
    }else if(initailbase == "base 12"){
        return 12
    }else if(initailbase == "base 13"){
        return 13
    }else if(initailbase == "base 14"){
        return 14
    }else if(initailbase == "base 15"){
        return 15
    }else if(initailbase == "base 16"){
        return 16
    }
}

function convertToOneNumberSystems(value, currentBase,finalbase) {
    // Validate input
    if (isNaN(parseInt(value, currentBase))) {
        return "Invalid input. Please provide a valid number and its base.";
    }

    const result = {};

    // Convert to decimal
    const decimalValue = parseInt(value, currentBase);

    result[`base${finalbase}`] = decimalValue.toString(finalbase);

    return result;
}

io.on('connection', (socket) => {
    socket.on('calculate', (initailbase, inputvalue, finalbase) => {       
        try {
            if (finalbase == "All") {
                var initailbase1 = CalculateBase(initailbase)
                const result = convertToAllNumberSystems(inputvalue, initailbase1);
    
                socket.emit('conversionResultOfAll', result);
            }else{
                var finalbase1 = CalculateBase(finalbase)
                var initailbase1 = CalculateBase(initailbase)
                const result = convertToOneNumberSystems(inputvalue,initailbase1 , finalbase1);
    
                socket.emit('conversionResultOfAll', result);
            }
        } catch (error) {
            console.log(error)
            socket.emit('Error', "Invalid Input");
        }
    });
});


server.listen(port, () => {
    console.log(`Server running on port number ${port}`);
});