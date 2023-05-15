//Function wordTime takes a string of 24 hr time and returns a string of time in words
const wordTime = (time) => {
    //split the time string into an array of hours and minutes, convert them into integers
    const timeArr = time.split(':')
    const hours = parseInt(timeArr[0])
    const minute = parseInt(timeArr[1])
    //let result = ''
//check if time is noon or midnight and return string if it is
    if (hours === 0 && minute === 0) {
        return 'midnight'
    }else if (hours === 12 && minute === 0) {
        return 'noon'
    } else {
        const hoursText = hours <= 12 ? hours : hours - 12
        const minuteText = minute < 10 ? `'o'clock ${minute}` : minute.toString()
        const period = hours >= 12 ? 'pm' : 'am'

        const wordTime = `${hoursText === 0 ? 12 : hoursText} ${minuteText} ${period}`
        return wordTime
    }
}

console.log(wordTime("00:00"))
console.log(wordTime('12:00'))
console.log(wordTime('13:10'))

/*const wordTime = (time) => {
    const hrs = parseInt(time.substr(0, 2))
    const min = parseInt(time.substr(3, 2))
}*/