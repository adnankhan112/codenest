"use strict";(self.webpackChunkcodenest=self.webpackChunkcodenest||[]).push([["14745"],{94837(e,n,a){a.r(n),a.d(n,{default:()=>d});var t=a(74848),i=a(96540),o=a(21085),r=a(53572);let s={apiKey:"AIzaSyBvq18LrwL-AfL_V2IsoE_fVS5J2QV92Q8",authDomain:"codenest-4a91a.firebaseapp.com",projectId:"codenest-4a91a",storageBucket:"codenest-4a91a.firebasestorage.app",messagingSenderId:"389667673464",appId:"1:389667673464:web:2c24680059cfb11e1b248d"},c=!Object.values(s).some(e=>e.includes("YAHAN")),l=`
.cn-stage{display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 60px);padding:40px 16px;background:linear-gradient(to right,#e2e2e2,#c9d6ff);}
.cn-stage *{box-sizing:border-box;font-family:'Montserrat',sans-serif;}

.cn-container{background:#fff;border-radius:10px;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);position:relative;overflow:hidden;width:768px;max-width:100%;min-height:480px;color:#333;}

.cn-form-container{position:absolute;top:0;height:100%;transition:all .6s ease-in-out;}
.cn-sign-in{left:0;width:50%;z-index:2;}
.cn-container.cn-active .cn-sign-in{transform:translateX(100%);}
.cn-sign-up{left:0;width:50%;opacity:0;z-index:1;}
.cn-container.cn-active .cn-sign-up{transform:translateX(100%);opacity:1;z-index:5;animation:cn-show .6s;}
@keyframes cn-show{0%,49.99%{opacity:0;z-index:1;}50%,100%{opacity:1;z-index:5;}}

.cn-form{background:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:0 40px;height:100%;text-align:center;}
.cn-form h1{color:#333;font-weight:700;font-size:1.75rem;line-height:1.2;margin:0;}
.cn-social{margin:16px 0 14px;}
.cn-social button{border:1px solid #ddd;border-radius:50%;display:inline-flex;justify-content:center;align-items:center;margin:0 5px;height:40px;width:40px;background:#fff;color:#333;font-size:12px;font-weight:600;cursor:pointer;padding:0;}
.cn-social button:hover{border-color:#30aca5;}
.cn-sub{font-size:12px;color:#333;margin-bottom:6px;}
.cn-form input{background:#eee;border:none;padding:12px 15px;margin:8px 0;width:100%;font-size:13px;color:#333;border-radius:2px;outline:none;}
.cn-form input::placeholder{color:#777;}
.cn-form input:focus-visible{outline:2px solid #30aca5;outline-offset:1px;}
.cn-forgot{color:#333;font-size:13px;margin:14px 0 4px;background:none;border:none;cursor:pointer;padding:0;}
.cn-forgot:hover{text-decoration:underline;}

.cn-btn{border-radius:20px;border:1px solid #30aca5;background:#30aca5;color:#fff;font-size:12px;font-weight:700;padding:12px 45px;letter-spacing:1px;text-transform:uppercase;transition:transform 80ms ease-in;cursor:pointer;margin-top:12px;}
.cn-btn:active{transform:scale(.95);}
.cn-btn:focus-visible{outline:2px solid #185c5a;outline-offset:2px;}
.cn-btn:disabled{opacity:.6;cursor:wait;}
.cn-btn.cn-ghost{background:transparent;border-color:#fff;margin-top:0;}
.cn-btn.cn-ghost:focus-visible{outline-color:#fff;}

.cn-msg{font-size:12px;margin:12px 0 0;line-height:1.5;}
.cn-msg-ok{color:#0f7a5a;}
.cn-msg-err{color:#b3261e;}

.cn-overlay-container{position:absolute;top:0;left:50%;width:50%;height:100%;overflow:hidden;transition:transform .6s ease-in-out;z-index:100;}
.cn-container.cn-active .cn-overlay-container{transform:translateX(-100%);}
.cn-overlay{background:linear-gradient(to right,#185c5a,#22a49d);color:#fff;position:relative;left:-100%;height:100%;width:200%;transform:translateX(0);transition:transform .6s ease-in-out;}
.cn-container.cn-active .cn-overlay{transform:translateX(50%);}
.cn-overlay-panel{position:absolute;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:0 40px;text-align:center;top:0;height:100%;width:50%;transform:translateX(0);transition:transform .6s ease-in-out;}
.cn-overlay-left{transform:translateX(-20%);}
.cn-container.cn-active .cn-overlay-left{transform:translateX(0);}
.cn-overlay-right{right:0;transform:translateX(0);}
.cn-container.cn-active .cn-overlay-right{transform:translateX(20%);}
.cn-overlay-panel h1{color:#fff;font-weight:700;font-size:1.75rem;line-height:1.2;margin:0;}
.cn-overlay-panel p{color:#fff;font-size:13px;font-weight:300;line-height:1.6;letter-spacing:.3px;margin:20px 0 28px;}

.cn-switch-mobile{display:none;}
.cn-link{background:none;border:none;color:#1b7c7c;font-weight:700;cursor:pointer;text-decoration:underline;padding:0;font-size:13px;}

@media (max-width:720px){
  .cn-container{max-width:420px;min-height:0;}
  .cn-overlay-container{display:none;}
  .cn-form-container{position:relative;width:100%;height:auto;transform:none !important;opacity:1 !important;animation:none !important;}
  .cn-form{padding:32px 24px;height:auto;}
  .cn-container .cn-sign-up{display:none;}
  .cn-container.cn-active .cn-sign-up{display:block;}
  .cn-container.cn-active .cn-sign-in{display:none;}
  .cn-switch-mobile{display:block;font-size:13px;margin:18px 0 0;color:#333;}
}

@media (prefers-reduced-motion:reduce){
  .cn-stage *{transition:none !important;animation:none !important;}
}
`;function d(){let[e,n]=(0,i.useState)(!0),[d,p]=(0,i.useState)(""),[h,u]=(0,i.useState)(""),[m,g]=(0,i.useState)(""),[x,b]=(0,i.useState)(""),[f,y]=(0,i.useState)(""),[w,v]=(0,i.useState)(!1),[k,j]=(0,i.useState)(null),I=e=>{n(e),j(null)};async function N(e){if(!c)return void j({type:"err",text:"Firebase config abhi nahi bhari. login.js ke upar firebaseConfig mein apni values paste karein."});v(!0),j(null);try{let[{initializeApp:n,getApps:t},i]=await Promise.all([Promise.all([a.e("32498"),a.e("79940")]).then(a.bind(a,70223)),Promise.all([a.e("32498"),a.e("26760")]).then(a.bind(a,90971))]),o=t().length?t()[0]:n(s),r=await e(i.getAuth(o),i);j({type:"ok",text:r})}catch(e){j({type:"err",text:e&&({"auth/email-already-in-use":"Yeh email pehle se registered hai. Sign in karein.","auth/invalid-email":"Email sahi nahi hai.","auth/weak-password":"Password kam az kam 6 huroof ka hona chahiye.","auth/invalid-credential":"Email ya password galat hai.","auth/user-not-found":"Is email ka koi account nahi mila.","auth/wrong-password":"Password galat hai.","auth/too-many-requests":"Bohat zyada koshishein ho gayin. Thori der baad try karein.","auth/popup-closed-by-user":"Google ka window band ho gaya.","auth/operation-not-allowed":"Firebase console mein yeh sign-in method abhi chalu nahi kiya gaya.","auth/unauthorized-domain":"Yeh domain Firebase ke Authorized domains mein add nahi hai.","auth/network-request-failed":"Internet ka masla hai. Dobara try karein."})[e.code]||"Kuch masla aa gaya. Dobara try karein."})}finally{v(!1)}}let C=()=>N(async(e,n)=>(await n.signInWithPopup(e,new n.GoogleAuthProvider),"Google se login ho gaya!")),z=()=>j({type:"err",text:"Yeh option abhi available nahi hai. Google ya email istemal karein."}),S=e?0:-1,P=e?-1:0,A=()=>k?(0,t.jsx)("p",{role:"status",className:"cn-msg "+("ok"===k.type?"cn-msg-ok":"cn-msg-err"),children:k.text}):null;return(0,t.jsxs)(o.A,{title:"Login",description:"CodeNest account mein login ya sign up karein",children:[(0,t.jsxs)(r.A,{children:[(0,t.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,t.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),(0,t.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap",rel:"stylesheet"})]}),(0,t.jsx)("style",{children:l}),(0,t.jsx)("main",{className:"cn-stage",children:(0,t.jsxs)("div",{className:"cn-container"+(e?" cn-active":""),children:[(0,t.jsx)("div",{className:"cn-form-container cn-sign-up","aria-hidden":!e,children:(0,t.jsxs)("form",{className:"cn-form",onSubmit:e=>{e.preventDefault(),N(async(e,n)=>{let a=await n.createUserWithEmailAndPassword(e,h,m);return d.trim()&&await n.updateProfile(a.user,{displayName:d.trim()}),"Account ban gaya! Khush aamdeed."})},children:[(0,t.jsx)("h1",{children:"Create Account"}),(0,t.jsxs)("div",{className:"cn-social",children:[(0,t.jsx)("button",{type:"button","aria-label":"Facebook",tabIndex:S,onClick:z,children:"f"}),(0,t.jsx)("button",{type:"button","aria-label":"Google",tabIndex:S,onClick:C,children:"G+"}),(0,t.jsx)("button",{type:"button","aria-label":"LinkedIn",tabIndex:S,onClick:z,children:"in"})]}),(0,t.jsx)("span",{className:"cn-sub",children:"or use your email for registration"}),(0,t.jsx)("input",{type:"text",placeholder:"Name","aria-label":"Name",autoComplete:"name",required:!0,tabIndex:S,value:d,onChange:e=>p(e.target.value)}),(0,t.jsx)("input",{type:"email",placeholder:"Email","aria-label":"Email",autoComplete:"email",required:!0,tabIndex:S,value:h,onChange:e=>u(e.target.value)}),(0,t.jsx)("input",{type:"password",placeholder:"Password","aria-label":"Password",autoComplete:"new-password",minLength:6,required:!0,tabIndex:S,value:m,onChange:e=>g(e.target.value)}),(0,t.jsx)("button",{className:"cn-btn",type:"submit",disabled:w,tabIndex:S,children:"Sign Up"}),e&&A(),(0,t.jsxs)("p",{className:"cn-switch-mobile",children:["Account hai?"," ",(0,t.jsx)("button",{type:"button",className:"cn-link",onClick:()=>I(!1),children:"Sign in"})]})]})}),(0,t.jsx)("div",{className:"cn-form-container cn-sign-in","aria-hidden":e,children:(0,t.jsxs)("form",{className:"cn-form",onSubmit:e=>{e.preventDefault(),N(async(e,n)=>(await n.signInWithEmailAndPassword(e,x,f),"Login ho gaya!"))},children:[(0,t.jsx)("h1",{children:"Sign in"}),(0,t.jsxs)("div",{className:"cn-social",children:[(0,t.jsx)("button",{type:"button","aria-label":"Facebook",tabIndex:P,onClick:z,children:"f"}),(0,t.jsx)("button",{type:"button","aria-label":"Google",tabIndex:P,onClick:C,children:"G+"}),(0,t.jsx)("button",{type:"button","aria-label":"LinkedIn",tabIndex:P,onClick:z,children:"in"})]}),(0,t.jsx)("span",{className:"cn-sub",children:"or use your account"}),(0,t.jsx)("input",{type:"email",placeholder:"Email","aria-label":"Email",autoComplete:"email",required:!0,tabIndex:P,value:x,onChange:e=>b(e.target.value)}),(0,t.jsx)("input",{type:"password",placeholder:"Password","aria-label":"Password",autoComplete:"current-password",required:!0,tabIndex:P,value:f,onChange:e=>y(e.target.value)}),(0,t.jsx)("button",{type:"button",className:"cn-forgot",tabIndex:P,onClick:()=>{x?N(async(e,n)=>(await n.sendPasswordResetEmail(e,x),"Password reset ki email bhej di gayi hai.")):j({type:"err",text:'Pehle apni email likhein, phir "Forgot your password?" dabayein.'})},children:"Forgot your password?"}),(0,t.jsx)("button",{className:"cn-btn",type:"submit",disabled:w,tabIndex:P,children:"Sign In"}),!e&&A(),(0,t.jsxs)("p",{className:"cn-switch-mobile",children:["Account nahi hai?"," ",(0,t.jsx)("button",{type:"button",className:"cn-link",onClick:()=>I(!0),children:"Sign up"})]})]})}),(0,t.jsx)("div",{className:"cn-overlay-container",children:(0,t.jsxs)("div",{className:"cn-overlay",children:[(0,t.jsxs)("div",{className:"cn-overlay-panel cn-overlay-left",children:[(0,t.jsx)("h1",{children:"Welcome Back!"}),(0,t.jsx)("p",{children:"To keep connected with us please login with your personal info"}),(0,t.jsx)("button",{type:"button",className:"cn-btn cn-ghost",tabIndex:S,onClick:()=>I(!1),children:"Sign In"})]}),(0,t.jsxs)("div",{className:"cn-overlay-panel cn-overlay-right",children:[(0,t.jsx)("h1",{children:"Hello, Friend!"}),(0,t.jsx)("p",{children:"Enter your personal details and start journey with us"}),(0,t.jsx)("button",{type:"button",className:"cn-btn cn-ghost",tabIndex:P,onClick:()=>I(!0),children:"Sign Up"})]})]})})]})})]})}}}]);