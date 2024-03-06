//callback hell  occurs when multiple callbacks are nested inside each other, leads to create a complex and hard-to-manage code.
const cart=["shirts","troushers","pants"];
createOrder(cart,function(orderId){
    proceedPayment(order,function(PaymentInfo){
        showOrderSummary(PaymentInfo,function(ShowOrder){
            updateWalletBalance();
        })
    })
})

//Promises...a Promise is an object that will produce a single value some time in the future.
createOrder(cart).then(function(orderId){
    return proceedPayment;
})
.then(function(paymentInfo){
    return showOrderSummary;
})
.then(function(showOrder){
    return UpdateWalletBalance;
})
