/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
export class Recipient {
  public id: number;
  public id_user: number;
  public name: string;
  public mobile: string;

  constructor(id: number, id_user: number, name: string, mobile: string) {
    this.id = id;
    this.id_user = id_user;
    this.name = name;
    this.mobile = mobile;

    
  }

}
