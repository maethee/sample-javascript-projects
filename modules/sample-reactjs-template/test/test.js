

var text = 'doge';
const hold = text.split("");
var num = text.length;
let results = [];

let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0, cur = 0;
        return {
            next () {
                let num = results.length-1;
                results.push(`${hold[cur]}`)
                for(let i = 0; i <= num; i++){
                    results.push(`${results[i]+hold[cur]}`)
                }
                cur = cur+1
                return { done: false, value: cur }
            }
        }
    }
}

var s = new Date();
console.log(s.valueOf());
for (let n of fibonacci) {
    if (n >= num)
        break;
}
console.log(results.length);
var e = new Date();
console.log(e.valueOf());