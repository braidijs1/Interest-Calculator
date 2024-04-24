function calculate(){

    const totalAmount = document.getElementById("total-amount");
    const principalInput = document.getElementById("Principal");
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");

    let principal = Number(principalInput.value);
    let rate = Number (rateInput.value / 100);
    let years = Number (yearsInput.value);

    if (principal <0 || !principal == Number){

        principal = 0;
        principalInput = 0;
    }
    if (rate <0 || !rate == Number){
        rate = 0;
        rateInput = 0;
        
    }

    if (years < 0 || !years == Number){
        yearsInput
        years = 0;
    }

    const result = principal * Math.pow((1 + rate / 1), 1 * years)

    totalAmount.textContent = result.toLocaleString(undefined, {style: "currency", currency: "GBP"});
}