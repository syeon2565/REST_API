import express from "express";
import morgan from "morgan";
import api from "./api";
import db from "./models";

const app = express();
app.set("port", process.env.PORT || 3000);

db.sequelize // 시퀄라이즈 연결
  .sync({ force: false }) // force는 서버 실행시마다 테이블 재생성 여부
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch(err => {
    console.log("데이터베이스 연결 실패");
    console.error(err);
  });

app.use(morgan("dev"));
app.use(express.json());
app.use("/api", api);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
