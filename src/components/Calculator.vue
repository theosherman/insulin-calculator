<template lang="pug">

mixin input(binding, label)
  .field
    label.label=label
    .control
      input.input(type='number', v-model.number=binding, placeholder=label)

.container
  .columns
    .column
      .section
        +input('currentBloodSugar', 'Current Blood Sugar')
        +input('carbIntake', 'Carb Intake')
        
        +input('targetBloodSugar', 'Target Blood Sugar')
        +input('correction', 'Correction')
        +input('carbRatio', 'Carb Ratio')

      .section
        nav.level
          .level-item.has-text-centered
            #result
              p.title {{ insulinUnitsValue }}
              p.heading UNITS OF INSULIN

</template>

<script>
import { $, _ } from 'minified'
var addToHomescreen = require('exports-loader?addToHomescreen!add-to-homescreen')
require('add-to-homescreen/dist/style/addtohomescreen.css')

function isNumeric(val) {
  return !Number.isNaN(val) && Number.isFinite(val)
}

export default {
  data: () => ({
    isConfigured: false,
    hasAgreedToTerms: false,
    currentBloodSugar: '',
    targetBloodSugar: '',
    correction: '',
    carbIntake: '',
    carbRatio: ''
  }),

  computed: {
    insulinUnits() {
      return (this.currentBloodSugar - this.targetBloodSugar) / this.correction + (this.carbIntake / this.carbRatio)
    },
    insulinUnitsValue() {
      if (this.validInsulinUnits) {
        $('#result').set('-animated -jello')
        this.$nextTick(() => {
          $('#result').set('+animated +jello')
        })
        
        return _.formatValue('0.0', this.insulinUnits)
      } else {
        return '¯\\_(ツ)_/¯'
      }
    },
    validInsulinUnits() {
      return isNumeric(this.currentBloodSugar) && isNumeric(this.carbIntake) && isNumeric(this.targetBloodSugar) && isNumeric(this.correction) && isNumeric(this.carbRatio) && isNumeric(this.insulinUnits) && this.insulinUnits > 0
    }
  },

  watch: {
    targetBloodSugar: val => localStorage.targetBloodSugar = val,
    correction: val => localStorage.correction = val,
    carbRatio: val => localStorage.carbRatio = val,
    insulinUnitSize: val => localStorage.insulinUnitSize = val,
  },

  created() {
    this.targetBloodSugar = Number.parseInt(localStorage.targetBloodSugar)
    this.correction = Number.parseInt(localStorage.correction)
    this.carbRatio = Number.parseInt(localStorage.carbRatio)

    this.isConfigured = !(isNumeric(this.targetBloodSugar) && isNumeric(this.correction) && isNumeric(this.carbRatio))
  },

  mounted() {
    console.log(addToHomescreen);
    addToHomescreen();
  }
}
</script>

<style>

#result p.title {
  font-size: 3em;
}

#result p.heading {
  font-size: 1em;
}
</style>
