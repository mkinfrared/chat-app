import { userSchema } from "@chat-app/common";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";

import formatYupErrors from "@utils/formatYupErrors";
import User from "@db/entity/User";
import ErrorMessages from "@messages/errorMessages";

const registerController = async (req: Request, res: Response) => {
  try {
    await userSchema.validate(req.body, { abortEarly: false });
  } catch (e) {
    const error = formatYupErrors(e);

    res.status(400).send(error);

    return;
  }

  const { email, username, password } = req.body;

  const emailExists = await User.findOne({ where: { email } });
  const usernameExists = await User.findOne({ where: { username } });

  if (emailExists || usernameExists) {
    const errors: any = {};

    if (emailExists) {
      errors.email = [ErrorMessages.EMAIL_TAKEN];
    }

    if (usernameExists) {
      errors.username = [ErrorMessages.USERNAME_TAKEN];
    }

    res.status(400).send(errors);
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = User.create({
    username,
    email,
    password: hashedPassword
  });

  await user.save();
  res.status(200).send("OK");
};

export { registerController };
