<template>
  <div>
    <input v-on:keyup.112="showHelpText" />
  </div>
</template>


<script>
Vue.config.keyCodes = {
  f1: 112
}
</script>

