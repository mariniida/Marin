<template>
  <div class="subsection">
		<div v-if="$prismic.richTextAsPlain(slice.primary.bannertitle) != ''">
	 		<prismic-rich-text id="prismic" :field="slice.primary.bannertitle"/>
		</div>
				<li class="flexContainer tileContainer"
				v-for="item in slice.items" :key="item.id">
					<div class="flexItem halfWidth bannerImg">
						<el-image :src="item.bannerimg.url" fit="contain"></el-image>
					</div>
					<div class="flexItem halfWidth textLeft bannerTxt" id="prismic">
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

<style scoped>

el-image {
	width: 500px;
	height: 400px;
}




</style>
