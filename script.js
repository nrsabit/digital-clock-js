// Digital Clock By Javascript OOP

class Clock {
    getAm = function(){
        let myDate = new Date();
        let hours = myDate.getHours();
        let am;
        am = hours >= 12 ? "PM" : "AM";
        document.getElementById('am').innerHTML = am;
    }
    getMinutes = function(){
        let myDate = new Date();
        let minutes;
        minutes = myDate.getMinutes();
        minutes = minutes < 10 ? ("0" + minutes) : (minutes);
        document.getElementById('minutes').innerHTML = minutes + ' :';
    }
    getSeconds = function(){
        let myDate = new Date();
        let seconds = myDate.getSeconds();
        seconds = seconds < 10 ? ("0" + seconds) : (seconds);
        document.getElementById('seconds').innerHTML = seconds;

    }
    getHours = function(){
        let myDate = new Date();
        let hours = myDate.getHours();
        if(hours == 0){
            hours = 12;
        }else if(hours > 12){
            hours =  hours - 12;
            if(hours < 10){
                hours = "0" + hours;
            }
        }else{
            hours = hours;
            if(hours < 10){
                hours = "0" + hours;
            }
        }
        document.getElementById('hours').innerHTML = hours + ' :';
    }
    getDay = function(){
        let myDate = new Date();
        let allDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = allDays[myDate.getDay()];
        document.getElementById('day').innerHTML = day;
    }
    getDate = function(){
        let myDate = new Date();
        let date = myDate.toLocaleDateString();
        document.getElementById('full-date').innerHTML = date;
    }
    showTime = function(){
        myclock.getHours();
        myclock.getMinutes();
        myclock.getSeconds();
        myclock.getDay();
        myclock.getDate();
        myclock.getAm();
    }
}

let myclock = new Clock();
    myclock.showTime();

setInterval(()=>{
    myclock.showTime();
},1000);