"use strict";(self.webpackChunkuser_guides=self.webpackChunkuser_guides||[]).push([[4668],{4914:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=r(5893),a=r(1151),s=r(4866),i=r(5162);const l={},o="Add an EPA review",u={id:"requirements/epas/add-epa-review",title:"Add an EPA review",description:"Here is how we do the things on the other side",source:"@site/docs/requirements/epas/add-epa-review.md",sourceDirName:"requirements/epas",slug:"/requirements/epas/add-epa-review",permalink:"/user-guides/docs/requirements/epas/add-epa-review",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"EPAs ( Entrustable Professional Activities)",permalink:"/user-guides/docs/requirements/epas/"},next:{title:"Assign a WBA to an EPA",permalink:"/user-guides/docs/requirements/epas/assign-wba-to-epa"}},c={},d=[];function h(e){const t={admonition:"admonition",em:"em",h1:"h1",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"add-an-epa-review",children:"Add an EPA review"}),"\n",(0,n.jsx)(t.p,{children:"Here is how we do the things on the other side"}),"\n",(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(i.Z,{value:"trainee",label:"Trainee",disabled:!0,children:(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"This must be completed by your current Supervisor"})})}),(0,n.jsx)(i.Z,{value:"trainer",label:"Trainer",disabled:!0,children:(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"This must be completed by the Trainee's current Supervisor"})})}),(0,n.jsxs)(i.Z,{value:"supervisor",label:"Supervisor",default:!0,children:[(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"Complete any EPA reviews during your supervising rotation period.\nOnce the next rotation starts you will not have access to these records"})}),(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Currently there is no workflow to try and reverse this. (UPDATE REQUIRED)"})}),(0,n.jsx)(t.p,{children:"Click on 'Trainee EPAs' in the left hand menu, and then select the trainee to view their EPAs"}),(0,n.jsx)(t.p,{children:"![3c-trainer-epa-image4]"}),(0,n.jsx)(t.p,{children:"Select the desired EPA"}),(0,n.jsx)(t.p,{children:"![3c-trainer-epa-image5]"}),(0,n.jsx)(t.p,{children:"Here you will find a description of the EPA."}),(0,n.jsx)(t.p,{children:"![3c-trainer-epa-image6]"}),(0,n.jsx)(t.p,{children:"At the bottom of the screen, click 'Add EPA Review'.\nYou can also mark a WBA as reviewed here."}),(0,n.jsx)(t.p,{children:"![3c-trainer-epa-image7]"}),(0,n.jsx)(t.p,{children:"Enter the details of the review, and then click 'Submit'"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.em,{children:"Date"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.em,{children:"Level of Entrustment"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.em,{children:"Aspects to focus on"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.em,{children:"Supervisor"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.em,{children:"Consultants"})}),"\n"]}),(0,n.jsx)(t.p,{children:"![3c-trainer-epa-image8]"}),(0,n.jsx)(t.p,{children:"The EPA review will now be added to the Trainee EPA page"}),(0,n.jsx)(t.p,{children:"3c-trainer-epa-image9"}),(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"You may have to refresh the page to see the update."})})]})]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5162:(e,t,r)=>{r.d(t,{Z:()=>i});r(7294);var n=r(6010);const a={tabItem:"tabItem_Ymn6"};var s=r(5893);function i(e){let{children:t,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,i),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),a=r(6010),s=r(2466),i=r(6550),l=r(469),o=r(1980),u=r(7392),c=r(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=h(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),v=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(5893);function j(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,r=o.indexOf(t),a=l[r].value;a!==n&&(u(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...e,...t}),(0,x.jsx)(g,{...e,...t})]})}function y(e){const t=(0,b.Z)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(t))}},1151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>i});var n=r(7294);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);