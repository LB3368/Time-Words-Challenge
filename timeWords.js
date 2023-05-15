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


/*const timeWord = (time) => {
    const hours = parseInt(time.slice(0, 2));
    const minutes = parseInt(time.slice(3));
    let result = '';
  
    if (hours === 0 && minutes === 0) {
      result = 'midnight';
    } else if (hours === 12 && minutes === 0) {
      result = 'noon';
    } else {
      const hoursText = hours <= 12 ? hours : hours - 12;
      const amOrPm = hours < 12 ? 'am' : 'pm';
      const minutesText = getMinutesText(minutes);
      result = `${getHoursText(hoursText)} ${minutesText} ${amOrPm}`;
    }
  
    return result;
  };
  
  const getHoursText = (hours) => {
    const numbers = [
      'twelve',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven'
    ];
    return numbers[hours];
  };
  
  const getMinutesText = (minutes) => {
    const numbers = [
      'oh',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
      'twenty',
      'twenty one',
      'twenty two',
      'twenty three',
      'twenty four',
      'twenty five',
      'twenty six',
      'twenty seven',
      'twenty eight',
      'twenty nine'
    ];
  
    if (minutes === 0) {
      return 'o\'clock';
    } else if (minutes === 15) {
      return 'quarter';
    } else if (minutes === 30) {
      return 'thirty';
    } else if (minutes === 45) {
      return 'quarter';
    } else if (minutes < 30) {
      return `${numbers[minutes]} ${minutes === 1 ? 'minute' : 'minutes'}`;
    } else {
      return `${numbers[60 - minutes]} ${minutes === 59 ? 'minute' : 'minutes'}`;
    }
  };

  console.log(timeWord("00:00")); // 'midnight'
  console.log(timeWord("12:00")); // 'noon'
  console.log(timeWord("01:00")); // 'one o'clock am'
  console.log(timeWord("06:01")); // 'six oh one am'
  console.log(timeWord("06:10")); // 'six ten am'
  console.log(timeWord("06:18")); // 'six eighteen am'
  console.log(timeWord("06:30")); // 'six thirty am'
  console.log(timeWord("10:34")); // 'ten thirty four am'
  console.log(timeWord("00:12")); // 'twelve twelve am'
  console.log(timeWord("12:09")); // 'twelve oh nine pm'
  console.log(timeWord("23:23")); // 'eleven twenty three pm
*/
/*const wordTime = (time) => {
    const hrs = parseInt(time.substr(0, 2))
    const min = parseInt(time.substr(3, 2))
}*/