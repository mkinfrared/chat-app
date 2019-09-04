import User from "@db/entity/User";
import request from "supertest";

import { app } from "@test/setupTest";

describe("auth controller", () => {
  it("should return error on invalid credentials", async () => {
    const username = "ma";
    const email = "marklar";
    const password = "foobar";

    const response = await request(app)
      .post("/auth/register")
      .send({ username, email, password });

    expect(response.status).toBe(400);
    expect(response.body.passwordError).toBeDefined();
    expect(response.body.passwordError).toHaveLength(3);
    expect(response.body.usernameError).toBeDefined();
    expect(response.body.usernameError).toHaveLength(1);
    expect(response.body.emailError).toBeDefined();
    expect(response.body.emailError).toHaveLength(1);
  });

  it("should return error on invalid credentials", async () => {
    const username = "";
    const email = "";
    const password = "";
    const passwordConfirmation = "";

    const response = await request(app)
      .post("/auth/register")
      .send({ username, email, password, passwordConfirmation });

    expect(response.status).toBe(400);
    expect(response.body.passwordError).toBeDefined();
    expect(response.body.passwordError).toHaveLength(6);
    expect(response.body.usernameError).toBeDefined();
    expect(response.body.usernameError).toHaveLength(2);
    expect(response.body.emailError).toBeDefined();
    expect(response.body.emailError).toHaveLength(1);
    expect(response.body.passwordConfirmationError).toBeDefined();
    expect(response.body.passwordConfirmationError).toHaveLength(1);
  });

  it("should return error on invalid credentials", async () => {
    const username = "marklar";
    const email = "marklar@mail.com";
    const password = "Foobar1#";
    const passwordConfirmation = "foobar";

    const response = await request(app)
      .post("/auth/register")
      .send({ username, email, password, passwordConfirmation });

    expect(response.status).toBe(400);
    expect(response.body.passwordError).not.toBeDefined();
    expect(response.body.usernameError).not.toBeDefined();
    expect(response.body.emailError).not.toBeDefined();
    expect(response.body.passwordConfirmationError).toBeDefined();
    expect(response.body.passwordConfirmationError).toHaveLength(1);
  });

  it("should create a user in database and respond with 200", async () => {
    const username = "marklar";
    const email = "marklar@mail.com";
    const password = "Foobar1#";

    const response = await request(app)
      .post("/auth/register")
      .send({ username, email, password, passwordConfirmation: password });

    expect(response.status).toBe(200);

    const user = await User.findOne({ where: { email } });

    expect(user).toBeDefined();
    expect(user!.email).toBe(email);
    expect(user!.username).toBe(username);
    expect(user!.password).not.toBe(password);
  });

  it("should respond with 400 and error object when email or username already exists in database", async () => {
    const username = "marklar";
    const email = "marklar@mail.com";
    const password = "Foobar1#";

    const user = User.create({ username, email, password });

    await user.save();

    const response = await request(app)
      .post("/auth/register")
      .send({ username, email, password, passwordConfirmation: password });

    expect(response.status).toBe(400);
    expect(response.body.username).toBeDefined();
    expect(response.body.username).toHaveLength(1);
    expect(response.body.email).toBeDefined();
    expect(response.body.email).toHaveLength(1);
  });
});
