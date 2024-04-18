
function Calendario() {
  const agenda = document.getElementById("agenda");
  agenda.className = "agenda";
  // Cleaning exixting content
  agenda.innerHTML = "";

  const semestre = document.createElement("div");
  semestre.className = "semestre";
  agenda.appendChild(semestre);

  let num = 0;
  let empty = 0;

  for (m = 0; m < 12; m++) {
    const mes = document.createElement("div");
    mes.className = "mes";
    semestre.appendChild(mes);

    const weekSection = document.createElement("div");
    weekSection.className = "weekSection";
    mes.appendChild(weekSection);

    const daysSection = document.createElement("div");
    daysSection.className = "daysSection";
    mes.appendChild(daysSection);

    const lWeek = ["D", "S", "T", "Q", "Q", "S", "S"];
    const mNome = [
      "JAN",
      "FEV",
      "MAR",
      "ABR",
      "MAI",
      "JUN",
      "JUL",
      "AGO",
      "SET",
      "OUT",
      "NOV",
      "DEZ",
    ];
    const dMes = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const numDivs = 42;

    for (w = 0; w < 7; w++) {
      const week = document.createElement("week");
      week.className = "week";
      weekSection.appendChild(week);
      week.innerText = lWeek[w];
    }

    for (let d = 0; d < numDivs; d++) {
      const day = document.createElement("div");
      day.className = "day";
      daysSection.appendChild(day);

      if (num > 0 && num > dMes[m]) {
        day.style.background = "#3f5b69";
        day.innerText = "";
        num = num + 1;

        day.style.color = "";
        day.style.cursor = "initial";
        day.style.pointerEvents = "none";
      }

      if (num > 0 && num <= dMes[m]) {
        day.innerText = num;
        num = num + 1;
        day.style.cursor = "pointer";

        day.addEventListener("mouseover", function () {
          day.style.backgroundColor = "#3f5b69";
          day.style.transition = "background-color 1s";
        });

        day.addEventListener("click", function () {
          day.style.backgroundColor = "#2d4855";
          day.style.color = "white";
          day.style.transition = "background-color 0.3s";
        });
        day.addEventListener("mouseout", function () {
          day.style.backgroundColor = "#607d8b";
          day.style.color = "initial";
          day.style.transition = "background-color 0.3s, color 0.5s";
        });
      }

      if (num <= 0) {
        day.style.background = "#3f5b69";

        day.style.color = "#00000050";
        day.style.cursor = "initial";
        day.style.pointerEvents = "none";
        if (m == 0) {
          day.innerText = dMes[m] + num;
        } else {
          day.innerText = dMes[m - 1] + num;
        }
        num = num + 1;
      }

      if (day.innerText == "") {
        if (d > 34 && day.innerText == "") {
          day.style.backgroundColor = "transparent";
          day.style.border = "transparent";
        } else {
          day.innerText = -dMes[m] + num - 1;
          day.style.color = "#00000050";
        }

        empty = empty + 1;
        if (d == 41) {
          day.style.color = "white";
          day.innerText = mNome[m];
        }
      }
    }
    num = (6 + (7 - empty)) * -1;
    if (num <= -6) {
      num = num + 7;
    }
    empty = 0;
  }
}
