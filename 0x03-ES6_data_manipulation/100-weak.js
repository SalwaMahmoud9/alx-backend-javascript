/**
 * WeakMap.
 */
export const weakMap = new WeakMap();

/**
 * MAX_ENDPOINT_CALLS.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Track number of calls to API's.
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} endpoint - endpoint.
 * @author SalwaMahmoud9 <https://github.com/SalwaMahmoud9>
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
