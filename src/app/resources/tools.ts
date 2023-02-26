export class Tools {

  /**
   * Returns the current date string typed and french formatted (dd/mm/yyyy).
   */
  public static getCurrentStringDate(): string {
    const currentDate = new Date();
    return String(currentDate.getDate()).padStart(2, "0") + "/" +
      String(currentDate.getMonth() + 1).padStart(2, "0") + "/" +
      currentDate.getFullYear();
  }

}
