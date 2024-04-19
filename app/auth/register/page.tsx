



import Register from '@/app/ui/register/registerForm.js'
import Link from 'next/link';

export default function Page() {
    return(<div className="w-fit flex flex-col justify-center items-center mx-auto">
        <h1 className="text-5xl text-black font-extrabold ">Register</h1>
        <Register/>
        <div className="text-black font-bold text-lg">Already have an account?<Link href="/auth/login" className="font-bold text-[--pc] hover:text-green-950"> Log In</Link></div>
    </div>);
}