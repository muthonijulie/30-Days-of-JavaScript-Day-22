Array.prototype.last = function() {
    if (this.length === 0) {
        return -1
    }
    return this[this.length - 1]
};
//example1
//const nums = [null, {}, 3]

//example2
const nums = []
console.log(nums.last());