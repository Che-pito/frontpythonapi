import './Home.css'
import { Acercade } from '../../common/Acercade/Acercade'

export function Home(){
    return(
        <>
        <div className='banner text-white'>
            <h2>Gestor app</h2>
            <p>
                ¡Controla tus gastos de manera fácil y efectiva!

                 Bienvenido a nuestra aplicación de gestión de gastos, diseñada para ayudarte a llevar un registro claro y preciso de tus finanzas. Con nuestra intuitiva interfaz, podrás registrar tus gastos diarios en segundos, categorías

                ¿Te gustaría saber a dónde se va tu dinero cada mes? Con nuestras gráficas dinámicas, obtendrás una visión completa de tus gastos, permitiéndote identificar áreas donde puedes ahorrar. Además, establece presupuestos personalizados y recibe alertas cuando estés cerca de alcanzarlos, para que nunca pierdas el control.

                 Nuestra función de informes te permitirá revisar tu progreso, ayudándote a tomar decisiones financieras más informadas. Ya sea que estés ahorrando para un viaje, un proyecto o simplemente buscando mejorar tus finanzas personales, nuestr

                 ¡Únete a millas de usuarios que ya han transformado su relación con el dinero! Descarga ahora y empieza a tomar el control de tus finanzas. Con cada gasto registrado, das un paso más hacia la libertad financiera. Tu futuro financiero comienza aquí.
            </p>
            <button className='btn btn-outline-success'>Ver más</button>
        </div>
        <Acercade />
        </>
    )
}