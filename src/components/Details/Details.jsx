import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import useTransactions from '../../useTransactions';
// import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';


import useStyles from './styles';

const Details = ({ title }) => {
    const { total, chartData } = useTransactions(title);
    const classes = useStyles();
  return (
    <div>
      <Card className={title === 'Income' ? classes.income : classes.expense}>
          <CardHeader title={title} />
          <CardContent>
              <Typography variant='h5'>${total}</Typography>
              {/* <Doughnut data={chartData} /> */}
              <Chart type='bar' data={chartData} />
          </CardContent>
      </Card>
    </div>
  )
}

export default Details
