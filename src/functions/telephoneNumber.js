class TelephoneNumber {
    // isPhoneNo(number) {
    //     if (number) {
    //         let count = 0
    //         for (let i = 0; i < number.length; i++) {
    //             if (number[i] >= '0' && number[i] <= '9' && number.length == 10 && number[0] == '0') {
    //                 count++
    //             }
    //         }
    //         if (count == number.length) {
    //             return 'success'
    //         } else {
    //             return 'number must is incorrect'
    //         }
    //     } else {
    //         return 'number must is incorrect'
    //     }
    // }
    isPhoneNo(number) {
        var regExp = /^0[0-9]{9}$/
        if (regExp.test(number) == true) {
            // console.log('success')
            return 'success'
        } else {
            // console.log('number must is incorrect')
            return 'number must is incorrect'
        }
    }
}
new TelephoneNumber().isPhoneNo('0123456789')
module.exports = TelephoneNumber