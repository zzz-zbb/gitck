import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('tourism');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });
  const [particles, setParticles] = useState([]);
  
  // 图表引用
  const passengerFlowChartRef = useRef(null);
  const consumptionChartRef = useRef(null);
  const sourceChartRef = useRef(null);
  const penetrationChartRef = useRef(null);
  const arvrChartRef = useRef(null);
  const culturalProductsChartRef = useRef(null);
  const culturalRelicsChartRef = useRef(null);
  const ipInfluenceChartRef = useRef(null);
  const commuteChartRef = useRef(null);

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // 初始化客流统计分析图表
  const initPassengerFlowChart = async () => {
    if (passengerFlowChartRef.current) {
      const echarts = await import('echarts');
      const chart = echarts.default.init(passengerFlowChartRef.current);
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 10
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 10
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.05)'
            }
          }
        },
        series: [
          {
            name: '客流',
            type: 'bar',
            data: [120, 150, 100, 140, 180, 190, 160],
            barWidth: '60%',
            itemStyle: {
              borderRadius: [8, 8, 0, 0],
              color: new echarts.default.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: 'rgba(0, 0, 0, 0.3)'
                },
                {
                  offset: 1,
                  color: '#00F2FF'
                }
              ])
            },
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(255, 255, 255, 0.05)'
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 242, 255, 0.5)'
              }
            },
            animationDuration: 1500,
            animationEasing: 'cubicOut'
          }
        ]
      };
      chart.setOption(option);
      
      // 响应式调整
      window.addEventListener('resize', () => {
        chart.resize();
      });
    }
  };

  // 初始化消费分析图表
  const initConsumptionChart = async () => {
    if (consumptionChartRef.current) {
      const echarts = await import('echarts');
      const chart = echarts.default.init(consumptionChartRef.current);
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['餐饮', '购物', '住宿', '娱乐'],
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 10
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 10
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.05)'
            }
          }
        },
        series: [
          {
            name: '消费占比',
            type: 'bar',
            data: [45, 30, 15, 10],
            barWidth: '60%',
            itemStyle: {
              borderRadius: [8, 8, 0, 0],
              color: new echarts.default.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: 'rgba(0, 0, 0, 0.3)'
                },
                {
                  offset: 1,
                  color: '#00F2FF'
                }
              ])
            },
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(255, 255, 255, 0.05)'
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 242, 255, 0.5)'
              }
            },
            animationDuration: 1500,
            animationEasing: 'cubicOut'
          }
        ]
      };
      chart.setOption(option);
      
      // 响应式调整
      window.addEventListener('resize', () => {
        chart.resize();
      });
    }
  };

  // 初始化客流来源地分析图表
  const initSourceChart = async () => {
    if (sourceChartRef.current) {
      const echarts = await import('echarts');
      const chart = echarts.default.init(sourceChartRef.current);
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['本地', '省内', '国内其他', '境外'],
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 10
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 10
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.05)'
            }
          }
        },
        series: [
          {
            name: '占比',
            type: 'bar',
            data: [45, 30, 20, 5],
            barWidth: '60%',
            itemStyle: {
              borderRadius: [8, 8, 0, 0],
              color: new echarts.default.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: 'rgba(0, 0, 0, 0.3)'
                },
                {
                  offset: 1,
                  color: '#00F2FF'
                }
              ])
            },
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(255, 255, 255, 0.05)'
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 242, 255, 0.5)'
              }
            },
            animationDuration: 1500,
            animationEasing: 'cubicOut'
          }
        ]
      };
      chart.setOption(option);
      
      // 响应式调整
      window.addEventListener('resize', () => {
        chart.resize();
      });
    }
  };

  // 初始化线上渗透率图表
  const initPenetrationChart = async () => {
    if (penetrationChartRef.current) {
      const echarts = await import('echarts');
      const chart = echarts.default.init(penetrationChartRef.current);
      const option = {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月'],
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 10
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 10
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.05)'
            }
          }
        },
        series: [
          {
            name: '渗透率',
            type: 'line',
            smooth: true,
            lineStyle: {
              width: 3,
              color: '#00F2FF',
              shadowColor: 'rgba(0, 242, 255, 0.5)',
              shadowBlur: 10
            },
            areaStyle: {
              color: new echarts.default.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(0, 242, 255, 0.3)'
                },
                {
                  offset: 1,
                  color: 'rgba(0, 242, 255, 0)'
                }
              ])
            },
            data: [30, 40, 50, 60, 70, 75, 80, 85],
            symbol: 'none',
            emphasis: {
              symbol: 'circle',
              symbolSize: 8,
              itemStyle: {
                color: '#00F2FF',
                borderColor: '#fff',
                borderWidth: 2
              }
            },
            animationDuration: 1500,
            animationEasing: 'cubicOut'
          }
        ]
      };
      chart.setOption(option);
      
      // 响应式调整
      window.addEventListener('resize', () => {
        chart.resize();
      });
    }
  };

  // 初始化AR/VR体验项目图表
  const initArvrChart = async () => {
    if (arvrChartRef.current) {
      const echarts = await import('echarts');
      const chart = echarts.default.init(arvrChartRef.current);
      const option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          textStyle: {
            color: 'rgba(255, 255, 255, 0.7)'
          }
        },
        series: [
          {
            name: '体验人数',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: 'rgba(17, 24, 39, 0.9)',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '12',
                fontWeight: 'bold',
                color: '#fff'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1250, name: 'AR导览', itemStyle: { color: '#00F2FF' } },
              { value: 980, name: 'VR体验', itemStyle: { color: '#70FF00' } },
              { value: 1100, name: '3D文物', itemStyle: { color: '#9333EA' } }
            ],
            animationDuration: 1500,
            animationEasing: 'cubicOut'
          }
        ]
      };
      chart.setOption(option);
      
      // 响应式调整
      window.addEventListener('resize', () => {
        chart.resize();
      });
    }
  };

  // 初始化重点文物监测图表
  const initCulturalRelicsChart = async () => {
    if (culturalRelicsChartRef.current) {
      const echarts = await import('echarts');
      const chart = echarts.default.init(culturalRelicsChartRef.current);
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['开元寺', '清净寺', '天后宫', '府文庙'],
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 10
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 10
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.05)'
            }
          }
        },
        series: [
          {
            name: '监测指数',
            type: 'bar',
            data: [95, 92, 88, 90],
            barWidth: '60%',
            itemStyle: {
              borderRadius: [8, 8, 0, 0],
              color: new echarts.default.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: 'rgba(0, 0, 0, 0.3)'
                },
                {
                  offset: 1,
                  color: '#00F2FF'
                }
              ])
            },
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(255, 255, 255, 0.05)'
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 242, 255, 0.5)'
              }
            },
            animationDuration: 1500,
            animationEasing: 'cubicOut'
          }
        ]
      };
      chart.setOption(option);
      
      // 响应式调整
      window.addEventListener('resize', () => {
        chart.resize();
      });
    }
  };

  // 初始化数字文创产品图表
  const initCulturalProductsChart = async () => {
    if (culturalProductsChartRef.current) {
      const echarts = await import('echarts');
      const chart = echarts.default.init(culturalProductsChartRef.current);
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['数字藏品', '文创周边', '线上课程'],
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 10
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 10
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.05)'
            }
          }
        },
        series: [
          {
            name: '销售额',
            type: 'bar',
            data: [125, 85, 45],
            barWidth: '60%',
            itemStyle: {
              borderRadius: [8, 8, 0, 0],
              color: new echarts.default.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: 'rgba(0, 0, 0, 0.3)'
                },
                {
                  offset: 1,
                  color: '#00F2FF'
                }
              ])
            },
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(255, 255, 255, 0.05)'
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 242, 255, 0.5)'
              }
            },
            animationDuration: 1500,
            animationEasing: 'cubicOut'
          }
        ]
      };
      chart.setOption(option);
      
      // 响应式调整
      window.addEventListener('resize', () => {
        chart.resize();
      });
    }
  };

  // 初始化文创产品图表
  const initIpInfluenceChart = async () => {
    if (ipInfluenceChartRef.current) {
      const echarts = await import('echarts');
      const chart = echarts.default.init(ipInfluenceChartRef.current);
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '10%',
          right: '10%',
          top: '10%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 10
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.05)'
            }
          }
        },
        yAxis: {
          type: 'category',
          data: ['文创产品5', '文创产品4', '文创产品3', '文创产品2', '文创产品1'],
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 10
          }
        },
        series: [
          {
            name: '销售额',
            type: 'bar',
            data: [30000, 35000, 45000, 85000, 125000],
            barWidth: '60%',
            itemStyle: {
              borderRadius: [0, 8, 8, 0],
              color: new echarts.default.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: 'rgba(0, 0, 0, 0.3)'
                },
                {
                  offset: 1,
                  color: '#00F2FF'
                }
              ])
            },
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(255, 255, 255, 0.05)'
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 242, 255, 0.5)'
              }
            },
            animationDuration: 1500,
            animationEasing: 'cubicOut'
          }
        ]
      };
      chart.setOption(option);
      
      // 响应式调整
      window.addEventListener('resize', () => {
        chart.resize();
      });
    }
  };

  // 初始化游客通勤方式分析图表
  const initCommuteChart = async () => {
    if (commuteChartRef.current) {
      const echarts = await import('echarts');
      const chart = echarts.default.init(commuteChartRef.current);
      const option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          textStyle: {
            color: 'rgba(255, 255, 255, 0.7)'
          }
        },
        series: [
          {
            name: '通勤方式',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: 'rgba(17, 24, 39, 0.9)',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '12',
                fontWeight: 'bold',
                color: '#fff'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 45, name: '公共交通', itemStyle: { color: '#00F2FF' } },
              { value: 30, name: '自驾', itemStyle: { color: '#70FF00' } },
              { value: 15, name: '出租车', itemStyle: { color: '#9333EA' } },
              { value: 10, name: '步行/骑行', itemStyle: { color: '#F472B6' } }
            ],
            animationDuration: 1500,
            animationEasing: 'cubicOut'
          }
        ]
      };
      chart.setOption(option);
      
      // 响应式调整
      window.addEventListener('resize', () => {
        chart.resize();
      });
    }
  };

  // 初始化图表
  useEffect(() => {
    const initCharts = async () => {
      await Promise.all([
        initPassengerFlowChart(),
        initConsumptionChart(),
        initSourceChart(),
        initPenetrationChart(),
        initArvrChart(),
        initCulturalProductsChart(),
        initCulturalRelicsChart(),
        initIpInfluenceChart(),
        initCommuteChart()
      ]);
    };

    setTimeout(() => {
      initCharts();
    }, 100);
  }, [activeTab]);

  // 生成动态粒子
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 5000);

    return () => clearInterval(interval);
  }, []);

  // 全局resize监听
  useEffect(() => {
    const handleResize = () => {
      // 触发组件重新渲染，确保图表和布局自适应
      setParticles(prevParticles => [...prevParticles]);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mapPointsTourism = [
    { id: 1, name: '旅游景点A', x: '20%', y: '30%', info: '国家5A级旅游景区，年接待游客超过100万人次' },
    { id: 2, name: '旅游景点B', x: '60%', y: '40%', info: '历史文化名城，拥有多处文物保护单位' },
    { id: 3, name: '旅游景点C', x: '40%', y: '70%', info: '自然风光区，以山水景观闻名' },
    { id: 4, name: '旅游景点D', x: '80%', y: '60%', info: '主题公园，适合全家出游' },
  ];

  const mapPointsCulture = [
    { id: 1, name: '文物保护单位A', x: '25%', y: '35%', info: '国家级文物保护单位，始建于唐代' },
    { id: 2, name: '博物馆B', x: '55%', y: '45%', info: '综合性博物馆，藏品丰富' },
    { id: 3, name: '文化街区C', x: '35%', y: '65%', info: '历史文化街区，保存完好' },
    { id: 4, name: '艺术中心D', x: '75%', y: '55%', info: '现代艺术中心，经常举办展览' },
  ];

  return (
    <div className="dashboard">
      {/* 动态SVG科技底纹 */}
      <div className="tech-background">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
          {/* 网格线 */}
          <g stroke="rgba(0, 242, 255, 0.1)" strokeWidth="0.5">
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(0, 242, 255, 0.1)" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </g>
          {/* 科技线条 */}
          <g stroke="rgba(0, 242, 255, 0.2)" strokeWidth="1">
            <path d="M 0 200 Q 250 150 500 200 T 1000 200" fill="none" strokeDasharray="5,5"/>
            <path d="M 0 400 Q 250 350 500 400 T 1000 400" fill="none" strokeDasharray="5,5"/>
            <path d="M 0 600 Q 250 550 500 600 T 1000 600" fill="none" strokeDasharray="5,5"/>
            <path d="M 0 800 Q 250 750 500 800 T 1000 800" fill="none" strokeDasharray="5,5"/>
            <path d="M 200 0 Q 150 250 200 500 T 200 1000" fill="none" strokeDasharray="5,5"/>
            <path d="M 400 0 Q 350 250 400 500 T 400 1000" fill="none" strokeDasharray="5,5"/>
            <path d="M 600 0 Q 550 250 600 500 T 600 1000" fill="none" strokeDasharray="5,5"/>
            <path d="M 800 0 Q 750 250 800 500 T 800 1000" fill="none" strokeDasharray="5,5"/>
          </g>
          {/* 发光点 */}
          <g>
            <circle cx="200" cy="200" r="2" fill="#00F2FF" opacity="0.8"/>
            <circle cx="400" cy="400" r="2" fill="#00F2FF" opacity="0.8"/>
            <circle cx="600" cy="600" r="2" fill="#00F2FF" opacity="0.8"/>
            <circle cx="800" cy="800" r="2" fill="#00F2FF" opacity="0.8"/>
            <circle cx="800" cy="200" r="2" fill="#00F2FF" opacity="0.8"/>
            <circle cx="600" cy="400" r="2" fill="#00F2FF" opacity="0.8"/>
            <circle cx="400" cy="600" r="2" fill="#00F2FF" opacity="0.8"/>
            <circle cx="200" cy="800" r="2" fill="#00F2FF" opacity="0.8"/>
          </g>
        </svg>
      </div>
      
      {/* 动态粒子背景 */}
      <div className="particle-bg">
        {particles.map(particle => (
          <div
            key={particle.id}
            style={{
              position: 'absolute',
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              borderRadius: '50%',
              background: '#00F2FF',
              opacity: particle.opacity,
              boxShadow: '0 0 10px rgba(0, 242, 255, 0.5)',
              animation: `float ${5 + particle.speed * 10}s linear infinite`,
            }}
          />
        ))}
      </div>
      
      {/* 网格覆盖层 */}
      <div className="grid-overlay"></div>
      {/* 头部 */}
      <div className="header">
        <h1>数字文旅驾驶舱</h1>
        <div className="date-time">
          {new Date().toLocaleString('zh-CN')}
        </div>
      </div>



      {/* 内容区域 */}
      <div className="content">
        {/* 数字旅游驾驶舱 */}
        <div className={`section ${activeTab === 'tourism' ? 'active' : ''}`} id="tourism">
          {/* 左侧面板 */}
          <div className="left-panels" style={{ border: '1px solid rgba(0, 242, 255, 0.3)', borderRadius: '8px', padding: '1rem', backgroundColor: 'rgba(0, 0, 0, 0.2)', overflow: 'hidden' }}>
            <h2 style={{ color: '#00F2FF', marginBottom: '0', textAlign: 'center' }}>数字文化</h2>
            
            {/* 数字指标卡片 */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.1rem', width: '100%' }}>
              {/* 核心IP数 */}
              <div style={{ flex: '1', background: 'linear-gradient(135deg, rgba(0, 119, 255, 0.3), rgba(0, 242, 255, 0.2))', borderRadius: '8px', padding: '0.5rem', border: '1px solid rgba(0, 242, 255, 0.3)', boxShadow: '0 4px 15px rgba(0, 242, 255, 0.2)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', background: 'rgba(0, 242, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0, 242, 255, 0.5)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4C14.2091 4 16 5.79086 16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4Z" stroke="#00F2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14C16.4183 14 20 15.7909 20 18V20" stroke="#00F2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 18V20" stroke="#00F2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 14C8.41828 14 12 15.7909 12 18" stroke="#00F2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.8rem' }}>核心IP数</div>
                  <div style={{ background: 'rgba(0, 119, 255, 0.8)', color: '#fff', padding: '0.2rem 0.4rem', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(0, 119, 255, 0.5)' }}>15</div>
                </div>
              </div>
              
              {/* 重点文物数 */}
              <div style={{ flex: '1', background: 'linear-gradient(135deg, rgba(0, 119, 255, 0.3), rgba(0, 242, 255, 0.2))', borderRadius: '8px', padding: '0.5rem', border: '1px solid rgba(0, 242, 255, 0.3)', boxShadow: '0 4px 15px rgba(0, 242, 255, 0.2)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', background: 'rgba(0, 242, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0, 242, 255, 0.5)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="#00F2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="#00F2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="22.08" x2="12" y2="12" stroke="#00F2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.8rem' }}>重点文物数</div>
                  <div style={{ background: 'rgba(0, 119, 255, 0.8)', color: '#fff', padding: '0.2rem 0.4rem', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(0, 119, 255, 0.5)' }}>89</div>
                </div>
              </div>
            </div>
            
            {/* IP效能和文创产品横排展示 */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.3rem', width: '100%' }}>
              {/* IP效能 */}
              <div className="panel" style={{ flex: '1', minWidth: '200px', flexDirection: 'column', minHeight: '450px' }}>
                <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', marginBottom: '0.8rem' }}>
                  IP效能
                  <button 
                    style={{ 
                      padding: '0.2rem 0.6rem', 
                      backgroundColor: '#38b2ac', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '4px', 
                      cursor: 'pointer',
                      fontSize: '0.7rem'
                    }}
                    onClick={() => openModal('IP效能详情', 'IP效能系统分析文化IP的传播效果、商业价值和社会影响力，为IP运营提供数据支持。')}
                  >
                    查看详情
                  </button>
                </h3>
                <div className="panel-content" style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* IP授权收入 - 金字塔图形 */}
                  <div style={{ flex: '1' }}>
                    <h4 style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '0.5rem', fontSize: '0.8rem', textAlign: 'center' }}>IP授权收入</h4>
                    <div className="chart-container" style={{ position: 'relative', height: '8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
                        {/* 第四层 - IP4: 1000万 */}
                        <div style={{ 
                          width: '30%', 
                          height: '20%', 
                          background: 'linear-gradient(180deg, rgba(0, 119, 255, 0.8) 0%, rgba(0, 242, 255, 0.6) 100%)', 
                          borderTopLeftRadius: '4px', 
                          borderTopRightRadius: '4px', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          color: '#fff', 
                          fontWeight: 'bold', 
                          fontSize: '0.7rem', 
                          boxShadow: '0 2px 10px rgba(0, 242, 255, 0.8), 0 0 20px rgba(0, 242, 255, 0.5)', 
                          transition: 'all 0.3s ease',
                          position: 'relative'
                        }}>
                          IP4:1000万
                          <div style={{ 
                            position: 'absolute', 
                            top: '-10px', 
                            left: '50%', 
                            transform: 'translateX(-50%)', 
                            width: '6px', 
                            height: '6px', 
                            borderRadius: '50%', 
                            background: '#00F2FF', 
                            boxShadow: '0 0 10px #00F2FF'
                          }}></div>
                        </div>
                        {/* 第三层 - IP3: 2500万 */}
                        <div style={{ 
                          width: '50%', 
                          height: '25%', 
                          background: 'linear-gradient(180deg, rgba(0, 119, 255, 0.7) 0%, rgba(0, 242, 255, 0.5) 100%)', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          color: '#fff', 
                          fontWeight: 'bold', 
                          fontSize: '0.7rem', 
                          boxShadow: '0 2px 8px rgba(0, 242, 255, 0.6), 0 0 15px rgba(0, 242, 255, 0.4)', 
                          transition: 'all 0.3s ease',
                          position: 'relative'
                        }}>
                          IP3:2500万
                          <div style={{ 
                            position: 'absolute', 
                            top: '50%', 
                            right: '-15px', 
                            transform: 'translateY(-50%)', 
                            width: '6px', 
                            height: '6px', 
                            borderRadius: '50%', 
                            background: '#00F2FF', 
                            boxShadow: '0 0 10px #00F2FF'
                          }}></div>
                        </div>
                        {/* 第二层 - IP2: 3000万 */}
                        <div style={{ 
                          width: '70%', 
                          height: '25%', 
                          background: 'linear-gradient(180deg, rgba(0, 119, 255, 0.6) 0%, rgba(0, 242, 255, 0.4) 100%)', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          color: '#fff', 
                          fontWeight: 'bold', 
                          fontSize: '0.7rem', 
                          boxShadow: '0 2px 8px rgba(0, 242, 255, 0.4), 0 0 10px rgba(0, 242, 255, 0.3)', 
                          transition: 'all 0.3s ease',
                          position: 'relative'
                        }}>
                          IP2:3000万
                          <div style={{ 
                            position: 'absolute', 
                            top: '50%', 
                            left: '-15px', 
                            transform: 'translateY(-50%)', 
                            width: '6px', 
                            height: '6px', 
                            borderRadius: '50%', 
                            background: '#00F2FF', 
                            boxShadow: '0 0 10px #00F2FF'
                          }}></div>
                        </div>
                        {/* 第一层 - IP1: 2000万 */}
                        <div style={{ 
                          width: '90%', 
                          height: '30%', 
                          background: 'linear-gradient(180deg, rgba(0, 119, 255, 0.5) 0%, rgba(0, 242, 255, 0.3) 100%)', 
                          borderBottomLeftRadius: '4px', 
                          borderBottomRightRadius: '4px', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          color: '#fff', 
                          fontWeight: 'bold', 
                          fontSize: '0.7rem', 
                          boxShadow: '0 2px 8px rgba(0, 242, 255, 0.3), 0 0 8px rgba(0, 242, 255, 0.2)', 
                          transition: 'all 0.3s ease',
                          position: 'relative'
                        }}>
                          IP1:2000万
                          <div style={{ 
                            position: 'absolute', 
                            bottom: '-10px', 
                            left: '50%', 
                            transform: 'translateX(-50%)', 
                            width: '6px', 
                            height: '6px', 
                            borderRadius: '50%', 
                            background: '#00F2FF', 
                            boxShadow: '0 0 10px #00F2FF'
                          }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* IP传播影响力 - 饼图 */}
                  <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <h4 style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '0.5rem', fontSize: '0.8rem', textAlign: 'center' }}>IP传播影响力</h4>
                    
                    {/* 浏览量/互动量标签页 */}
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <div style={{ 
                        padding: '0.2rem 0.8rem', 
                        backgroundColor: 'rgba(59, 130, 246, 0.8)', 
                        borderRadius: '4px', 
                        color: '#fff', 
                        fontSize: '0.7rem', 
                        fontWeight: 'bold',
                        boxShadow: '0 2px 8px rgba(59, 130, 246, 0.5)'
                      }}>浏览量</div>
                      <div style={{ 
                        padding: '0.2rem 0.8rem', 
                        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                        borderRadius: '4px', 
                        color: 'rgba(255, 255, 255, 0.6)', 
                        fontSize: '0.7rem',
                        transition: 'all 0.3s ease'
                      }}>互动量</div>
                    </div>
                    
                    {/* IP标签 */}
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <div style={{ 
                        padding: '0.2rem 0.8rem', 
                        backgroundColor: 'rgba(59, 130, 246, 0.8)', 
                        borderRadius: '4px', 
                        color: '#fff', 
                        fontSize: '0.7rem',
                        boxShadow: '0 2px 8px rgba(59, 130, 246, 0.5)'
                      }}>IP1</div>
                      <div style={{ 
                        padding: '0.2rem 0.8rem', 
                        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                        borderRadius: '4px', 
                        color: 'rgba(255, 255, 255, 0.6)', 
                        fontSize: '0.7rem',
                        transition: 'all 0.3s ease'
                      }}>IP2</div>
                      <div style={{ 
                        padding: '0.2rem 0.8rem', 
                        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                        borderRadius: '4px', 
                        color: 'rgba(255, 255, 255, 0.6)', 
                        fontSize: '0.7rem',
                        transition: 'all 0.3s ease'
                      }}>IP3</div>
                      <div style={{ 
                        padding: '0.2rem 0.8rem', 
                        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                        borderRadius: '4px', 
                        color: 'rgba(255, 255, 255, 0.6)', 
                        fontSize: '0.7rem',
                        transition: 'all 0.3s ease'
                      }}>IP4</div>
                    </div>
                    
                    {/* 环形图和图例 */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '6rem' }}>
                      {/* 环形图 */}
                      <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="100%" height="100%" viewBox="0 0 200 200">
                          {/* 背景圆环 */}
                          <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="15" />
                          
                          {/* 短视频1 - 40% (蓝色) */}
                          <path d="M100,40 A60,60 0 0,1 160,100 L100,100 Z" fill="rgba(59, 130, 246, 0.8)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
                          
                          {/* 短视频2 - 29% (青色) */}
                          <path d="M160,100 A60,60 0 0,1 141.4,151.9 L100,100 Z" fill="rgba(0, 242, 255, 0.8)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
                          
                          {/* 短视频3 - 97% (绿色) */}
                          <path d="M141.4,151.9 A60,60 0 0,1 38.6,151.9 L100,100 Z" fill="rgba(112, 255, 0, 0.8)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
                          
                          {/* 短视频4 - 83% (黄色) */}
                          <path d="M38.6,151.9 A60,60 0 0,1 100,40 L100,100 Z" fill="rgba(255, 204, 0, 0.8)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
                          
                          {/* 发光效果 */}
                          <circle cx="100" cy="100" r="65" fill="none" stroke="rgba(0, 242, 255, 0.3)" strokeWidth="2" filter="blur(5px)" />
                          
                          {/* 数据标签 */}
                          <text x="130" y="80" textAnchor="middle" fill="#fff" fontSize="9">短视频1 40%</text>
                          <text x="130" y="130" textAnchor="middle" fill="#fff" fontSize="9">短视频2 29%</text>
                          <text x="70" y="130" textAnchor="middle" fill="#fff" fontSize="9">短视频3 97%</text>
                          <text x="70" y="80" textAnchor="middle" fill="#fff" fontSize="9">短视频4 83%</text>
                        </svg>
                      </div>
                      
                      {/* 颜色图例 */}
                      <div style={{ flex: '0 0 30%', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <div style={{ width: '0.6rem', height: '0.6rem', backgroundColor: 'rgba(59, 130, 246, 0.8)' }}></div>
                          <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.6rem' }}>短视频1</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <div style={{ width: '0.6rem', height: '0.6rem', backgroundColor: 'rgba(0, 242, 255, 0.8)' }}></div>
                          <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.6rem' }}>短视频2</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <div style={{ width: '0.6rem', height: '0.6rem', backgroundColor: 'rgba(112, 255, 0, 0.8)' }}></div>
                          <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.6rem' }}>短视频3</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <div style={{ width: '0.6rem', height: '0.6rem', backgroundColor: 'rgba(255, 204, 0, 0.8)' }}></div>
                          <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.6rem' }}>短视频4</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 文创产品 */}
              <div className="panel" style={{ flex: '1', minWidth: '200px', flexDirection: 'column' }}>
                <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
                  文创产品
                  <button 
                    style={{ 
                      padding: '0.2rem 0.6rem', 
                      backgroundColor: '#38b2ac', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '4px', 
                      cursor: 'pointer',
                      fontSize: '0.7rem'
                    }}
                    onClick={() => openModal('文创产品详情', '文创产品系统整合了文化元素与现代科技，开发了数字藏品、文创周边等产品，通过线上线下渠道销售。')}
                  >
                    查看详情
                  </button>
                </h3>
                <div className="panel-content" style={{ flex: '1' }}>
                  <h4 style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '0.5rem', fontSize: '0.8rem', textAlign: 'center' }}>文创销售排名top5</h4>
                  <div className="chart-container" style={{ position: 'relative', height: '12rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} ref={culturalProductsChartRef}></div>
                  <h4 style={{ color: 'rgba(255, 255, 255, 0.8)', marginTop: '1rem', marginBottom: '0.5rem', fontSize: '0.8rem', textAlign: 'center' }}>文创产品销量</h4>
                  <div style={{ width: '100%' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(0, 242, 255, 0.3)' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(0, 242, 255, 0.3)', backgroundColor: 'rgba(0, 119, 255, 0.3)' }}>
                          <th style={{ padding: '0.2rem', textAlign: 'left', fontSize: '0.6rem', color: 'rgba(255, 255, 255, 0.8)', borderRight: '1px solid rgba(0, 242, 255, 0.1)', whiteSpace: 'nowrap' }}>文创名称</th>
                          <th style={{ padding: '0.2rem', textAlign: 'left', fontSize: '0.6rem', color: 'rgba(255, 255, 255, 0.8)', borderRight: '1px solid rgba(0, 242, 255, 0.1)', whiteSpace: 'nowrap' }}>所属IP</th>
                          <th style={{ padding: '0.2rem', textAlign: 'left', fontSize: '0.6rem', color: 'rgba(255, 255, 255, 0.8)', borderRight: '1px solid rgba(0, 242, 255, 0.1)', whiteSpace: 'nowrap' }}>销售个数</th>
                          <th style={{ padding: '0.2rem', textAlign: 'left', fontSize: '0.6rem', color: 'rgba(255, 255, 255, 0.8)', borderRight: '1px solid rgba(0, 242, 255, 0.1)', whiteSpace: 'nowrap' }}>购买人数</th>
                          <th style={{ padding: '0.2rem', textAlign: 'left', fontSize: '0.6rem', color: 'rgba(255, 255, 255, 0.8)', whiteSpace: 'nowrap' }}>销售额</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid rgba(0, 242, 255, 0.1)' }}>
                          <td style={{ padding: '0.2rem', fontSize: '0.6rem', borderRight: '1px solid rgba(0, 242, 255, 0.1)', whiteSpace: 'nowrap' }}>文创产品1</td>
                          <td style={{ padding: '0.2rem', fontSize: '0.6rem', borderRight: '1px solid rgba(0, 242, 255, 0.1)', whiteSpace: 'nowrap' }}>IP1</td>
                          <td style={{ padding: '0.2rem', fontSize: '0.6rem', borderRight: '1px solid rgba(0, 242, 255, 0.1)', whiteSpace: 'nowrap' }}>1250</td>
                          <td style={{ padding: '0.2rem', fontSize: '0.6rem', borderRight: '1px solid rgba(0, 242, 255, 0.1)', whiteSpace: 'nowrap' }}>980</td>
                          <td style={{ padding: '0.2rem', fontSize: '0.6rem', whiteSpace: 'nowrap' }}>30万元</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(0, 242, 255, 0.1)' }}>
                          <td style={{ padding: '0.2rem', fontSize: '0.6rem', borderRight: '1px solid rgba(0, 242, 255, 0.1)', whiteSpace: 'nowrap' }}>文创产品2</td>
                          <td style={{ padding: '0.2rem', fontSize: '0.6rem', borderRight: '1px solid rgba(0, 242, 255, 0.1)', whiteSpace: 'nowrap' }}>IP2</td>
                          <td style={{ padding: '0.2rem', fontSize: '0.6rem', borderRight: '1px solid rgba(0, 242, 255, 0.1)', whiteSpace: 'nowrap' }}>980</td>
                          <td style={{ padding: '0.2rem', fontSize: '0.6rem', borderRight: '1px solid rgba(0, 242, 255, 0.1)', whiteSpace: 'nowrap' }}>850</td>
                          <td style={{ padding: '0.2rem', fontSize: '0.6rem', whiteSpace: 'nowrap' }}>20万元</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(0, 242, 255, 0.1)' }}>
                          <td style={{ padding: '0.2rem', fontSize: '0.6rem', borderRight: '1px solid rgba(0, 242, 255, 0.1)', whiteSpace: 'nowrap' }}>文创产品3</td>
                          <td style={{ padding: '0.2rem', fontSize: '0.6rem', borderRight: '1px solid rgba(0, 242, 255, 0.1)', whiteSpace: 'nowrap' }}>IP3</td>
                          <td style={{ padding: '0.2rem', fontSize: '0.6rem', borderRight: '1px solid rgba(0, 242, 255, 0.1)', whiteSpace: 'nowrap' }}>850</td>
                          <td style={{ padding: '0.2rem', fontSize: '0.6rem', borderRight: '1px solid rgba(0, 242, 255, 0.1)', whiteSpace: 'nowrap' }}>720</td>
                          <td style={{ padding: '0.2rem', fontSize: '0.6rem', whiteSpace: 'nowrap' }}>15万元</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(0, 242, 255, 0.1)' }}>
                          <td style={{ padding: '0.2rem', fontSize: '0.6rem', borderRight: '1px solid rgba(0, 242, 255, 0.1)', whiteSpace: 'nowrap' }}>文创产品4</td>
                          <td style={{ padding: '0.2rem', fontSize: '0.6rem', borderRight: '1px solid rgba(0, 242, 255, 0.1)', whiteSpace: 'nowrap' }}>IP4</td>
                          <td style={{ padding: '0.2rem', fontSize: '0.6rem', borderRight: '1px solid rgba(0, 242, 255, 0.1)', whiteSpace: 'nowrap' }}>720</td>
                          <td style={{ padding: '0.2rem', fontSize: '0.6rem', borderRight: '1px solid rgba(0, 242, 255, 0.1)', whiteSpace: 'nowrap' }}>610</td>
                          <td style={{ padding: '0.2rem', fontSize: '0.6rem', whiteSpace: 'nowrap' }}>12万元</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* 重点文物监测和直播活动横向排列 */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem', marginTop: '0.3rem' }}>
              {/* 重点文物监测 */}
              <div className="panel" style={{ flex: '1', padding: '0.8rem' }}>
                <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
                  重点文物监测
                  <button 
                    style={{ 
                      padding: '0.2rem 0.6rem', 
                      backgroundColor: '#38b2ac', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '4px', 
                      cursor: 'pointer',
                      fontSize: '0.7rem'
                    }}
                    onClick={() => openModal('文物监测详情', '重点文物监测系统通过传感器实时监测文物保存环境，包括温度、湿度、光照等参数，确保文物安全。')}
                  >
                    查看详情
                  </button>
                </h3>
                <div className="panel-content" style={{ paddingTop: '0' }}>
                  <div className="chart-container" style={{ position: 'relative', height: '12rem', marginTop: '0' }} ref={culturalRelicsChartRef}></div>
                </div>
              </div>

              {/* 直播活动 */}
              <div className="panel" style={{ flex: '1', padding: '0.8rem' }}>
                <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
                  直播活动
                  <button 
                    style={{ 
                      padding: '0.2rem 0.6rem', 
                      backgroundColor: '#38b2ac', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '4px', 
                      cursor: 'pointer',
                      fontSize: '0.7rem'
                    }}
                    onClick={() => openModal('直播活动详情', '直播活动系统通过线上直播方式，展示文化旅游资源，吸引更多游客关注和参与。')}
                  >
                    查看详情
                  </button>
                </h3>
                <div className="panel-content">
                  <div className="stats-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                    <div className="stat-card" style={{ padding: '0.8rem' }}>
                      <div className="stat-value" style={{ fontSize: '1.2rem' }}>25</div>
                      <div className="stat-label" style={{ fontSize: '0.7rem' }}>活动场次</div>
                    </div>
                    <div className="stat-card" style={{ padding: '0.8rem' }}>
                      <div className="stat-value" style={{ fontSize: '1.2rem' }}>100</div>
                      <div className="stat-label" style={{ fontSize: '0.7rem' }}>观看人数</div>
                    </div>
                  </div>
                  <ul className="list" style={{ marginTop: '1rem' }}>
                    <li className="list-item">
                      <span className="item-name">景点直播</span>
                      <span className="item-value">65%</span>
                    </li>
                    <li className="list-item">
                      <span className="item-name">文化活动</span>
                      <span className="item-value">25%</span>
                    </li>

                  </ul>
                </div>
              </div>
            </div>


          </div>

          {/* 中间地图 */}
          <div className="map-container">
            <h3>旅游景点分布</h3>
            <div className="map">
              {mapPointsTourism.map(point => (
                <div 
                  key={point.id}
                  className="map-point"
                  style={{ left: point.x, top: point.y }}
                  onClick={() => openModal(point.name, point.info)}
                />
              ))}
            </div>
          </div>

          {/* 右侧面板 */}
          <div className="right-panels" style={{ border: '1px solid rgba(0, 242, 255, 0.3)', borderRadius: '8px', padding: '1rem', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <h2 style={{ color: '#00F2FF', marginBottom: '1rem', textAlign: 'center' }}>数字旅游</h2>
            {/* 智慧商圈 */}
            <div className="panel" style={{ padding: '0.8rem' }}>
              <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
                智慧商圈
                <button 
                  style={{ 
                    padding: '0.2rem 0.6rem', 
                    backgroundColor: '#38b2ac', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer',
                    fontSize: '0.7rem'
                  }}
                  onClick={() => openModal('智慧商圈详情', '智慧商圈系统集成了商户管理、客流分析、消费数据等功能，为商家提供全方位的运营支持。')}
                >
                  查看详情
                </button>
              </h3>
              <div className="panel-content">
                <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(8rem, 1fr))', gap: '0.6rem' }}>
                  <div className="stat-card" style={{ padding: '0.8rem' }}>
                    <div className="stat-value" style={{ fontSize: '1.2rem' }}>128</div>
                    <div className="stat-label" style={{ fontSize: '0.7rem' }}>商户数量</div>
                  </div>
                  <div className="stat-card" style={{ padding: '0.8rem' }}>
                    <div className="stat-value" style={{ fontSize: '1.2rem' }}>98%</div>
                    <div className="stat-label" style={{ fontSize: '0.7rem' }}>线上覆盖率</div>
                  </div>
                  <div className="stat-card" style={{ padding: '0.8rem' }}>
                    <div className="stat-value" style={{ fontSize: '1.2rem' }}>¥2.5M</div>
                    <div className="stat-label" style={{ fontSize: '0.7rem' }}>月销售额</div>
                  </div>
                </div>
                <ul className="list">
                  <li className="list-item">
                    <span className="item-name">购物中心A</span>
                    <span className="item-value">95%</span>
                  </li>
                  <li className="list-item">
                    <span className="item-name">商业街B</span>
                    <span className="item-value">88%</span>
                  </li>
                  <li className="list-item">
                    <span className="item-name">特色街区C</span>
                    <span className="item-value">92%</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 客流统计分析 */}
            <div className="panel" style={{ padding: '0.8rem' }}>
              <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
                客流统计分析
                <button 
                  style={{ 
                    padding: '0.2rem 0.6rem', 
                    backgroundColor: '#38b2ac', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer',
                    fontSize: '0.7rem'
                  }}
                  onClick={() => openModal('客流分析详情', '客流统计系统通过智能设备采集数据，实时分析客流趋势、高峰时段和人群分布。')}
                >
                  查看详情
                </button>
              </h3>
              <div className="panel-content">
                <div className="chart-container" style={{ position: 'relative', height: '14rem' }} ref={passengerFlowChartRef}></div>
                <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(8rem, 1fr))', gap: '0.6rem' }}>
                  <div className="stat-card" style={{ padding: '0.8rem' }}>
                    <div className="stat-value" style={{ fontSize: '1.2rem' }}>12,580</div>
                    <div className="stat-label" style={{ fontSize: '0.7rem' }}>今日客流</div>
                  </div>
                  <div className="stat-card" style={{ padding: '0.8rem' }}>
                    <div className="stat-value" style={{ fontSize: '1.2rem' }}>85,620</div>
                    <div className="stat-label" style={{ fontSize: '0.7rem' }}>本周客流</div>
                  </div>
                  <div className="stat-card" style={{ padding: '0.8rem' }}>
                    <div className="stat-value" style={{ fontSize: '1.2rem' }}>320,450</div>
                    <div className="stat-label" style={{ fontSize: '0.7rem' }}>本月客流</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 消费分析 */}
            <div className="panel" style={{ padding: '0.8rem' }}>
              <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
                消费分析
                <button 
                  style={{ 
                    padding: '0.2rem 0.6rem', 
                    backgroundColor: '#38b2ac', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer',
                    fontSize: '0.7rem'
                  }}
                  onClick={() => openModal('消费分析详情', '消费分析系统通过支付数据和会员系统，分析游客消费习惯和偏好，为商家提供精准营销建议。')}
                >
                  查看详情
                </button>
              </h3>
              <div className="panel-content">
                <div className="chart-container" style={{ position: 'relative', height: '14rem' }} ref={consumptionChartRef}></div>
                <ul className="list">
                  <li className="list-item">
                    <span className="item-name">餐饮</span>
                    <span className="item-value">45%</span>
                  </li>
                  <li className="list-item">
                    <span className="item-name">购物</span>
                    <span className="item-value">30%</span>
                  </li>
                  <li className="list-item">
                    <span className="item-name">住宿</span>
                    <span className="item-value">15%</span>
                  </li>
                  <li className="list-item">
                    <span className="item-name">娱乐</span>
                    <span className="item-value">10%</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 数字文创产品 */}
            <div className="panel" style={{ padding: '0.8rem' }}>
              <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
                数字文创产品
                <button 
                  style={{ 
                    padding: '0.2rem 0.6rem', 
                    backgroundColor: '#38b2ac', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer',
                    fontSize: '0.7rem'
                  }}
                  onClick={() => openModal('数字文创详情', '数字文创产品系统整合了文化元素与现代科技，开发了数字藏品、文创周边等产品，通过线上线下渠道销售。')}
                >
                  查看详情
                </button>
              </h3>
              <div className="panel-content">
                <div className="chart-container" style={{ position: 'relative', height: '14rem' }} ref={culturalProductsChartRef}></div>
                <ul className="list">
                  <li className="list-item">
                    <span className="item-name">数字藏品</span>
                    <span className="item-value">¥125,000</span>
                  </li>
                  <li className="list-item">
                    <span className="item-name">文创周边</span>
                    <span className="item-value">¥85,000</span>
                  </li>
                  <li className="list-item">
                    <span className="item-name">线上课程</span>
                    <span className="item-value">¥45,000</span>
                  </li>
                </ul>
              </div>
            </div>


          </div>
        </div>

        {/* 数字文化驾驶舱 */}
        <div className={`section ${activeTab === 'culture' ? 'active' : ''}`} id="culture">
          {/* 左侧面板 */}
          <div className="left-panels">
            {/* 重点文物监测 */}
            <div className="panel">
              <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                重点文物监测
                <button 
                  style={{ 
                    padding: '0.3rem 0.8rem', 
                    backgroundColor: '#38b2ac', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer',
                    fontSize: '0.8rem'
                  }}
                  onClick={() => openModal('文物监测详情', '重点文物监测系统通过传感器实时监测文物保存环境，包括温度、湿度、光照等参数，确保文物安全。')}
                >
                  查看详情
                </button>
              </h3>
              <div className="panel-content">
                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-value">128</div>
                    <div className="stat-label">文物保护单位</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-value">98%</div>
                    <div className="stat-label">监测覆盖率</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-value">0</div>
                    <div className="stat-label">异常情况</div>
                  </div>
                </div>
                <ul className="list">
                  <li className="list-item">
                    <span className="item-name">文物A</span>
                    <span className="item-value">正常</span>
                  </li>
                  <li className="list-item">
                    <span className="item-name">文物B</span>
                    <span className="item-value">正常</span>
                  </li>
                  <li className="list-item">
                    <span className="item-name">文物C</span>
                    <span className="item-value">正常</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* AR/VR体验项目 */}
            <div className="panel">
              <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                AR/VR体验项目
                <button 
                  style={{ 
                    padding: '0.3rem 0.8rem', 
                    backgroundColor: '#38b2ac', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer',
                    fontSize: '0.8rem'
                  }}
                  onClick={() => openModal('AR/VR体验详情', 'AR/VR体验项目通过增强现实和虚拟现实技术，为游客提供沉浸式文化体验，包括虚拟导览、文物复原等功能。')}
                >
                  查看详情
                </button>
              </h3>
              <div className="panel-content">
                <div className="chart-container" style={{ position: 'relative' }} ref={arvrChartRef}></div>
                <ul className="list">
                  <li className="list-item">
                    <span className="item-name">AR导览</span>
                    <span className="item-value">1,250</span>
                  </li>
                  <li className="list-item">
                    <span className="item-name">VR体验</span>
                    <span className="item-value">980</span>
                  </li>
                  <li className="list-item">
                    <span className="item-name">3D文物</span>
                    <span className="item-value">1,100</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 数字文创产品 */}
            <div className="panel">
              <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                数字文创产品
                <button 
                  style={{ 
                    padding: '0.3rem 0.8rem', 
                    backgroundColor: '#38b2ac', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer',
                    fontSize: '0.8rem'
                  }}
                  onClick={() => openModal('数字文创详情', '数字文创产品系统整合了文化元素与现代科技，开发了数字藏品、文创周边等产品，通过线上线下渠道销售。')}
                >
                  查看详情
                </button>
              </h3>
              <div className="panel-content">
                <div className="chart-container" style={{ position: 'relative' }} ref={culturalProductsChartRef}></div>
                <ul className="list">
                  <li className="list-item">
                    <span className="item-name">数字藏品</span>
                    <span className="item-value">¥125,000</span>
                  </li>
                  <li className="list-item">
                    <span className="item-name">文创周边</span>
                    <span className="item-value">¥85,000</span>
                  </li>
                  <li className="list-item">
                    <span className="item-name">线上课程</span>
                    <span className="item-value">¥45,000</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 中间地图 */}
          <div className="map-container">
            <h3>文化设施分布</h3>
            <div className="map">
              {mapPointsCulture.map(point => (
                <div 
                  key={point.id}
                  className="map-point"
                  style={{ left: point.x, top: point.y }}
                  onClick={() => openModal(point.name, point.info)}
                />
              ))}
            </div>
          </div>

          {/* 右侧面板 */}
          <div className="right-panels">
            {/* IP传播影响力 */}
            <div className="panel">
              <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                IP传播影响力
                <button 
                  style={{ 
                    padding: '0.3rem 0.8rem', 
                    backgroundColor: '#38b2ac', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer',
                    fontSize: '0.8rem'
                  }}
                  onClick={() => openModal('IP传播详情', 'IP传播影响力系统分析文化IP在社交媒体、新闻媒体等渠道的传播情况，评估其影响力和受众反馈。')}
                >
                  查看详情
                </button>
              </h3>
              <div className="panel-content">
                <div className="chart-container" style={{ position: 'relative' }} ref={ipInfluenceChartRef}></div>
                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-value">12M</div>
                    <div className="stat-label">社交媒体曝光</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-value">850K</div>
                    <div className="stat-label">互动量</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-value">92%</div>
                    <div className="stat-label">正面评价</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 客流热力图 */}
            <div className="panel">
              <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                客流热力图
                <button 
                  style={{ 
                    padding: '0.3rem 0.8rem', 
                    backgroundColor: '#38b2ac', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer',
                    fontSize: '0.8rem'
                  }}
                  onClick={() => openModal('客流热力图详情', '客流热力图系统通过大数据分析，展示文化场所的客流分布和密度，为场所管理和游客分流提供参考。')}
                >
                  查看详情
                </button>
              </h3>
              <div className="panel-content">
                <div className="chart-container" style={{ position: 'relative' }}>
                  <div style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                    <div style={{ position: 'absolute', top: '20%', left: '20%', width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'rgba(255, 0, 0, 0.7)', filter: 'blur(20px)' }}></div>
                    <div style={{ position: 'absolute', top: '40%', left: '60%', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(255, 165, 0, 0.6)', filter: 'blur(15px)' }}></div>
                    <div style={{ position: 'absolute', top: '60%', left: '40%', width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 0, 0.5)', filter: 'blur(10px)' }}></div>
                    <div style={{ position: 'absolute', top: '10%', left: '70%', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(0, 255, 0, 0.4)', filter: 'blur(8px)' }}></div>
                    <div style={{ position: 'absolute', bottom: '10%', left: '10%', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(0, 0, 255, 0.3)', filter: 'blur(10px)' }}></div>
                    <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(128, 0, 128, 0.5)', filter: 'blur(12px)' }}></div>
                  </div>
                </div>
                <ul className="list">
                  <li className="list-item">
                    <span className="item-name">博物馆</span>
                    <span className="item-value">高</span>
                  </li>
                  <li className="list-item">
                    <span className="item-name">文化街区</span>
                    <span className="item-value">中</span>
                  </li>
                  <li className="list-item">
                    <span className="item-name">艺术中心</span>
                    <span className="item-value">中</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 游客通勤方式分析 */}
            <div className="panel">
              <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                游客通勤方式分析
                <button 
                  style={{ 
                    padding: '0.3rem 0.8rem', 
                    backgroundColor: '#38b2ac', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer',
                    fontSize: '0.8rem'
                  }}
                  onClick={() => openModal('通勤方式分析详情', '游客通勤方式分析系统通过数据分析，了解游客的交通方式偏好，为交通规划和服务优化提供依据。')}
                >
                  查看详情
                </button>
              </h3>
              <div className="panel-content">
                <div className="chart-container" style={{ position: 'relative' }} ref={commuteChartRef}></div>
                <ul className="list">
                  <li className="list-item">
                    <span className="item-name" style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ width: '12px', height: '12px', borderRadius: '2px', background: 'linear-gradient(to right, #1a73e8, #64b5f6)', marginRight: '8px' }}></span>
                      公共交通
                    </span>
                    <span className="item-value">45%</span>
                  </li>
                  <li className="list-item">
                    <span className="item-name" style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ width: '12px', height: '12px', borderRadius: '2px', background: 'linear-gradient(to right, #4285f4, #8ab4f8)', marginRight: '8px' }}></span>
                      自驾
                    </span>
                    <span className="item-value">30%</span>
                  </li>
                  <li className="list-item">
                    <span className="item-name" style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ width: '12px', height: '12px', borderRadius: '2px', background: 'linear-gradient(to right, #5f9af1, #93c0f9)', marginRight: '8px' }}></span>
                      出租车
                    </span>
                    <span className="item-value">15%</span>
                  </li>
                  <li className="list-item">
                    <span className="item-name" style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ width: '12px', height: '12px', borderRadius: '2px', background: 'linear-gradient(to right, #7baaf7, #a6c8fa)', marginRight: '8px' }}></span>
                      步行/骑行
                    </span>
                    <span className="item-value">10%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 弹窗 */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{modalContent.title}</h2>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>{modalContent.content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;