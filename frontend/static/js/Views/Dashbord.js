/** @format */

import AbstractView from './AbstractView.js';

export default class extends AbstractView {
	constructor() {
		super();
    this.setTitle(`Dashbord`);
		this.css(`/`);
	}

	async getHtml() {
		return `
      <h1>Welcome Back, DOM</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati hic odit expedita iste quaerat necessitatibus deserunt quia ex vero itaque. Aut saepe soluta recusandae voluptas necessitatibus laborum modi ullam eum!</p>
      <a href="/posts" data-link>View recent posts.</a>
    `;
	}
}
