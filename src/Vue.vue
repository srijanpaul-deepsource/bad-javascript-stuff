<template>
  <div>
    Hello, world!    
  </div>
</template>

<script lang="ts">
interface Emits {
  (e: 'select', item: any): void
  (e: 'select'): void
}

export default {}
</script>

