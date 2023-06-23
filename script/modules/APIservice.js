const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '8ac27bc6699250ae55d48964c10750dd';

//solicitud, esperar la solicitud aprobada y despues recogemos los datos y añadimos a ls respuesta
export const fetchWeather = async (city) =>{
    //para cacptar el error
    try{
        const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`);
        if(!response.ok){
            //interrumpimos si no esta ok
            throw new Error('Error of request')
        }
    // las respuesta se entra en flujo, por eso hay que aplicar JSON para recibir el formato
    const data = await response.json();
    return {success: true, data}
    }
    catch (err) {
//si occurido error
    return {success:false, err}
    }
    
}

export const fetchForecast = async (city) =>{
    //para cacptar el error
    try{
        const response = await fetch(`${API_URL}forecast?q=${city}&appid=${API_KEY}&lang=ru`);
        if(!response.ok){
            //interrumpimos si no esta ok
            throw new Error('Error of request')
        }
    // las respuesta se entra en flujo, por eso hay que aplicar JSON para recibir el formato
    const data = await response.json();
    return {success: true, data}
    }
    catch (err) {
//si occurido error
    return {success:false, err}
    }
    
}