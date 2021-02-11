var jsonValidate = require('compare-validate-json');
const { default: ApiCall } = require('../pageobjects/ApiCall');
const { assert } = require('chai');

describe('Openweather API testing', function () {

    it('Get weather data from openweather API with location London and clothing wollens', function () {

        console.log("################### TEST 1");

        var stateOfweather ="", expectedItemOfClothing ="", travelLocation= "London", currentItemOfClothing="wollens";

        console.log("--------------Start API call --------------------------")
        var actualResponse = ApiCall.getAPI("http://api.openweathermap.org/data/2.5/weather",{},{"q":travelLocation,"appid":"67fb8fed3fe290f81fda94329be985a2"})
        var currentTemp = actualResponse.main.temp
        console.log("################### weather temperature: "+currentTemp)
        if(currentTemp<293.15){
            stateOfweather = "cold";
            expectedItemOfClothing = "wollens"
            if(currentItemOfClothing==expectedItemOfClothing)
                console.log("############## Yeah!!! Weather is pretty "+stateOfweather+" and you could continue with your current planned trip")
            else    
                console.log("############## Sorry you might have to cancel your trip plans as it is not feasible with current weather conditions being "+stateOfweather)
            chaiExpect(currentItemOfClothing,"Your current clothing has to be changed to wollens as the travel destination is "+travelLocation).to.be.equal("wollens")
        }
        else{
            stateOfweather = "hot";
            expectedItemOfClothing = "swimmers"
            if(currentItemOfClothing==expectedItemOfClothing)
                console.log("############## Yeah!!! Weather is pretty "+stateOfweather+" and you could continue with your current planned trip")
            else    
                console.log("############## Sorry you might have to cancel your trip plans as it is not feasible with current weather conditions being "+stateOfweather)
            chaiExpect(currentItemOfClothing,"Your current clothing has to be changed to swimmers as the travel destination is "+travelLocation).to.be.equal("swimmers")
        }
        
        console.log("-------------- Finish API call --------------------------")
    });

    it('Get weather data from openweather API with location London and clothing swimmers', function () {

        console.log("################### TEST 2");

        var stateOfweather ="", expectedItemOfClothing ="", travelLocation= "London", currentItemOfClothing="swimmers";

        console.log("--------------Start API call --------------------------")
        var actualResponse = ApiCall.getAPI("http://api.openweathermap.org/data/2.5/weather",{},{"q":travelLocation,"appid":"67fb8fed3fe290f81fda94329be985a2"})
        var currentTemp = actualResponse.main.temp
        console.log("################### weather temperature: "+currentTemp)
        if(currentTemp<293.15){
            stateOfweather = "cold";
            expectedItemOfClothing = "wollens"
            if(currentItemOfClothing==expectedItemOfClothing)
                console.log("############## Yeah!!! Weather is pretty "+stateOfweather+" and you could continue with your current planned trip")
            else    
                console.log("############## Sorry you might have to cancel your trip plans as it is not feasible with current weather conditions being "+stateOfweather)
            chaiExpect(currentItemOfClothing,"Your current clothing has to be changed to wollens as the travel destination is "+travelLocation).to.be.equal("wollens")
        }
        else{
            stateOfweather = "hot";
            expectedItemOfClothing = "swimmers"
            if(currentItemOfClothing==expectedItemOfClothing)
                console.log("############## Yeah!!! Weather is pretty "+stateOfweather+" and you could continue with your current planned trip")
            else    
                console.log("############## Sorry you might have to cancel your trip plans as it is not feasible with current weather conditions being "+stateOfweather)
            chaiExpect(currentItemOfClothing,"Your current clothing has to be changed to swimmers as the travel destination is "+travelLocation).to.be.equal("swimmers")
        }
        
        console.log("-------------- Finish API call --------------------------")
    });

    it('Get weather data from openweather API with location Bangalore and clothing wollens', function () {

        console.log("################### TEST 3");

        var stateOfweather ="", expectedItemOfClothing ="", travelLocation= "Bangalore", currentItemOfClothing="wollens";

        console.log("--------------Start API call --------------------------")
        var actualResponse = ApiCall.getAPI("http://api.openweathermap.org/data/2.5/weather",{},{"q":travelLocation,"appid":"67fb8fed3fe290f81fda94329be985a2"})
        var currentTemp = actualResponse.main.temp
        console.log("################### weather temperature: "+currentTemp)
        if(currentTemp<293.15){
            stateOfweather = "cold";
            expectedItemOfClothing = "wollens"
            if(currentItemOfClothing==expectedItemOfClothing)
                console.log("############## Yeah!!! Weather is pretty "+stateOfweather+" and you could continue with your current planned trip")
            else    
                console.log("############## Sorry you might have to cancel your trip plans as it is not feasible with current weather conditions being "+stateOfweather)
            chaiExpect(currentItemOfClothing,"Your current clothing has to be changed to wollens as the travel destination is "+travelLocation).to.be.equal("wollens")
        }
        else{
            stateOfweather = "hot";
            expectedItemOfClothing = "swimmers"
            if(currentItemOfClothing==expectedItemOfClothing)
                console.log("############## Yeah!!! Weather is pretty "+stateOfweather+" and you could continue with your current planned trip")
            else    
                console.log("############## Sorry you might have to cancel your trip plans as it is not feasible with current weather conditions being "+stateOfweather)
            chaiExpect(currentItemOfClothing,"Your current clothing has to be changed to swimmers as the travel destination is "+travelLocation).to.be.equal("swimmers")
        }
        
        console.log("-------------- Finish API call --------------------------")
    });

    it('Get weather data from openweather API with location Bangalore and clothing swimmers', function () {

        console.log("################### TEST 4");

        var stateOfweather ="", expectedItemOfClothing ="", travelLocation= "Bangalore", currentItemOfClothing="swimmers";

        console.log("--------------Start API call --------------------------")
        var actualResponse = ApiCall.getAPI("http://api.openweathermap.org/data/2.5/weather",{},{"q":travelLocation,"appid":"67fb8fed3fe290f81fda94329be985a2"})
        var currentTemp = actualResponse.main.temp
        console.log("################### weather temperature: "+currentTemp)
        if(currentTemp<293.15){
            stateOfweather = "cold";
            expectedItemOfClothing = "wollens"
            if(currentItemOfClothing==expectedItemOfClothing)
                console.log("############## Yeah!!! Weather is pretty "+stateOfweather+" and you could continue with your current planned trip")
            else    
                console.log("############## Sorry you might have to cancel your trip plans as it is not feasible with current weather conditions being "+stateOfweather)
            chaiExpect(currentItemOfClothing,"Your current clothing has to be changed to wollens as the travel destination is "+travelLocation).to.be.equal("wollens")
        }
        else{
            stateOfweather = "hot";
            expectedItemOfClothing = "swimmers"
            if(currentItemOfClothing==expectedItemOfClothing)
                console.log("############## Yeah!!! Weather is pretty "+stateOfweather+" and you could continue with your current planned trip")
            else    
                console.log("############## Sorry you might have to cancel your trip plans as it is not feasible with current weather conditions being "+stateOfweather)
            chaiExpect(currentItemOfClothing,"Your current clothing has to be changed to swimmers as the travel destination is "+travelLocation).to.be.equal("swimmers")
        }
        
        console.log("-------------- Finish API call --------------------------")
    });

});



