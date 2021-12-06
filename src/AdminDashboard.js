import { useEffect, useState } from "react";
import axios from "axios";
const AdminDashboard = () => {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const link = document.getElementById("tohome");
    const link2 = document.getElementById("toadd");
    link.style.display = "none";
    link2.style.display = "none";
    respo();
  }, []);

  function respo() {
    const a1 = axios.get("http://127.0.0.1:8000/api/auth/totalPerson");

    const a2 = axios.get("http://127.0.0.1:8000/api/auth/totalTask");

    axios.all([a1, a2]).then(
      axios.spread(function (res1, res2) {
        let datas1 = res1.data;
        let datas2 = res2.data;

        setData(datas1);
        setData2(datas2);
        setIsPending(false);
      })
    );
  }

  return (
    <div>
      {isPending && <div>Fetching data.</div>}
      {data && (
        <div className="task-list">
          <h2>ADMIN DASHOARD</h2>
          {data.map((datas) => (
            <div key="1">
              <h2>TOTAL PERSON</h2>
              <h3>{datas.persons}</h3>
            </div>
          ))}
          {data2.map((datas2) => (
            <div key="1">
              <h2>TOTAL TASK</h2>
              <h3>{datas2.totaltask}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
