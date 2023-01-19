import { Session, SessionDocument } from "./schemas/session.schema";

export class UsersRepository {
  constructor(
    @InjectModel(User.name)
    private readonly UserModel: Model<UserDocument>,
    @InjectModel(Session.name)
    private readonly SessionModel: Model<SessionDocument>
  ) {
    this.logger.setContext(UsersRepository.name);
  }
}
