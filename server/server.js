const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

const { User } = require("./models/User");

//몽고db key 숨기기 위해서
const config = require("./config/key");

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//프론트와 통신하기 위한 cors 설정
app.use(cors());
// express 내장 바디파서
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("여긴 메인 페이지~");
});

app.post("/text", (req, res) => {
  //req
  const text1 = req.body.data.inText;
  console.log(req.body);
  console.log(text1);

  //res
  const sendText = {
    text: "전송 성공!!",
  };
  res.send(sendText);
});

app.post("/register", async (req, res) => {
  //회원 가입 할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 저장한다.
  const user = new User(req.body);
  await user
    .save() //db에 저장함
    //성공한다면
    .then(() => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        success: false,
        err: err,
      });
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
