import { Router } from "express";

const route = Router();

let nextId = 4;

let users = [
  {
    id: 1, // TYPE: number
    email: "test1@email.com", // TYPE: string
    password: "password", // TYPE: string
  },
  {
    id: 2, // TYPE: number
    email: "test2@gmail.com", // TYPE: string
    password: "1234", // TYPE: string
  },
  {
    id: 3, // TYPE: number
    email: "test3@naver.com", // TYPE: string
    password: "qwerty111@", // TYPE: string
  },
];

route.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((users) => users.email);
  if (user && user.password === password) {
    return res.json(users)({
      data: {
        user: {
          id: user.id,
        },
      },
    });
  }
  res.json({ error: "User not exist" });
});

route.post("/register", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((users) => users.email);
  if (user) {
    return res.json({
      error: "User already exist",
    });
  }
  users.push({
    id: nextId++,
    email, // 키와 값의 변수명이 같으면 값은 생략 가능하다.
    password,
  });
  res.json({
    data: {
      user: {
        id: users.find((user) => users.email === email).id, // 생성된 유저의 ID값
      },
    },
  });
});

export default route;
