<template lang="pug">
mixin textbox(binding, label)
  .field
    label=label
    input(type='text', v-model.number=binding, placeholder=label)

div
  h1.ui.center.aligned.header Save My Ass Calculator
  
  .ui.grid.divided
    .ten.wide.column
      h1 inputs
      .ui.form
        +textbox('currentBloodSugar', 'Current Blood Sugar')
        +textbox('targetBloodSugar', 'Target Blood Sugar')
        +textbox('correction', 'Correction')
        +textbox('carbIntake', 'Carb Intake')
        +textbox('carbRatio', 'Carb Ratio')
        +textbox('insulinUnitSize', 'Insulin Unit Size')

    .six.wide.column
      h1 result
      h3 {{ insulinUnits }}

</template>

<script>
export default {
  data: () => ({
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
    }
  }
}
</script>