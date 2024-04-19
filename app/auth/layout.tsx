import Image from 'next/image';

export default function Layout({children} : {
    children : React.ReactNode
}) {
    return(<div className="w-screen h-screen overflow-hidden grid grid-cols-1 md:grid-cols-2">
            <div className="hidden md:flex overflow-hidden items-center justify-center bg-login-wall">
            <Image className="w-2/3" src="/logo_white_notagline.png" width="500" height="1000" alt="Wallpaper" />
            </div>
            <div className="flex justify-center items-center h-full w-full pb-24 px-4 mx-auto md:p-0">{children}</div>
    </div>);
}