(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{281:function(t,e,i){},282:function(t,e,i){},283:function(t,e,i){},319:function(t,e,i){"use strict";var s=i(281);i.n(s).a},320:function(t,e,i){"use strict";var s=i(282);i.n(s).a},321:function(t,e,i){"use strict";var s=i(283);i.n(s).a},325:function(t,e,i){"use strict";i(86),i(19);var s=i(35),n=i(478),o=i(276),a=i(318),r=i(343),c=i.n(r),l=(i(278),{name:"ALink",props:{href:String,to:[String,Object]},computed:{isRouter:function(){var t=this;return!!this.$router&&(!this.href||Boolean(this.$router.options.routes.find((function(e){return e.path===t.href}))))}}}),u=i(33),d=Object(u.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)(this.isRouter?"router-link":"a",{tag:"component",attrs:{href:this.isRouter?null:this.href,to:this.isRouter?this.to||this.href:null}},[this._t("default")],2)}),[],!1,null,null,null).exports,p=(i(55),i(284),i(34),i(291),i(54),i(279),i(346)),_=i(79),m=i(317),h=i.n(m),b={name:"APicture",props:{src:[String,Object],fallbackSrc:String,alt:String,canCalcHeight:{type:Boolean,default:!0},placeholder:{type:String,default:"/assets/img-placeholder.png"},containerBreakpoints:{type:Object,default:function(){return{zoom:null,big:800,normal:400}}},lozadOptions:{type:Object,default:function(){return{rootMargin:"350px 0px",threshold:0}}}},data:function(){return{sources:[],height:null,opacity:null}},computed:{defaultImgObj:function(){return"object"===Object(s.a)(this.src)&&this.src?Object(o.img)(this.src)||this.src:{}},localFallbackSrc:function(){var t=this.src,e=this.defaultImgObj,i=this.fallbackSrc;if(i)return i;var n="object"===Object(s.a)(t)?t.zoom?t.zoom.url:e.url:t;return n?n.replace(/\.webp$/,""):this.placeholder},localAlt:function(){var t=this.alt,e=this.src,i=this.defaultImgObj;return t||(e?i.alt||"Product":"No image")}},methods:{updateSources:function(){var t,e=[];if("object"===Object(s.a)(this.src)){var i=this.$el.clientWidth,n=this.src[function(t,e,i){var s,n;for(var o in i){var a=i[o];if(void 0!==a&&t[o]){if(void 0!==n)if(null===a){if(n>=e)continue}else if(a<e||null!==n&&a>n)continue;s=o,n=a}}return s}(this.src,i,this.containerBreakpoints)]||this.defaultImgObj,o=n.url,a=n.size;if(t=o,i&&a&&this.canCalcHeight){var r=a.split("x").map((function(t){return parseInt(t,10)})),c=Object(_.a)(r,2),l=c[0],u=c[1];u&&(this.height="".concat(i>=l?u:i*u/l,"px"))}}else t=this.src;t&&(t.endsWith(".webp")?e.push({srcset:t,type:"image/webp"},{srcset:t.replace(/\.webp$/,""),type:"image/".concat("png"===t.substr(-9,4)?"png":"jpeg")}):e.push({srcset:t})),this.sources=e}},mounted:function(){var t=this;this.updateSources(),this.$nextTick((function(){var e=t.$el;h()(e,Object(p.a)(Object(p.a)({},t.lozadOptions),{},{loaded:function(e){var i=t.localFallbackSrc,s="IMG"===e.tagName?e:e.lastChild;s.style.opacity=0,s.onerror=function(){console.error(new Error("Image load error"),this),e.style.display="none";var t=document.createElement("IMG");t.src=i,e.parentNode.insertBefore(t,e.nextSibling)},s.onload=function(){t.opacity=0,e.classList.add("loaded"),t.$nextTick((function(){t.opacity=s.style.opacity=null,t.$emit("load")}))}}})).observe()}))}},f=(i(319),Object(u.a)(b,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("picture",{staticClass:"picture",style:{height:t.height,opacity:t.opacity},attrs:{"data-iesrc":t.localFallbackSrc,"data-alt":t.localAlt}},[t.sources.length?t._l(t.sources,(function(t,e){var s=t.srcset,n=t.type;return i("source",{key:e,attrs:{srcset:s,type:n}})})):i("source",{attrs:{srcset:t.localFallbackSrc}})],2)}),[],!1,null,null,null).exports),v=(i(80),function(t,e){var i=e.type,s=e.value;if(s)return"percentage"===i?t*(100-s)/100:t-s}),g={name:"APrices",props:{product:{type:Object,required:!0},isLiteral:Boolean,isBig:Boolean,installmentsOption:Object,discountOption:Object,discountText:{type:[String,Boolean],default:""}},data:function(){return{installmentsNumber:0,monthlyInterest:0,discount:{type:null,value:0},extraDiscount:{type:null,value:0},discountLabel:this.discountText}},computed:{i19asOf:function(){return Object(o.i18n)(n.a)},i19from:function(){return Object(o.i18n)(n.k)},i19interestFree:function(){return Object(o.i18n)(n.m)},i19to:function(){return Object(o.i18n)(n.E)},i19upTo:function(){return Object(o.i18n)(n.G)},price:function(){var t=Object(o.price)(this.product);return this.extraDiscount.value?v(t,this.extraDiscount):t},comparePrice:function(){return Object(o.onPromotion)(this.product)?this.product.base_price:this.extraDiscount.value?Object(o.price)(this.product):void 0},priceWithDiscount:function(){return v(this.price,this.discount)},installmentValue:function(){if(this.installmentsNumber>=2){if(this.monthlyInterest){var t=this.monthlyInterest/100;return this.price*t/(1-Math.pow(1+t,-this.installmentsNumber))}return this.price/this.installmentsNumber}return 0}},methods:{formatMoney:o.formatMoney,updateInstallments:function(t){if(t){this.monthlyInterest=t.monthly_interest;var e=t.min_installment||5,i=parseInt(this.price/e,10);this.installmentsNumber=Math.min(i,t.max_number)}},updateDiscount:function(t){t&&(!t.min_amount||t.min_amount<=this.price)&&(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel="via ".concat(t.label)))}},created:function(){var t=this;if(this.installmentsOption||this.discountOption)this.updateInstallments(this.installmentsOption),this.updateDiscount(this.discountOption);else{var e="object"===("undefined"==typeof window?"undefined":Object(s.a)(window))&&window.storefront;if(e){var i=function(){var i=e.info&&e.info.list_payments;return!!i&&(t.updateInstallments(i.installments_option),t.updateDiscount(i.discount_option),Object.keys(i).length>0)};i()||e.on("info:list_payments",i);var n=function(){var i=e.info&&e.info.apply_discount;if(i){var s=i.available_extra_discount;return s&&(t.extraDiscount=s),Object.keys(i).length>0}return!1};n()||e.on("info:apply_discount",n)}}}},y=(i(320),{name:"ProductCard",components:{ALink:d,APicture:f,APrices:Object(u.a)(g,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"prices",class:{"prices--literal":t.isLiteral,"prices--big":t.isBig}},[t.comparePrice?i("span",{staticClass:"prices__compare"},[t.isLiteral?[t._v("\n      "+t._s(t.i19from)+"\n      "),i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))]),t._v("\n      "+t._s(t.i19to)+"\n    ")]:i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))])],2):t._e(),t._v(" "),i("strong",{staticClass:"prices__value"},[t._v("\n    "+t._s(t.formatMoney(t.price))+"\n  ")]),t._v(" "),i("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[t.installmentsNumber>1?i("div",{key:"installments",staticClass:"prices__installments"},[t.isLiteral?i("small",[t._v("\n        "+t._s(t.i19upTo)+"\n      ")]):t._e(),t._v("\n      "+t._s(t.installmentsNumber)+"x\n      "),i("span",[t._v("\n        "+t._s(t.formatMoney(t.installmentValue))+"\n      ")]),t._v(" "),!t.monthlyInterest&&t.isLiteral?i("small",[t._v("\n        "+t._s(t.i19interestFree)+"\n      ")]):t._e()]):t._e(),t._v(" "),"number"==typeof t.priceWithDiscount&&t.priceWithDiscount<t.price?i("div",{key:"discount",staticClass:"prices__discount"},["string"==typeof t.discountLabel&&t.discountLabel?[i("span",[t._v("\n          "+t._s(t.formatMoney(t.priceWithDiscount))+"\n        ")]),t._v(" "),i("small",[t._v("\n          "+t._s(t.discountLabel)+"\n        ")])]:[i("small",[t._v("\n          "+t._s(t.i19asOf)+"\n        ")]),t._v(" "),i("span",[t._v("\n          "+t._s(t.formatMoney(t.priceWithDiscount))+"\n        ")])]],2):t._e()])],1)}),[],!1,null,null,null).exports},props:{product:Object,productId:String,isSmall:Boolean,headingTag:{type:String,default:"h3"},buyText:String,canAddToCart:{type:Boolean,default:!0},isLoaded:Boolean},data:function(){return{body:{},isLoading:!1,isHovered:!1,error:""}},computed:{i19outOfStock:function(){return Object(o.i18n)(n.r)},i19unavailable:function(){return Object(o.i18n)(n.F)},buyHtml:function(){return"object"===("undefined"==typeof window?"undefined":Object(s.a)(window))&&window.productCardBuyHtml},footerHtml:function(){return"object"===("undefined"==typeof window?"undefined":Object(s.a)(window))&&window.productCardFooterHtml},name:function(){return Object(o.name)(this.body)},strBuy:function(){return this.buyText||"object"===("undefined"==typeof window?"undefined":Object(s.a)(window))&&window.productCardBuyText||Object(o.i18n)(n.c)},isInStock:function(){return Object(o.inStock)(this.body)},isActive:function(){return this.body.available&&this.body.visible&&this.isInStock},discount:function(){var t=this.body;return Object(o.onPromotion)(t)?Math.round(100*(t.base_price-Object(o.price)(t))/t.base_price):0}},methods:{setBody:function(t){this.body=Object.assign({},t),delete this.body.body_html,delete this.body.body_text},fetchItem:function(){var t=this;if(this.productId){this.isLoading=!0;var e=this.storeId,i=this.productId;Object(a.store)({url:"/products/".concat(i,".json"),storeId:e}).then((function(e){var i=e.data;t.$emit("update:product",i),t.setBody(i),t.$emit("update:is-loaded",!0)})).catch((function(e){console.error(e),t.body.name&&t.body.slug&&t.body.pictures||(t.error=Object(o.i18n)(n.h))})).finally((function(){t.isLoading=!1}))}},buy:function(){var t=this.body;if(this.$emit("buy",{product:t}),this.canAddToCart){var e=t.variations,i=t.slug;e&&e.length?window.location="/".concat(i):c.a.addProduct(t)}}},created:function(){this.product&&(this.setBody(this.product),void 0===this.product.available&&(this.body.available=!0),void 0===this.product.visible&&(this.body.visible=!0)),this.isLoaded||this.fetchItem()}}),j=(i(321),Object(u.a)(y,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product-card",class:{"product-card--inactive":t.body._id&&!t.isActive,"product-card--small":t.isSmall},on:{mouseover:function(e){t.isHovered=!0}}},[i("transition",{attrs:{"enter-active-class":"animated fadeIn"}},[t.isLoading?t._e():i("section",[t._t("discount-tag",[t.isActive&&t.discount>0?i("span",{staticClass:"product-card__offer-stamp"},[i("i",{staticClass:"fas fa-arrow-down"}),t._v(" "),i("b",[t._v(t._s(t.discount))]),t._v("%\n        ")]):t._e()],null,{discount:t.discount}),t._v(" "),t._t("body",[i("a-link",{staticClass:"product-card__link",attrs:{href:"/"+t.body.slug,title:t.name}},[t._t("header"),t._v(" "),i("div",{staticClass:"product-card__pictures"},[t.body.pictures&&t.body.pictures.length?t._l(t.body.pictures.slice(0,2).reverse(),(function(e,s){return 1===t.body.pictures.length||1===s||t.isHovered?i("a-picture",{key:s,staticClass:"product-card__picture",attrs:{src:e,"can-calc-height":!1}}):t._e()})):i("a-picture",{staticClass:"product-card__picture"})],2),t._v(" "),t._t("title",[i(t.headingTag,{tag:"component",staticClass:"product-card__name"},[t._v("\n              "+t._s(t.name)+"\n            ")])])],2)]),t._v(" "),t._t("rating",[t._m(0)]),t._v(" "),t.body.available&&t.body.visible?t.isInStock?[t._t("prices",[i("a-prices",{staticClass:"product-card__prices",attrs:{product:t.body}})]),t._v(" "),i("div",{staticClass:"product-card__buy fade",on:{click:t.buy}},[t._t("buy",[t.buyHtml?i("div",{domProps:{innerHTML:t._s(t.buyHtml)}}):t._e(),t._v(" "),i("button",{staticClass:"btn btn-primary",class:t.isSmall?"btn-sm":"btn-block",attrs:{type:"button"}},[t._t("buy-button-content",[i("i",{staticClass:"fas fa-shopping-bag mr-1"}),t._v("\n                "+t._s(t.strBuy)+"\n              ")])],2)])],2)]:t._t("out-of-stock",[i("p",{staticClass:"badge badge-dark"},[t._v("\n          "+t._s(t.i19outOfStock)+"\n        ")])]):t._t("unavailable",[i("p",{staticClass:"badge badge-warning"},[t._v("\n          "+t._s(t.i19unavailable)+"\n        ")])]),t._v(" "),t._t("footer",[t.footerHtml?i("div",{domProps:{innerHTML:t._s(t.footerHtml)}}):t._e()])],2)]),t._v(" "),t.isLoading?[t._t("default"),t._v(" "),t.error?i("div",{staticClass:"alert alert-warning small",attrs:{role:"alert"}},[t._v("\n      "+t._s(t.error)+"\n    ")]):t._e()]:t._e()],2)}),[function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"product-card__rating",attrs:{"data-sku":this.body.sku}})}],!1,null,null,null));e.a=j.exports},409:function(t){t.exports=JSON.parse('{"_id":"123455ed62887026009fdbf1","visible":true,"available":true,"manage_stock":false,"name":"MacBook Pro Modelo de 16 polegadas","sku":"LHM4086","base_price":14000,"price":12000,"quantity":12,"videos":[{"url":"https://www.youtube.com/watch?v=V7XQvAde51w","title":"esse MACBOOK vai me impressionar?! | Macbook Pro 13 Touchbar - Unboxing"}],"pictures":[{"zoom":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/@v2-1581704558843-display_hero_hw__d73ne9vbdmgm_large.jpg","size":"1136x667","alt":"display_hero_hw__d73ne9vbdmgm_large"},"big":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/imgs/big/@v2-1581704558843-display_hero_hw__d73ne9vbdmgm_large.jpg.webp","size":"700x411","alt":"display_hero_hw__d73ne9vbdmgm_large"},"normal":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/imgs/normal/@v2-1581704558843-display_hero_hw__d73ne9vbdmgm_large.jpg.webp","size":"350x206","alt":"display_hero_hw__d73ne9vbdmgm_large"},"_id":"245930158170460930200000"},{"zoom":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/@v2-1581704579863-chip_static__lj1912v5qhme_large.jpg","size":"980x684","alt":"chip_static__lj1912v5qhme_large"},"big":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/imgs/big/@v2-1581704579863-chip_static__lj1912v5qhme_large.jpg.webp","size":"700x489","alt":"chip_static__lj1912v5qhme_large"},"normal":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/imgs/normal/@v2-1581704579863-chip_static__lj1912v5qhme_large.jpg.webp","size":"350x244","alt":"chip_static__lj1912v5qhme_large"},"_id":"245930158170460930200001"},{"zoom":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/@v2-1581704580369-memory_static__c5fogcn85byq_large.jpg","size":"980x684","alt":"memory_static__c5fogcn85byq_large"},"big":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/imgs/big/@v2-1581704580369-memory_static__c5fogcn85byq_large.jpg.webp","size":"700x489","alt":"memory_static__c5fogcn85byq_large"},"normal":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/imgs/normal/@v2-1581704580369-memory_static__c5fogcn85byq_large.jpg.webp","size":"350x244","alt":"memory_static__c5fogcn85byq_large"},"_id":"245930158170460930200002"},{"zoom":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/@v2-1581704588875-ac_video_poster_960x540.jpg","size":"960x540","alt":"ac_video_poster_960x540"},"big":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/imgs/big/@v2-1581704588875-ac_video_poster_960x540.jpg.webp","size":"700x394","alt":"ac_video_poster_960x540"},"normal":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/imgs/normal/@v2-1581704588875-ac_video_poster_960x540.jpg.webp","size":"350x197","alt":"ac_video_poster_960x540"},"_id":"245930158170460930200003"}],"slug":"macbook-pro-modelo-de-16-polegadas","commodity_type":"physical","ad_relevance":0,"currency_id":"BRL","currency_symbol":"R$","condition":"new","adult":false,"auto_fill_related_products":true,"views":0,"sales":0,"price_change_records":[{"date_of_change":"2020-02-14T18:24:45.327Z","price":12000,"currency_id":"BRL","currency_symbol":"R$","_id":"5e46e5ed62887026009fdbf1"}]}')},415:function(t,e,i){"use strict";i.r(e);var s=i(409),n={name:"DemoProductCard",components:{ProductCard:i(325).a},data:function(){return{product:s}}},o=i(33),a=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo"},[e("div",{staticStyle:{"max-width":"290px"}},[e("ProductCard",{attrs:{product:this.product}})],1)])}),[],!1,null,null,null);e.default=a.exports}}]);