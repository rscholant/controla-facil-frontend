/**
 * return new Date Instance from type 'yyyy-mm-dd'
 * @param dateString
 */
export function dateStringToLocalDate(dateString: string) {
  const dateSplit = dateString?.split('-');
  const { year, month, day } = {
    year: Number(dateSplit[0]),
    month: Number(dateSplit[1]) - 1,
    day: Number(dateSplit[2])
  };
  const dateFormat = new Date(year, month, day);
  return dateFormat;
}
