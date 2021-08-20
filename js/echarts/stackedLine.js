; (function () {
  const yearData = [
    {
      year: '2020',
      data: [
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: '2021',
      data: [
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    },
  ]

  const myChart = echarts.init(document.querySelector('.line-left .chart'))

  const option = {
    color: ['#00f2f1', '#ed3f35'],    //两条线的颜色
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      // data: ['新增粉丝', '新增游客'],     //series内有name则legend不用写data
      right: '10%',
      textStyle: {
        color: '#2f89cf',
        fontSize: 10,
      }
    },
    grid: {
      left: '3%',
      top: '20%',
      right: '4%',
      bottom: '3%',
      show: true,
      borderColor: '#012f4a',
      containLabel: true
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,  //折线与左右两端不要有间隔
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisLabel: {        //x轴坐标文字颜色
        color: '#2f89cf',
        fontSize: 12
      },
      axisTick: {          //刻度隐藏
        show: false,
      },
      splitLine: {        //x轴线隐藏
        show: false,
      }
    },

    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#2f89cf',
        fontSize: 12
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a'
        }
      }
    },

    series: [
      {
        name: '新增粉丝',
        type: 'line',
        data: yearData[0].data[0],
        smooth: true,      //线条平滑
      },
      {
        name: '新增游客',
        type: 'line',
        data: yearData[0].data[1],
        smooth: true,       //线条平滑
      }
    ]
  };

  myChart.setOption(option)

  window.addEventListener('resize', function () {
    myChart.resize()
  })

  document.querySelectorAll('.panel h2 a')[0].style.color = '#2f89cf'
  document.querySelectorAll('.panel h2 a').forEach((item, index) => {
    item.addEventListener('click', function () {
      document.querySelectorAll('.panel h2 a').forEach(item => {
        item.style.color = ''
      })
      this.style.color = '#2f89cf'
      option.series[0].data = yearData[index].data[0]
      option.series[1].data = yearData[index].data[1]
      myChart.setOption(option)
    })
  })
})()