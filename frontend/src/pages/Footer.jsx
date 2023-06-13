import React from "react";
const imagen = require.context('../assets/footer/', true);

const Footer = () => {
    return(
        <div className="h-40  flex flex-col w-full bg-sky-950">
            <div className="h-2/6 justify-around w-full flex flex-row bg-slate-400">
                <img className="h-5/6 py-2" src={imagen(`./email.png`)} alt="" />
                <img className="h-5/6 py-2" src={imagen(`./like.png`)} alt="" />
                <img className="h-5/6 py-2" src={imagen(`./telegram.png`)} alt="" />
                <img className="h-5/6 py-2" src={imagen(`./phone.png`)} alt="" />
            </div>
            <div className="h-4/6 w-full flex flex-row">
                <div className="h-full w-2/6 content-center py-10">
                    <p className="text-white" >DIEGO ARELLANO MORENO @ 2023</p>
                </div>
                
                <div className="flex flex-row h-full w-4/6 justify-end">
                    <img className="h-5/6 py-1 " src={imagen(`./american-express.png`)} alt="" />
                    <img className="h-5/6 py-1 px-10" src={imagen(`./visa.png`)} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Footer