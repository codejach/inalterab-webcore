/**
 * Get element from dom
 *
 * @param id string unique identifier
 * #param el Element dom
 * @returns Element | null
 */
export function getElementById(id: string, el:Element): Element | null {
  return el.querySelector('#' + id)
}

/**
 * Serialize a Class Object for be processed by redux
 *
 * @param c Class
 * @returns Object
 */
export function serializable(c: any) {
  return JSON.parse(JSON.stringify(c))
}

/**
 * Pascal case format
 *
 * @param text string
 * @returns string
 */
export function tu(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
