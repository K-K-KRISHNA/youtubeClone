import { useEffect } from "react";

const Youtube = () => {
  const apiUrl =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&key=AIzaSyD5lk-Bisvtu1tIrV_FwlxIc_R2qgPMEaY";
  const gettingData = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gettingData();
  });
  return <div>Youtube</div>;
};

export default Youtube;
