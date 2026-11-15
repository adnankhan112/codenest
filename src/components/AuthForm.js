import React, {useState} from 'react';
import {useHistory} from '@docusaurus/router';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import {auth} from '../firebase';
import '../css/auth.css';

const h = React.createElement;

function friendlyError(code) {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'This email already has an account. Please sign in.';
    case 'auth/invalid-email':
      return 'This email address is not valid.';
    case 'auth/weak-password':
      return 'Password is too weak. Use at least 6 characters.';
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'Wrong email or password.';
    case 'auth/too-many-requests':
      return 'Too many tries. Please wait a few minutes and try again.';
    case 'auth/network-request-failed':
      return 'Network problem. Please check your internet.';
    case 'auth/popup-closed-by-user':
    case 'auth/cancelled-popup-request':
      return 'The Google window was closed. Please try again.';
    case 'auth/operation-not-allowed':
      return 'This sign in method is not turned on in Firebase yet.';
    case 'auth/unauthorized-domain':
      return 'This website address is not allowed in Firebase yet.';
    default:
      return 'Something went wrong. Please try again.';
  }
}

export default function AuthForm(props) {
  const history = useHistory();
  const [signup, setSignup] = useState(props.mode === 'signup');

  const [name, setName] = useState('');
  const [upEmail, setUpEmail] = useState('');
  const [upPassword, setUpPassword] = useState('');
  const [inEmail, setInEmail] = useState('');
  const [inPassword, setInPassword] = useState('');

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);

  function clearNotes() {
    setError('');
    setMessage('');
  }

  function switchTo(isSignup) {
    clearNotes();
    setSignup(isSignup);
  }

  async function handleSignup(event) {
    event.preventDefault();
    clearNotes();
    setBusy(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, upEmail, upPassword);
      if (name.trim()) {
        await updateProfile(result.user, {displayName: name.trim()});
      }
      history.push('/');
    } catch (err) {
      setError(friendlyError(err && err.code));
    } finally {
      setBusy(false);
    }
  }

  async function handleSignin(event) {
    event.preventDefault();
    clearNotes();
    setBusy(true);
    try {
      await signInWithEmailAndPassword(auth, inEmail, inPassword);
      history.push('/');
    } catch (err) {
      setError(friendlyError(err && err.code));
    } finally {
      setBusy(false);
    }
  }

  async function handleGoogle() {
    clearNotes();
    setBusy(true);
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      history.push('/');
    } catch (err) {
      setError(friendlyError(err && err.code));
    } finally {
      setBusy(false);
    }
  }

  async function handleReset(event) {
    event.preventDefault();
    clearNotes();
    if (!inEmail) {
      setError('Please type your email first.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, inEmail);
      setMessage('Password reset email sent. Please check your inbox.');
    } catch (err) {
      setError(friendlyError(err && err.code));
    }
  }

  function socialRow() {
    return h(
      'div',
      {className: 'cn-social'},
      h(
        'button',
        {
          type: 'button',
          title: 'Continue with Google',
          'aria-label': 'Continue with Google',
          onClick: handleGoogle,
          disabled: busy,
        },
        'G',
      ),
    );
  }

  function notes() {
    const out = [];
    if (error) {
      out.push(h('p', {key: 'e', className: 'cn-msg cn-msg-error'}, error));
    }
    if (message) {
      out.push(h('p', {key: 'm', className: 'cn-msg cn-msg-ok'}, message));
    }
    return out;
  }

  const signupForm = h(
    'div',
    {className: 'cn-form-box cn-signup-box'},
    h(
      'form',
      {className: 'cn-form', onSubmit: handleSignup},
      h('h1', null, 'Create Account'),
      socialRow(),
      h('span', {className: 'cn-small'}, 'or use your email for registration'),
      h('input', {
        className: 'cn-input',
        type: 'text',
        placeholder: 'Name',
        value: name,
        onChange: (e) => setName(e.target.value),
        autoComplete: 'name',
      }),
      h('input', {
        className: 'cn-input',
        type: 'email',
        placeholder: 'Email',
        value: upEmail,
        required: true,
        onChange: (e) => setUpEmail(e.target.value),
        autoComplete: 'email',
      }),
      h('input', {
        className: 'cn-input',
        type: 'password',
        placeholder: 'Password',
        value: upPassword,
        required: true,
        minLength: 6,
        onChange: (e) => setUpPassword(e.target.value),
        autoComplete: 'new-password',
      }),
      h('button', {type: 'submit', className: 'cn-slide-btn', disabled: busy}, busy ? 'Please wait' : 'Sign Up'),
      ...(signup ? notes() : []),
      h(
        'p',
        {className: 'cn-mobile-switch'},
        'Already have an account? ',
        h('button', {type: 'button', onClick: () => switchTo(false)}, 'Sign in'),
      ),
    ),
  );

  const signinForm = h(
    'div',
    {className: 'cn-form-box cn-signin-box'},
    h(
      'form',
      {className: 'cn-form', onSubmit: handleSignin},
      h('h1', null, 'Sign in'),
      socialRow(),
      h('span', {className: 'cn-small'}, 'or use your account'),
      h('input', {
        className: 'cn-input',
        type: 'email',
        placeholder: 'Email',
        value: inEmail,
        required: true,
        onChange: (e) => setInEmail(e.target.value),
        autoComplete: 'email',
      }),
      h('input', {
        className: 'cn-input',
        type: 'password',
        placeholder: 'Password',
        value: inPassword,
        required: true,
        onChange: (e) => setInPassword(e.target.value),
        autoComplete: 'current-password',
      }),
      h('a', {className: 'cn-link', href: '#', onClick: handleReset}, 'Forgot your password?'),
      h('button', {type: 'submit', className: 'cn-slide-btn', disabled: busy}, busy ? 'Please wait' : 'Sign In'),
      ...(!signup ? notes() : []),
      h(
        'p',
        {className: 'cn-mobile-switch'},
        'New to CodeNest? ',
        h('button', {type: 'button', onClick: () => switchTo(true)}, 'Create an account'),
      ),
    ),
  );

  const overlay = h(
    'div',
    {className: 'cn-overlay-box'},
    h(
      'div',
      {className: 'cn-overlay'},
      h(
        'div',
        {className: 'cn-overlay-panel cn-overlay-left'},
        h('h1', null, 'Welcome Back!'),
        h('p', null, 'To keep connected with us please login with your personal info'),
        h('button', {type: 'button', className: 'cn-slide-btn cn-ghost', onClick: () => switchTo(false)}, 'Sign In'),
      ),
      h(
        'div',
        {className: 'cn-overlay-panel cn-overlay-right'},
        h('h1', null, 'Hello, Friend!'),
        h('p', null, 'Enter your personal details and start journey with us'),
        h('button', {type: 'button', className: 'cn-slide-btn cn-ghost', onClick: () => switchTo(true)}, 'Sign Up'),
      ),
    ),
  );

  return h(
    'div',
    {className: 'cn-slide-page'},
    h('div', {className: signup ? 'cn-slide cn-right-active' : 'cn-slide'}, signupForm, signinForm, overlay),
  );
}
