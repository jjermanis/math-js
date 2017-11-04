describe('MathModule.isPrime', () => {

  var itIsPrime = (num) => {
    it('should know ' + num + ' is prime', () => {
      expect(MathModule.isPrime(num)).toBeTruthy()
    });
  };
  var itIsNotPrime = (num) => {
    it('should know ' + num + ' is not prime', () => {
      expect(MathModule.isPrime(num)).toBeFalsy()
    });
  };

  const nonPositiveNumbers = [0, -1, -2, -4, -5, -6, 
    -255, -256, -65535, -65536, -2147483648];
  nonPositiveNumbers.forEach(function(num) {
    itIsNotPrime(num);
  });

  const basicPrimes = [2, 3, 5, 7];
  basicPrimes.forEach(function(num) {
    itIsPrime(num);
  });
  
  const basicNonPrimes = [1, 4, 6, 9];
  basicNonPrimes.forEach(function(num) {
    itIsNotPrime(num);
  });

  const boundaryPrimes = [257, 65537, 2147483647, 2147483629];
  boundaryPrimes.forEach(function(num) {
    itIsPrime(num);
  });

  const boundaryNonPrimes = [255, 256, 65535, 65536, 2147483646, 2147117569];
  boundaryNonPrimes.forEach(function(num) {
    itIsNotPrime(num);
  });


});