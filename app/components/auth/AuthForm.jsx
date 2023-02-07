import {FaLock, FaUserPlus} from 'react-icons/fa';
import { Link, useSearchParams } from '@remix-run/react'

function AuthForm() {
  
    const [searchParams] = useSearchParams()
    const authMode = searchParams.get('mode') || 'login'

    const submitBtn = authMode === 'login' ? 'Login' : 'Sign Up'
    const toggleBtn = authMode === 'login' ? 'Create a New User' : 'Log in with existing user'
  return (
    <form method="post" className="form" id="auth-form">
      <div className="icon-img">
       { authMode === 'login' ?  <FaLock /> : <FaUserPlus />}
      </div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      <div className="form-actions">
            <button>{submitBtn}</button>
            <Link to={authMode === 'login' ? '?mode=signup' : '?mode=login'}>{toggleBtn}</Link>
      </div>
    </form>
  );
}

export default AuthForm;
