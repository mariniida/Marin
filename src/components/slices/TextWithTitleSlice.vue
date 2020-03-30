<template>
	<div>
		<prismic-rich-text :field="slice.primary.title1"/>
	  <prismic-rich-text :field="slice.primary.paragraph"/>
	</div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'TextWithTitleSlice'
}
</script>

<style>
</style>
