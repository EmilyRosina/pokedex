webpackJsonp([1],{0:function(e,t,a){a("j1ja"),e.exports=a("NHnr")},"5EOo":function(e,t){},"H/op":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),o=a("NYxO"),s=a("mtWM"),r=a.n(s),i={GET_POKEDEX:function(e,t){var a=e.commit,n=e.dispatch,o=e.getters;r.a.get(o.api.pokeapi.generationById(t)).then(function(e){var t={id:e.data.id,name:e.data.name,mainRegion:e.data.main_region,versionGroups:e.data.version_groups};return a("set_generation_data",t),a("set_pokemon_data",e.data.pokemon_species),a("set_types_data",e.data.types),o.types}).then(function(e){for(var t in e)n("ADD_TYPE_DATA",e[t].id)}).catch(function(e){console.error(e)})},ADD_POKEMON_DATA:function(e,t){var a=e.commit,n=e.getters;r.a.get(n.api.pokeapi.pokemonById(t.id)).then(function(e){a("add_pokemon_data",{name:t.name,data:e.data})}).catch(function(e){console.error(e)})},ADD_TYPE_DATA:function(e,t){var a=e.commit,n=e.getters;r.a.get(n.api.pokeapi.typeById(t)).then(function(e){var o={class:{id:Number(e.data.move_damage_class.url.split("/")[6]),name:e.data.move_damage_class.name},damage:{},pokemon:{}};for(var s in e.data.damage_relations)if(o.damage[s]=e.data.damage_relations[s].length>0?{}:null,e.data.damage_relations[s].length>0){var r=e.data.damage_relations[s];for(var i in r){var c=Number(r[i].url.split("/")[6]);o.damage[s][c]=r[i].name}}var l=e.data.pokemon.filter(function(e){return Number(e.pokemon.url.split("/")[6])<=151});for(var m in l){var p=Number(e.data.pokemon[m].pokemon.url.split("/")[6]);o.pokemon[p]=n.pokemonById(p)}a("add_types_data",{typeId:t,data:o})}).catch(function(e){console.error(e)})},ADD_CARD_DATA:function(e,t){var a=e.commit,n=e.getters;console.log("ADD_CARD_DATA",n.api.tcg.pokemonById(t.id)),r.a.get(n.api.tcg.pokemonById(t.id)).then(function(e){a("add_pokemon_card_data",{name:t.name,data:e.data})}).catch(function(e){console.error(e)})}},c=a("UjVw"),l=a("BO1k"),m=a.n(l),p={set_pokemon_data:function(e,t){var a=!0,o=!1,s=void 0;try{for(var r,i=m()(t);!(a=(r=i.next()).done);a=!0){var c=r.value,l=Number(c.url.split("/")[6]),p=l.toString().padStart(3,"0"),d={id:l,name:c.name,images:{main:"src/assets/img/pokemon/"+p+".png",sprites:{}}};n.default.set(e.pokedex,c.name,d)}}catch(e){o=!0,s=e}finally{try{!a&&i.return&&i.return()}finally{if(o)throw s}}},set_generation_data:function(e,t){n.default.set(e,"generation",t)},set_types_data:function(e,t){var a=!0,o=!1,s=void 0;try{for(var r,i=m()(t);!(a=(r=i.next()).done);a=!0){var c=r.value,l=Number(c.url.split("/")[6]),p={id:l,name:c.name};n.default.set(e.types,l,p)}}catch(e){o=!0,s=e}finally{try{!a&&i.return&&i.return()}finally{if(o)throw s}}},set_search_name:function(e,t){n.default.set(e.searchParams,"name",t)},set_search_type:function(e,t){n.default.set(e.searchParams,"type",t)},add_pokemon_data:function(e,t){n.default.set(e.pokedex[t.name],"data",t.data)},add_types_data:function(e,t){e.types[t.typeId].class=t.data.class,e.types[t.typeId].damage=t.data.damage,e.types[t.typeId].pokemon=t.data.pokemon},add_pokemon_card_data:function(e,t){n.default.set(e.pokedex[t.name],"cardData",t.data)},clear_search:function(e){n.default.set(e.searchParams,"name",""),n.default.set(e.searchParams,"type",""),n.default.set(e.searchParams,"strength",""),n.default.set(e.searchParams,"weakness","")}};n.default.use(o.a);var d=new o.a.Store({state:{searchParams:{name:"",type:0,weakness:0,strength:0},pokedex:{},types:{},generationId:1,generation:null},actions:i,mutations:p,getters:c.a}),u=a("/ocq"),h=a("Dd8w"),f=a.n(h),_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-container",[t("el-main",[this._t("default")],2),this._v(" "),t("el-footer",[this._v("EmilyRosina © "+this._s((new Date).getFullYear()))])],1)},staticRenderFns:[]},k=a("VU/8")({},_,!1,function(e){a("m8xH")},"data-v-c1a98790",null).exports,y=a("SDDt"),g=a.n(y),v={data:function(){return{mode:"name",searchParams:{name:"",type:1}}},components:{searchLayout:k},computed:f()({},Object(o.b)(["matched_onName","matched_onType"]),{pokeball:function(){return g.a},randomId:function(){return Math.floor(151*Math.random()+1)},searching:function(){return this.$store.state.searchParams.name.length>=3},nameHasMatches:function(){return!!this.$store.getters.matched_onName&&this.$store.getters.matched_onName.total>0},typeHasMatches:function(){return!!this.$store.getters.matched_onType&&this.$store.getters.matched_onType.total>0},typeOptions:function(){var e=[];for(var t in this.$store.getters.types)console.log("typeOptions",t),e.push({label:this.$store.getters.types[t].name,value:this.$store.getters.types[t].id});return e},searchNameApplied:function(){return this.searchParams.name.length>0}}),methods:{setMode:function(e){this.mode=e},clearSearch:function(){this.commit("clear_search")},goToRandomPokemon:function(){var e=Math.floor(151*Math.random()+1);this.$router.push({name:"Pokemon",params:{id:e}})},gotToPokemon:function(e){this.$router.push({name:"Pokemon",params:{id:e}})},setPokemonName:function(){this.$store.commit("set_search_name",this.searchParams.name)},setPokemonType:function(){this.$store.commit("set_search_type",this.searchParams.type)}}},D={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("search-layout",[a("el-row",{staticClass:"search-controls",style:{background:"url("+e.pokeball+")",backgroundSize:"cover"},attrs:{type:"flex"}},[a("el-col",{staticStyle:{"padding-bottom":"9em","margin-top":"-2em"},attrs:{span:24}},[a("el-row",[a("el-button",{attrs:{type:"warning",plain:"",round:""},on:{click:e.goToRandomPokemon}},[e._v("Random")])],1),e._v(" "),a("el-row",[a("el-button",{attrs:{type:"primary",plain:"",round:""},on:{click:function(t){e.setMode("name")}}},[e._v("By Name")]),e._v(" "),a("el-button",{attrs:{type:"success",plain:"",round:""},on:{click:function(t){e.setMode("type")}}},[e._v("By Type")])],1)],1),e._v(" "),a("el-col",[a("el-row",["name"===e.mode?a("el-input",{nativeOn:{keyup:function(t){e.setPokemonName(t)}},model:{value:e.searchParams.name,callback:function(t){e.$set(e.searchParams,"name","string"==typeof t?t.trim():t)},expression:"searchParams.name"}}):e._e(),e._v(" "),"type"===e.mode?a("el-select",{attrs:{placeholder:"Select"},on:{change:e.setPokemonType},model:{value:e.searchParams.type,callback:function(t){e.$set(e.searchParams,"type",t)},expression:"searchParams.type"}},e._l(e.typeOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})):e._e()],1)],1)],1),e._v(" "),a("el-row",{staticStyle:{flex:"1 1 auto"},attrs:{type:"flex"}},[a("el-col",["name"===e.mode&&e.searching&&e.nameHasMatches?a("ul",{staticClass:"pokemon-links"},e._l(e.matched_onName.matches,function(t,n){return a("li",{key:n,staticClass:"pokemon-link",on:{click:function(a){e.gotToPokemon(t.id)}}},[e._v("\n          "+e._s(n)+"\n        ")])})):"type"===e.mode&&e.typeHasMatches?a("ul",{staticClass:"pokemon-links"},e._l(e.matched_onType.matches,function(t,n){return a("li",{key:n,staticClass:"pokemon-link",on:{click:function(a){e.gotToPokemon(t.id)}}},[e._v("\n          "+e._s(t.name)+"\n        ")])})):e._e()])],1)],1)},staticRenderFns:[]},P=a("VU/8")(v,D,!1,function(e){a("zmZp"),a("5EOo")},"data-v-46f15e0c",null).exports,x={methods:{clearSearch:function(){this.commit("CLEAR_SEARCH")},goToRandomPokemon:function(){console.log(this);var e=Math.floor(151*Math.random()+1);this.$router.push({params:{id:e}})},newSearch:function(){this.$router.push("/")}}},A={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-container",[t("el-header",[t("el-button",{on:{click:this.newSearch}},[this._v("New Search")]),this._v(" "),t("el-button",{on:{click:this.goToRandomPokemon}},[this._v("Random")])],1),this._v(" "),t("el-main",[this._t("default")],2),this._v(" "),t("el-footer",[this._v("EmilyRosina © "+this._s((new Date).getFullYear()))])],1)},staticRenderFns:[]},w=a("VU/8")(x,A,!1,function(e){a("swIw")},"data-v-ad1b3df8",null).exports,I={props:{cards:{type:Array,default:[]}}},b={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-carousel",{attrs:{interval:4e3,type:"card",autoplay:!1}},this._l(this.cards,function(e){return t("el-carousel-item",{key:e.id},[t("img",{attrs:{src:e.imageUrlHiRes}})])}))},staticRenderFns:[]},$={mounted:function(){!this.extraDataloaded&&this.pokemon&&this.$store.dispatch("ADD_POKEMON_DATA",{id:this.pokemonId,name:this.pokemon.name}),!this.cardDataloaded&&this.pokemon&&this.$store.dispatch("ADD_CARD_DATA",{id:this.pokemonId,name:this.pokemon.name})},updated:function(){!this.extraDataloaded&&this.pokemon&&this.$store.dispatch("ADD_POKEMON_DATA",{id:this.pokemonId,name:this.pokemon.name}),!this.cardDataloaded&&this.pokemon&&this.$store.dispatch("ADD_CARD_DATA",{id:this.pokemonId,name:this.pokemon.name})},components:{resultsLayout:w,cardCarousel:a("VU/8")(I,b,!1,function(e){a("abb3")},null,null).exports},computed:{loaded:function(){return!!this.pokemon},extraDataloaded:function(){return!!this.loaded&&this.pokemon.hasOwnProperty("data")},cardDataloaded:function(){return!!this.loaded&&this.pokemon.hasOwnProperty("cardData")},pokemonId:function(){return Number(this.$route.params.id)},pokemon:function(){return this.$store.getters.pokemonById(this.pokemonId)},pokemonImage:function(){return this.$store.getters.pokemonImageById(this.pokemonId)},sprites:function(){if(this.pokemon.data.sprites){var e={};for(var t in this.pokemon.data.sprites)null!==this.pokemon.data.sprites[t]&&(e[t]=this.pokemon.data.sprites[t]);return e}return null},cardShowing:function(){return this.cards[0].imageUrlHiRes},cards:function(){return this.pokemon.cardData?this.pokemon.cardData.cards:null}}},T={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("results-layout",[e.loaded?a("el-row",{staticClass:"pokemon-content-wrapper",attrs:{type:"flex"}},[a("el-col",{attrs:{span:9}},[a("el-col",{staticClass:"pokemon-cards"},[e.cardDataloaded?a("card-carousel",{attrs:{cards:e.cards}}):e._e()],1)],1),e._v(" "),a("el-col",{staticClass:"flex-col",attrs:{span:15}},[a("el-row",{attrs:{type:"flex"}},[a("el-col",[a("h1",{staticClass:"pokemon-name"},[e._v(e._s(e.pokemon.name))])]),e._v(" "),a("el-col",[a("h3",{staticClass:"pokemon-id"},[e._v("# "+e._s(e.pokemon.id))])])],1),e._v(" "),a("el-row",{staticStyle:{flex:"1 0 auto"},attrs:{type:"flex"}},[a("el-col",{staticClass:"flex-col pokemon-type",attrs:{span:16}},[e.extraDataloaded?e._l(e.pokemon.data.types,function(t,n){return a("span",{key:n},[e._v(e._s(t.type.name))])}):[a("span",{staticClass:"placeholder"},[e._v("[battle type]")])]],2),e._v(" "),a("el-col",{staticClass:"flex-col",attrs:{span:8}},[a("img",{staticClass:"pokemon-main-image",attrs:{src:e.pokemonImage}})])],1),e._v(" "),a("el-row",{staticClass:"pokemon-sprites",attrs:{type:"flex"}},[e.extraDataloaded?e._l(e.sprites,function(e,t){return a("el-col",{key:t,staticClass:"pokemon-sprite"},[a("img",{attrs:{src:e}})])}):[a("el-col",{staticClass:"pokemon-sprite"},[a("span",{staticClass:"placeholder"},[e._v("[sprites]")])])]],2)],1)],1):e._e()],1)},staticRenderFns:[]},R=a("VU/8")($,T,!1,function(e){a("r40x")},"data-v-5cdd802c",null).exports;n.default.use(u.a);var C=new u.a({routes:[{path:"/",name:"Home",component:P},{path:"/pokemon/:id",name:"Pokemon",component:R}]}),E={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},N=a("VU/8")({name:"app",mounted:function(){this.$store.dispatch("GET_POKEDEX",this.$store.state.generationId)}},E,!1,function(e){a("igKQ")},null,null).exports,S=a("zL8q"),O=a.n(S);a("tvR6"),a("H/op");n.default.config.productionTip=!1,n.default.use(O.a),new n.default({el:"#app",router:C,template:"<App/>",components:{App:N},store:d})},SDDt:function(e,t,a){e.exports=a.p+"static/img/pokeball.97a3de7.png"},UjVw:function(e,t,a){"use strict";(function(e){var n=a("BO1k"),o=a.n(n),s=a("fZjL"),r=a.n(s),i=a("gRE1"),c=a.n(i),l=function(e){return!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?"static/json/pokeapi/"+e+".json":"https://pokeapi.co/api/v2/"+e},m=a("o/zv");t.a={api:function(){return{tcg:{pokemonById:function(e){return function(e){return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?"https://api.pokemontcg.io/v1/"+e:"static/json/tcg/"+e+".json"}("cards?nationalPokedexNumber="+e,!1)}},pokeapi:{generationById:function(e){return l("generation/"+e)},pokemonById:function(e){return l("pokemon/"+e,!1)},pokemonSpeciesById:function(e){return l("pokemon-species/"+e,!1)},typeById:function(e){return l("type/"+e)}}}},pokemonById:function(e){return function(t){return e.pokedex?c()(e.pokedex).find(function(e){return e.id===t}):null}},pokemonImageById:function(t){return function(t){return t=3!==t.toString().length?t.toString().padStart(3,"0"):t.toString(),function(t){return m.join(e,"..",t)}("src/assets/img/pokemon/"+t+".png")}},types:function(e){return e.types},matched_onName:function(e){var t=void 0,a={};if(e.pokedex&&e.searchParams.name.length>=3){t=r()(e.pokedex).filter(function(t){return t.includes(e.searchParams.name)});var n=!0,s=!1,i=void 0;try{for(var c,l=o()(t);!(n=(c=l.next()).done);n=!0){var m=c.value;a[m]=e.pokedex[m]}}catch(e){s=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(s)throw i}}}return e.pokedex&&e.searchParams.name.length>=3?{total:t.length,matches:a}:null},matched_onType:function(e){return e.types&&0!==e.searchParams.type?{total:r()(e.types[e.searchParams.type].pokemon).length,matches:e.types[e.searchParams.type].pokemon}:null}}}).call(t,"/")},abb3:function(e,t){},igKQ:function(e,t){},m8xH:function(e,t){},r40x:function(e,t){},swIw:function(e,t){},tvR6:function(e,t){},zmZp:function(e,t){}},[0]);
//# sourceMappingURL=app.1c50e5d8e4414170d4ac.js.map