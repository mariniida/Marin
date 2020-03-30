<template>
  <div>
    	<prismic-rich-text :field="slice.primary.paragraph"/>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'text-slice'
}
</script>
<style>


</style>
