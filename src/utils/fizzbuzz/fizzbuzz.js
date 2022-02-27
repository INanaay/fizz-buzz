/**
 * Returns a list of strings with numbers from 1 to limit, where: all multiples of int1 are replaced by str1,
 * all multiples of int2 are replaced by str2, all multiples of int1 and int2 are replaced by str1str2.
 * @param int1
 * @param int2
 * @param limit
 * @param str1
 * @param str2
 * @returns {*[]}
 */
const fizzbuzz = (int1, int2, limit, str1, str2) => {

    const resList = [];

    for (let index = 1; index <= limit; index += 1) {

        if (index % int1 === 0 && index % int2 === 0) {
            resList.push(str1 + str2);
        }
        if (index % int1 === 0) {
            resList.push(str1);
        }
        else if (index % int2 === 0) {
            resList.push(str2);
        }

        else
            resList.push(index);
    }
    return (resList)
}

module.exports = {
    fizzbuzz
}
