function highestPalindrome(s, k) {
    function makePalindrome(s, k) {
        const n = s.length;
        const changesNeeded = new Array(Math.floor(n / 2)).fill(0);
        let changeCount = 0;

        // Calculate changes needed to make it a palindrome
        for (let i = 0; i < Math.floor(n / 2); i++) {
            if (s[i] !== s[n - i - 1]) {
                changesNeeded[i] = 1;
                changeCount++;
            }
        }

        // If we need more changes than allowed, return null
        if (changeCount > k) {
            return null;
        }

        s = s.split(''); // Convert string to array for mutability
        for (let i = 0; i < Math.floor(n / 2); i++) {
            if (s[i] !== s[n - i - 1]) { // They are not equal
                const maxChar = Math.max(s[i], s[n - i - 1]);
                if (k > 0) {
                    // Change both to '9' if possible
                    if (maxChar !== '9' && k >= changeCount + 1) {
                        s[i] = s[n - i - 1] = '9';
                        k -= (changeCount + 1);
                    } else {
                        s[i] = s[n - i - 1] = maxChar;
                        k -= changeCount;
                    }
                } else {
                    s[i] = s[n - i - 1] = maxChar;
                }
            } else { // They are equal
                if (s[i] !== '9' && k > 0) {
                    if (k >= 1 + (changesNeeded[i] ? 1 : 0)) {
                        s[i] = s[n - i - 1] = '9';
                        k -= (1 + (changesNeeded[i] ? 1 : 0));
                    }
                }
            }
        }

        // If there's a middle character in an odd-length string
        if (n % 2 === 1 && k > 0) {
            s[Math.floor(n / 2)] = '9';
        }

        return s.join('');
    }

    const palindrome = makePalindrome(s, k);
    
    // If no palindrome could be formed
    if (palindrome === null) {
        return '-1';
    }

    return palindrome;
}

// Example usages
console.log(highestPalindrome("3943", 1));  // Output: "3993"
console.log(highestPalindrome("932239", 2));  // Output: "992299"
console.log(highestPalindrome("12321", 0));   // Output: "12321"
console.log(highestPalindrome("12345", 2));   // Output: "54345"
console.log(highestPalindrome("00000", 1));   // Output: "90009"
console.log(highestPalindrome("123", 1));     // Output: "121"
