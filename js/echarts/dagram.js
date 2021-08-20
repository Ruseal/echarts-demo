; (function () {
  const myChart = echarts.init(document.querySelector('.pie-right .chart'))
  const option = {
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      bottom: '0%',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: '#fff',
        fontSize: 8
      }
    },
    series: [
      {
        name: '地区分布',
        type: 'pie',
        radius: ['8%', '65%'],
        center: ['50%', '45%'],
        roseType: 'radius',         //  //以半径方式展示
        itemStyle: {
          borderRadius: 5
        },
        label: {
          fontSize: 10
        },
        labelLine: {    //引导线长度
          length: 6,
          length2: 8,
        },
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
        ]
      }
    ]
  };

  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})()