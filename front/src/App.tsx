import axios from "axios";
import React from "react";

type Response = {
  message: string;
};

function App() {
  const [data, setData] = React.useState<Response>();
  const url = "http://127.0.0.1:8000/api/hello";

  const GetData = () => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  };
  return (
    <div>
      {data ? (
        <div>{data.message}</div>
      ) : (
        <button onClick={GetData}>データを取得</button>
      )}
    </div>
  );
}

export default App;
