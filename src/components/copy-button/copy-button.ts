import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './copy-button.styles.js';

/**
 * Add a description here
 *
 * @tag my-copy-button
 * @since 0.0.0
 * @status experimental
 *
 * @cssprop [--my-button-padding=8px] Controls the padding of the internal button
 *
 * @csspart button Provides custom styles for the internal button
 **/
export class MyCopyButton extends LitElement {
  // static - only rendered once 
  static override styles = [styles]; // instead of using a separate CSS style file, we can define styles here

  /**
   * Controls the size of the button
   */
  @property({ reflect: true }) // property was defaulted to medium, but the attribute was never defaulted to medium
  public size: 'sm' | 'md' | 'lg' = 'md'; // default value is 'md', can be 'sm', 'md', or 'lg'

  /**
   * Sets the inner text of the button
   */
  @property() // decorator, to make it reactive
  public text ? : string = 'My Button' // ? means this property is optional

  /**
   * Sets the disabled state of the button
   */
  @property({ type: Boolean })
  public disabled ? : boolean;

  /**
   * Sets the type of the button
   */
  @property()
  public type ? : string;

  /**
   * Logs a super important info
   */
  public log() {
    console.log('Logged...')
  }

  override render() { // different from our html render, because it uses LitElement's template system where the html function only takes one string
    // the html tag is already optimized
    return html` 
      <button part="button" class='button-size-${this.size}' ?disabled=${this.disabled}>
        <slot>
          ${this.text}
        </slot>
      </button>
    `;
  }
}

export default MyCopyButton;
