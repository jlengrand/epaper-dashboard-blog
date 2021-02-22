import {until} from 'lit-html/directives/until';
import { html } from 'lit-element';

import { YoloLitElement } from './YoloLitElement.js';

import { NetworkMixin } from './NetworkMixin.js';

const menusSheet = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTQFqToleR71JZahgIYAcIsieLFd4sugFLsDMUoVHUMLV8UoqUv4QctkO1lzUU_2Eh0ZzaLAbtEUZUH/pub?gid=0&single=true&output=csv";

interface MenuData{
  day: string;
  lunch: string;
  dinner: string;
}

export class WeeklyMenus extends NetworkMixin(YoloLitElement) {

  async getMenus() {
    const result = await this.httpText(menusSheet);

    const menusAsArray = result.split(/\r?\n/).map(l => l.split(','));
    const menus = menusAsArray.map(m =>  { return {day:m[0], lunch: m[1], dinner: m[2]}});

    return menus;    
  }

  render() {
    return html`
      <div class="h-full flex flex-col justify-evenly">
      ${until(this.getMenus().then( menus => html`
          ${menus.map( (menu : MenuData) => 
            html`<div class="flex">
                <div class="ml-4 w-1/3 text-base font-extrabold">${menu.day}</div>
                <div class="ml-5 w-2/3">
                  <div class="text-base	font-bold">${menu.lunch}</div> 
                  <div class="text-base	font-bold">${menu.dinner}</div>
                </div>
              </div>
              ` 
          )}
        `
      ))}
    </div>
    `;
  }
}

customElements.define('weekly-menus', WeeklyMenus);
