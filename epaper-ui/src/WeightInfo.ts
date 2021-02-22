import {until} from 'lit-html/directives/until';
import { html } from 'lit-element';

import { YoloLitElement } from './YoloLitElement.js';

import { NetworkMixin } from './NetworkMixin.js';

const weightSheet = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdO0GF46JK4LZhxXyuH6HPFtHSHaMmE91yD3WJj1zDHW99K_cL__e9Hnbh_ATvEIQ_D1daxYXXttyC/pub?gid=0&single=true&output=csv";

export class WeightInfo extends NetworkMixin(YoloLitElement) {

  async getWeight() {
    const weight = await this.httpText(weightSheet);  
    return weight;
  }

  render() {
    return html`
      <div class="h-full flex flex-col justify-around">
      ${until(this.getWeight().then( weight => html`
        <div class="font-bold text-xl text-center flex items-center justify-center">
          <img class="h-8	mr-2" alt="a scale" src="assets/weight-solid.svg">
          <p>${weight}kg</p>
        </div>
        `
      ))}
    </div>
    `;
  }
}

customElements.define('weight-info', WeightInfo);
