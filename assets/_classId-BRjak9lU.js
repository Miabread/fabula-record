import{R as c,j as e,N as o,H as t,S as m,P as i,b as r}from"./index-DCaobMem.js";import{c as l,d}from"./index-8T8DQm4w.js";const j=function(){const{classId:n}=c.useParams();if(!(n in l))return e.jsx(o,{to:"/classes/$classId",params:{classId:d}});const s=l[n];return e.jsxs(e.Fragment,{children:[e.jsxs(t,{color:"eleri",children:[s.name," ",e.jsx(m,{source:s.source,page:s.page})]}),s.freeBenefits.increaseHP&&e.jsx(i,{children:"Permanently increase your maximum Hit Points by 5."}),s.freeBenefits.increaseMP&&e.jsx(i,{children:"Permanently increase your maximum Mind Points by 5."}),s.freeBenefits.increaseIP&&e.jsx(i,{children:"Permanently increase your maximum Inventory Points by 2."}),s.freeBenefits.increaseHPorMP&&e.jsxs(i,{children:["Permanently increase your maximum Hit Points ",e.jsx(r,{children:"or"})," Mind Points by 5 (your choice)."]}),s.freeBenefits.ritualism&&e.jsxs(i,{children:["You may perform Rituals whose effects fall within the ",e.jsx(r,{children:"Ritualism"})," discipline."]}),s.freeBenefits.projects&&e.jsxs(i,{children:["You may initiate ",e.jsx(r,{children:"Projects"}),"."]}),s.freeBenefits.martialMelee&&e.jsxs(i,{children:["Gain the ability to equip ",e.jsx(r,{children:"martial melee weapons"}),"."]}),s.freeBenefits.martialRanged&&e.jsxs(i,{children:["Gain the ability to equip ",e.jsx(r,{children:"martial ranged weapons"}),"."]}),s.freeBenefits.martialArmor&&e.jsxs(i,{children:["Gain the ability to equip ",e.jsx(r,{children:"martial armor"}),"."]}),s.freeBenefits.martialShields&&e.jsxs(i,{children:["Gain the ability to equip ",e.jsx(r,{children:"martial shields"}),"."]}),s.skills.map(a=>e.jsxs(e.Fragment,{children:[e.jsxs(t,{color:"eleri",children:[a.name," ",a.level>1&&e.jsxs(e.Fragment,{children:["【✦",a.level,"】"]})]}),a.description]}))]})};export{j as component};
