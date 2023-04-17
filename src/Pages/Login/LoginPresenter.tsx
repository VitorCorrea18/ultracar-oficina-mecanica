import { ILoginPresenterProps } from './interfaces';
import { PrimaryButton } from '../../Components';

export default function LoginPresenter({
  handleLogin,
  email,
  setEmail,
  password,
  setPassword,
}: ILoginPresenterProps) {
  return (
    <div className='login_page_container'>
      <h1 className='login_page_title'>Login</h1>
      <form className='login_page_form' onSubmit={(e) => e.preventDefault()}>
        <div className='__form_label_container'>
          <label className='__form_label'>
            Email:
            <input
              className='input_control'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className='__form_label_container'>
          <label className='__form_label'>
            Password:
            <input
              className='input_control'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <PrimaryButton
          type={'submit'}
          text={'Login'}
          onClick={handleLogin}
        />
      </form>
    </div>
  );
};