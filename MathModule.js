var MathModule = (function () {

    // Polyfills
    Number.isInteger = Number.isInteger || function (value) {
        return typeof value === 'number' &&
            isFinite(value) &&
            Math.floor(value) === value;
    };

    var isPrime = function (n) {

        // Type checking
        if (!Number.isInteger(n))
            return false;

        // 2 is the smallest prime
        if (n < 2)
            return false;

        // true iff n is 2 or 3
        if (n < 4)
            return true;

        // Special handling to check if number is divisible by 2 or 3
        if (n % 2 == 0)
            return false;
        if (n % 3 == 0)
            return false;

        // Since we have already checked for 2 and 3, we can skip even
        // numbers, and those evenly divisible by 3.
        var factor = 5;
        while (factor * factor <= n) {
            if (n % factor == 0)
                return false;
            if (n % (factor + 2) == 0)
                return false;
            factor += 6;
        }
        return true;
    }

    var smallestPrimeFactor = function(n) {

        if (n % 2 == 0)
            return 2;
        if (n % 3 == 0)
            return 3;
        var factor = 5;
        while (factor * factor <= n)
        {
            if (n % factor == 0)
                return factor;
            if (n % (factor + 2) == 0)
                return factor + 2;
            factor += 6;
        }
        // n must be prime
        return n;
    }
        
    return {
        isPrime: isPrime
    }

}());
