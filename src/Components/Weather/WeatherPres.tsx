interface Props {
  weatherData: WeatherData;
}
export interface WeatherData {
  main: {
    temp: number;
    pressure: number;
  };
  name: string;
}

const WeatherPres: React.FC<Props> = ({ weatherData }) => {
  return (
    <>
      <div>
        <h1>Погода сейчас</h1>
        <div className="weather__data">
          <i className="bx bx-building-house icon"></i>
          <h2>Погода в {weatherData.name}</h2>
          <i className="bx bxs-thermometer icon"></i>{" "}
          <p>Температура: {Math.round(weatherData.main.temp - 273.15)}°C</p>
          <i className="bx bxs-balloon icon"></i>
          <p>Давление: {weatherData.main.pressure} hPa</p>
        </div>
      </div>
    </>
  );
};

export default WeatherPres;
