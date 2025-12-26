document.getElementById("bmi-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    
    const bmiValueText = document.getElementById("bmi-value");
    const bmiStatusText = document.getElementById("bmi-status");
    const weightRangeText = document.getElementById("weight-range");

    if (height > 0 && weight > 0) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
        
        // Ideal Weight Range (18.5 to 24.9 BMI)
        const minIdeal = (18.5 * ((height / 100) ** 2)).toFixed(1);
        const maxIdeal = (24.9 * ((height / 100) ** 2)).toFixed(1);

        bmiValueText.innerText = bmi;
        weightRangeText.innerText = `${minIdeal}kg - ${maxIdeal}kg`;

        let status = "";
        let color = "";

        if (bmi < 18.5) {
            status = "Underweight";
            color = "#fbbf24"; // Bright Yellow
        } else if (bmi <= 24.9) {
            status = "Healthy Range";
            color = "#4ade80"; // Bright Green
        } else if (bmi <= 29.9) {
            status = "Overweight";
            color = "#fb923c"; // Bright Orange
        } else {
            status = "Obese";
            color = "#f87171"; // Bright Red
        }

        bmiStatusText.innerText = status;
        bmiValueText.style.color = color;
    }
});