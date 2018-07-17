const expect = require('chai').expect
const TelephoneNumber = require('../functions/telephoneNumber')

describe('Check telephone number', function () {
  it('fail when number = charector, expect return number must is incorrect', function () {
    let number = "charector"
    let telephoneNumber = new TelephoneNumber().isPhoneNo(number)
    expect(telephoneNumber).to.equal('number must is incorrect')
  })
  it('fail when number = \"\", expect return number must is incorrect', function () {
    let number = ""
    let telephoneNumber = new TelephoneNumber().isPhoneNo(number)
    expect(telephoneNumber).to.equal('number must is incorrect')
  })
  it('fail when number = null, expect return number must is incorrect', function () {
    let number = null
    let telephoneNumber = new TelephoneNumber().isPhoneNo(number)
    expect(telephoneNumber).to.equal('number must is incorrect')
  })
  it('fail when number = 12345678@9, expect return number must is incorrect', function () {
    let number = '12345678@9'
    let telephoneNumber = new TelephoneNumber().isPhoneNo(number)
    expect(telephoneNumber).to.equal('number must is incorrect')
  })
  it('fail when number = 1234567890, expect return number must is incorrect', function () {
    let number = '1234567890'
    let telephoneNumber = new TelephoneNumber().isPhoneNo(number)
    expect(telephoneNumber).to.equal('number must is incorrect')
  })

  //
  it('success when number = 0123456789, expect return success', function () {
    let number = '0123456789'
    let telephoneNumber = new TelephoneNumber().isPhoneNo(number)
    expect(telephoneNumber).to.equal('success')
  })

})