<template>
  <div>
		<div v-if="$prismic.richTextAsPlain(slice.primary.bannertitle) != ''">
	 		<prismic-rich-text :field="slice.primary.bannertitle"/>
		</div>
				<li class="flexContainer tileContainer"
				v-for="item in slice.items" :key="item.id">
					<div class="flexItem halfWidth bannerImg">
						<el-image class="bannerImg" :src="item.bannerimg.url" fit="contain"></el-image>
					</div>

					<div class="flexItem halfWidth bannerTxt">
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
.halfWidth{
  width: 30em;
}

</style>
