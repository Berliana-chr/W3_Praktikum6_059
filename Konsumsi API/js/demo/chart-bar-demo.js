Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("gradeChart");
var gradeChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Grade A", "Grade B+", "Grade B", "Grade C", "Grade D", "Grade E"],
    datasets: [{
      label: "Jumlah Mahasiswa",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      data: [42, 35, 28, 12, 5, 2],
    }],
  },
  options: {
    maintainAspectRatio: false,
    legend: { display: false },
    scales: {
      xAxes: [{
        gridLines: { display: true },
        maxBarThickness: 105,
      }],
      yAxes: [{
        ticks: { min: 0, max: 45, stepSize: 5 },
        gridLines: { color: "rgb(234, 236, 244)", zeroLineColor: "rgb(234, 236, 244)" }
      }],
    },
  }
});