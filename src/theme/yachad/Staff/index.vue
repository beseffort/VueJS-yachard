<template>
  <div class="staff container">
    <div class="section">
      <StaffSingle></StaffSingle>
    </div>
  </div>
</template>

<script>
import StaffSingle from './staff'

export default {
  name: 'StaffIndex',
  components: {
    StaffSingle
  }
}
</script>

<style scoped>
.staff {
  padding:100px 0;
}
</style>
