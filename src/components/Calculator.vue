<template lang="pug">

mixin input(binding, label)
  .field
    label=label
    input(type='number', v-model.number=binding, placeholder=label)

.ui.container
  h1.ui.huge.center.aligned.header Insulin Calculator
  
  .ui.two.column.grid.stackable
    .column
      .ui.segment.raised.padded
        .ui.form
          +input('currentBloodSugar', 'Current Blood Sugar')
          +input('carbIntake', 'Carb Intake')

          .ui.toggle.checkbox
            input(type='checkbox', v-model='showAdditionalInputs')
            label Additional Inputs
          
          div(v-show='showAdditionalInputs')
            +input('targetBloodSugar', 'Target Blood Sugar')
            +input('correction', 'Correction')
            +input('carbRatio', 'Carb Ratio')
            +input('insulinUnitSize', 'Insulin Unit Size')

    .column
      .ui.segment.raised.center.aligned
        .ui.large.statistic
          .value {{ insulinUnitsValue }}
          .label Units of Insulin

</template>

<script>
import numeral from 'numeral'

function isNumeric(val) {
  return !Number.isNaN(val) && Number.isFinite(val)
}

export default {
  data: () => ({
    showAdditionalInputs: false,
    currentBloodSugar: '',
    targetBloodSugar: '',
    correction: '',
    carbIntake: '',
    carbRatio: '',
    insulinUnitSize: ''
  }),

  computed: {
    insulinUnits() {
      return ((this.currentBloodSugar - this.targetBloodSugar) / this.correction + (this.carbIntake / this.carbRatio)) / (this.insulinUnitSize / 100)
    },
    insulinUnitsValue() {
      return this.validInsulinUnits ? numeral(this.insulinUnits).format('0.0') : '¯\\_(ツ)_/¯'
    },
    validInsulinUnits() {
      return isNumeric(this.currentBloodSugar) && isNumeric(this.carbIntake) && isNumeric(this.targetBloodSugar) && isNumeric(this.correction) && isNumeric(this.carbRatio) && isNumeric(this.insulinUnitSize) && isNumeric(this.insulinUnits) && this.insulinUnits > 0
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
    this.insulinUnitSize = Number.parseInt(localStorage.insulinUnitSize)

    this.showAdditionalInputs = !(isNumeric(this.targetBloodSugar) && isNumeric(this.correction) && isNumeric(this.carbRatio) && isNumeric(this.insulinUnitSize))
    }
}
</script>

<style>
h1.ui.huge.center.aligned.header {
  margin-top: 0.5em;
  font-size: 3em;
}

.ui.toggle.checkbox {
  margin: 10px 0 20px 0;
}
</style>
