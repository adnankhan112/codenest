import React, {useState} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

// ======================================================================
// FIREBASE CONFIG
// Firebase console -> Project settings -> Your apps -> Web app se
// in 4 values ko copy karke yahan 'YAHAN_PASTE_KAREIN' ki jagah daalein.
// ======================================================================
const firebaseConfig = {
  apiKey: "AIzaSyBvq18LrwL-AfL_V2IsoE_fVS5J2QV92Q8",
  authDomain: "codenest-4a91a.firebaseapp.com",
  projectId: "codenest-4a91a",
  storageBucket: "codenest-4a91a.firebasestorage.app",
  messagingSenderId: "389667673464",
  appId: "1:389667673464:web:2c24680059cfb11e1b248d"
};


const configReady = !Object.values(firebaseConfig).some((v) =>
  v.includes('YAHAN'),
);

function friendlyError(e) {
  const map = {
    'auth/email-already-in-use':
      'Yeh email pehle se registered hai. Sign in karein.',
    'auth/invalid-email': 'Email sahi nahi hai.',
    'auth/weak-password': 'Password kam az kam 6 huroof ka hona chahiye.',
    'auth/invalid-credential': 'Email ya password galat hai.',
    'auth/user-not-found': 'Is email ka koi account nahi mila.',
    'auth/wrong-password': 'Password galat hai.',
    'auth/too-many-requests':
      'Bohat zyada koshishein ho gayin. Thori der baad try karein.',
    'auth/popup-closed-by-user': 'Google ka window band ho gaya.',
    'auth/operation-not-allowed':
      'Firebase console mein yeh sign-in method abhi chalu nahi kiya gaya.',
    'auth/unauthorized-domain':
      'Yeh domain Firebase ke Authorized domains mein add nahi hai.',
    'auth/network-request-failed': 'Internet ka masla hai. Dobara try karein.',
  };
  return (e && map[e.code]) || 'Kuch masla aa gaya. Dobara try karein.';
}

const css = `
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
`;

export default function Login() {
  // Video ki tarah pehle "Create Account" nazar aata hai
  const [signUpMode, setSignUpMode] = useState(true);
  const [name, setName] = useState('');
  const [suEmail, setSuEmail] = useState('');
  const [suPassword, setSuPassword] = useState('');
  const [siEmail, setSiEmail] = useState('');
  const [siPassword, setSiPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState(null);

  const switchMode = (toSignUp) => {
    setSignUpMode(toSignUp);
    setMsg(null);
  };

  // Firebase sirf tab load hota hai jab user button dabaye
  async function withAuth(task) {
    if (!configReady) {
      setMsg({
        type: 'err',
        text: 'Firebase config abhi nahi bhari. login.js ke upar firebaseConfig mein apni values paste karein.',
      });
      return;
    }
    setBusy(true);
    setMsg(null);
    try {
      const [{initializeApp, getApps}, authMod] = await Promise.all([
        import('firebase/app'),
        import('firebase/auth'),
      ]);
      const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
      const text = await task(authMod.getAuth(app), authMod);
      setMsg({type: 'ok', text});
    } catch (e) {
      setMsg({type: 'err', text: friendlyError(e)});
    } finally {
      setBusy(false);
    }
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    withAuth(async (auth, m) => {
      const cred = await m.createUserWithEmailAndPassword(
        auth,
        suEmail,
        suPassword,
      );
      if (name.trim()) {
        await m.updateProfile(cred.user, {displayName: name.trim()});
      }
      return 'Account ban gaya! Khush aamdeed.';
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    withAuth(async (auth, m) => {
      await m.signInWithEmailAndPassword(auth, siEmail, siPassword);
      return 'Login ho gaya!';
    });
  };

  const handleReset = () => {
    if (!siEmail) {
      setMsg({
        type: 'err',
        text: 'Pehle apni email likhein, phir "Forgot your password?" dabayein.',
      });
      return;
    }
    withAuth(async (auth, m) => {
      await m.sendPasswordResetEmail(auth, siEmail);
      return 'Password reset ki email bhej di gayi hai.';
    });
  };

  const handleGoogle = () =>
    withAuth(async (auth, m) => {
      await m.signInWithPopup(auth, new m.GoogleAuthProvider());
      return 'Google se login ho gaya!';
    });

  const comingSoon = () =>
    setMsg({
      type: 'err',
      text: 'Yeh option abhi available nahi hai. Google ya email istemal karein.',
    });

  // Jo form nazar nahi aa raha, uske fields par Tab na ruke
  const tabSignUp = signUpMode ? 0 : -1;
  const tabSignIn = signUpMode ? -1 : 0;

  const renderMsg = () =>
    msg ? (
      <p
        role="status"
        className={'cn-msg ' + (msg.type === 'ok' ? 'cn-msg-ok' : 'cn-msg-err')}>
        {msg.text}
      </p>
    ) : null;

  return (
    <Layout title="Login" description="CodeNest account mein login ya sign up karein">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style>{css}</style>

      <main className="cn-stage">
        <div className={'cn-container' + (signUpMode ? ' cn-active' : '')}>
          {/* ---------- Create Account ---------- */}
          <div className="cn-form-container cn-sign-up" aria-hidden={!signUpMode}>
            <form className="cn-form" onSubmit={handleSignUp}>
              <h1>Create Account</h1>
              <div className="cn-social">
                <button type="button" aria-label="Facebook" tabIndex={tabSignUp} onClick={comingSoon}>f</button>
                <button type="button" aria-label="Google" tabIndex={tabSignUp} onClick={handleGoogle}>G+</button>
                <button type="button" aria-label="LinkedIn" tabIndex={tabSignUp} onClick={comingSoon}>in</button>
              </div>
              <span className="cn-sub">or use your email for registration</span>
              <input type="text" placeholder="Name" aria-label="Name" autoComplete="name" required tabIndex={tabSignUp} value={name} onChange={(e) => setName(e.target.value)} />
              <input type="email" placeholder="Email" aria-label="Email" autoComplete="email" required tabIndex={tabSignUp} value={suEmail} onChange={(e) => setSuEmail(e.target.value)} />
              <input type="password" placeholder="Password" aria-label="Password" autoComplete="new-password" minLength={6} required tabIndex={tabSignUp} value={suPassword} onChange={(e) => setSuPassword(e.target.value)} />
              <button className="cn-btn" type="submit" disabled={busy} tabIndex={tabSignUp}>Sign Up</button>
              {signUpMode && renderMsg()}
              <p className="cn-switch-mobile">
                Account hai?{' '}
                <button type="button" className="cn-link" onClick={() => switchMode(false)}>Sign in</button>
              </p>
            </form>
          </div>

          {/* ---------- Sign in ---------- */}
          <div className="cn-form-container cn-sign-in" aria-hidden={signUpMode}>
            <form className="cn-form" onSubmit={handleSignIn}>
              <h1>Sign in</h1>
              <div className="cn-social">
                <button type="button" aria-label="Facebook" tabIndex={tabSignIn} onClick={comingSoon}>f</button>
                <button type="button" aria-label="Google" tabIndex={tabSignIn} onClick={handleGoogle}>G+</button>
                <button type="button" aria-label="LinkedIn" tabIndex={tabSignIn} onClick={comingSoon}>in</button>
              </div>
              <span className="cn-sub">or use your account</span>
              <input type="email" placeholder="Email" aria-label="Email" autoComplete="email" required tabIndex={tabSignIn} value={siEmail} onChange={(e) => setSiEmail(e.target.value)} />
              <input type="password" placeholder="Password" aria-label="Password" autoComplete="current-password" required tabIndex={tabSignIn} value={siPassword} onChange={(e) => setSiPassword(e.target.value)} />
              <button type="button" className="cn-forgot" tabIndex={tabSignIn} onClick={handleReset}>Forgot your password?</button>
              <button className="cn-btn" type="submit" disabled={busy} tabIndex={tabSignIn}>Sign In</button>
              {!signUpMode && renderMsg()}
              <p className="cn-switch-mobile">
                Account nahi hai?{' '}
                <button type="button" className="cn-link" onClick={() => switchMode(true)}>Sign up</button>
              </p>
            </form>
          </div>

          {/* ---------- Sliding teal panel ---------- */}
          <div className="cn-overlay-container">
            <div className="cn-overlay">
              <div className="cn-overlay-panel cn-overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button type="button" className="cn-btn cn-ghost" tabIndex={tabSignUp} onClick={() => switchMode(false)}>Sign In</button>
              </div>
              <div className="cn-overlay-panel cn-overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button type="button" className="cn-btn cn-ghost" tabIndex={tabSignIn} onClick={() => switchMode(true)}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}