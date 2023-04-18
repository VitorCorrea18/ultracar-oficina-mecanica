import { ILoginPresenterProps } from './interfaces';
import { PrimaryButton } from '../../Components';
import Logo from '../../Assets/Images/Logo.png';

export default function LoginPresenter({
  handleLogin,
  email,
  setEmail,
  password,
  setPassword,
  loginFailed
}: ILoginPresenterProps) {
  return (
    <main className='login-page-main'>
      <section className='login-page-form-section-container'>
        <div className='login-page-form-logo-container'>
        <img src={Logo} alt="Logo" className='logo-image' />
        </div>
        <div className='container mt-5'>
          <h1 className='login-page-title'>Login</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className='form-group'>
              <label>Email:</label>
              <input
                className='form-control input-control'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label>Password:</label>
              <input
                className='form-control input-control'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {
                loginFailed && <p className='login-failed-text'>Email ou senha incorretos</p>
              }
            </div>
            <div className='form-button-control'>
              <PrimaryButton
                type={'submit'}
                text={'Login'}
                onClick={() => handleLogin(email,password)}
                className='btn-lg login-form-btn'
              />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};
