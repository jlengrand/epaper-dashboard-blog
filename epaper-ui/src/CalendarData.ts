import {until} from 'lit-html/directives/until';

import { html } from 'lit-element';

import { YoloLitElement } from './YoloLitElement.js';

import { NetworkMixin } from './NetworkMixin.js';

const calendar = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTPX3UqKW4tMPhj6M18f-6cR73IkIpMblbK3i2sodtFCoRNkDwAbhvFaU4PgBPBE1krJmy11dw1EzyT/pub?gid=0&single=true&output=csv"

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

interface CalendarEvent{
  when: string;
  what: string;
  where: string;
}

export class CalendarData extends NetworkMixin(YoloLitElement) {

  async getEvents() {
    const result = await this.httpText(calendar);

    const eventsAsArray = result.split(/\r?\n/).map(l => l.split(','));
    const events = eventsAsArray.map(e =>  { return {when: e[0], what: e[1], where: e[2]}});

    return events.slice(0, 7);    
  }

  render() {
    return html`
    ${until(this.getEvents().then( events => html`
      <div class="ml-4 h-full flex flex-col justify-around">
        ${events.map( (event : CalendarEvent) => 
          html`
          <div class="flex">
            <div class="w-1/3 text-base font-extrabold">
              ${(new Date(event.when)).getDate()} ${monthNames[(new Date(event.when)).getMonth()].slice(0,1)}. ${(new Date(event.when)).getHours()}:${(new Date(event.when)).getMinutes()<10?'0':''}${(new Date(event.when)).getMinutes()}
            </div>
            <div class="w-2/3 text-base font-bold">${event.what}</div>
          </div>` 
        )}
      </div>
    `
  ))}
    `;
  }
}

customElements.define('calendar-events', CalendarData);
