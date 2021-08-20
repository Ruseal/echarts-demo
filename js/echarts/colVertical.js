; (function () {
  const myChart = echarts.init(document.querySelector('.bar-left .chart'))
  const option = {
    // title:['aa'],
    color: ['#2f89cf'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow',触发柱子影子
      }
    },
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true        //是否显示两坐标轴数据
    },
    xAxis: [
      {
        type: 'category',
        nameTextStyle: 'italic',
        data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
        axisTick: {
          alignWithLabel: true
        },
        //设置文字颜色和字体大小
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: 8
        },
        //坐标轴设置
        axisLine: {
          //不显示坐标轴
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: 9
        },
        axisLine: {
          lineStyle: {
            //y坐标轴线的颜色
            color: 'rgba(255,255,255,.1)'
          }
        },
        //y轴f分割线设置
        splitLine: {
          // 分割线样式
          lineStyle: {
            // 分割线颜色
            color: ['rgba(255,255,255,.1)'],
          }
        }

      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '35%',
        data: [10, 52, 200, 334, 390, 330, 220],
        // 设置柱形样式
        itemStyle: {
          //修改柱子圆角
          barBorderRadius: 5
        }
      }
    ]
  };
  myChart.setOption(option)
  //图标屏幕配适自适应
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();