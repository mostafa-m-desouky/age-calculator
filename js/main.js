let output_year = document.querySelector(".year");
let output_month = document.querySelector(".month");
let output_day = document.querySelector(".day");

let year = document.querySelector("#year");
let month = document.querySelector("#month");
let day = document.querySelector("#day");

let error_day = document.querySelector(".error-day");
let error_month = document.querySelector(".error-month");
let error_year = document.querySelector(".error-year");

let isValid = false;

let btn = document.querySelector("button");

btn.addEventListener("click", calculateDate)

day.addEventListener("input", e => {
    if(+day.value > 31) {
        error_day.textContent = "must be a valid date";
        isValid = false;
        return;
    } else {
        isValid = true;
        error_day.textContent = "";
    }
    if (+day.value === 0) {
        isValid = false;
        error_day.textContent = "this field is required";
        isValid = false;
        return;
    } else {
        isValid = true;
        error_day.textContent = "";   
    }
})

month.addEventListener("input", e => {
    if(+month.value > 12) {
        error_month.textContent = "must be a valid date";
        isValid = false;
        return;
    } else {
        isValid = true;
        error_month.textContent = "";
    }
    if (+month.value === 0) {
        isValid = false;
        error_month.textContent = "this field is required";
        isValid = false;
        return;
    } else {
        isValid = true;
        error_month.textContent = "";   
    }
})

year.addEventListener("input", e => {
    if(+year.value > 2023) {
        error_year.textContent = "must be a valid date";
        isValid = false;
        return;
    } else {
        isValid = true;
        error_year.textContent = "";
    }
    if (+year.value === 0) {
        isValid = false;
        error_year.textContent = "this field is required";
        isValid = false;
        return;
    } else {
        isValid = true;
        error_year.textContent = "";   
    }
})

function calculateDate() {
    if (isValid) {
        let birthday = `${month.value}/${day.value}/${year.value}`;
        let birthdayObj = new Date(birthday);
        let ageDiff = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiff);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay() - 1;
        output_day.textContent = ageDay;
        output_month.textContent = ageMonth;
        output_year.textContent = ageYears;
    } else {
        alert("error");
    }
}