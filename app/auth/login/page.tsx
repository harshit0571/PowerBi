import FormLogin from "@/app/ui/login/formInner";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl text-black font-extrabold ">Login</h1>
      <FormLogin />
      <div className="text-black font-bold">
        Forgot password?
        <Link
          href="/reset"
          className="font-bold text-[--pc] hover:text-green-950"
        >
          {" "}
          Reset
        </Link>
      </div>
      <div className="text-black font-bold">
        Don't have an account?
        <Link
          href="/auth/register"
          className="font-bold text-[--pc] hover:text-green-950"
        >
          {" "}
          Sign up
        </Link>
      </div>
    </div>
  );
}