import {
  Session,
  SessionDocument,
} from "./schemas/session.schema";

export class UsersRepository {
  constructor(
    private readonly logger: CustomLogger,
    private readonly translator: UsersTranslator,
    @InjectModel(ServiceInvitationRequestUser.name)
    private readonly ServiceInvitationRequestUserModel: Model<ServiceInvitationRequestUserDocument>,
    @InjectModel(User.name)
    private readonly UserModel: Model<UserDocument>,
    @InjectModel(Session.name)
    private readonly SessionModel: Model<SessionDocument>
  ) {
    this.logger.setContext(UsersRepository.name);
  }
}
