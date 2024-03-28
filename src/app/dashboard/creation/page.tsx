import { Title } from "@/components";
import { IoBusiness, IoGitNetwork, IoPersonAdd } from "react-icons/io5";

export default function CreationPage() {

    return (

        <div>

            <Title title='Creación' subTitle='Creación de áreas, sucursales y perfiles de usuario' />

            <div className="flex flex-col md:flex-row justify-between items-start mt-10 gap-5 w-full">

                <div className="flex-1 md:w-1/3 flex flex-col items-center justify-center p-5 border border-white hover:bg-gray-700 cursor-pointer transition duration-300">
                    <IoGitNetwork size={50} />
                    <span className='ml-3 text-xl text-white'>Áreas</span>
                </div>

                <div className="flex-1 md:w-1/3 flex flex-col items-center justify-center p-5 border border-white hover:bg-gray-700 cursor-pointer transition duration-300" >
                    <IoBusiness size={50} />
                    <span className='ml-3 text-xl text-white'>Sucursales</span>
                </div>

                <div className="flex-1 md:w-1/3 flex flex-col items-center justify-center p-5 border border-white hover:bg-gray-700 cursor-pointer transition duration-300">
                    <IoPersonAdd size={50} />
                    <span className='ml-3 text-xl text-white'>Usuarios</span>
                </div>

            </div>

        </div>

    )

}
