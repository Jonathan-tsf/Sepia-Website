import{d as n,r as p,o as c,c as i,b as s,t as a,G as u,F as m}from"./index-yI0ahMNX.js";const w=["for"],h={class:"password-toggle"},g=["type","id","placeholder","value"],_={class:"password-toggle-btn","aria-label":"Show/hide password"},f=s("span",{class:"password-toggle-indicator"},null,-1),b={class:"invalid-tooltip position-absolute top-100 start-0"},P=n({__name:"PasswordInput",props:{id:{},value:{},label:{},placeHolder:{},error:{},modelValue:{}},emits:["update:modelValue"],setup(v,{emit:l}){const t=l,o=p(!1),r=()=>o.value=!o.value,d=e=>{t("update:modelValue",e.target.value)};return(e,V)=>(c(),i(m,null,[s("label",{class:"form-label fs-base",for:e.id??"form-password"},a(e.label??"Password"),9,w),s("div",h,[s("input",u({type:o.value?"text":"password",id:e.id??"form-password",class:"form-control form-control-lg",placeholder:e.placeHolder??"Enter your password",value:e.modelValue,onInput:d},e.$attrs),null,16,g),s("label",_,[s("input",{class:"password-toggle-check",type:"checkbox",onChange:r},null,32),f]),s("div",b,a(e.error??"Incorrect password!"),1)])],64))}});export{P as _};
