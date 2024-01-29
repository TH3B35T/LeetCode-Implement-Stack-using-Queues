
var MyStack = function() {
    this.q = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    const size = this.q.length;
    this.q.push(x);
    for (let i = 0; i < size; i++) {
        this.q.push(this.q.shift())
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    
    return this.q.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    // Retrieve the front element
    const top = this.q.shift();
    const size = this.q.length;
    // Immediately put it back
    this.q.push(top);
    for (let i = 0; i < size; i++) {
        this.q.push(this.q.shift())
    }
    return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */


// MyStack.prototype.top = function() {
//     if (this.empty()) {
//         throw new Error("Stack is empty");
//     }
//     return this.q[0];
// };

