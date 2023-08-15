export class Follow {
  constructor(
    public id: string,
    public followerId: string,
    public followingId: string,
    public createdAt: Date,
  ) {}
}
