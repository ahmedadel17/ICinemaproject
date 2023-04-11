import Button from "./Button";
import Input from "./Input";

function SignupForm() {
  return (
    <div className="mx-auto md:w-120 lg:w-auto">
      <p className="text-dark font-light text-2xl text-center mb-7 dark:text-white">
        Create account !
      </p>

      <div>
        <form action="" className="">
          <Input
            type="text"
            id="name"
            placeholder="Galaxy Cinema"
            label="Cinema name"
          />

          <Input
            type="email"
            id="email"
            placeholder="galaxycinema@gmail.com"
            label="E-mail"
          />

          <Input
            type="password"
            id="password"
            placeholder="Enter password here!"
            label="Password"
          />

          <Input
            type="password"
            id="confirm-password"
            placeholder="Enter password here!"
            label="Confirm Password"
          />

          <div className="flex justify-center mt-7">
            <Button fild>Sign up</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
