function ValidPass({ele}) {
    return(<div className="absolute left-1/2 bottom-full flex flex-col justify-center items-center -translate-x-1/2">
        <div className="bg-white bg-opacity-80 rounded-xl p-4">
            <ValidLine right={ele.length > 7} line="Password should be 8 characters long" />
            <ValidLine right={/\d/.test(ele)} line="Password should have digits" />
            <ValidLine right={/[a-z]/.test(ele)} line="Password should have lowercase letters" />
            <ValidLine right={/[A-Z]/.test(ele)} line="Password should have uppercase letters" />
            <ValidLine right={/[!@#$%&]/.test(ele)} line="Password should have special symbols" />
        </div>
        <div className="w-0 h-0 border-x-8 border-t-8 border-t-white border-x-transparent opacity-80"></div>
    </div>);
}

function ValidLine({right, line}) {
    if(right) {
        return(<p className="text-green-600 truncate font-bold"><span className="px-2">&#x2713;</span>{line}</p>);
    }
    else{
        return(<p className="text-red-700 truncate font-bold"><span className="px-2">&#x274C;</span>{line}</p>)
    }
}

function ConfirmShow({pass1, pass2}){
    return(<div className="absolute left-1/2 bottom-full flex flex-col justify-center items-center -translate-x-1/2">
    <div className="bg-white bg-opacity-80 rounded-xl p-4">
        {pass1 === pass2 && pass1 !== ""?
        <p className="text-green-600 truncate font-bold"><span className="px-2">&#x2713;</span>Both the passwords should be same</p>:
        <p className="text-red-700 truncate font-bold"><span className="px-2">&#x274C;</span>Both the passwords should be same</p>}
    </div>
    <div className="w-0 h-0 border-x-8 border-t-8 border-t-white border-x-transparent opacity-80"></div>
</div>);
}

function isValid(pass1) {
    if(pass1.length < 8) {return false;}
    if(!/\d/.test(pass1)) {return false;}
    if(!/[a-z]/.test(pass1)) {return false;}
    if(!/[A-Z]/.test(pass1)) {return false;}
    if(!/[!@#$%&]/.test(pass1)) {return false;}
    return true;
}

function isSame(pass1, pass2) {
    if(pass1 === pass2) {
        return true;
    }else{
        return false;
    }
}

export {ValidPass, ConfirmShow, isValid, isSame};