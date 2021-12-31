import axios from "axios";
import { useEffect, useState } from "react";

const Branchs = () => {
  const [dataBranchs, setDataBranchs] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://dashboard.yalago.net/api/vendor/ike/branches?type=pickup&longitude=49.5760514&latitude=25.3999575`,
      withCredentials: false,
    })
      .then((res) => {
        // return <Home data="HI"/>
        setDataBranchs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dataBranchs]);

  return (
    <>
      {console.log(dataBranchs.data)}
      <div></div>
    </>
  );
};
export default Branchs;
