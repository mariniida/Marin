webpackJsonp([1],{"5A3i":function(t,e){},"5iYB":function(t,e){},"9M5N":function(t,e){},Hpeo:function(t,e){},LS1D:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s={name:"NavBar",data:()=>({activeColor:"var(--keyColor)",activeIndex:"work"})},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-menu",{attrs:{mode:"horizontal","default-active":this.activeIndex,router:!0,"active-text-color":this.activeColor}},[e("el-menu-item",{attrs:{index:"work",route:{name:"Works"}}},[this._v("Works")]),this._v(" "),e("el-menu-item",{attrs:{index:"contact",route:{name:"Contact"}}},[this._v("Contact")]),this._v(" "),e("el-menu-item",{attrs:{index:"aboutme",route:{name:"AboutMe"}}},[this._v("About me")])],1)},staticRenderFns:[]};var r={name:"App",data:()=>({}),components:{NavBar:i("VU/8")(s,n,!1,function(t){i("gUsI")},null,null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("NavBar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")(r,l,!1,function(t){i("wrrs")},null,null).exports,c=i("/ocq"),d={name:"AboutMe",data:()=>({profile:{tagLine:"I'm Marin Iida.",bio:"An aspiring UI/UX designer based in Japan (for now).",img:i("Y67o")},profileImg:i("Y67o"),timelineEvents:[{startDate:"2012 Feb",endDate:"2016 Nov",heading:"Somerset College",link:"https://www.somerset.qld.edu.au/"},{startDate:"2017 Feb",endDate:"2019 Dec",heading:"University of Melbourne",subHeading:"Bachelor of Design",description:"Majored in Digital Technologies and minored in Graphic Design and Computing.",link:"https://www.unimelb.edu.au/"}],skills:[{name:"Microsoft Office Suite",level:3},{name:"Adobe Photoshop",level:2},{name:"Adobe Illustrator",level:3},{name:"Adobe InDesign",level:2},{name:"Adobe XD",level:4},{name:"Japanese",level:5},{name:"English",level:4},{name:"HTML",level:3},{name:"CSS",level:3},{name:"JavaScript",level:2}]})},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page width80"},[i("div",{staticClass:"section flexContainer tileContainer"},[i("el-image",{staticClass:"flexItem display-none",staticStyle:{width:"200px",height:"250px"},attrs:{src:t.profile.img,fit:"cover"}},[i("div",{attrs:{slot:"placeholder"},slot:"placeholder"},[i("h4",{staticClass:"slottext"},[t._v("Loading...")])])]),t._v(" "),i("div",{staticClass:"flexItem"},[i("h1",[t._v(t._s(t.profile.tagLine))]),t._v(" "),i("h3",[t._v(t._s(t.profile.bio))])])],1),t._v(" "),i("el-divider"),t._v(" "),i("div",{staticClass:"section"},[i("h1",{staticClass:"timeline"},[t._v("Timeline")]),t._v(" "),t._l(t.timelineEvents,function(e,a){return i("li",{staticClass:"flexContainer"},[i("div",{staticClass:"flexItem left"},[i("h5",{staticClass:"lineButtom"},[t._v(t._s(e.startDate))]),t._v(" "),i("h5",[t._v(t._s(e.endDate))])]),t._v(" "),i("div",{staticClass:"flexItem right"},[i("a",{attrs:{href:e.link,target:"_blank"}},[i("h2",[t._v(t._s(e.heading))])]),t._v(" "),i("div",{staticClass:"event"},[i("h4",[t._v(t._s(e.subHeading))]),t._v(" "),i("p",[t._v(t._s(e.description))])])])])})],2),t._v(" "),i("div",{staticClass:"section margin60"},[i("h1",[t._v("Skills")]),t._v(" "),i("div",{staticClass:"flexContainer tileContainer"},t._l(t.skills,function(e,a){return i("div",{staticClass:"flexItem textRight"},[i("h3",[t._v(t._s(e.name))]),t._v(" "),i("ul",{staticClass:"boxContainer"},[t._l(e.level,function(t){return i("li",{staticClass:"box"},[i("div",{staticClass:"darkSquare"})])}),t._v(" "),t._l(5-e.level,function(t){return i("li",{staticClass:"box"},[i("div",{staticClass:"lightSquare"})])})],2)])}),0)])],1)},staticRenderFns:[]};var m=i("VU/8")(d,u,!1,function(t){i("i5Yt")},"data-v-63a456e2",null).exports,p={name:"Contact",data:()=>({contactDetail:{type:"emailAddress",detail:"mariniida114@gmail.com",icon:"el-icon-message"},links:[{name:"Wantedly",icon:"el-icon-user",url:"https://www.wantedly.com/secret_profiles/1h8Wm5W3Bo-i1Ok2u_aFIV_b2uy1eFz9"},{name:"indeed Resume",icon:"el-icon-download",url:"https://my.indeed.com/p/69cw2g1"}]})},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page width80"},[i("div",{staticClass:"flexContainer noAlign width80"},[i("div",{staticClass:"flexItem half"},[i("div",{staticClass:"section dashed"},[i("h1",[t._v("Contacts")]),t._v(" "),i("h3",[t._v(t._s(t.contactDetail.detail))])]),t._v(" "),i("div",{staticClass:"section"},[i("h1",[t._v("Links")]),t._v(" "),t._l(t.links,function(e,a){return i("li",[i("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:e.url}},[i("el-button",{staticClass:"button"},[i("i",{class:e.icon}),t._v("\n              \t"+t._s(e.name)+"\n              ")])],1)])})],2)]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flexItem half"},[i("h1",[t._v("Form")]),t._v(" "),i("form",{staticClass:"formrun",attrs:{action:"https://form.run/api/v1/r/99geppst41wljcxbwbyen71t",method:"post","data-formrun-saving":"true"}},[i("div",{staticClass:"formItem alignLeft"},[i("label",[t._v("Name")]),t._v(" "),i("input",{staticClass:"text",attrs:{"data-formrun-required":"",type:"text",name:"Name"}})]),t._v(" "),i("div",{staticClass:"formItem alignLeft"},[i("label",[t._v("Email Address")]),t._v(" "),i("input",{staticClass:"text",attrs:{"data-formrun-type":"email","data-formrun-required":"",name:"Email address"}})]),t._v(" "),i("div",{staticClass:"formItem alignLeft"},[i("label",[t._v("Message")]),t._v(" "),i("textarea",{staticClass:"textarea",attrs:{"data-formrun-required":"",name:"Message",minlength:"10"}})]),t._v(" "),i("p",[t._v("Coming soon!")])])])}]};var h=i("VU/8")(p,v,!1,function(t){i("PkDt")},null,null).exports,_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section"},[""!=t.$prismic.richTextAsPlain(t.slice.primary.name_of_the_gallery)?i("div",[i("prismic-rich-text",{attrs:{id:"prismic",field:t.slice.primary.name_of_the_gallery}})],1):t._e(),t._v(" "),i("el-carousel",{staticClass:"responsiveWidth",attrs:{trigger:"click","max-height":"600px","indicator-position":"outside",arrow:"always"}},t._l(t.slice.items,function(e,a){return i("el-carousel-item",{key:a},[t._l(e.image_captions,function(e,a){return i("div",{key:a},[i("h5",{staticClass:"caption"},[t._v(t._s(e.text))])])}),t._v(" "),i("el-image",{attrs:{src:e.gallery_image.url,fit:"contain"}},[i("div",{staticClass:"slot",attrs:{slot:"placeholder"},slot:"placeholder"},[i("p",{staticClass:"slottext"},[t._v("Loading...")])])])],2)}),1)],1)},staticRenderFns:[]};var f=i("VU/8")({props:["slice"],name:"image-gallery"},_,!1,function(t){i("PkRb")},"data-v-5a1e8ef8",null).exports,g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section"},[e("prismic-rich-text",{staticClass:"responsiveWidth",attrs:{id:"prismic",field:this.slice.primary.paragraph}})],1)},staticRenderFns:[]},C=i("VU/8")({props:["slice"],name:"text-slice"},g,!1,null,null,null).exports,k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"link"},[e("prismic-embed",{attrs:{field:this.slice.primary.url}})],1)},staticRenderFns:[]};var x=i("VU/8")({props:["slice"],name:"embedLinkSlice"},k,!1,function(t){i("Hpeo")},null,null).exports,b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"subsection"},[""!=t.$prismic.richTextAsPlain(t.slice.primary.bannertitle)?i("div",[i("prismic-rich-text",{attrs:{id:"prismic",field:t.slice.primary.bannertitle}})],1):t._e(),t._v(" "),t._l(t.slice.items,function(e){return i("li",{key:e.id,staticClass:"flexContainer tileContainer"},[i("div",{staticClass:"flexItem halfWidth"},[i("el-image",{attrs:{src:e.bannerimg.url,fit:"contain"}})],1),t._v(" "),i("div",{staticClass:"flexItem halfWidth textLeft",attrs:{id:"prismic"}},[i("prismic-rich-text",{attrs:{field:e.bannertext}})],1)])})],2)},staticRenderFns:[]};var w=i("VU/8")({props:["slice"],name:"bannerSlice"},b,!1,function(t){i("LS1D")},null,null).exports,$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section"},[""!=t.$prismic.richTextAsPlain(t.slice.primary.captiontitle)?i("div",[i("prismic-rich-text",{attrs:{id:"prismic",field:t.slice.primary.captiontitle}})],1):t._e(),t._v(" "),t._l(t.slice.items,function(e){return i("li",{key:e.id},[i("div",{staticClass:"imgCaption"},[i("prismic-image",{staticClass:"imgCaption",attrs:{field:e.image}})],1),t._v(" "),i("p",{staticClass:"image-label"},[t._v("\n\t\t\t\t\t"+t._s(t.$prismic.richTextAsPlain(e.caption))+"\n\t\t\t\t")])])})],2)},staticRenderFns:[]};var y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section"},[e("prismic-rich-text",{attrs:{id:"prismic",field:this.slice.primary.title1}}),this._v(" "),e("prismic-rich-text",{staticClass:"responsiveWidth textLeft",attrs:{id:"prismic",field:this.slice.primary.paragraph}})],1)},staticRenderFns:[]};var I={props:["slices"],name:"slices-block",components:{ImageGallery:f,ImageCaptionSlice:i("VU/8")({props:["slice"],name:"image-caption-slice"},$,!1,function(t){i("9M5N")},null,null).exports,TextSlice:C,embedLinkSlice:x,bannerSlice:w,TextWithTitleSlice:i("VU/8")({props:["slice"],name:"TextWithTitleSlice"},y,!1,function(t){i("5iYB")},null,null).exports}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.slices,function(e,a){return i("section",{key:"slice-"+a},["image_gallery"===e.slice_type?[i("image-gallery",{attrs:{slice:e}})]:"text"===e.slice_type?[i("text-slice",{attrs:{slice:e}})]:"text_with_title"===e.slice_type?[i("TextWithTitleSlice",{attrs:{slice:e}})]:"image_with_caption"===e.slice_type?[i("image-caption-slice",{attrs:{slice:e}})]:"image_with_paragraph"===e.slice_type?[i("bannerSlice",{attrs:{slice:e}})]:"embed"===e.slice_type?[i("embedLinkSlice",{attrs:{slice:e}})]:t._e()],2)}),0)},staticRenderFns:[]},S={name:"Work",components:{SlicesBlock:i("VU/8")(I,R,!1,null,null,null).exports},data:()=>({documentId:"",work:{uid:"",title:"",tool:"",landingImg:"",tag:"",description:"",slices:[]},loading:!0}),methods:{getContent(t){this.$prismic.client.getByUID("work",t).then(t=>{t?(this.documentId=t.id,this.work.title=t.data.title,this.work.tool=t.data.tool,this.work.landingImg=t.data.landingimg,this.work.tag=t.data.tag,this.work.description=t.data.description,this.work.slices=t.data.body,this.loading=!1):this.$router.push({name:"not-found"})})}},created(){this.getContent(this.$route.params.uid)},beforeRouteUpdate(t,e,i){this.getContent(t.params.uid),i()}},U={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:t.loading,expression:"loading",modifiers:{fullscreen:!0}}],staticClass:"page"},[i("h1",[t._v(t._s(t.$prismic.richTextAsPlain(t.work.title)))]),t._v(" "),i("p",[t._v(t._s(t.work.tag)+": "+t._s(t.$prismic.richTextAsPlain(t.work.tool)))]),t._v(" "),i("div",{staticClass:"subsection"},[i("div",{staticClass:"flexContainer tileContainer"},[i("el-image",{staticClass:"flexItem halfWidth",attrs:{src:t.work.landingImg.url,fit:"contain"}},[i("div",{staticClass:"slot",attrs:{slot:"placeholder"},slot:"placeholder"},[i("p",{staticClass:"slottext"},[t._v("Loading...")])])]),t._v(" "),i("div",{staticClass:"flexItem section description"},[i("prismic-rich-text",{staticClass:"textLeft ",attrs:{field:t.work.description}})],1)],1)]),t._v(" "),i("slices-block",{attrs:{slices:t.work.slices}})],1)},staticRenderFns:[]};var A=i("VU/8")(S,U,!1,function(t){i("5A3i")},null,null).exports,T={name:"Works",data(){return{workTypes:["All","Graphics","UI/UX","Branding"],documentId:"",works:[],loading:!0,linkResolver:this.$prismic.linkResolver}},methods:{getAllWorks(){this.$prismic.client.query(this.$prismic.Predicates.at("document.type","work"),{orderings:"[document.first_publication_date]"}).then(t=>{this.works=t.results,this.loading=!1})}},created(){this.getAllWorks()},beforeRouteUpdate(t,e,i){this.getContent(t.params.uid),i()}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:t.loading,expression:"loading",modifiers:{fullscreen:!0}}],staticClass:"section flexContainer tileContainer"},t._l(t.works,function(e,a){return i("div",{staticClass:"thumbnail flexItem"},[i("router-link",{attrs:{to:t.linkResolver(e)}},[i("div",{staticClass:"thumbnail-overlay"}),t._v(" "),i("img",{staticClass:"thumbnail-image",staticStyle:{width:"300px",height:"300px"},attrs:{src:e.data.thumbnail.url}}),t._v(" "),i("div",{staticClass:"thumbnail-details fadeIn-top"},[i("h4",[t._v(t._s(t.$prismic.richTextAsPlain(e.data.title)))]),t._v(" "),i("p",[t._v(t._s(e.data.tag))])])])],1)}),0)])},staticRenderFns:[]};var F=i("VU/8")(T,D,!1,function(t){i("sq42")},null,null).exports,L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("div",{staticClass:"section"},[e("h1",[this._v("Page not found")]),this._v(" "),e("p",[this._v("Sorry we were unable to find the page you are looking for.")]),this._v(" "),e("p",[e("router-link",{staticStyle:{"text-decoration":"underline"},attrs:{to:"/work"}},[this._v("Back to work")])],1)])])},staticRenderFns:[]},E=i("VU/8")({name:"NotFound",components:{}},L,!1,null,null,null).exports;a.default.use(c.a);var j=new c.a({routes:[{path:"/",redirect:{path:"/work"}},{path:"*",name:"not-found",component:E},{path:"/aboutme",name:"AboutMe",component:m},{path:"/contact",name:"Contact",component:h},{path:"/work",name:"Works",component:F},{path:"/work/:uid",name:"work",component:A}]}),W=i("zL8q"),V=i.n(W),M=i("znjY"),P=i.n(M),B=(i("tvR6"),i("Ffgn")),N=function(t){return"work"===t.type?"/work/"+t.uid:(t.isBroken,"/not-found")},Y=i("FhMH"),q=i.n(Y);const H=q.a.RichText.Elements;a.default.use(V.a,{locale:P.a}),a.default.use(B.a,{endpoint:window.prismic.endpoint,linkResolver:N,htmlSerializer:function(t,e,i,a){if(t===H.hyperlink){let t="";const a=q.a.Link.url(e.data,N);return t="Document"===e.data.link_type?`<router-link to="${a}">${i}</router-link>`:`<a href="${a}" ${e.data.target?`target="'${e.data.target}'" rel="noopener"`:""}>${i}</a>`}if(t===H.image){let t=`<img src="${e.url}" alt="${e.alt||""}" copyright="${e.copyright||""}">`;if(e.linkTo){const i=q.a.Link.url(e.linkTo,N);t="Document"===e.linkTo.link_type?`<router-link to="${i}">${t}</router-link>`:`<a href="${i}" ${e.linkTo.target?`target="${e.linkTo.target}" rel="noopener"`:""}>${t}</a>`}return t=`<p class="${[e.label||"","block-img"].join(" ")}">${t}</p>`}switch(t){case H.heading1:return`<h1>${a.join("")}</h1>`;case H.heading2:return`<h2>${a.join("")}</h2>`;case H.heading3:return`<h3>${a.join("")}</h3>`;case H.heading4:return`<h4>${a.join("")}</h4>`;case H.heading5:return`<h5>${a.join("")}</h5>`;case H.heading6:return`<h6>${a.join("")}</h6>`;case H.paragraph:return`<p>${a.join("")}</p>`;case H.preformatted:return`<pre>${a.join("")}</pre>`;case H.strong:return`<strong>${a.join("")}</strong>`;case H.em:return`<em>${a.join("")}</em>`;case H.listItem:case H.oListItem:return`<li>${a.join("")}</li>`;case H.list:return`<ul>${a.join("")}</ul>`;case H.oList:return`<ol>${a.join("")}</ol>`;case H.embed:return`\n        <div data-oembed="${e.oembed.embed_url}"\n          data-oembed-type="${e.oembed.type}"\n          data-oembed-provider="${e.oembed.provider_name}"\n        >\n          ${e.oembed.html}\n        </div>\n      `;case H.label:return`<span ${e.data.label?` class="${e.data.label}"`:""}>${a.join("")}</span>`;case H.span:return i?i.replace(/\n/g,"<br />"):"";default:return null}},apiOptions:{accessToken:"MC5YbDVLQ3hJQUFDSUFObXlK.FwsU77-9Ae-_vRfvv71xYe-_vVplYu-_vRPvv70z77-9DmLvv70577-9Z3dE77-977-9YD17"}}),a.default.config.productionTip=!1,new a.default({router:j,render:t=>t(o)}).$mount("#app")},PkDt:function(t,e){},PkRb:function(t,e){},Y67o:function(t,e,i){t.exports=i.p+"static/img/IMG_2338.90c6db3.jpg"},gUsI:function(t,e){},i5Yt:function(t,e){},sq42:function(t,e){},tvR6:function(t,e){},wrrs:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1e06984bc29b1da926a3.js.map