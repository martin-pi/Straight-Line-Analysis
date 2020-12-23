<template>
  <sui-container class="page-container">

    <div>
      <LineMap ref="lineMap"></LineMap>
    </div>
    
    <div class="page-section">
      <sui-form @submit.prevent="updateLine()">      
        <sui-grid celled :columns="2">
          <sui-grid-row>
            <sui-grid-column>
              <h3>Starting Location</h3>
              <sui-form-fields fields="two">
                <sui-form-field>
                  <label>Latitude</label>
                  <input v-model="start.latitude" @keypress="validateCoords()" @change="updateLine()" type="text" />
                </sui-form-field>
                <sui-form-field>
                  <label>Longitude</label>
                  <input v-model="start.longitude" @keypress="validateCoords()" @change="updateLine()" type="text" />
                </sui-form-field>
              </sui-form-fields>
            </sui-grid-column>
            <sui-grid-column>
              <h3>Ending Location</h3>
              <sui-form-fields fields="two">
                <sui-form-field>
                  <label>Latitude</label>
                  <input v-model="end.latitude" @keypress="validateCoords()" @change="updateLine()" type="text" />
                </sui-form-field>
                <sui-form-field>
                  <label>Longitude</label>
                  <input v-model="end.longitude" @keypress="validateCoords()" @change="updateLine()" type="text" />
                </sui-form-field>
              </sui-form-fields>
            </sui-grid-column>
          </sui-grid-row>
          <sui-grid-row>
            <sui-grid-column>
              <GpxReader @change="updateCharts"></GpxReader>
            </sui-grid-column>
          </sui-grid-row>
        </sui-grid>
      </sui-form>
    </div>

    <div class="page-section">
      <sui-grid>
        <sui-grid-row :columns="2">
          <sui-grid-column>
            <h3>Line Data</h3>
            <ul>
              <li>Number of points: {{ $store.state.points.length }}</li>
              <li>Furthest distance from line: {{ $store.state.highestDistance }}m</li>
              <li>Mean distance from line: {{ $store.state.averageDistance }}m</li>
              <li>TODO: Predicted water crossings:</li>
              <li>TODO: Predicted road crossings:</li>
              <li>TODO: Predicted forest coverage:</li>
              <li>TODO: Predicted close-calls with civilization:</li>
              <li>TODO: Elevation data:</li>
            </ul>
          </sui-grid-column>
          <sui-grid-column>
            <h3>Journey Data</h3>
            <ul>
              <li>Line length: {{ $store.state.points.length }}</li>
              <li>Furthest distance from line: {{ $store.state.highestDistance }}m</li>
              <li>Mean distance from line: {{ $store.state.averageDistance }}m</li>
              <li>TODO: Time taken:</li>
              <li>TODO: Average speed:</li>
              <li>TODO: Furthest distance between recorded points:</li>
              <li>TODO: standard deviation:</li>
            </ul>
          </sui-grid-column>
        </sui-grid-row>
      </sui-grid>
    </div>

    <div class="page-section">
      <AccuracyChart ref="accuracyChart"></AccuracyChart>
    </div> 
    <div class="page-section">
      <SpeedChart ref="speedChart"></SpeedChart>
    </div>
    

    <div class="page-section results">
      <sui-statistics-group :columns="3">
        <sui-statistic in-group>
          <sui-statistic-value>
            <span v-if="$store.state.highestDistance < 25"><sui-icon name="trophy" color="yellow"></sui-icon> Gold</span>
            <span v-else-if="$store.state.highestDistance < 50"><sui-icon name="trophy" color="grey"></sui-icon> Silver</span>
            <span v-else-if="$store.state.highestDistance < 75"><sui-icon name="trophy" color="brown"></sui-icon> Bronze</span>
            <span v-else>Unqualified</span>
          </sui-statistic-value>
          <sui-statistic-label>
            Classic Score
          </sui-statistic-label>
        </sui-statistic>
        <sui-statistic in-group>
          <sui-statistic-value>
            {{ $store.state.averageDistance }}
          </sui-statistic-value>
          <sui-statistic-label>
            Average Distance From Line (m)
          </sui-statistic-label>
        </sui-statistic>
        <sui-statistic in-group>
          <sui-statistic-value>
            {{ $store.state.routeLength / 1000 }}
          </sui-statistic-value>
          <sui-statistic-label>
            Kilometers Travelled
          </sui-statistic-label>
        </sui-statistic>
      </sui-statistics-group>
    </div>

    <div class="page-section">
      <CsvWriter></CsvWriter>
    </div>
  </sui-container>
</template>

<script>
import LineMap from '@/components/LineMap.vue'
import GpxReader from '@/components/GpxReader.vue'
import AccuracyChart from '@/components/AccuracyChart.vue'
import SpeedChart from '@/components/SpeedChart.vue'
import CsvWriter from '@/components/CsvWriter.vue'

export default {
  name: 'Home',

  data() {
    return {
      start: { latitude: 35.773271, longitude: -78.649898},
      end: { latitude: 35.772535629507075, longitude: -78.62569546694641},
      route: undefined
    }
  },

  methods: {
    validateCoords(event) {
      event = (event) ? event : window.event;
      var charCode = (event.which) ? event.which : event.keyCode;

      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46 && charCode !== 45) {
        event.preventDefault();
      } else {
        return true;
      }
    },

    updateLine() {
      this.$store.dispatch('updateLine', { start: this.start,  end: this.end });
      this.updateCharts();
    },

    updateCharts() {
      this.$refs.lineMap.refresh();
      this.$refs.accuracyChart.refresh();
      this.$refs.speedChart.refresh();
    }
  },

  components: {
    LineMap,
    GpxReader,
    AccuracyChart,
    SpeedChart,
    CsvWriter
  }
}
</script>

<style scoped>
  .page-container {
    margin-top: 4em;
    padding-bottom: 30vh;
  }

  .page-section {
    margin-bottom: 15vh;
  }

  .page-section.results {
    margin-top: 30vh;
  }

  .download-button {
    display: block; 
    width: 50%; 
    margin: 0 auto;
  }
</style>
