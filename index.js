const counter = document.getElementById('counter')
let num = 0
const app = document.getElementById('app')

//inject an incremental counter that updates continuously and displays a number

const incrementCounter = () => {
    setInterval(() => {

        //https://www.epochconverter.com/
        //convert trout farm opening date to Epoch timestamp -const startTime
        //=1352414990000 (Jan 1 2010)

        const startTime = 1262304000000

        //current epoch time

        let currentTime = Date.now()

        let timeElapsed = currentTime - startTime

        let num = timeElapsed * .000144
        let finalNum = num.toLocaleString(undefined, {
            'minimumFractionDigits': 1,
            'maximumFractionDigits': 1
        })

        app.innerHTML = `Since opening the farm, ${finalNum} wild fish have been saved from becoming fish food`

    }, 100)
}
incrementCounter()







//how many fish per milisecond?  .000144
//how many fish per second?      .14
//how many fish per minute?    8.68
//how many fish per day?   12,505
//how many fish per year? 4,564,310

//for every milisecond increment by .000144
//timeElapsed * .000144







//get todays day, month, year and store in variable

// let dateObj = new Date();
// let month = dateObj.getUTCMonth() + 1; //months from 1-12
// let day = dateObj.getUTCDate();
// let year = dateObj.getUTCFullYear();

// newdate = year + "/" + month + "/" + day;
// console.log(newdate)