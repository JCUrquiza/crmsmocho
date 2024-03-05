import Link from 'next/link';

export default function () {

  return (

    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">

        <h1 className={ `text-4xl mb-5` }>Ingresar</h1>

            <div className="flex flex-col">

                <label htmlFor="email">Correo electrónico</label>
                <input className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black" type="email" />

                <label htmlFor="email">Contraseña</label>
                <input className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black" type="email" />

                <Link href={'/dashboard'} className='btn-primary text-center mt-5'>
                    Ingresar
                </Link>

                {/* divisor line */ }
                <div className="flex items-center my-5">
                    <div className="flex-1 border-t border-gray-500"></div>
                    {/* <div className="px-2 text-gray-800">O</div> */}
                    <div className="flex-1 border-t border-gray-500"></div>
                </div>

            </div>
        </div>
        
    );
}