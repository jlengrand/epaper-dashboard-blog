import { html, css, property } from 'lit-element';

import { YoloLitElement } from './YoloLitElement.js';

const toKelvin = 273.15;

export class WeatherDay extends YoloLitElement {

  @property({ type: Number }) temperature = 0.0 ;

  @property({ type: String }) icon = "";

  static styles = css``;

  render() {
    return html`
      <div class="flex flex-col h-full justify-around">
        <p class="font-bold text-center mt-2">${Math.round(this.temperature - toKelvin)}°C</p>
        <img style="filter:brightness(0);" src="https://openweathermap.org/img/wn/${this.icon}.png" alt=${this.icon}>
      </div>
      `;
  }
}

customElements.define('weather-day', WeatherDay);