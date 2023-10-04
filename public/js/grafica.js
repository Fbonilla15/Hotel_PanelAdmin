let data1 = ['Estandar      ','Junior    ', 'Suite  ',' ']
let data2 = [50,50,50,0]
let data3 = ['Sencillas','Dobles','Triples','Cuadruples']
let data4 = [45,43,30,32];
const graf = document.getElementById('migrafica1').getContext('2d');
const graf2 = document.getElementById('migrafica2').getContext('2d');
const migrafica2 = new Chart(graf,{
    type: 'doughnut',
    data: {
    labels: data1,
    datasets: [{
      label: 'Habitaciones',
      data: data2,
        backgroundColor: [
            '#33FFF0',
            '#FF3371',
            '#33FF3F',
            '#FFFFFF'
        ],
        borderColor: [
            
            '#FFFFFF'
        ],
      hoverOffset: 4
    }]
}});

const migrafica3 = new Chart(graf2,{
  type: 'doughnut',
  data: {
  labels: data3,
  datasets: [{
    label: 'Habitaciones',
    data: data4,
      backgroundColor: [
        '#33FFF0',
        '#FF3371',
        '#33FF3F',
        '#FF8AF4'
      ],
      borderColor: [
        '#FFFFFF'
      ],
    hoverOffset: 4
  }]
}});