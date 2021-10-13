import styles from './index.less';
import { Column } from '@ant-design/charts';

export default function IndexPage() {
  const date = ['10-05', '10-06', '10-07', '10-08', '10-09', '10-10', '10-11', '10-12', '10-13'];
  const value = [-56180605, -56180605, -56180605, 298926290, 316329506, 316329506, -31779969, 17458624, -111660058];

  const value2 = [
    {
      "date": "2021-10-05",
      "value": 101704694
    },
    {
      "date": "2021-10-06",
      "value": 101704694
    },
    {
      "date": "2021-10-07",
      "value": 101704694
    },
    {
      "date": "2021-10-08",
      "value": 140725246
    },
    {
      "date": "2021-10-09",
      "value": 137399435
    },
    {
      "date": "2021-10-10",
      "value": 137399435
    },
    {
      "date": "2021-10-11",
      "value": -62579580
    },
    {
      "date": "2021-10-12",
      "value": -301805882
    },
    {
      "date": "2021-10-13",
      "value": -86447472
    }
  ]

  const value3 = [
    {
      'date': '2021-10-05',
      'value': 191196219,
    },
    {
      'date': '2021-10-06',
      'value': 191196219,
    },
    {
      'date': '2021-10-07',
      'value': 191196219,
    },
    {
      'date': '2021-10-08',
      'value': 10819627,
    },
    {
      'date': '2021-10-09',
      'value': 18706906,
    },
    {
      'date': '2021-10-10',
      'value': 18706906,
    },
    {
      'date': '2021-10-11',
      'value': 261646073,
    },
    {
      'date': '2021-10-12',
      'value': 325839303,
    },
    {
      'date': '2021-10-13',
      'value': -102835066,
    },
  ];

  const dataMap = new Map<string, number>();
  const data = [];
  for (let i = 0; i < 9; i++) {
    const k = date[i];
    const v = value[i] / 100000000;
    data.push({
      date: k,
      value: v,
    });
    dataMap.set(k, v);
  }
  const config = {
    data,
    xField: 'date',
    yField: 'value',
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    height: 100,
    maxColumnWidth: 10,
    color: ({ date }: any) => {
      const v = dataMap.get(date);
      if (v && v >= 0) {
        return '#da5346';
      }
      return '#119c90';
    },

  };

  return (
    <div style={{ width: '200px', height: '100px', margin: '50px' }}>
      <Column {...config} />
    </div>
  );
}
