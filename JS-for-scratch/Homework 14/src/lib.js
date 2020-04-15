export function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    
    this.read = function() {
      return count;
    };
}