import template from './HeaderComp.hbs';
import './HeaderComp.css';

/**
 * Header component
 */
export default class HeaderComp {
    /**
     * Constructor for component
     * @param {*} parent
     */
    constructor(parent = document.body) {
        this._parent = parent;
    }

    /**
     * Render template
     */
    render() {
        this._parent.innerHTML = template();
    }
}
