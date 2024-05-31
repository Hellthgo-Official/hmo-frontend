import moment from 'moment';

/**
 * Formats an ISO 8601 string date.
 *
 * @param {string} unix - The ISO 8601 string to format.
 * @param {string} format - The desired format string.
 * @returns {string} The formatted date string.
 */
export default function useFormatDate(unix: number, format = 'YYYY-MM-DD') {
  if (!unix) {
    return '';
  } else {
    return moment(unix).format(format);
  }
}

