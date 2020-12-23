<template>
  <sui-form @submit.prevent>
    <h3>Route</h3>
    <sui-form-field>
      <label>File (in .gpx format)</label>
      <input type="file" @change="updateRoute"/>
    </sui-form-field>
  </sui-form>
</template>

<script>
import xml2js from 'xml2js'

export default {
  methods: {
    updateRoute(event) {
      var file = event.target.files[0];
      var reader = new FileReader();
      reader.readAsText(file);
      reader.onloadend = () => {
        xml2js.parseString(reader.result, (err, result) => {
          this.$store.dispatch('updateRoute', result);
          this.$emit('change');
        });
      };
    }
  }
}
</script>

<style>

</style>