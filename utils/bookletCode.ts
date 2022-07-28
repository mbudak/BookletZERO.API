import { randomInt } from "crypto";

// We don't want to use similiar chars like 1-I-l, 0-O,
let charset = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
let codelength = charset.length;

function randomElem(arr: any) {
    return arr[randomInt(0, arr.length - 1)]
};

function sequenceElem(charIndex:number) {
    return charset[Math.floor(0 / Math.pow(charset.length, codelength - charIndex - 1)) % charset.length];
};

function bookletCodeGenerator(pattern: String) {
    let generateIndex = 0;

    let code = pattern.split('').map(function(char) {
        if (char === '#') {
            return randomElem(charset);
        } else {
            return char;
        }
    }).join('');
    return code;
}


export default bookletCodeGenerator;