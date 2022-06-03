function calculateLpsTable(subStr) {
    let i = 1;
    let j = 0;
    let lps = new Array(subStr.length).fill(0);

    while(i < subStr.length) {
        if(subStr[i] === subStr[j]) {
            lps[i] = j + 1;
            i += 1;
            j += 1;
        
    }
    return lps;