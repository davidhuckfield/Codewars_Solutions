# link : https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/shell

#!/bin/bash

evenOrOdd () {
  local number=$1
  if (( number % 2 == 0)); then
    echo "Even"
  else
    echo "Odd"
  fi
}
evenOrOdd $1
