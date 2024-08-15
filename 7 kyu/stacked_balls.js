// link : https://www.codewars.com/kata/5bb804397274c772b40000ca/train/javascript

function stackHeight2d(layers) {
    if (layers===0) {return 0;}
    return 1 + Math.sqrt(3)/2 * (layers-1);
}
