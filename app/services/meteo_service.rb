class MeteoService
  include HTTParty
  base_uri 'https://api.weatherapi.com/v1'

  def initialize(city)
    @city = city
  end


  def current_weather
    self.class.get('/current.json', query: {
      key: ENV['WEATHER_API_KEY'],
      q: @city,
      lang: 'fr'
    })
  end
end
