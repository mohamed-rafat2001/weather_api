let pars1 = require('./pars1')
const pars_2 = require('./pars2')
let yargs = require('yargs')

pars1(yargs.argv._, (error, data) => {
    if (error) { console.log(error) }
    // else { console.log(data) }
    pars_2(data.latitude, data.longtitude, (error, data) => {
        if (error) { console.log(error) }
        else { console.log(data) }
    })
})
console.log(yargs.argv)




