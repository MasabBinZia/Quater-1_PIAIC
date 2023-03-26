import promptSync from 'prompt-sync';
let prompt = promptSync();
//Task: Create a Function to Determine the Discount Amount for a Product
let dis_cal = () => {
    let prod_price = parseFloat(prompt("Product Price: "));
    let dis_per = parseFloat(prompt("Discount Percentage: "));
    if (dis_per >= 50) {
        console.log("Invalid discount percentage");
        return;
    }
    let dis_amt = prod_price * (dis_per / 100);
    let final_price = prod_price - dis_amt;
    console.log(`Original Price: ${prod_price}`);
    console.log(`Discount Percentage: ${dis_per}`);
    console.log(`Discount Amount: ${dis_amt}`);
    console.log(`Final Price: ${final_price}`);
};
dis_cal();
