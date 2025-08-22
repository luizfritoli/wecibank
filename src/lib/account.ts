interface Account {
  user: string;
  email: string;
  password: string;
  money:number
}

export class User {
  constructor(
    public user: string,
    public email: string,
    public password: string,
    public money:number = 0
  ) {}
  get showMoney():number {
    return this.money
  }
}

export const getUsers = (): User[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem("users");
  console.log(data);
  return data ? JSON.parse(data) : [];
};

export const saveUser = (user: User) => {
  const users = getUsers();
    if (users.find((u) => u.email === user.email)) {
    throw new Error("Email já cadastrado!");
  }
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};
