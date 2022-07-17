import { randomInt } from "crypto";

// We don't want to use similiar chars like 1-I-l, 0-O, 
var charset = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
var codelength = charset.length;

function randomElem(arr: any) {
    return arr[randomInt(0, arr.length - 1)]
};

function sequenceElem(charIndex:number) {
    return charset[Math.floor(0 / Math.pow(charset.length, codelength - charIndex - 1)) % charset.length];
};

function bookletCodeGenerator(pattern: String) {
    var generateIndex = 0;
    
    var code = pattern.split('').map(function(char) {
        if (char === '#') {
            return randomElem(charset);
        } else {
            return char;
        }
    }).join('');
    return code;
}


export default bookletCodeGenerator;