import { Router } from "express";

const route = Router();

let nextId = 4;

let posts = [
  {
    id: 1, // TYPE: number
    content: "아무거나 작성한 글입니다.", // TYPE: string
    writer: 1, // TYPE: number - 누가 썼는지 해당 유저의 ID가 들어갑니다
  },
  {
    id: 2, // TYPE: number
    content: "트위터 한개의 트윗 생각하시면 돼요", // TYPE: string
    writer: 2, // TYPE: number - 누가 썼는지 해당 유저의 ID가 들어갑니다
  },
  {
    id: 3, // TYPE: number
    content: "아무거나 작성한 글입니다 트위터 한개의 트윗 생각하시면 돼요", // TYPE: string
    writer: 1, // TYPE: number - 누가 썼는지 해당 유저의 ID가 들어갑니다
  },
];
//글목록조회
route.get("/", (req, res) => {
  res.json(posts);
});

// 개별 글 목록 조회
route.get("/:id", (req, res) => {
  const post = posts.findIndex(posts => posts.id === +req.params.id);
  if (post === -1) {
    return res.json({
      error: "Post not exist",
    });
  }
  res.json(posts.filter(post => post.id === +req.params.id)[0]);
});

//글 생성
route.post("/", (req, res) => {
  posts.push({
    id: nextId++,
    content: req.body.content,
    writer: req.body.writer,
  });
  res.json(posts);
});

//글 개별 항목 수정
route.put("/:id", (req, res) => {
  const index = posts.findIndex(post => post.id === +req.params.id);
  if (index === -1) {
    return res.json({
      error: "Can not modify post",
    });
  }
  posts[index] = {
    id: req.params.id,
    content: req.body.content,
    writer: req.body.writer,
  };
  res.json(posts);
});

//포스트 삭제
// 자신의 글 미완성
route.delete("/:id", (req, res) => {
  const index = posts.findIndex(posts => posts.id === +req.params.id);
  if (index === -1) {
    return res.json({
      error: "Can not delete post",
    });
  }
  posts = posts.filter(posts => posts.id !== +req.params.id);
  res.json({
    data: "Successfully deleted",
  });
});

export default route;
