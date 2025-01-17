/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
export namespace Components {
  interface AvatarComponent {
    /**
     * Alternate text when src image breaks
     * @type {string}
     * @memberof AvatarComponent
     */
    alt: string;
    /**
     * Custom class for the image
     * @type {string}
     * @memberof AvatarComponent
     */
    className: string;
    /**
     * Avatar image size
     * @type {('small' | 'medium' | 'large')}
     * @memberof AvatarComponent
     */
    size: 'small' | 'medium' | 'large';
    /**
     * Image source url
     * @type {string}
     * @memberof AvatarComponent
     */
    src: string;
    /**
     * Show title of the image on hover
     * @type {string}
     * @memberof AvatarComponent
     */
    title: string;
    /**
     * Avatar image shape variants
     * @type {('circular' | 'rounded' | 'square')}
     * @memberof AvatarComponent
     */
    variant: 'circular' | 'rounded' | 'square';
  }
  interface ImageComponent {
    srcDirJpg: string;
    srcDirWebp: string;
    srcImgName: string;
  }
  interface MyComponent {
    /**
     * The text color
     */
    color: string;
    /**
     * The first name
     */
    first: string;
    /**
     * The last name
     */
    last: string;
    /**
     * The middle name
     */
    middle: string;
  }
}
declare global {
  interface HTMLAvatarComponentElement extends Components.AvatarComponent, HTMLStencilElement {}
  var HTMLAvatarComponentElement: {
    prototype: HTMLAvatarComponentElement;
    new (): HTMLAvatarComponentElement;
  };
  interface HTMLImageComponentElement extends Components.ImageComponent, HTMLStencilElement {}
  var HTMLImageComponentElement: {
    prototype: HTMLImageComponentElement;
    new (): HTMLImageComponentElement;
  };
  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    'avatar-component': HTMLAvatarComponentElement;
    'image-component': HTMLImageComponentElement;
    'my-component': HTMLMyComponentElement;
  }
}
declare namespace LocalJSX {
  interface AvatarComponent {
    /**
     * Alternate text when src image breaks
     * @type {string}
     * @memberof AvatarComponent
     */
    alt?: string;
    /**
     * Custom class for the image
     * @type {string}
     * @memberof AvatarComponent
     */
    className?: string;
    /**
     * Avatar image size
     * @type {('small' | 'medium' | 'large')}
     * @memberof AvatarComponent
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Image source url
     * @type {string}
     * @memberof AvatarComponent
     */
    src?: string;
    /**
     * Show title of the image on hover
     * @type {string}
     * @memberof AvatarComponent
     */
    title?: string;
    /**
     * Avatar image shape variants
     * @type {('circular' | 'rounded' | 'square')}
     * @memberof AvatarComponent
     */
    variant?: 'circular' | 'rounded' | 'square';
  }
  interface ImageComponent {
    srcDirJpg?: string;
    srcDirWebp?: string;
    srcImgName?: string;
  }
  interface MyComponent {
    /**
     * The text color
     */
    color?: string;
    /**
     * The first name
     */
    first?: string;
    /**
     * The last name
     */
    last?: string;
    /**
     * The middle name
     */
    middle?: string;
  }
  interface IntrinsicElements {
    'avatar-component': AvatarComponent;
    'image-component': ImageComponent;
    'my-component': MyComponent;
  }
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'avatar-component': LocalJSX.AvatarComponent & JSXBase.HTMLAttributes<HTMLAvatarComponentElement>;
      'image-component': LocalJSX.ImageComponent & JSXBase.HTMLAttributes<HTMLImageComponentElement>;
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
    }
  }
}
