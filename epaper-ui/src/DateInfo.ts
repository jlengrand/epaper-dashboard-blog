import { html } from 'lit-element';

import { YoloLitElement } from './YoloLitElement.js';

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

export class DateInfo extends YoloLitElement {

  render() {
    const now = new Date();
    return html`
    <div class="h-full flex flex-col">
      <div class="h-3/5 font-bold text-4xl	text-center flex items-center justify-center">
        ${now.getHours()}:${now.getMinutes()<10?'0':''}${now.getMinutes()}
      </div>
      <div class="h-2/5 flex font-bold justify-center">
        ${now.getDate()} ${monthNames[now.getMonth()]}
      </div>
    </div>
    `;
  }
}

customElements.define('date-info', DateInfo);