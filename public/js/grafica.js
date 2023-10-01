let data1 = ['Disponibles', 'Ocupadas']
let data2 = [150,76];

const graf = document.getElementById('migrafica1').getContext('2d');
const migrafica2 = new Chart(graf,{
    type: 'doughnut',
    data: {
    labels: data1,
    datasets: [{
      label: 'Habitaciones',
      data: data2,
        backgroundColor: [
            '#16a34a',
            '#dc2626'
        ],
        borderColor: [
            '#312e81',
            '#312e81'
        ],
      hoverOffset: 4
    }]
}});