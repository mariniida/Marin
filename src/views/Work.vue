<template>
  <div v-loading.fullscreen="loading" class="page">
			<h1>{{ $prismic.richTextAsPlain(work.title) }}</h1>
			<p>{{work.tag}}: {{$prismic.richTextAsPlain(work.tool)}}</p>
			<div id="prismic" class="subsection">
		    <div class="flexContainer tileContainer">
					<el-image class="flexItem WorkImg" fit="contain" :src="work.landingImg">
						<div slot="placeholder" class="slot">
							<p class="slottext">Loading...</p>
						</div>
					</el-image>
					<div class="flexItem section description">
						<p>{{ $prismic.richTextAsPlain(work.summary) }}</p>
					</div>
				</div>
			</div>
			<el-collapse class="responsiveWidth">
			  <el-collapse-item title="詳細を見る" name="1" >
			   <slices-block :slices="work.slices"/>
	  		</el-collapse-item>
			</el-collapse>
</div>
</template>

<script>
import SlicesBlock from '../components/SlicesBlock.vue'

export default {
  name: 'Work',
  components:{
    SlicesBlock,
  },
  data () {
    return {
      documentId: '',
      work: {
        uid: null,
        title: null,
        tool: null,
        landingImg: null,
        tag: null,
        summary: null,
        slices: [],
      },
			loading: true,
    }
  },
  methods: {
    getContent (uid) {
      this.$prismic.client.getByUID('work', uid)
      .then((document) => {
        if (document) {
          this.documentId = document.id
          this.work.title = document.data.title
          this.work.tool = document.data.tool
          this.work.landingImg = document.data.landingimg.url
          this.work.tag = document.data.tag
          this.work.summary = document.data.description

					//Set slices as variable
          this.work.slices = document.data.body
					this.loading = false;
        } else {
          this.$router.push({ name: 'not-found' })
        }
      })
    }
  },
  created () {
    this.getContent(this.$route.params.uid);
  },
  beforeRouteUpdate (to, from, next) {
    this.getContent(to.params.uid);
    next();
  }
};
</script>

<style>

.description {
  width: 450px;
}

.description ol li {
	list-style: circle;
	line-height: 1.7;
	font-size: 1.5rem;
	font-weight: 300;
}

.WorkImg {
	width: 45rem;
	padding: 1rem;
}

</style>
