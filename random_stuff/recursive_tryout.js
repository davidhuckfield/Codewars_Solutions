function recursive(a) {
    a+=(a*2);
    console.log(`a is now ${a}`);
    if (a < 1000) {
        recursive(a);
    }
}

recursive(1);
