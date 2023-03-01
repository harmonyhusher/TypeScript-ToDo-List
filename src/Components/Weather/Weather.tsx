import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import WeatherPres from "./WeatherPres";
import { WeatherData } from "./WeatherPres";

const Weather: React.FC = () => {
  const [city, setCity] = useState<string>(""); // состояние для хранения значения города
  const [weatherData, setWeatherData] = useState<WeatherData>(); // состояние для хранения данных о погоде
  const apiKey = "a974285ba60952542544c2e906e40532";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      const response: AxiosResponse<WeatherData> = await axios.get(url);
      setWeatherData(response.data);
      console.log("запрос"); // обновление состояния с данными о погоде
    } catch (error) {
      console.log(error);
      alert("Ошибка запроса"); // вывод сообщения об ошибке
    }
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Введите имя"
      />
      <button type="submit" disabled={city === ""}>
        Узнать погоду
      </button>
      {weatherData ? <WeatherPres weatherData={weatherData} /> : null}
    </form>
  );
};

export default Weather;
