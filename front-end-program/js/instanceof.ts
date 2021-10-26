function isInstanceof(instance: { __proto__?: object }, Constructor: Function): boolean {
    if(typeof instance !== "object"){
        throw "the instance must be 'Object'";
    }

    if(typeof Constructor !== "function"){
        throw "the Contructor must be 'Function'"
    }   
    
    while(instance && instance.__proto__) {
        if(instance.__proto__ === Constructor.prototype) {
            return true;
        } else {
          instance = instance.__proto__;
        }
    }
    return false
}