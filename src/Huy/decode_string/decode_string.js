const decodeString = (s) => {
    var result_string = ''
    var mult_string = ''
    var input_array = []
    var mult = []

    for (let element of s) {
        if (!isNaN(element)) {
            mult_string = mult_string + element
        }
        else {
            if (element === '[') {
                mult.push(mult_string)
                mult_string = ''

                input_array.push(result_string)
                result_string = ''
            }
            else {
                if (element === ']') {
                    result_string = input_array.pop() + result_string.repeat(mult.pop())

                }
                else {
                    result_string += element
                }
            }
        }
    }

    return result_string;
}


module.exports = {
    decodeString
}