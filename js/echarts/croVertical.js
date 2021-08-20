; (function () {
  const myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6']
  const myChart = echarts.init(document.querySelector('.bar-right .chart'))
  const option = {
    grid: {
      left: '22%',
      top: '0%',
      right: '15%',
      bottom: '4%',
      containLabel: false
    },
    xAxis: {
      type: 'value',
      show: false
    },
    yAxis: [
      {
        type: 'category',
        data: ['HTML5', 'CSS3', 'javascript', 'VUE', 'NODE'],
        inverse: true,
        axisLabel: {
          color: '#fff',
          fontSize: 12
        },
        //隐藏Y轴线
        axisLine: {
          show: false
        },
        //隐藏y轴刻度线
        axisTick: {
          show: false
        }
      },
      {
        // type: 'category',
        // show:true,
        data: [702, 350, 610, 793, 664],
        inverse: true,
        axisLabel: {
          color: '#fff',
          fontSize: 12
        },
        //隐藏Y轴线
        axisLine: {
          show: false
        },
        //隐藏y轴刻度线
        axisTick: {
          show: false
        }
      },
    ],

    series: [
      {
        name: '条',
        type: 'bar',
        data: [70, 34, 60, 78, 69],
        barWidth: 9,                               //柱子宽度
        barCategoryGap: 50,   //無效果,柱子间隔
        yAxisIndex: 0,                           // 重叠，类似z-index   
        itemStyle: {
          barBorderRadius: 20,                      //柱子圆角
          //也可以在series->itemStyle里设置柱子颜色
          color: function (params) {                 //params是每个柱子的对象
            return myColor[params.dataIndex]          //dataIndex是柱子对象的索引
          }
        },
        label: {
          show: true,
          position: 'inside',                     // 文字定位
          formatter: '{c}%'                         //显示柱子内文字
        },
      },

      {
        name: '框',
        type: 'bar',
        data: [100, 100, 100, 100, 100],
        barWidth: 15,
        barCategoryGap: 50, //無效果,柱子间隔
        yAxisIndex: 1,                 // 重叠，类似z-index 
        itemStyle: {
          color: 'none',
          borderColor: '#00c1de',
          borderWidth: '3',
          barBorderRadius: 15,
        },

      }
    ]
  };

  myChart.setOption(option)
  //图标屏幕配适自适应
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})()