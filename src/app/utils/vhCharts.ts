/**
 * Created by wpc on 2018/10/9.
 * 对echart进行二次封装
 * 创建一个构造函数，接受三个参数
 * 参数1：绘制图表类型 type
 * 参数2：画布 ID
 * 参数3：要绘画的数据 option
 */
import echarts from 'echarts';

// 柱状图+ 折线配置
export const options = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  grid: {
    left: '140px',
  },
  legend: {
    itemGap: 42,
    data: [{
      name: '',
      icon: 'circle',
      textStyle: {
        fontSize: 13,
        color: '#20A0FF',
      },
    }, {
      name: '',
      icon: 'circle',
      textStyle: {
        fontSize: 13,
        color: '#F68E05',
      },
    }],
    align: 'left',
  },
  textStyle: {
    color: '#fff',
    fontSize: 10,
  },
  xAxis: [{
    show: true,
    type: 'category',
    data: [],
    axisLabel: {
      show: true,
      interval: 0,
      rotate: 30,
      textStyle: {
        fontSize: 10,
        color: '#666666',
      },
    },
  }],
  yAxis: {
    type: 'value',
    name: '数量(个)',
    splitLine: {
      show: false,
    },
    axisLabel: {
      show: true,
      fontStyle: 'normal',
      fontSize: 10,
      color: '#666666',
    },
    nameTextStyle: {
      fontSize: 12,
      color: '#535353',
    },
  },
  series: [
    {
      name: '',
      type: 'bar',
      barWidth: 18,
      label: {
        normal: {
          show: false,
          position: 'insideRight',
        },
      },
      itemStyle: {
        normal: {
          color: '#7CAAF8',
          lineStyle: {
            color: '#7CAAF8',
          },
        },
      },
      data: [],
    },
    {
      name: '',
      type: 'line',
      data: [],
      itemStyle: {
        normal: {
          color: '#03A9F4',
          lineStyle: {
            color: '#03A9F4',
          },
        },
      },
    },
  ],
};
// 双柱状图
export const barOptions = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: '32px',
  },
  legend: {
    icon: 'circle',
    itemGap: 40,
    itemWidth: 8,
    textStyle: {
      fontSize: 12,
      color: '#666',
    },
    data: [],
  },
  xAxis: {
    type: 'category',
    data: [],
    // 设置轴线的属性
    axisLine: {
      lineStyle: {
        color: '#666',
        width: 1, // 这里是为了突出显示加上的
      },
    },
    // 刻度线
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: true,
      interval: 0,
      rotate: 0,
      textStyle: {
        fontSize: 10,
        color: '#666666',
      },
    },
  },
  calculable: true,
  yAxis: {
    name: '个',
    type: 'value',
    // 设置辅助线的属性
    splitLine: {
      show: true,
      lineStyle: {
        color: '#E4E6F1',
        width: 1,
        type: 'dashed',
      },
    },
    // 设置轴线的属性
    axisLine: {
      lineStyle: {
        color: '#666',
        width: 1, // 这里是为了突出显示加上的
      },
    },
    // 刻度线
    axisTick: {
      show: true,
      lineStyle: {
        color: '#E4E6F1',
      },
    },
    axisLabel: {
      show: true,
      textStyle: {
        fontSize: 10,
        color: '#666666',
      },
    },
  },
  series: [{
    name: '',
    data: [],
    barWidth: 16,
    type: 'bar',
    barGap: 0,
    itemStyle: {
      normal: {
        color: '#5AAAFA',
        lineStyle: {
          color: '#5AAAFA',
        },
      },
    },
  },
  {
    name: '',
    data: [],
    barWidth: 16,
    type: 'bar',
    barGap: 0,
    itemStyle: {
      normal: {
        color: '#C7CEDD',
        lineStyle: {
          color: '#C7CEDD',
        },
      },
    },
  } ],
};
// top
export const HospitalOptions = {
  title: {
    text: '',
    x: 'center',
    textStyle: {
      fontSize: 14,
      color: '#424345',
      fontWeight: 'normal',
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
    formatter: function(params) {
      var tar;
      if (params[1].value !== '') {
        tar = params[1];
      } else {
        tar = params[0];
      }
      return tar.name + '<br/>' + tar.marker + formatterValue(tar.value.split('.')[0], tar.value.split('.')[1]);
    },
  },
  grid: {
    top: '14.5%',
    left: '5%',
    bottom: '10px',
    containLabel: true,
  },
  calculable: true,
  xAxis: [{
    type: 'value',
    boundaryGap: [0, 0.01],
    name: '个',
    // 设置轴线的属性
    axisLine: {
      lineStyle: {
        color: '#666',
        width: 1, // 这里是为了突出显示加上的
      },
    },
    // 刻度线
    axisTick: {
      show: false,
    },
    // 设置辅助线的属性
    splitLine: {
      show: true,
      lineStyle: {
        color: '#E4E6F1',
        width: 1,
        type: 'dashed',
      },
    },
  }],
  yAxis: [{
    type: 'category',
    data: [],
    // 设置轴线的属性
    axisLine: {
      lineStyle: {
        color: '#666',
        width: 1, // 这里是为了突出显示加上的
      },
    },
    // 刻度线
    axisTick: {
      show: false,
    },
  }],
  series: [
    {
      type: 'bar',
      barWidth: 16,
      stack: '总量',
      itemStyle: {
        normal: {
          color: '#5AAAFA',
          label: {
            show: true,
            position: 'right',
            color: '#666',
            fontSize: 10,
            lineHeight: '21px',
            formatter: function(params) {
              return formatterValue(params.value.split('.')[0], params.value.split('.')[1]);
            },
          },
        },
      },
      animation: false,
      data: [],
    },
    {
      type: 'bar',
      barWidth: 16,
      stack: '总量',
      itemStyle: {
        normal: {
          color: '#FEC300',
          label: {
            show: true,
            position: 'right',
            color: '#666',
            fontSize: 10,
            lineHeight: '21px',
            formatter: function(params) {
              return formatterValue(params.value.split('.')[0], params.value.split('.')[1]);
            },
          },
        },
      },
      animation: false,
      data: [],
    },
  ],
};
// 饼图
export const pieOptions = {
  title: {
    text: '',
    x: 'center',
    textStyle: {
      fontSize: 14,
      color: '#424345',
      fontWeight: 'normal',
    },
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    right: 36,
    top: 2,
    bottom: 20,
    data: [],
    itemWidth: 24,
    itemHeight: 12,
    textStyle: {
      fontSize: 13,
      color: '#424345',
      lineHeight: '21px',
    },
  },
  series: [
    {
      clockwise: 'true',
      name: '医院订单数量占比',
      type: 'pie',
      radius: '78%',
      center: ['50%', '54%'],
      label: {
        normal: {
          formatter: '{d}%',
          position: 'inner', // insideBottom
          textStyle: {
            color: '#475669',
            fontSize: 14,
            letterSpacing: '0',
          },
        },

      },
      labelLine: {
        normal: {
          show: false,
        },
      },
      data: [
      ],
    },
  ],
};

// 格式转换
function formatterValue(s, m) {
  const l = s.split('').reverse();
  const r = m || '';
  let t = '';
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '');
  }
  return r === '' ? t.split('').reverse().join('') : t.split('').reverse().join('') + '.' + r;
}

// 暴露出Charts构造函数，实际创建不同的echart实例进行调用
export const Charts = function(type, ID, option) {
  this.type = type;
  this.id = ID;
  this.option = option;
  this.init = function() {
    const myChart = echarts.init(document.getElementById(this.id));
    return myChart;
  };
  this.getOptions = function() {
    // 将传递来的chart类型赋值给option.series每一项
    let SeriesArr = this.option.series;
    if (this.type) {
      SeriesArr.forEach((i) => {
        i.type = this.type;
      });
    }
    return this.option;
  };
  this.setData = function() {
    this.init().setOption(this.getOptions());
  };
};
