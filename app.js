( function() {
    let sum, net = '25', tax = 5.00
    sum = net + tax
    console.log('sum: ' + sum + ' ' + typeof sum)
    sum = parseFloat(net) + tax
    console.log('sum: ' + sum + ' ' + typeof sum)
})()