// link : https://www.codewars.com/kata/58925dcb71f43f30cd00005f

function latestClock(a, b, c, d) {
    let array = [a,b,c,d];
    
    function getPermutations(array) {
        let result = [];
        if (array.length === 0) return [];
        if (array.length === 1) return [array];
    
        array.forEach((currentElement, index) => {
            let remainingElements = array.slice(0, index).concat(array.slice(index + 1));
            let remainingPermutations = getPermutations(remainingElements);
    
            remainingPermutations.forEach(permutation => {
                result.push([currentElement].concat(permutation));
            });
        });
    
        return result;
    }

    let permutations = getPermutations(array);
    let possibleTimes=[];
    
    function convertArrayToTime(array) {
        if (array.length!==4) {
            return "Invalid input";
        }
        const hours = `${array[0]}${array[1]}`;
        const minutes = `${array[2]}${array[3]}`;

        if (parseInt(hours)>23 || parseInt(minutes)>59) {
            return "Invalid time";
        }
        return `${hours}:${minutes}`;
    }

    for (let i=0; i<permutations.length; i++) {
        let time = convertArrayToTime(permutations[i]);
        if (time !=="Invalid input" && time !=="Invalid time") {
            possibleTimes.push(time);
        }
    }

    function sortMinutesToMidnight(times) {

        const timesInMinutes = times.map(time => {
            const [hours, minutes] = time.split(':').map(Number);
            return hours * 60 + minutes;
        });
        const sortedTimesInMinutes = timesInMinutes.sort((a,b) => a-b);

        const sortedTimes = sortedTimesInMinutes.map(time => {
            const hours = Math.floor(time / 60);
            const minutes = time % 60;
            return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
        });

        return sortedTimes;
    }

    let sortedTimes = sortMinutesToMidnight(possibleTimes);

    return sortedTimes[sortedTimes.length-1];
  }

  // 19:38
  console.log(latestClock(1,9,8,3));

  //21:59
  console.log(latestClock(9,1,2,5));


  //alternate solution:

  /*

  function latestClock(a, b, c, d) {
  const times = [
    `${a}${b}:${c}${d}`,
    `${a}${b}:${d}${c}`,
    `${a}${c}:${b}${d}`,
    `${a}${c}:${d}${b}`,
    `${a}${d}:${b}${c}`,
    `${a}${d}:${c}${b}`,
    `${b}${a}:${c}${d}`,
    `${b}${a}:${d}${c}`,
    `${b}${c}:${a}${d}`,
    `${b}${c}:${d}${a}`,
    `${b}${d}:${a}${c}`,
    `${b}${d}:${c}${a}`,
    `${c}${a}:${b}${d}`,
    `${c}${a}:${d}${b}`,
    `${c}${b}:${a}${d}`,
    `${c}${b}:${d}${a}`,
    `${c}${d}:${a}${b}`,
    `${c}${d}:${b}${a}`,
    `${d}${a}:${b}${c}`,
    `${d}${a}:${c}${b}`,
    `${d}${b}:${a}${c}`,
    `${d}${b}:${c}${a}`,
    `${d}${c}:${a}${b}`,
    `${d}${c}:${b}${a}`,
  ];
  const time = times.filter(el => {
    const test = el.split(":")
    if (test[0] >= 24) return false
    if (test[1] >= 60) return false
    return true
  })
  time.sort((a, b) =>  (b.split(":")[0] - a.split(":")[0] || b.split(":")[1] - a.split(":")[1]))
  return time[0]
}

*/