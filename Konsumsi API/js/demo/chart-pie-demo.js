Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Teknik Informatika", "Sistem Informasi", "Teknologi Informasi", "Sains Data"],
    datasets: [{
      data: [51, 36, 24, 17],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf', '#dda20a'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
options: {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  cutoutPercentage: 70,
},
});