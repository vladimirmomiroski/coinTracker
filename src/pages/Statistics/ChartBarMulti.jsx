import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../context/Context"
import { format } from 'date-fns'
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

export default function App() {

const {categories} = useContext(Context)

const [labelsDays, setLabelsDays] = useState([])
const [incomeData, setIncomeData] = useState([])
const [expenseData, setExpenseData] = useState([])

// first day of month
const getFirstDayOfMonth = (year, month) => {
    const date = new Date(year, month, 1);
    const formatedDate = format(date, "yyyy-MM-dd")
    return formatedDate
  }

  // today date
  const todayDate = (year, month, day) => {
    const date = new Date(year, month, day);
    const formatedDate = format(date, "yyyy-MM-dd")
    return formatedDate
  }

  // get labels
  const getLabels = (firstDay, today, year, month) => {
      console.log(firstDay)
    const start = parseInt(firstDay.slice(8, 10))
    const finish = parseInt(today.slice(8, 10))
    let arr = []
     for(let i = start; start <= finish; i++) {
         if(i > finish) {
             break;
         } else {
             const day = todayDate(year, month, i)
             arr.push(day)
         }
     }
     return arr
 }


 //  get data for each label date
  const getData = (labels, whichType) => {
      const mainResult = []
      // const expenseArr = []
      labels.forEach((label) => {
        let calcArr = []
          categories.forEach(({isEnabled, type, entries}) => {
              if(isEnabled) {
              if(type === whichType) {
                  if(entries.length) {
                      entries.forEach(({date, amount}) => {
                          if(date === label) {
                            calcArr.push(amount)
                          }
                          
                      })          
                  } 
                }
              }
              })
              if(calcArr.length) {
                const reduced = calcArr.reduce((acc, curr) => acc + curr, 0)
                mainResult.push(reduced)
                calcArr = []
              } else {
               mainResult.push(0)
              }   
            })
                 
       if(whichType === "income") {
        setIncomeData(mainResult)
       } else {
        setExpenseData(mainResult)
       }   
        
}

  const date = new Date();
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const firstDay = getFirstDayOfMonth(year, month)
  const today = todayDate(year, month, day)
  const dateLabels = getLabels(firstDay, today, year, month)
  
  useEffect(() => {
      getData(dateLabels, "income")
      getData(dateLabels, "expense")
      setLabelsDays(dateLabels)
  }, [categories])

const labels = [...labelsDays]

const data = {
  labels,
  datasets: [
    {
        type: 'line',
        label: 'Income',
        backgroundColor: "#98FB98",
        data: [...incomeData],
        borderColor: '#98FB98',
        borderWidth: 2,
      },
    {
      type: 'line',
      label: 'Expenses',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: [...expenseData]
    },
   
  ],
};
  return (
  <Chart type='bar' data={data} />
  )
}
