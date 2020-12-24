# Straight Line Journey Analysis Tool

[Use it now](https://martin-pi.github.io/Straight-Line-Analysis/)!

This is a prototype application to validate the accuracy of a straight line mission, similar to those done by [GeoWizard](https://www.youtube.com/channel/UCW5OrUZ4SeUYkUg1XqcjFYA).

# Project Structure
This is a Vue CLI frontend and nothing else. At this point we do not need a backend, as all calculations can be done entirely frontend, saving everyone some trouble.

Current Technologies:
 - Vue
 - Vuex Store
 - Vue Router
 - [GeoLib](https://www.npmjs.com/package/geolib)
 - [Semantic UI Vue](https://semantic-ui-vue.github.io/#/)
 - [Vue Leaflet](https://vue2-leaflet.netlify.app/)
 - [Vue ApexCharts](https://apexcharts.com/docs/vue-charts/)

# Contributing:
 If you have a suggestion, throw it in an [issue](https://github.com/martin-pi/Straight-Line-Analysis/issues)! 
Any and all help is welcome, just throw in a pull request.
Assuming you have [nodejs](https://nodejs.org/en/) and [git](https://git-scm.com/) installed, Clone the repo and run npm install in a terminal.
```
git clone https://github.com/martin-pi/Straight-Line-Analysis.git
npm install
```

### Running locally for development:
```
npm run serve
```
### Test production build scripts:
```
npm run lint
npm run build
```

# Deployment:
A Github Action will automatically deploy the application every time a commit is pushed/merged to the main branch. No need to build anything manually.
