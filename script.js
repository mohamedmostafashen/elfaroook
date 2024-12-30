// تواريخ الامتحانات
const examDates = [
    { subject: "اللغة الاجنبية الاولى", date: new Date("2025-01-11") },
    { subject: "العلوم المتكاملة", date: new Date("2025-01-12") },
    { subject: "التاريخ", date: new Date("2025-01-13") },
    { subject: "الرياضيات", date: new Date("2025-01-14") },
    { subject: "اللغة العربية", date: new Date("2025-01-15") },
    { subject: "الفلسفة", date: new Date("2025-01-16") },
];

const examStartDate = examDates[0].date; 
const examEndDate = examDates[examDates.length - 1].date; 

function calculateDaysRemaining() {
    const today = new Date();
    
    const startDiff = Math.ceil((examStartDate - today) / (1000 * 60 * 60 * 24));
    document.getElementById("start-exam-days").querySelector("span").textContent = startDiff >= 0 ? startDiff : "تمت بداية الامتحانات";

    const endDiff = Math.ceil((examEndDate - today) / (1000 * 60 * 60 * 24));
    document.getElementById("end-exam-days").querySelector("span").textContent = endDiff >= 0 ? endDiff : "مبرووووووووووووووك الاجازة";
}

function startCountdown() {
    const daysElement = document.getElementById("days-remaining");
    const hoursElement = document.getElementById("hours-remaining");
    const minutesElement = document.getElementById("minutes-remaining");
    const secondsElement = document.getElementById("seconds-remaining");

    function updateCountdown() {
        const now = new Date();
        const diff = examStartDate - now;

        if (diff <= 0) {
            daysElement.textContent = "0";
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        daysElement.textContent = days;
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
}

function updateExamTable() {
    const today = new Date();
    const tableRows = document.getElementById("exam-table").rows;

    for (let i = 0; i < examDates.length; i++) {
        const exam = examDates[i];
        const diff = Math.ceil((exam.date - today) / (1000 * 60 * 60 * 24));
        const row = tableRows[i];

        row.cells[2].textContent = diff > 0 ? `${diff} يوم` : "انتهى";

        if (diff <= 0) {
            row.cells[0].classList.add("completed");
            row.cells[1].classList.add("completed");
            row.cells[2].classList.add("completed");
        }
    }
}

calculateDaysRemaining();
startCountdown();
updateExamTable();
