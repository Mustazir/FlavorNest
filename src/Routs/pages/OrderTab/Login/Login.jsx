import { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const [disable, setDisable] = useState(true);
  const [visible,setVisible]=useState(true)

  const captchaRef = useRef(null);
  const handleValidateCaptcha = () => {
    const value = captchaRef.current.value;
    if (validateCaptcha(value) == true) {
      setDisable(false)
      setVisible(false)
      alert("Captcha Matched");
    } else {
      alert("Captcha Does Not Match");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className={`form-control ${visible ? 'flex' : 'hidden'}`} >
                <LoadCanvasTemplate />
                <label className="label"></label>
                <input
                  type="text"
                  ref={captchaRef}
                  name="captcha"
                  placeholder="type captcha"
                  className="input input-bordered"
                  required
                />
                <button
                  
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-xs mt-3"
                >
                  Validate
                </button>
              </div>

              <div className="form-control mt-6">
                <input
                disabled={disable}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
