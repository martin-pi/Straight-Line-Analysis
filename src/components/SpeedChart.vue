<template>
  <div>
    <h3>Speed throughout Journey</h3>
    <apexchart v-if="$store.state.points.length > 1" height="300" type="line" :options="options" :series="series"></apexchart>
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
          y: point.speed
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
        colors: ['#5CC4FF', '#FFBCA3', '#FFF746', '#B486FF', '#65D097'],
        stroke: {
          curve: 'straight'
        },
        xaxis: {
          type: 'datetime',
          title: {
            text: 'Time',
            offsetY: 10
          },
          labels: {
            day: 'dd MMM',
          },
          tooltip: {
            enabled: false
          }
        },
         yaxis: {
          title: {
            text: 'Speed'
          },
          labels: {
            formatter: (v) => { return `${Math.round(v * 10) / 10}mph`}
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