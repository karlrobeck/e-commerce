import { A } from "@solidjs/router";
import { Component } from "solid-js";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import Input from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Separator } from "~/components/ui/separator";
const RegisterPage: Component<{}> = (props) => {
  return (
    <main class="h-screen max-h-screen flex flex-col justify-center items-center">
      <form action="" class="space-y-5 md:w-1/2 w-full p-4">
        <div>
          <h4>Sign up to your Shopping Account</h4>
          <span class="muted large">Shop now with us</span>
        </div>
        <div class="gap-2.5 grid grid-cols-1 md:grid-cols-2">
          <Button class="gap-2.5" variant={"outline"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="16"
              height="16"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Sign in with google
          </Button>
          <Button class="gap-2.5" variant={"outline"}>
            <img
              width={16}
              height={16}
              src="https://www.svgrepo.com/show/69341/apple-logo.svg"
              alt=""
            />
            <span>Sign in with apple</span>
          </Button>
        </div>
        <Separator />
        <div>
          <Label>Full name</Label>
          <Input placeholder="John Doe" />
        </div>
        <div>
          <Label>Email</Label>
          <Input placeholder="you@gmail.com" />
        </div>
        <div class="space-y-2.5">
          <div class="flex flex-row justify-between items-center">
            <Label>Password</Label>
          </div>
          <Input placeholder="********" />
          <Input placeholder="********" />
        </div>
        <div class="flex items-center gap-2.5">
          <Checkbox />
          <Label>I accept the Terms and Condition</Label>
        </div>
        <Button class="w-full">Sign In</Button>
        <div class="flex flex-row items-center gap-2.5">
          <span class="small">Already have an account?</span>
          <Button as={A} href="/security/login" variant={"link"} class="p-0">
            Sign in
          </Button>
        </div>
      </form>
    </main>
  );
};

export default RegisterPage;
