# link : https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/shell

a=$1
b=$2
c=$3

biggest=0

expr1=$((a + b + c))
expr2=$((a * b * c))
expr3=$((a + b * c))
expr4=$((a * b + c))

expr5=$(((a + b) + c))
expr6=$(((a * b) * c))
expr7=$(((a + b) * c))
expr8=$(((a * b) + c))

expr9=$((a + (b + c)))
expr10=$((a * (b * c)))
expr11=$((a + (b * c)))
expr12=$((a * (b + c)))

biggest=$expr1
if [ $expr2 -gt $biggest ]; then biggest=$expr2; fi
if [ $expr3 -gt $biggest ]; then biggest=$expr3; fi
if [ $expr4 -gt $biggest ]; then biggest=$expr4; fi
if [ $expr5 -gt $biggest ]; then biggest=$expr5; fi
if [ $expr6 -gt $biggest ]; then biggest=$expr6; fi
if [ $expr7 -gt $biggest ]; then biggest=$expr7; fi
if [ $expr8 -gt $biggest ]; then biggest=$expr8; fi
if [ $expr9 -gt $biggest ]; then biggest=$expr9; fi
if [ $expr10 -gt $biggest ]; then biggest=$expr10; fi
if [ $expr11 -gt $biggest ]; then biggest=$expr11; fi
if [ $expr12 -gt $biggest ]; then biggest=$expr12; fi

echo $biggest
