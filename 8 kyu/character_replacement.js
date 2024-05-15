//link : https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript

function correct(string)
{
	string=string.replace(/5/g,"S");
  string=string.replace(/0/g,"O");
  string=string.replace(/1/g,"I");
  return string;
}
