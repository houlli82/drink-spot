import { Controller } from "@hotwired/stimulus"
// Don't forget to import the NPM package
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Know a good drinking spot?", "Share it with the world...", "Make new drinking buddies!"],
      typeSpeed: 90,
      loop: true
    });
  }
}
