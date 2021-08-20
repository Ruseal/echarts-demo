; (function () {
  let xAxisData = []
  for (let i = 1; i <= 30; i++) {
    if (i < 10) {
      xAxisData.push(`0${i}`)
      continue
    }
    xAxisData.push(`${i}`)
  }

  const myChart = echarts.init(document.querySelector('.line-right .chart'))

  const option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      textStyle: {
        color: '#2f89cf',
        fontSize: "10"
      }
    },
    grid: {
      left: '3%',
      top: '20%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: true,
      borderColor: '#012f4a',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: xAxisData,
        axisLabel: {        //x轴坐标文字颜色
          color: 'rgba(255,255,255,.6)',
          fontSize: 10
        },
        axisTick: {          //刻度隐藏
          show: false,
        },
        splitLine: {        //x轴线隐藏
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.2)'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: 10
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: '#012f4a'
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.2)'
          }
        }
      }
    ],
    series: [
      {
        name: '新增粉丝',
        type: 'line',
        data: [
          30, 40, 30, 40, 30, 40, 30, 60, 20, 40,
          30, 40, 30, 40, 30, 40, 30, 60, 20, 40,
          30, 40, 30, 40, 30, 40, 20, 60, 50, 40
        ],
        smooth: true,      //线条平滑
        lineStyle: {
          color: '#0184d5',
          width: 3,
        },
        areaStyle: {      //填充颜色
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.9)" // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.3)" // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        symbol: 'circle',     //设置拐点(小圆点)
        symbolSize: 4,        //小圆点大小
        showSymbol: false,    //设置刚开始默认不显示小圆点
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        emphasis: {
          focus: 'series'
        },

      },
      {
        name: '新增游客',
        type: 'line',
        data: [
          130, 10, 20, 40, 30, 40, 80, 60, 20, 40,
          90, 40, 20, 140, 30, 40, 130, 20, 20, 40,
          80, 70, 30, 40, 30, 120, 20, 99, 50, 20
        ],
        smooth: true,      //线条平滑
        lineStyle: {
          color: '#00d887',
          width: 3,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(0, 216, 135, 0.9)"
              },
              {
                offset: 0.8,
                color: "rgba(0, 216, 135, 0.3)"
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        symbol: 'circle',     //设置拐点(小圆点)
        symbolSize: 4,        //小圆点大小
        showSymbol: false,    //设置刚开始默认不显示小圆点
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        emphasis: {
          focus: 'series'
        },

      }
    ]

  };

  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})()