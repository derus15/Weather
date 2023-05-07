import './App.css';
import {useState} from "react";

function App() {

    const [info, setInfo] = useState('');

    function showWeather(){
        const currentDate = new Date();
        let month = currentDate.getMonth() + 1;
        if (month !== 5){
            setInfo('Погода не май месяц');
        } else {
            setInfo('Погода май месяц');
        }
    }

  return (
    <div className={"container"}>
        <h1 className={"header"}>Определитель погоды</h1>
        <div className={"container_btn"}>
            <button onClick={showWeather} className={"button"}>Узнать погоду</button>
        <div className={"info"}>
            {info}
        </div>
        </div>
    </div>
  );
}

export default App;
