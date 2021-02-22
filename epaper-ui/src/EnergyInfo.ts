import {until} from 'lit-html/directives/until';
import { html } from 'lit-element';

import { YoloLitElement } from './YoloLitElement.js';

import { NetworkMixin } from './NetworkMixin.js';

const energySheet = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTo1q9NO4daxpvY77c1UGTgAai9LIEsf5QmCPU13IatzIzx5a68Jr5EL8MUzKpDob55Qo1vy5CkQpYE/pub?gid=1686054259&single=true&output=csv";

interface EnergyInfoData{
  lastMeasurement: number;
  previsionkWh: string;
  previsionGJ: string;
  previsionm3: string;
  trendkWh: string;
  trendGJ: string;
  trendm3: string;
}


export class EnergyInfo extends NetworkMixin(YoloLitElement) {

  async getEnergy() {
    const energyRaw = (await this.httpText(energySheet)).split(',');

    const energyInfo = {
      lastMeasurement: energyRaw[0],
      previsionkWh: parseInt(energyRaw[1], 10),
      previsionGJ: parseInt(energyRaw[2], 10),
      previsionm3: parseInt(energyRaw[3], 10),
      trendkWh: parseInt(energyRaw[4], 10),
      trendGJ: parseInt(energyRaw[5], 10),
      trendm3: parseInt(energyRaw[6 ], 10),
    }
    return energyInfo;
  }

  render() {
    return html`
      <div class="h-full flex flex justify-around">
      ${until(this.getEnergy().then( energyInfo => html`
        <div class="font-bold text-xl text-center flex items-center justify-center">
          <img class="h-8	mr-2" alt="a drop of water" src="assets/bolt-solid.svg">
          <p class="" >${energyInfo.trendkWh > 0 ? html`+` : html``} ${energyInfo.trendkWh}%</p>
        </div>
        <div class="font-bold text-xl text-center flex items-center justify-center">
          <img class="h-8	mr-2" alt="a drop of water" src="assets/fire-alt-solid.svg">
          <p>${energyInfo.trendGJ > 0 ? html`+` : html``} ${energyInfo.trendGJ}%</p>
        </div>
        <div class="font-bold text-xl text-center flex items-center justify-center">
          <img class="h-8	mr-2" alt="a drop of water" src="assets/tint-solid.svg">
          <p>${energyInfo.trendm3 > 0 ? html`+` : html``} ${energyInfo.trendm3}%</p>
        </div>
        `
      ))}
    </div>
    `;
  }
}

customElements.define('energy-info', EnergyInfo);
