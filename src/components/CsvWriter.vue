<template>
  <div class="centered">
    <sui-button fluid icon="download" label-position="left" content="Download Your Journey Data" @click="exportCsv()"></sui-button>
  </div>
</template>

<script>
import FileSaver from 'file-saver'

export default {
  methods: {
    exportCsv() {
      let csv = "latitude, longitude, timestamp, distance, travelled, speed\n";
      for (let i = 0; i < this.$store.state.points.length; i++) {
        let point = this.$store.state.points[i];
        let row = "";
        row += `${point.latitude},`;
        row += `${point.longitude},`;
        row += `${point.timestamp.toISOString()},`;
        row += `${point.distance},`;
        row += `${point.distanceTravelled},`;
        row += `${point.speed},`;

        csv += `${row}\n`;
      }
      
      let blob = new Blob([csv], {type: "data:text/csv;charset=utf-8"});
      FileSaver.saveAs(blob, 'journey.csv');
    },
  }
}
</script>

<style>
  .centered {
    min-width: 230px;
    width: 30%;
    margin: 0 auto;
  }
</style>