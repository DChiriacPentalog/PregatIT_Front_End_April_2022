function palindrom(arr) {

    const n = arr.length;

    for (i = 0; i < n / 2; i++) {

        if (arr[i] != arr[n - i - 1]) {
            return 'nu e palindrom';
        }
        return 'palindrom';

    }

}

let arr = [1, 2, 3, 3, 2, 1];
console.log(palindrom(arr));
console.log(palindrom([1, 2, 3]));

function stringPalindrom(string) {

    string = string.match(/[a-z0-9]/g);
    const n = string.length;

    for (i = 0; i < n / 2; i++) {
        if (string[i] !== string[n - 1 - i]) {
            return 'nu e palindrom';
        }
        return 'palindrom';
    }

}
console.log(stringPalindrom('raa'));
console.log(stringPalindrom('aaa'));