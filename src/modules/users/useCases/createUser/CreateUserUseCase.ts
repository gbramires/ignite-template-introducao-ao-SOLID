import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const exist = this.usersRepository.findByEmail(email);

    if (exist) {
      throw new Error("email already exists!");
    }

    const user = this.usersRepository.create({ name, email });

    return user;
  }
}

export { CreateUserUseCase };
