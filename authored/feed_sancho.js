//link : https://www.codewars.com/kata/64341d29806cae7f615921e1

/* Description 
Feed Sancho!

Sancho the tortoise can only eat fruits & vegetables. He can't eat meat or dairy.

You have to iterate through all the food objects in the fridge and only return the foods that Sancho can eat.

Write a function that takes an array of objects and returns a new array with only the food objects whose type is fruits or vegetables.

You will only get input that is an array of food objects, examples below:

E.g if input is [ {name: 'apple', type: 'fruit'}, {name: 'banana', type: 'fruit'}, {name: 'carrot', type: 'vegetable'}, {name: 'cheese', type: 'dairy'}, {name: 'chicken', type: 'meat'} ] 
then the output should be [ {name: 'apple', type: 'fruit'}, {name: 'banana', type: 'fruit'}, {name: 'carrot', type: 'vegetable'}, ]
*/

//Solution:
function feedSancho(foods) {
	return foods.filter(food => food.type === 'fruit' || food.type === 'vegetable');
  }

//Example test cases:

const { expect } = require("chai");
const describe = require("mocha").describe;
const it = require("mocha").it;

it('Should return an array with only the food objects that are fruit or vegetable', () => {
        let testData = [
            {name: 'apple', type: 'fruit'}, 
            {name: 'banana', type: 'fruit'}, 
            {name: 'carrot', type: 'vegetable'}, 
            {name: 'cheese', type: 'dairy'},
            {name: 'chicken', type: 'meat'}
        ] 
        let expected = [
            {name: 'apple', type: 'fruit'}, 
            {name: 'banana', type: 'fruit'}, 
            {name: 'carrot', type: 'vegetable'}, 
        ]
        expect(feedSancho(testData)).to.deep.equal(expected);
    });

//Full test cases:

const { expect } = require("chai");
const describe = require("mocha").describe;
const it = require("mocha").it;

describe('Testing if the returned array of foods for Sancho contains only fruit & vegetables', () => {
    it('Should return an array with only the food objects that are fruit or vegetable', () => {
        let testData = [
            {name: 'apple', type: 'fruit'}, 
            {name: 'banana', type: 'fruit'}, 
            {name: 'carrot', type: 'vegetable'}, 
            {name: 'cheese', type: 'dairy'},
            {name: 'chicken', type: 'meat'}
        ] 
        let expected = [
            {name: 'apple', type: 'fruit'}, 
            {name: 'banana', type: 'fruit'}, 
            {name: 'carrot', type: 'vegetable'}, 
        ]
        expect(feedSancho(testData)).to.deep.equal(expected);
    });
  
    it('Should return an empty array', () => {
        let testData = [
            {name: 'sausage', type: 'meat'},
            {name: 'cheese', type: 'dairy'},
            {name: 'chicken', type: 'meat'}
        ] 
        let expected = [];
        expect(feedSancho(testData)).to.deep.equal(expected);
    });
  
    it('Should return all objects from the array', () => {
        let testData = [
            {name: 'apple', type: 'fruit'}, 
            {name: 'banana', type: 'fruit'}, 
            {name: 'carrot', type: 'vegetable'}, 
            {name: 'dandelion', type: 'vegetable'}
           ] 
        let expected = [
            {name: 'apple', type: 'fruit'}, 
            {name: 'banana', type: 'fruit'}, 
            {name: 'carrot', type: 'vegetable'}, 
            {name: 'dandelion', type: 'vegetable'} 
        ]
        expect(feedSancho(testData)).to.deep.equal(expected);
    });
  });