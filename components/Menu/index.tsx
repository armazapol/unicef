import React from 'react'

const Menu = () => {
  return (
    <div className='flex fixed w-screen h-screen items-center justify-center text-white top-0 left-0 gap-10'>
        <div className='flex flex-col gap-5 w-80 text-base'>
            <h2 className='border-b w-52 '>Conoce aquí sobre Nosotros</h2>
            <p>Revisa aquí nuestros productos y experiencias digitales.</p>
            <p>Explora aquí todos los servicios que ofrecemos y algunos casos de éxito.</p>
            <p>Conoce Mr.iO Games y nuestros videojuegos (propiedades intelectuales.).</p>
        </div>
        <div>Mr. iO</div>
    </div>
  )
}

export default Menu