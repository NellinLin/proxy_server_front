import template from './RequestCard.hbs';
import './RequestCard.css';

/**
 * Request card component
 */
export default class RequestCard {
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
