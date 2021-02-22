import { html } from 'lit-element';
import {until} from 'lit-html/directives/until';

import { YoloLitElement } from './YoloLitElement.js';
import './WeatherDay.js';
import {NetworkMixin} from './NetworkMixin.js';

const weatherApi = "https://api.openweathermap.org/data/2.5/onecall?exclude=hourly,minutely&lat=52.046680&lon=5.079170&APPID=ee80728351da55e61e612558832978e4"

interface IWeatherResponse {
  current: IWeatherPoint;
  daily: Array<IWeatherPointDaily>;
}

interface IWeatherPointDaily {
  feels_like: IWeatherFeelsLikeDaily;
  weather: Array<IWeather>;
}

interface IWeatherFeelsLikeDaily {
  day: number
}

interface IWeatherPoint {
  feels_like: number;
  weather: Array<IWeather>;
}

interface IWeather {
  icon : string;
  description: string;
}

export class WeatherData extends NetworkMixin(YoloLitElement) {

  async getWeather() {
    const result = await this.httpJson<IWeatherResponse>(weatherApi);
    return result;
  }

  render() {
    const currentDay = (current: IWeatherPoint) => html`<weather-day .temperature=${current.feels_like} .icon=${current.weather[0].icon}></weather-day>`;
    const allDays = (days: Array<IWeatherPointDaily>) => html`${days.map((day: IWeatherPointDaily) => html`<weather-day .temperature=${day.feels_like.day} .icon=${day.weather[0].icon}></weather-day>`)}`;

    return html`
      ${until(this.getWeather().then( res => html`
        ${currentDay(res.current)}
        ${allDays(res.daily)}
        `
      ))}
    `;
  }
}

customElements.define('weather-data', WeatherData);
