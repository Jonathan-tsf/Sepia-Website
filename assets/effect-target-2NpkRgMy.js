import{g as p}from"./swiper-core-cvm0uL9O.js";function h(f){const{effect:s,swiper:e,on:a,setTranslate:n,setTransition:m,overwriteParams:o,perspective:l,recreateShadows:c,getEffectParams:d}=f;a("beforeInit",()=>{if(e.params.effect!==s)return;e.classNames.push(`${e.params.containerModifierClass}${s}`),l&&l()&&e.classNames.push(`${e.params.containerModifierClass}3d`);const r=o?o():{};Object.assign(e.params,r),Object.assign(e.originalParams,r)}),a("setTranslate",()=>{e.params.effect===s&&n()}),a("setTransition",(r,i)=>{e.params.effect===s&&m(i)}),a("transitionEnd",()=>{if(e.params.effect===s&&c){if(!d||!d().slideShadows)return;e.slides.forEach(r=>{r.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(i=>i.remove())}),c()}});let t;a("virtualUpdate",()=>{e.params.effect===s&&(e.slides.length||(t=!0),requestAnimationFrame(()=>{t&&e.slides&&e.slides.length&&(n(),t=!1)}))})}function w(f,s){const e=p(s);return e!==s&&(e.style.backfaceVisibility="hidden",e.style["-webkit-backface-visibility"]="hidden"),e}export{w as a,h as e};
