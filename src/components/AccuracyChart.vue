<template>
  <div v-if="$store.state.hasStats">
    <h3>Accuracy throughout Journey</h3>
    <apexchart v-if="series[0].data.length > 1" height="300" type="line" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  methods: {
    refresh() {
      let data = [];
      this.$store.state.points.forEach((point) => {
        data.push({
          x: point.timestamp,
          y: point.distance
        })
      });
      this.series = [{name: 'Distance', data: data}];
    }
  },

  data() {
    return {
      series: [
        {
          name: 'Distance',
          data: []
        }
      ],
      options: {
        chart: {
          toolbar: {
            show: false
          },
          zoom: {
            enabled: true
          },
          type: 'line',
        },
        colors: ['#65D097', '#5CC4FF', '#FFBCA3', '#FFF746', '#B486FF'],
        stroke: {
          curve: 'straight'
        },
        xaxis: {
          type: 'datetime',
          title: {
            text: 'Time',
            offsetY: 10
          },
          tooltip: {
            enabled: false
          }
        },
         yaxis: {
          title: {
            text: 'Distance from line'
          },
          labels: {
            formatter: (v) => { return `${Math.round(v * 10) / 10}m`}
          },
          min: 0,
        }
      }
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.refresh();
    });
  }
}
</script>

<style>

</style>