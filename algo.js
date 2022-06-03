function calculateLpsTable(subStr) {
    let i = 1;
    let j = 0;
    let lps = new Array(subStr.length).fill(0);

    while(i < subStr.length) {
        if(subStr[i] === subStr[j]) {
            lps[i] = j + 1;
            i += 1;
            j += 1;
        } else {
            if(j !== 0) {
                j = lps[j - 1];
            } else {
                i += 1;
            }
        }
    }
    return lps;