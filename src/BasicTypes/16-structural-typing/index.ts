type User = { userName: string; password: string };
type VerifyUserFn = (user: User, sentValue: User) => boolean;

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.userName === sentValue.userName && user.password === sentValue.password
  );
};

const bdUser = { userName: 'Ricardo', password: '123456' };
const sentUser = { userName: 'Ricardo', password: '123456' };
const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);
