import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const profile = this.usersRepository.findById(user_id);

    if (!profile) {
      throw new Error("User does not exists");
    }

    return profile;
  }
}

export { ShowUserProfileUseCase };
