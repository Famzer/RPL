import axios from "axios";
import { useEffect, useState } from "react";
import { ReactComponent as Logo } from "./high-temperature-svgrepo-com.svg";


export default function App() {
  const [temp, setTemp] = useState(0)
  const [safe, setSafe] = useState("Suhu Tidak Optimal")

  useEffect(() => {
    const interval = setInterval(() => {
      const getData = async() => {
        const result = await axios.get("http://localhost:5000/data");
        const data = result.data[0];
        
        const suhu = data.temp.toFixed(2);
        // console.log(suhu);
        setTemp(suhu);
        // setTemp(data.temp.toFIxed(2));
        if (suhu > 27 || suhu < 24) {
          setSafe("Suhu Tidak Optimal")
        } else {
          setSafe("Suhu Optimal")
        }
      }
      getData();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col">
      <h1 className="w-max mx-auto rounded-2xl font-bold mt-10 py-5 px-10 bg-blue-500 text-white drop-shadow-lg">Monitoring Suhu dalam Air</h1>
    <div className="flex flex-col items-center justify-center w-80 h-80 mx-auto mt-5 rounded-2xl bg-sky-200 drop-shadow-lg">
      <h2 className="font-bold mb-5">Nilai Suhu Dalam Air</h2>
      <div className="flex items-center justify-center">
      <Logo className="w-20"/>
      <p className="font-semibold text-4xl">{temp} °C</p>
      </div>
      <p className="text-xl mt-5">{safe}</p>
    </div>
      </div>
    </div>
    </>
  )
}

