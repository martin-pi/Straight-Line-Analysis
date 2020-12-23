<template>
  <div>
    <l-map class="custom" ref="myMap" @ready="mapReady()" :center="center" :zoom="zoom" :options="options">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" :options="tileLayerOptions"></l-tile-layer>
      <l-polyline :lat-lngs="lineCoords" :l-style="lineStyle" dashArray="2 5"></l-polyline>
      <l-polyline :lat-lngs="routeCoords" :l-style="routeStyle"></l-polyline>
    </l-map>
  </div>
</template>

<script>
import Leaflet from 'leaflet';

export default {
  data() {
    return {
      zoom: 13,
      center: [51.505, -0.09],
      options: {
      },
      tileLayerOptions: {
        noWrap: true,
        attribution:"&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors",
        maxZoom: 23,
        maxNativeZoom: 19
      },
      lineCoords: [
        [this.$store.state.start.latitude, this.$store.state.start.longitude],
        [this.$store.state.end.latitude, this.$store.state.end.longitude]
      ],
      lineStyle: {
        color: '#4F46E5',
        weight: 3,
      },
      routeCoords: this.$store.getters.pointsAsArrays,
      routeStyle: {
        color: '#1F2937',
        weight: 3,
      }
    }
  },

  methods: {
    mapReady() {
    },

    refresh() {
      this.lineCoords = [
        [
          this.$store.state.start.latitude, 
          this.$store.state.start.longitude
        ],
        [
          this.$store.state.end.latitude,
          this.$store.state.end.longitude
        ]
      ];
      this.routeCoords = this.$store.getters.pointsAsArrays;

      this.$refs.myMap.mapObject.invalidateSize();

      // Zoom to contain the new Line.
      var bounds = new Leaflet.latLngBounds(this.lineCoords);
      this.$refs.myMap.mapObject.fitBounds(bounds.pad(0.25));
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.$store.commit('calculateLineStats');
      this.refresh();
    });
  }
}
</script>

<style>
  .leaflet-container.custom {
    width: 100%;
    height: 50em;
  }
</style>