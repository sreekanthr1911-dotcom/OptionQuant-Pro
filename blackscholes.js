function calculateOption() {
    let spot = parseFloat(document.getElementById("spot").value);
    let strike = parseFloat(document.getElementById("strike").value);
    let premium = parseFloat(document.getElementById("premium").value);

    if (isNaN(spot) || isNaN(strike) || isNaN(premium)) {
        alert("Please enter all values.");
        return;
    }

    // Simple fair value estimate (temporary)
    let fairValue = Math.abs(spot - strike) + premium * 0.5;

    document.getElementById("bsPrice").innerHTML = fairValue.toFixed(2);

    let diff = premium - fairValue;

    document.getElementById("difference").innerHTML = diff.toFixed(2);

    if (diff > 0)
        document.getElementById("status").innerHTML = "Overpriced";
    else if (diff < 0)
        document.getElementById("status").innerHTML = "Underpriced";
    else
        document.getElementById("status").innerHTML = "Fairly Priced";
}
