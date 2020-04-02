<template>
  <div>
		<div v-if="$prismic.richTextAsPlain(slice.primary.bannertitle) != ''">
	 		<prismic-rich-text :field="slice.primary.bannertitle"/>
		</div>
				<li class="flexContainer tileContainer banner"
				v-for="item in slice.items" :key="item.id">
					<div class="flexItem WorkImg">
						 <prismic-image :field="item.bannerimg"/>
					</div>
					<div class="flexItem bannertext">
						<prismic-rich-text :field="item.bannertext"/>
          </div>
				</li>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'bannerSlice',
}
</script>

<style>

.prismicContent{
	overflow: hidden;
}

.bannertext {
	width: 350px;
}

</style>
