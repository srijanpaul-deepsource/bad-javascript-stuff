<template>
  <div>
    Hello, world!    
  </div>
</template>

<script lang="ts">
interface Emits2 {
  (e: 'select', item: any): void
  (e: 'select'): void
}

export default {}

console.log("hello")
</script>

