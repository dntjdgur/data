import * as React from 'react';
import { Fragment, useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Text, ImageBackground, Pressable } from 'react-native';
import { useHover } from 'react-native-web-hooks';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import 'chartjs-adapter-moment';

// ChartJS Annotation Plugin //
import annotationPlugin from 'chartjs-plugin-annotation'

// ChartJS Zoom Plugin //
import zoomPlugin from 'chartjs-plugin-zoom';

// CSV Import to Json Library //
import Papa from 'papaparse';

// Date Formatter //
import dayjs from 'dayjs';

// Visualization Library //
import {
  Chart,
  registerables,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  CategoryScale
} from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(...registerables);
Chart.register(annotationPlugin);
Chart.register(zoomPlugin);
Chart.register(
  {
    id: 'uniqueid5', //typescript crashes without id
    afterDraw: function (chart, easing) {
      if (chart.tooltip._active && chart.tooltip._active.length) {
        const activePoint = chart.tooltip._active[0];
        const ctx = chart.ctx;
        const x = activePoint.element.x;
        const topY = chart.scales.y.top;
        const bottomY = chart.scales.y.bottom;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, topY);
        ctx.lineTo(x, bottomY);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#e23fa9';
        ctx.stroke();
        ctx.restore();
      }
    }
  }
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
  },
});

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },]

export default function CarbonContent() {
  const currDate = new Date();
  const yyyy = currDate.getFullYear();
  const mm = currDate.getMonth();
  const dd = currDate.getDate();
  const today = yyyy + '-' + mm + '-' + dd;
  const [earningsCSV, setEarningsCSV] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    Papa.parse('../Data/filtered_earnings.csv', {
      header: true,
      download: true,
      dynamicTyping: true,
      complete: function(results) {
        // const data = results.data;
        const data = results.data.map((item) => {
          return item;
        });
        setEarningsCSV(data);
      }
    });
  }, []);

  const dateFormatter = (date) => {
    return dayjs(date).format('MM-DD-YY');
  };

  const labels = earningsCSV.map((item) => {
    return item.fiscalDateEnding;
  });

  const min_date = Math.floor(new Date(labels[0]).getTime() / 1000);

  const randomRGBa = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + 0.5 + ')';
    return rgba;
  };

  const randomRGB = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    return rgb;
  };

  const earningDataset = earningsCSV.reduce((acc, curr, idx) => {    
    let matching = acc.find(obj => obj.label === curr.symbol);
    if (!matching) {
      acc.push({
        label: curr.symbol,
        data: [],
        // borderColor: randomRGB(),
        // backgroundColor: randomRGBa(),
        spanGaps: true
      });
    };
    return acc;
  }, []).filter((item) => item.label != undefined);

  const earningData = earningDataset.forEach((el) => {
    const data = earningsCSV.map((item) => {
      if (item.symbol === el.label) {
        el.data.push(item.revenue);
      } else {
        el.data.push(null);
      };
    });
    if (el.label === 'AAPL') {
      el.borderColor = 'rgb(192, 192, 192)';
    } else if (el.label === 'MSFT') {
      el.borderColor = 'rgb(0, 51, 102)';
    } else if (el.label === 'NVDA') {
      el.borderColor = 'rgb(102, 204, 0)';
    } else if (el.label === 'ORCL') {
      el.borderColor = 'rgb(255, 102, 178)';
    } else if (el.label === 'TSLA') {
      el.borderColor = 'rgb(204, 0, 0)';
    } else {
      el.borderColor = 'rgb(51, 153, 255)';
    };
    el.backgroundColor = 'rgba(255, 255, 255, 0.5)';
  });

  const earningSet = {
    labels,
    datasets: earningDataset,
  };

  const getCurrentDimension = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const DataFormatter = (number) => {
    if(number > 1000000000){
      return (number/1000000000).toString() + 'B';
    }else if(number > 1000000){
      return (number/1000000).toString() + 'M';
    }else if(number > 1000){
      return (number/1000).toString() + 'K';
    }else{
      return number.toString();
    }
  }

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener('resize', updateDimension);
    return (() => {
      window.removeEventListener('resize', updateDimension);
    });
  }, [screenSize]);

  const lineConfig = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Annual Earnings Report',
      },
      annotation: {
        clip: false,
        annotations: {
          line1: {
            type: 'line',
            mode: 'vertical',
            scaleID: 'x',
            value: '1997-12-11',
            borderColor: 'red',
            borderWidth: 1,
            label: {
              display: true,
              content: '[Dec. 11, 1997] Kyoto Protocol',
              position: 'start',
      
            },
          },
          line2: {
            type: 'line',
            mode: 'vertical',
            scaleID: 'x',
            value: '2016-11-04',
            borderColor: 'orange',
            borderWidth: 1,
            label: {
              display: true,
              content: '[Nov. 4, 2016] The Paris Agreement',
              position: '10%',
      
            },
          },
          line3: {
            type: 'line',
            mode: 'vertical',
            scaleID: 'x',
            value: '2021-12-08',
            borderColor: 'blue',
            borderWidth: 1,
            label: {
              display: true,
              content: '[Dec. 8, 2021] Federal Sustainability Plan',
              position: '16%',
      
            },
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function(val, idx) {
            return idx % 2 === 0 ? DataFormatter(val) : '';
          },
        },
        title: {
          display: true,
          text: 'Revenue',
        }
      },
      x: {
        type: 'time',
        min: labels[0],
        title: {
          display: true,
          text: 'Fiscal Ending Date',
        },
        grid: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  const handleResetZoom = () => {
    if (chartRef && chartRef.current) {
      chartRef.current.resetZoom();
    };
  };

  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xs={12} style={{ alignItems: 'center', textAlign: 'center' }}>
          <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold'}}>
            The Influence of Carbon-Neutrality Policy towards Earnings and Global Market Share
          </Text>
          <br/><br/>
          <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold'}}>
            Last Modified on: {today}
          </Text>
        </Grid>
      </Grid>
      <br />
      {/* <Line options={lineConfig} data={earningSet}/> */}
      <Grid container spacing={1}>
        <Grid item xs={12} style={{ alignItems: 'center', textAlign: 'center' }}>
          <h3>Introduction</h3>
        </Grid>
        <Grid item xs={12} style={{ alignItems: 'left', textAlign: 'left' }}>
          <Text>
            {'\tEnergy is beyond our necessity that contributes to our living today. Let’s assume that there is no energy; commonly what we call an electricity. If there is no electricity in our society, everything we’ve taken for granted is gone: lights, computers, smartphones, means of transportation, and so on. And such can cause unpredictable chaos, war, starvation, and eventually humanity can degrade back to the stone age. Let’s look around and see how energy is so valuable to us. The simplest way of knowing it is by looking at what you have on your hands, or staring at right now. From the simplest item such as a light bulb to a smartphone that you are holding right now, everything is an essential gadget for us to continue moving forward. Thus, humanity can persist scientific innovations and continue our legacy to the next generations because we have a usable energy.'}
          </Text>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ alignItems: 'left', textAlign: 'left' }}>
          <Text>
            {'\tFrom an industrialization to a modernization and eventually today, our society consistently extracts energy from various materials on planet earth. And with this extracted energy, we have made our lives more flourishing and convenient. Various energy resources produce each different productivity and efficiency, and human society has been progressing technological development in maximizing the energy output through multiple failures and success. The chart below is representing energy consumption data since the 1800s. The chart indicates the first energy output since the 1800s, and it drastically increases from the 1950s. What we need to pay attention for is the transitions of energy resources over the course of time. Initially, energy production was highly relied upon coals, but fossil fuels gradually increased its dominance afterwards. Both are carbon-based energy resources, of which coal originally comes from plants underneath layers of dirt and rock being heated and pressured over millions of years. Fossil fuels are different, and there are mainly two hypothesis that theorize the formation: Inorganic and Organic Hypothesis. Common characteristic about these two resources is that they are both nonrenewable energy resources. For more details about fossil fuel, please click the link below.\n'}
            <br />
            {'\tTake a further look into the chart. Starting from the 1970s, people gradually sought for other energy resources. There is no indication or records of what motivated policymakers to start policies on seeking other sources of energy, but personal assumption lies in 1973 Oil Crisis. In other words, such movement was motivated by political and economic means, rather than environmental reasons. During the 1970s, the economy was under the recession in the United States, and stagflation was at the peak. What made worse to the economic devastation was when the members of the Organization of Arab Petroleum Exporting Countries enforced an oil embargo as a retribution to the support of Israel. And the United States was among the biggest victims of this action, with a skyrocketing oil price. This is where the assumption comes in, that the United States gradually considered for an alternative option to generate energy aside from fossil fuel. The chart also indicates that the nuclear, hydropower, wind, solar, and natural gas started to increase their dominance in the energy source consumption ratio from the 1970s. There is no doubt that fossil fuels are still the most dominant energy resource; nevertheless, other energy resources are as dominant as the fossil fuels nowadays.'}
          </Text>
        </Grid>
        <Grid item xs={12} style={{ alignItems: 'left', textAlign: 'left' }}>
          <iframe src="https://ourworldindata.org/grapher/global-energy-substitution" loading="lazy" style={{ width: '100%', height: '600px', border: '0px' }} />
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ alignItems: 'left', textAlign: 'left' }}>
          <Text>
            {'\tIn the process of producing energy, any source materials will leave by-products. A common by-product is carbon dioxide, produced by combusting coals or oil. Human society has consistently increased the CO2 level in the process of generating energy, as shown from the chart on the right. Since the increase in the energy production during the 1950s, the CO2 level drastically increased and has continued to rise. What’s more interesting is that both energy consumption chart and the CO2 emission chart show almost identical traits over the course of time. It logically makes sense that the rise in the CO2 emission was highly influenced by the increase in the energy consumption. As a result of increased CO2 level, an average temperature around the globe risen by 2 degrees Celsius, which leads to a drastic climate change, frequent spontaneous combustion, desertification, more dry lands across continents, glacier melt down in the north and south pole, and so on.'}
          </Text>
        </Grid>
        <Grid item xs={12} style={{ alignItems: 'left', textAlign: 'left' }}>
        <iframe src="https://ourworldindata.org/grapher/annual-co2-emissions-per-country?facet=none&country=~OWID_WRL" loading="lazy" style={{ width: '100%', height: '600px', border: '0px' }} />
        </Grid>
      </Grid>
      <br /><br /><br /><br />
      <Grid container spacing={1}>
        <Grid item xs={12} style={{ alignItems: 'left', textAlign: 'left' }}>
          <Text>
            {'\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra sem nec purus venenatis, in ultricies nunc ullamcorper. Duis aliquam facilisis erat eget auctor. Nam ac lorem arcu. Maecenas pretium scelerisque justo, quis condimentum arcu vestibulum non. Nullam tincidunt aliquet ligula eget cursus. Sed ut mauris pulvinar, condimentum sem in, ullamcorper quam. Integer viverra, sapien quis rhoncus volutpat, odio tortor sodales mauris, a commodo lectus metus vitae orci. Cras eu nisi nisl. Aliquam nunc arcu, sollicitudin vitae tristique vitae, rutrum in risus. Mauris magna tellus, scelerisque sit amet commodo vitae, rhoncus at arcu. In a pretium lorem, eget molestie erat. Proin diam nunc, ornare sed sollicitudin a, condimentum eu risus.'}
          </Text>
        </Grid>
      </Grid>
      <br /><br /><br /><br />
      <Grid container
        alignItems="center"
        direction="column"
        justifyContent="center"
        >
        <Line 
          ref={chartRef}
          options={{
            ...lineConfig,
              interaction: {
              mode: 'index',
              intersect: false,
            }
          }} 
          data={earningSet}
          width={screenSize.width}
          height={screenSize.height}
          />
      </Grid>
    </Fragment>
  );
};