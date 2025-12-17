const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const ht = parseInt(document.getElementById("height").value);
  const wt = parseInt(document.getElementById("weight").value);
  const res = document.querySelector("h2");

  if (ht === "" || ht < 0 || isNaN(ht)) {
    res.innerHTML = `Please enter a valid height ${ht}`;
  } else if (wt === "" || wt < 0 || isNaN(wt)) {
    res.innerHTML = `Please enter a valid weight ${wt}`;
  } else{
    const bmi = (wt / ((ht * ht)/10000)).toFixed(2);
    res.innerHTML = `Your BMI is : ${bmi}`
  }
});
