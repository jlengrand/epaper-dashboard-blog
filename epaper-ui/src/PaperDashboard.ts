import { html, css, property } from 'lit-element';

import { YoloLitElement } from './YoloLitElement.js';

import './DateInfo.js'
import './WeatherData.js';
import './WeeklyMenus.js';
import './EnergyInfo.js';
import './CalendarData.js';
import './WeightInfo.js';

export class PaperDashboard extends YoloLitElement {

  @property({ type: String }) title = 'My app';

  render() {
    return html`
      <main class="h-full">
        <div class="flex h-1/6">
          <date-info class="flex-auto h-full"></date-info>
          <weather-data class="flex-auto h-full flex justify-around"></weather-data>
        </div>
        <div class="flex h-4/6 mt-2 mb-2">
          <weekly-menus class="w-1/2 h-full"></weekly-menus>
          <div class="h-full flex-grow-0 flex items-center justify-center">
            <div class=" h-1/2 border-2 border-black"></div>
          </div>

          <calendar-events class="w-1/2 h-full flex-auto"></calendar-events>
        </div>
        <div class="h-1/6 flex items-center justify-center">
          <weight-info class="w-1/5"></weight-info>
          <energy-info class="w-4/5"></energy-info>
        </div>
      </main>
    `;
  }
}

customElements.define('paper-dashboard', PaperDashboard);