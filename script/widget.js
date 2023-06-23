import { fetchWeather } from "./modules/APIservice.js";
import { startWidget } from "./modules/widgetService.js";

const init = (app) => {
    const widget = startWidget();
    app.append(widget);

    fetchWeather('Valencia');
}

init(document.querySelector('#app'));