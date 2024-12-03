import axios from "axios";
import "./style.css";
import { useState } from "react";

function Example01() {
  const [state, setState] = useState({ text: "" });
  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

  const onClick = () => {
    const textbox = {
      inText: state.text,
    };

    axios
      .post("http://localhost:4000/text", {
        headers: {
          "content-type": "application/json",
        },
        data: textbox,
      })
      .then((json) => {
        //서버에 요청을 완료하면
        console.log(json); //json: 서버가 클라이언트에게 보내는 데이터(res)
        setState({ text: json.data.text });
      });
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      onClick();
      e.prevenDefault();
    }
  };

  return (
    <div class="container">
      <form className="search-box" action="" method="get">
        <input
          className="search-txt"
          type="text"
          name="text"
          placeholder="음식을 입력해주세요"
          onChange={handleChange}
          onKeyDown={(e) => activeEnter(e)}
        ></input>
      </form>
      <h3 className="state">{state.text}</h3>
      {/* <input class="search-bar" name="text" onChange={handleChange}></input>
      <button onClick={onClick}>전송</button>
      <h3>{state.text}</h3> */}
    </div>
  );
}

export default Example01;
