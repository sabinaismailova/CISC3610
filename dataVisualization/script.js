// Dataset
const data = {
    labels: ['Sleep', 'Work', 'Exercise', 'Leisure', 'Study'],
    datasets: [{
        label: 'Hours Spent per Week',
        data: [56, 20, 5, 20, 40],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

// Doughnut Chart
const ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
const doughnutChart = new Chart(ctxDoughnut, {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Hours Spent on Activities (Doughnut Chart) - Sabina Ismailova'
            }
        }
    }
});

// Horizontal Bar Chart
const ctxBar = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: data,
    options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Hours Spent on Activities (Horizontal Bar Chart) - Sabina Ismailova '
            }
        }
    }
});