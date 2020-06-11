<template>
  <div class="weather-info">
    <div>
      {{ info.description }}
    </div>
    <span>{{ info.min_temperature }} ~ {{ info.max_temperature }}</span>
  </div>
</template>

<script>
export default {
  name: 'WeatherInfo',
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>
