const counter = document.getElementById('counter')
let num = 0
const app = document.getElementById('app')

//inject an incremental counter that updates continuously and displays a number

const incrementCounter = () => {
    setInterval(() => {

        //https://www.epochconverter.com/
        //convert trout farm opening date to Epoch timestamp -const startTime
        //=1352414990000

        const startTime = 1352414990000

        //current epoch time

        let currentTime = Date.now()

        let timeElapsed = currentTime - startTime

        let num = timeElapsed * .000221
        let finalNum = num.toLocaleString(undefined, {
            'minimumFractionDigits': 3,
            'maximumFractionDigits': 3
        })

        app.innerHTML = `Since opening the farm, ${finalNum} wild fish have been saved from becoming fish food`

    }, 100)
}
incrementCounter()







//how many fish per milisecond?  .000221
//how many fish per second?      .22
//how many fish per minute?    13.31
//how many fish per day?   19,178
//how many fish per year? 7,000,000

//for every milisecond increment by .000221
//timeElapsed * .000221







//get todays day, month, year and store in variable

// let dateObj = new Date();
// let month = dateObj.getUTCMonth() + 1; //months from 1-12
// let day = dateObj.getUTCDate();
// let year = dateObj.getUTCFullYear();

// newdate = year + "/" + month + "/" + day;
// console.log(newdate)