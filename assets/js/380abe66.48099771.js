"use strict";(self.webpackChunkcodenest=self.webpackChunkcodenest||[]).push([["14745"],{94837(e,n,t){t.r(n),t.d(n,{default:()=>d});var a=t(74848),i=t(96540),o=t(21085),r=t(53572);let s={apiKey:"AIzaSyBvq18LrwL-AfL_V2IsoE_fVS5J2QV92Q8",authDomain:"codenest-4a91a.firebaseapp.com",projectId:"codenest-4a91a",storageBucket:"codenest-4a91a.firebasestorage.app",messagingSenderId:"389667673464",appId:"1:389667673464:web:2c24680059cfb11e1b248d"},c=!Object.values(s).some(e=>e.includes("YAHAN")),l=`
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
`;function d(){let[e,n]=(0,i.useState)(!0),[d,p]=(0,i.useState)(""),[u,h]=(0,i.useState)(""),[m,g]=(0,i.useState)(""),[f,x]=(0,i.useState)(""),[b,y]=(0,i.useState)(""),[w,v]=(0,i.useState)(!1),[j,k]=(0,i.useState)(null),N=e=>{n(e),k(null)};async function C(e){if(!c)return void k({type:"err",text:"Firebase config is not filled in yet. Please paste your values into firebaseConfig at the top of login.js."});v(!0),k(null);try{let[{initializeApp:n,getApps:a},i]=await Promise.all([Promise.all([t.e("32498"),t.e("79940")]).then(t.bind(t,70223)),Promise.all([t.e("32498"),t.e("26760")]).then(t.bind(t,90971))]),o=a().length?a()[0]:n(s),r=await e(i.getAuth(o),i);k({type:"ok",text:r})}catch(e){k({type:"err",text:e&&({"auth/email-already-in-use":"This email address is already registered. Please sign in.","auth/invalid-email":"Please enter a valid email address.","auth/weak-password":"Your password must be at least 6 characters long.","auth/invalid-credential":"The email address or password is incorrect.","auth/user-not-found":"No account was found with this email address.","auth/wrong-password":"The password you entered is incorrect.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Google sign-in was cancelled. Please try again.","auth/operation-not-allowed":"This sign-in method is not enabled. Please enable it in your Firebase project settings.","auth/unauthorized-domain":"This domain is not authorized for sign-in. Please add it to the Authorized domains list in Firebase.","auth/network-request-failed":"Unable to connect. Please check your internet connection and try again."})[e.code]||"Something went wrong. Please try again."})}finally{v(!1)}}let I=()=>C(async(e,n)=>(await n.signInWithPopup(e,new n.GoogleAuthProvider),"Logged in with Google successfully!")),P=()=>k({type:"err",text:"This option is not available yet. Please use Google or email to sign in."}),z=e?0:-1,S=e?-1:0,A=()=>j?(0,a.jsx)("p",{role:"status",className:"cn-msg "+("ok"===j.type?"cn-msg-ok":"cn-msg-err"),children:j.text}):null;return(0,a.jsxs)(o.A,{title:"Login",description:"Log in or sign up to your CodeNest account",children:[(0,a.jsxs)(r.A,{children:[(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap",rel:"stylesheet"})]}),(0,a.jsx)("style",{children:l}),(0,a.jsx)("main",{className:"cn-stage",children:(0,a.jsxs)("div",{className:"cn-container"+(e?" cn-active":""),children:[(0,a.jsx)("div",{className:"cn-form-container cn-sign-up","aria-hidden":!e,children:(0,a.jsxs)("form",{className:"cn-form",onSubmit:e=>{e.preventDefault(),C(async(e,n)=>{let t=await n.createUserWithEmailAndPassword(e,u,m);return d.trim()&&await n.updateProfile(t.user,{displayName:d.trim()}),"Welcome to CodeNest! Your account has been created."})},children:[(0,a.jsx)("h1",{children:"Create Account"}),(0,a.jsxs)("div",{className:"cn-social",children:[(0,a.jsx)("button",{type:"button","aria-label":"Facebook",tabIndex:z,onClick:P,children:"f"}),(0,a.jsx)("button",{type:"button","aria-label":"Google",tabIndex:z,onClick:I,children:"G+"}),(0,a.jsx)("button",{type:"button","aria-label":"LinkedIn",tabIndex:z,onClick:P,children:"in"})]}),(0,a.jsx)("span",{className:"cn-sub",children:"or use your email for registration"}),(0,a.jsx)("input",{type:"text",placeholder:"Name","aria-label":"Name",autoComplete:"name",required:!0,tabIndex:z,value:d,onChange:e=>p(e.target.value)}),(0,a.jsx)("input",{type:"email",placeholder:"Email","aria-label":"Email",autoComplete:"email",required:!0,tabIndex:z,value:u,onChange:e=>h(e.target.value)}),(0,a.jsx)("input",{type:"password",placeholder:"Password","aria-label":"Password",autoComplete:"new-password",minLength:6,required:!0,tabIndex:z,value:m,onChange:e=>g(e.target.value)}),(0,a.jsx)("button",{className:"cn-btn",type:"submit",disabled:w,tabIndex:z,children:"Sign Up"}),e&&A(),(0,a.jsxs)("p",{className:"cn-switch-mobile",children:["Already have an account?"," ",(0,a.jsx)("button",{type:"button",className:"cn-link",onClick:()=>N(!1),children:"Sign in"})]})]})}),(0,a.jsx)("div",{className:"cn-form-container cn-sign-in","aria-hidden":e,children:(0,a.jsxs)("form",{className:"cn-form",onSubmit:e=>{e.preventDefault(),C(async(e,n)=>(await n.signInWithEmailAndPassword(e,f,b),"Login successful!"))},children:[(0,a.jsx)("h1",{children:"Sign in"}),(0,a.jsxs)("div",{className:"cn-social",children:[(0,a.jsx)("button",{type:"button","aria-label":"Facebook",tabIndex:S,onClick:P,children:"f"}),(0,a.jsx)("button",{type:"button","aria-label":"Google",tabIndex:S,onClick:I,children:"G+"}),(0,a.jsx)("button",{type:"button","aria-label":"LinkedIn",tabIndex:S,onClick:P,children:"in"})]}),(0,a.jsx)("span",{className:"cn-sub",children:"or use your account"}),(0,a.jsx)("input",{type:"email",placeholder:"Email","aria-label":"Email",autoComplete:"email",required:!0,tabIndex:S,value:f,onChange:e=>x(e.target.value)}),(0,a.jsx)("input",{type:"password",placeholder:"Password","aria-label":"Password",autoComplete:"current-password",required:!0,tabIndex:S,value:b,onChange:e=>y(e.target.value)}),(0,a.jsx)("button",{type:"button",className:"cn-forgot",tabIndex:S,onClick:()=>{f?C(async(e,n)=>(await n.sendPasswordResetEmail(e,f),"A password reset email has been sent.")):k({type:"err",text:'Please enter your email address first, then click "Forgot your password?".'})},children:"Forgot your password?"}),(0,a.jsx)("button",{className:"cn-btn",type:"submit",disabled:w,tabIndex:S,children:"Sign In"}),!e&&A(),(0,a.jsxs)("p",{className:"cn-switch-mobile",children:["Don't have an account?"," ",(0,a.jsx)("button",{type:"button",className:"cn-link",onClick:()=>N(!0),children:"Sign up"})]})]})}),(0,a.jsx)("div",{className:"cn-overlay-container",children:(0,a.jsxs)("div",{className:"cn-overlay",children:[(0,a.jsxs)("div",{className:"cn-overlay-panel cn-overlay-left",children:[(0,a.jsx)("h1",{children:"Welcome Back!"}),(0,a.jsx)("p",{children:"To keep connected with us please login with your personal info"}),(0,a.jsx)("button",{type:"button",className:"cn-btn cn-ghost",tabIndex:z,onClick:()=>N(!1),children:"Sign In"})]}),(0,a.jsxs)("div",{className:"cn-overlay-panel cn-overlay-right",children:[(0,a.jsx)("h1",{children:"Hello, Friend!"}),(0,a.jsx)("p",{children:"Enter your personal details and start journey with us"}),(0,a.jsx)("button",{type:"button",className:"cn-btn cn-ghost",tabIndex:S,onClick:()=>N(!0),children:"Sign Up"})]})]})})]})})]})}}}]);