export class Tools {

  /**
   * Returns the current date string typed and french formatted (dd/mm/yyyy 24H:min).
   */
  public static getCurrentStringDate(): string {
    const currentDate = new Date();
    return String(currentDate.getDate()).padStart(2, "0") + "/" +
      String(currentDate.getMonth() + 1).padStart(2, "0") + "/" +
      currentDate.getFullYear() + " " + currentDate.getHours() + ":" +
      currentDate.getMinutes();
  }

  /**
   * Returns a label (string typed and in French) from the given latest date like 'Today', 'some days ago', etc.
   * @param latestDateString: latest date string typed and french formatted
   */
  public static getLatestTimeLabel(latestDateString: string): string {
    const latestDate = new Date(latestDateString.substring(6, 10)+"-"+latestDateString.substring(3, 5)+"-"+latestDateString.substring(0, 3));
    const currentDate = new Date();
    const nbSecondsBetween: number = Math.round((currentDate.getTime()-latestDate.getTime()) / 1000);
    console.log(nbSecondsBetween);
    if (nbSecondsBetween <= 86399) {
      return "Aujourd'hui";
    } else if (nbSecondsBetween <= 604799) {
      return "Il y a " + Math.floor(nbSecondsBetween/86400) + " jour(s)";
    } else if (nbSecondsBetween <= 2.628*Math.pow(10, 6)-1) {
      return "Il y a " + Math.floor(nbSecondsBetween/604800) + " semaine(s)";
    } else if (nbSecondsBetween <= 3.154*Math.pow(10, 7)-1) {
      return "Il y a " + Math.floor(nbSecondsBetween/(2.628*Math.pow(10, 6))) + " mois";
    } else if (nbSecondsBetween <= 3.154*Math.pow(10, 8)-1) {
      return "Il y a " +  Math.floor(nbSecondsBetween/3.154*Math.pow(10, 7)) + " an(s)";
    } else {
      return "Il y a longtemps"
    }
  }

}
