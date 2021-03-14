module.exports = function reverse (n) {
   let result=parseFloat(
          n
            .toString()
            .split('')
            .reverse()
            .join('')
        ) 
    return result  
}
