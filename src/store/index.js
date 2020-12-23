import Vue from 'vue'
import Vuex from 'vuex'

import * as geolib from 'geolib'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    start: {
      latitude: 35.773271,
      longitude: -78.649898
    },
    end: {
      latitude: 35.772535629507075, 
      longitude: -78.62569546694641
    },

    gpx: undefined, // GPX data as a js object.
    points: [
      { latitude: 35.773320843919535, longitude: -78.64989296770497, timestamp: new Date(1608515476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.773280584709084, longitude: -78.64964620447194, timestamp: new Date(1608525476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.77328820131803, longitude: -78.6496099946497, timestamp: new Date(1608535476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.77328276088314, longitude: -78.64953355169163, timestamp: new Date(1608545476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.77328711323109, longitude: -78.64941553449324, timestamp: new Date(1608555476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.77326861575069, longitude: -78.64917547678284, timestamp: new Date(1608565476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.77326099913988, longitude: -78.64894883011773, timestamp: new Date(1608575476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.77324250165404, longitude: -78.64846737360297, timestamp: new Date(1608585476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.77324141356649, longitude: -78.64819512938391, timestamp: new Date(1608595476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.77323379695306, longitude: -78.64799932812292, timestamp: new Date(1608605476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.7732287661511, longitude: -78.64789125231347, timestamp: new Date(1608615476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.77322568857415, longitude: -78.64753089675337, timestamp: new Date(1608625476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.773201067954055, longitude: -78.64708709043197, timestamp: new Date(1608635476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.773179524905224, longitude: -78.64651052153577, timestamp: new Date(1608645476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.773154904271045, longitude: -78.64596050517608, timestamp: new Date(1608655476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.77311181814255, longitude: -78.64487943849576, timestamp: new Date(1608665476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.77310258539874, longitude: -78.64372630071547, timestamp: new Date(1608675476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.773019490647215, longitude: -78.64236453604391, timestamp: new Date(1608685476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.77298255961847, longitude: -78.64132140152782, timestamp: new Date(1608695476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.77293639580934, longitude: -78.63984963358459, timestamp: new Date(1608705476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.7729011893568, longitude: -78.6387443321803, timestamp: new Date(1608715476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.772827327171825, longitude: -78.63703738480943, timestamp: new Date(1608725476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.772821171986685, longitude: -78.63651392094317, timestamp: new Date(1608735476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.772762816302965, longitude: -78.63535062294297, timestamp: new Date(1608745476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.77275666111284, longitude: -78.63435680024034, timestamp: new Date(1608755476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.77272588515501, longitude: -78.63325676747789, timestamp: new Date(1608765476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.77271049717162, longitude: -78.63254743600694, timestamp: new Date(1608775476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.77273511794022, longitude: -78.63130705428217, timestamp: new Date(1608785476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.77270741956954, longitude: -78.62967597123851, timestamp: new Date(1608795476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.77265202280266, longitude: -78.62812833896231, timestamp: new Date(1608805476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.772579793078854, longitude: -78.6264746756036, timestamp: new Date(1608815476), distance: 0, distanceTravelled: 0, speed: 0 },
      { latitude: 35.77256875860974, longitude: -78.62568158893475, timestamp: new Date(1608825476), distance: 0, distanceTravelled: 0, speed: 0 },
    ],

    lineLength: 0,
    lineBearing: 0,
    routeLength: 0,
    averageDistance: 0,
    highestDistance: 0,
    standardDeviation: 0,

    hasStats: false
  },
  mutations: {
    updateStart(state, payload) {
      state.start.latitude = Number(payload.latitude);
      state.start.longitude = Number(payload.longitude);
    },

    updateEnd(state, payload) {
      state.end.latitude = Number(payload.latitude);
      state.end.longitude = Number(payload.longitude);
    },

    updateRoute(state, payload) {
      state.gpx = payload;

      function readPoint(point) {
        return {
          latitude: point.$.lat,
          longitude: point.$.lon,
          timestamp: new Date(point.time[0])
        }
      }

      let points = [];
      payload.gpx.trk.forEach((track) => {
        track.trkseg.forEach((segment) => {
          segment.trkpt.forEach((point) => {
            let result = readPoint(point);
            points.push(result);
          });
        });
      });
      state.points = points;
    },

    calculateLineStats(state) {
      state.lineLength = geolib.getPreciseDistance(state.start, state.end, 3);
      state.lineBearing = geolib.getRhumbLineBearing(state.start, state.end);
      state.routeLength = geolib.getPathLength(state.points);
      
      var totalDistance = 0;
      var highestDistance = 0;
      for (let i = 0; i < state.points.length; i++) {
        // Calculate accuracy statistics.
        let distance = geolib.getDistanceFromLine(state.points[i], state.start, state.end);
        if (isNaN(distance)) distance = 0;
        totalDistance += distance;
        if (distance > highestDistance) highestDistance = distance;
        state.points[i].distance = distance;

        // Calculate speed statistics.
        if (i > 0) {
          state.points[i].distanceTravelled = geolib.getPreciseDistance(state.points[i], state.points[i-1], 3);
          let timeDifference = (state.points[i].timestamp.getTime() - state.points[i - 1].timestamp.getTime()) / 1000;
          state.points[i].speed = state.points[i].distanceTravelled / timeDifference * 2.23694; // mph = m/s * 2.23694
        } else {
          state.points[i].distanceTravelled = 0;
          state.points[i].speed = 0;
        }
      }
      state.averageDistance = Math.round((totalDistance / state.points.length) * 1000) / 1000;
      state.highestDistance = Math.round(highestDistance * 1000) / 1000
    
      state.hasStats = true;
    }
  },
  actions: {
    updateLine(context, payload) {
      context.commit('updateStart', payload.start);
      context.commit('updateEnd', payload.end);
      context.commit('calculateLineStats');
    },

    updateRoute(context, payload) {
      context.commit('updateRoute', payload);
      context.commit('calculateLineStats');
    }
  },
  modules: {
  },

  getters: {
    pointsAsArrays: state => {
      let arr = [];
      state.points.forEach((point) => {
        arr.push([ point.latitude, point.longitude ]);
      });
      return arr;
    }
  }
})
