<template>
    <svg class="cross" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#566073" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'Cross'
})
</script>

<style lang="scss" scoped>
.cross {
    transform: rotate(45deg);
}
</style>
