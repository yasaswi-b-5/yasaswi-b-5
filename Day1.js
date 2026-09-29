function gcd(a, b) {
    while (b != 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
let a = 12;
let b = 18;
console.log("GCD =", gcd(a, b));
console.log("LCM =", lcm(a, b));




function decimalToBinary(n) {
    let binary = "";
    while (n > 0) {
        let remainder = n % 2;
        binary = remainder + binary;
        n = Math.floor(n / 2);
    }
    return binary;
}
console.log(decimalToBinary(25));



function mostFrequent(text) {
    let maxChar = "";
    let maxCount = 0;
    for (let ch of text) {
        let count = 0;
        for (let x of text) {
            if (ch == x) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            maxChar = ch;
        }
    }
    return maxChar;
}
console.log(mostFrequent("mississippi"));




function longestPalindrome(text) {
    let longest = "";
    for (let i = 0; i < text.length; i++) {
        for (let j = i + 1; j <= text.length; j++) {
            let part = text.substring(i, j);
            let reverse = "";
            for (let k = part.length - 1; k >= 0; k--) {
                reverse = reverse + part[k];
            }
            if (part == reverse && part.length > longest.length) {
                longest = part;
            }
        }
    }
    return longest;
}
console.log(longestPalindrome("babad"));




function sumDigits(n) {
    let sum = 0;
    while (n > 0) {
        sum = sum + (n % 10);
        n = Math.floor(n / 10);
    }
    return sum;
}
function check(sum) {
    if (sum % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
let result = sumDigits(1234);
console.log(result, check(result));n
