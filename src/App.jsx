import { useEffect, useState } from "react";
import { Weather } from "./components/Weather/Weather.jsx";
import { WeatherForm } from "./components/Weather/WeatherForm.jsx";

const App = () => {
  const [city, setCity] = useState('antananarivo');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setCity(new FormData(e.target).get("city"));
    setLoading(true);
  }

  useEffect(() => {
    let uri = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1cfea9393a62a26a13b1f9e3184e3cc6`;

    const getWeather = async (uri) => {
      let res = await fetch(uri);
      res = await res.json();
      if (res.cod === 200) {
        const { weather, main, sys} = res;
        return { weather, main, sys};
      }
      return null;
    }

    getWeather(uri)
      .then(res => {
        setWeather(res);
        setLoading(false);
      })
  }, [city]);

  return <section className="container p-5 text-secondary">
    <h1 className="text-center text mb-3">⛅ Weather App</h1>
    <WeatherForm onSubmit={onSubmit} />
    {loading ?
      <Spinners />
      :
      weather !== null ?
        <Weather weatherData={weather} city={city} /> :
        <p className="alert alert-danger">Acun resultat Trouve</p>
    }
  </section>
};


export default App;