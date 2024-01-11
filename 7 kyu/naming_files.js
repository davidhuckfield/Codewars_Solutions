// link : https://www.codewars.com/kata/5829994cd04efd4373000468
//inputs fmt, nbr, start
//fmt is format, <index_no> shows where index number should go.
//nbr is number of elements
//start is where to start the numbering


function nameFile(fmt, nbr, start) {
    console.log(`fmt is ${fmt}, nbr is ${nbr}, start is ${start}`);
      if (!Number.isInteger(start) || nbr <= 0 || !Number.isInteger(nbr)) {
        return [];
      }
      let returnArray = [];
      for (let i=start; i<(start + nbr); i++) {
          returnArray.push(fmt.replace(new RegExp("<index_no>", "g"), i));
      }
      return returnArray;
    }

  console.log(nameFile("IMG <index_no>", 4, 1));