import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Party } from 'src/app/resources/party';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class PartyService {

  private readonly partyAPI = environment.apiURL+"/parties";

  constructor(
    private http:HttpClient
  ) {}

  /**
   * Returns all the parties stocked in the JSON database.
   */
  public getParties(): Observable<Party[]> {
    return this.http.get<Party[]>(this.partyAPI);
  }

  /**
   * Returns a party stocked in the JSON database from its ID.
   * @param id: ID of the party to return
   */
  public getParty(id: number): Observable<Party> {
    return this.http.get<Party>(this.partyAPI+"/"+id)
  }

  /**
   * Adds a party in the JSON database.
   * @param party: new party to add
   */
  public addParty(party: Party): Observable<Party> {
    return this.http.post<Party>(this.partyAPI, party);
  }

  /**
   * Removes a party from the JSON database from its ID.
   * @param id: ID of the party to remove
   */
  public removeParty(id: number): Observable<Party> {
    return this.http.delete<Party>(this.partyAPI+"/"+id);
  }

}
