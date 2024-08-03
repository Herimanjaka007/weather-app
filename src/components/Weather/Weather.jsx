export const Weather = ({ weatherData, city }) => {
    const { weather, main, sys} = weatherData;
    const { humidity, temp } = main;
  
    return <section className="card p-5 w-75 mx-auto">
      <h2 className="card-title">{city} Meteo</h2>
      <h3 className="card-subtitle text-secondary">Country: {sys?.country}</h3>
      <p>{weather[0].description}</p>
      <article className="card-body d-flex gap-5">
        {/* 0 deg celcius = -273.15  */}
          <p className="display-3">{Math.round((temp - 273.15))} &deg; C</p>
        <section className="information mx-auto">
          <p>Humidity: {humidity} %</p>
        </section>
      </article>
    </section>
  }