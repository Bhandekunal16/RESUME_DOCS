// Assuming 'data' is an array of project objects
var data = [
  { projectName: "cube-finder", Date: "2022-01-01", codeIn: "JavaScript" },
  {
    projectName: "square-root-finder",
    Date: "2022-02-15",
    codeIn: "JavaScript",
  },
  { projectName: "web-application", Date: "2022-02-15", codeIn: "JavaScript" },
  {
    projectName: "html-routing-templates",
    Date: "2022-02-15",
    codeIn: "JavaScript",
  },
  {
    projectName: "glowing-honey-comb-templates",
    Date: "2022-02-15",
    codeIn: "JavaScript",
  },
  { projectName: "resume", Date: "2022-02-15", codeIn: "JavaScript" },
  { projectName: "binary-converter", Date: "2022-02-15", codeIn: "JavaScript" },
  { projectName: "weather-portal", Date: "2022-02-15", codeIn: "JavaScript" },
  { projectName: "html-creater", Date: "2022-02-15", codeIn: "JavaScript" },
  { projectName: "robotic-time", Date: "2022-02-15", codeIn: "JavaScript" },
  { projectName: "dashboard", Date: "2022-02-15", codeIn: "JavaScript" },
  { projectName: "gym-api-gateway", Date: "2022-02-15", codeIn: "TypeScript" },
  { projectName: "Terminal", Date: "2022-02-15", codeIn: "c" },
  { projectName: "weather", Date: "2022-02-15", codeIn: "JavaScript" },
  { projectName: "introduction", Date: "2022-02-15", codeIn: "JavaScript" },
  { projectName: "introduction-0.2", Date: "2022-02-15", codeIn: "TypeScript" },
  { projectName: "otp-service", Date: "2022-02-15", codeIn: "TypeScript" },
  { projectName: "python", Date: "2022-02-15", codeIn: "python" },
  { projectName: "Robotec.js", Date: "2022-02-15", codeIn: "JavaScript" },
  { projectName: "otp-gateway", Date: "2022-02-15", codeIn: "TypeScript" },
  {
    projectName: "robotec-dashboard-0.2",
    Date: "2022-02-15",
    codeIn: "TypeScript",
  },
  { projectName: "calculater", Date: "2022-02-15", codeIn: "JavaScript" },
  { projectName: "Robotec-project", Date: "2022-02-15", codeIn: "JavaScript" },
  { projectName: "theme", Date: "2022-02-15", codeIn: "JavaScript" },
  { projectName: "jewllery-api", Date: "2022-02-15", codeIn: "TypeScript" },
  {
    projectName: "auth-microservice",
    Date: "2022-02-15",
    codeIn: "TypeScript",
  },
  { projectName: "parking-app", Date: "2022-02-15", codeIn: "TypeScript" },
  { projectName: "api-gateway", Date: "2022-02-15", codeIn: "TypeScript" },
  {
    projectName: "robotic-dashboard-api",
    Date: "2022-02-15",
    codeIn: "TypeScript",
  },
  { projectName: "c", Date: "2022-02-15", codeIn: "c" },
  {
    projectName: "robotec-dashboard-0.1",
    Date: "2022-02-15",
    codeIn: "JavaScript",
  },
  { projectName: "goal planer", Date: "2022-02-15", codeIn: "JavaScript" },
  { projectName: "time01", Date: "2022-02-15", codeIn: "TypeScript" },
  { projectName: "time", Date: "2022-02-15", codeIn: "JavaScript" },
  { projectName: "weather_api", Date: "2022-02-15", codeIn: "TypeScript" },
  { projectName: "logic", Date: "2022-02-15", codeIn: "JavaScript,python,c" },
  { projectName: "game", Date: "2022-02-15", codeIn: "JavaScript" },
  {
    projectName: "online-html-creater",
    Date: "2022-02-15",
    codeIn: "JavaScript",
  },
  // Add more project objects as needed
];

// Get the tbody element
var tbody = document.getElementById("project-table-body");

// Populate the table with data
data.forEach(function (item) {
  var row = document.createElement("tr");

  var projectNameCell = document.createElement("td");
  projectNameCell.textContent = item.projectName;

  var dateCell = document.createElement("td");
  dateCell.textContent = item.Date;

  var codeInCell = document.createElement("td");
  codeInCell.textContent = item.codeIn;

  row.appendChild(projectNameCell);
  row.appendChild(dateCell);
  row.appendChild(codeInCell);

  tbody.appendChild(row);
});

function changeImage(index) {
  try {
    document
      .querySelectorAll(".img img")
      .forEach((img) => (img.style.display = "none"));

    document.querySelector(`.img:nth-child(${index}) img`).style.display =
      "block";
  } catch (error) {
    return error;
  }
}

function showText(index) {
  try {
    document.getElementById(`text-${index}`).style.display = "block";
  } catch (error) {
    return error;
  }
}

function hideText(index) {
  try {
    document.getElementById(`text-${index}`).style.display = "none";
  } catch (error) {
    return error;
  }
}

function notification() {
  try {
    document.getElementById("myModal").style.display = "block";

    window.onclick = function (event) {
      if (event.target === document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
      }
    };
  } catch (error) {
    return error;
  }
}

function Watched() {
  try {
    document.getElementById("myModal").style.display = "none";
  } catch (error) {
    return error;
  }
}

function downloadPDF() {
  try {
    var element = document.getElementById("project-table-body");

    html2pdf(element, {
      margin: 10,
      filename: "projectDocs-kunalBhande.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 6 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    });
  } catch (error) {
    return error;
  }
}
