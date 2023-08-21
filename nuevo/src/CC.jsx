import React from 'react'
import ReactDOM from "react-dom/client"
import './cc.css'
const raiz= ReactDOM.createRoot(document.getElementById('root'))
/*Barra de navegacion*/
function Menu() {
  return (
    <nav>
        <div className='cont_img'>
            <a href=""><img src="/src/ImgPresentacionCC.png" alt="" /></a>
        </div>
        <div className='cont_menu'>
            <ul>
                <a href="#Inicio"><li>Inicio</li></a>
                <a href="#QuienesSomos"><li>¿Quiénes somos?</li></a>
                <a href=""><li>Servicios</li></a>
                <a href=""><li>Clientes</li></a>
                <a href=""> <li>Parte de DragonTEC</li></a>
                <a href=""><li>Contáctanos</li></a>         
            </ul>
        </div>
    </nav>
  )
}
/*Aldeas de cavernicolas*/
const CabCabernicola=()=>{
    return(
    <ul className='CabCaver'>
        <li><img src="/src/CabCaber1.png" alt="" /></li>
        <li><img src="/src/CabCaber2.png" alt="" /></li>
        <li><img src="/src/CabCaber3.png" alt="" /></li>
        <li><img src="/src/CabCaber4.png" alt="" /></li>
    </ul>
    )
}
/*Velocidad aleatoria para cada nube*/
var NumAleatorio=()=>{
    const cloud1Style = {
        animation: `moveCloud ${Math.random() * (20 - 10) + 10}s linear infinite, puff 3s ease-in-out infinite`
      };
    return cloud1Style
}
/*Dibujar nubes*/
const Cloud = () => {
    return (
      <div className='cont-nubes'>
        <div className="cloud1" style={NumAleatorio()}></div>
        <div className="cloud2" style={NumAleatorio()}></div>
        <div className="cloud3" style={NumAleatorio()}></div>
        <div className="cloud4" style={NumAleatorio()}></div>
        <div className="cloud5" style={NumAleatorio()}></div>
      </div>
    );
};

/*Seccion de inicio*/
const Inicio=()=>{
    return(
        <section className='seccion-principal' id='Inicio'>
            <Cloud/>
            <section className='main-section-description'>
                <h1>Agencia de <br/>Marketing Digital</h1>
                <p>
                    El potencial de tu negocio con estrategias personalizadas y resultados comprobados.
                    ¡Convierte visitantes en clientes fanáticos de tu marca!
                </p>
                <button type="button">Contáctanos</button>   
            </section>
            <section className='main-section-image'>
                <img src="/src/ImgPresentacionCC.png" alt=""/>
                <CabCabernicola/>
            </section>
        </section>
    )
}
const QuienesSomos=()=>{
    return(
        <section className='QuienesSomos' id='QuienesSomos'>
            <h2>¿Quiénes Somos?</h2>
            <section className='cont-quienes-somos'>
                <section>
                    <img src="/src/ImgPresentacionCC.png" alt="" />
                </section>
                <section className='QuienesSomosDescrip'>
                    <p>Todo descubrimiento tiene un origen y nada es creado sin una pizca de creatividad.</p>
                    <p>Nos dedicamos a crear soluciones creativas que impulsarán el éxito de tu negocio. Ya sea mediante contenido de alta calidad, la construcción de tu marca en redes sociales o la creación de material exclusivo que se ajuste perfectamente a la imagen de tu marca.</p>
                    <p>¡Permítenos llevar tu marca al siguiente nivel y lograr juntos resultados extraordinarios!</p>
                </section>
            </section>
        </section>
    )
}
raiz.render(
    <React.StrictMode>
        <header>
            <Menu/>
        </header>
        <main>
            <Inicio/>
            <QuienesSomos/>
        </main>
    </React.StrictMode>
)