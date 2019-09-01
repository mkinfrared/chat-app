const confirmMutation = (id: string) => `
  mutation{
    confirm(id: "${id}")
  }
`;

const currentUserMutation = () => `
  query {
    currentUser {
      id
      username
      email
    }
  }
`;

const loginMutation = (username: string, password: string) => `
    mutation {
      login(username: "${username}", password: "${password}") {
        path
        message
      }
    }
  `;

const logoutMutation = () => `
  mutation {
    logout
  }
`;

const registerMutation = (
  email: string,
  password: string,
  username: string
) => `
  mutation{
  register(email: "${email}", username: "${username}", password: "${password}") {
    path
    message
  }
}
`;

export {
  confirmMutation,
  currentUserMutation,
  loginMutation,
  logoutMutation,
  registerMutation
};
