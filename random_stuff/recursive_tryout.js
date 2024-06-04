function recursive(a) {
    a+=(a*2);
    console.log(`a is now ${a}`);
    if (a < 100) {
        recursive(a);
    }
}

recursive(100);
