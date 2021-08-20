; (function () {
  const myChart = echarts.init(document.querySelector('.pie-left .chart'))

  const option = {
    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab'],
    tooltip: {
      trigger: 'item',
      formatter: '{a}<br/>{b}: {c} ({d}%)'
    },
    legend: {
      // data:['搜索引擎','直接访问','邮件营销','联盟广告','视频广告'],
      left: 'center',
      bottom: '0%',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12'
      }
    },
    series: [
      {
        name: '年龄分布',
        type: 'pie',
        center: ['50%', '45%'],         //修改饼形图位置(水平,垂直)
        radius: ['40%', '70%'],         //修改饼形图大小(内半径，外半径)
        avoidLabelOverlap: false,

        label: {
          show: false,              //不显示饼形中间文字
        },
        labelLine: {
          show: false                 //外围文字和饼图区域块是否有线连接
        },
        data: [
          { value: 1, name: '20岁以下' },
          { value: 4, name: '20-29岁' },
          { value: 2, name: '30-39岁' },
          { value: 2, name: '40-49岁' },
          { value: 1, name: '50岁以上' }
        ]
      }
    ]
  };

  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})()