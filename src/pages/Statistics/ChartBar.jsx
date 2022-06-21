import React, {useEffect, useContext, useState} from 'react';
import {Container} from '@mui/material'
import { Context } from '../../context/Context';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

export default function ChartBar({type}) {

    const {categories} = useContext(Context)
    const [chartData, setChartData] = useState([])
    const [chartLabels, setChartLabels] = useState([])
  
    useEffect(() => {
      const labelsCategories = categories.map(category => {
        if(category.isEnabled && category.type === type) {
          return category.name
        }
      }).filter(el => el);

      let dataAmount = []
        categories.forEach(el => {
         if(el.isEnabled && el.type === type) {
             if(el.entries.length) {
                 const value = el.entries.reduce((acc, el) => acc + el.amount, 0)
                 dataAmount.push(value)
             } else {
                dataAmount.push(0)
             }
         }
      })

      setChartData(dataAmount)
      setChartLabels(labelsCategories)
    }, [categories])


const labels = [...chartLabels];

const data = {
  labels,
  datasets: [
    {
      label: 'amount',
      data: [...chartData],
      borderColor: type === "income" ? "#ADFF2F" :'rgb(255, 99, 132)',
      backgroundColor:  type === "income" ? "#98FB98" :'rgba(255, 99, 132, 0.5)',
    },
  ],
};
  return (
<Container>
   
  <Bar options={options} data={data}/>
  </Container>
  ) 
}
