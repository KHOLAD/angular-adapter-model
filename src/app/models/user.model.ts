export class UserModel {
  constructor(
    public id: number | null = null,
    public name: string | null = null,
    public username: string | null = null,
    public email: string | null = null,
    public street: string | null = null
  ) { }

  static adapt(item: any): UserModel {
    return new UserModel(
      item.id,
      item.name,
      item.username,
      item.email,
      item.address?.street
    );
  }
}
