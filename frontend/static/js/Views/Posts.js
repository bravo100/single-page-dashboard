/** @format */

import AbstractView from './AbstractView.js';

export default class extends AbstractView {
	constructor() {
		super();
    this.setTitle(`Posts`);
		this.css(`posts`);
	}

	async getHtml() {
		return `
      <h1>Posts</h1>
      <h3>Here are your posts page</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati hic odit expedita iste quaerat necessitatibus deserunt quia ex vero itaque. Aut saepe soluta recusandae voluptas necessitatibus laborum modi ullam eum!</p>
    `;
	}
}
