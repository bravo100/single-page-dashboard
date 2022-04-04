/** @format */

import AbstractView from './AbstractView.js';

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle(`Settings`);
		this.css(`/settings`);
	}

	async getHtml() {
		return `
      <h1>Settings</h1>
      <h3>Here are your Settings page</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati hic odit expedita iste quaerat necessitatibus deserunt quia ex vero itaque. Aut saepe soluta recusandae voluptas necessitatibus laborum modi ullam eum!</p>
    `;
	}
}
