const mongoose = require("mongoose");
//Schema: 데이터에 대한 규약
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //공백 제거
    unique: 1, //중복 금지
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  //유저의 등급(관리자, 일반등급)
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  //token: 유효성 관리
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

//model: schema를 감쌈(모델의 이름, 사용할 스키마)
const User = mongoose.model("User", userSchema);

//다른 곳에서 modle을 사용할 수 있도록 export
module.exports = { User };
