const loginApi = {
  users: [
    { email: "kk@gmail.com", password: "kk123" },
    { email: "liu@gmail.com", password: "liu456" },
  ],
  anthorizeAccount: function (newUsers) {
    const hasAccount = this.users.filter((users) => {
      return users.email === newUsers.email;
    });
    if (hasAccount.length === 0) {
      console.log("No account!Please sign up firstly!");
      return false;
    }

    if (
      hasAccount[0].email === newUsers.email &&
      hasAccount[0].password === newUsers.password
    ) {
      console.log("Sign In Succeed");
      return true;
    } else {
      console.log("Password error!");
      return false;
    }
  },
  anthorizeAccount_2: async function (newUsers) {
    return new Promise((resolve, reject) => {
      const hasAccount = this.users.filter((users) => {
        return users.email === newUsers.email;
      });
      if (hasAccount.length === 0) {
        reject({ error: "No account!Please sign up firstly!" });
        return;
      }

      if (
        hasAccount[0].email === newUsers.email &&
        hasAccount[0].password === newUsers.password
      ) {
        resolve({ anthorizeAccount: "succeed" });
        console.log("Sign In Succeed");
        return;
      } else {
        reject({ error: "Password error!" });
        return;
      }
    });
  },
  createAccount: function (newUsers) {
    const hasAccount = this.users.filter((users) => {
      return users.email === newUsers.email;
    });

    if (hasAccount.length === 0) {
      if (newUsers.password.length == 0) {
        console.log("Please Enter password!");
        return false;
      }
      this.users.push(newUsers);
      console.log(this.users);
      console.log("Create Account Succeed!");
    } else {
      console.log("Already have an account.Please sign in!");
      return false;
    }
  },
  resetPassword: function (newUsers) {
    const hasAccount = this.users.filter((users) => {
      return users.email === newUsers.email;
    });

    if (hasAccount.length === 0) {
      console.log("Cannot find account.Please sign up firstly!");
      return false;
    } else {
      console.log(
        "Sent email.Please reset your password by the link in your email!"
      );

      return true;
    }
  },
};
export default loginApi;
