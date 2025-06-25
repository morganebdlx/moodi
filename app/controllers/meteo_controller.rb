class MeteoController < ApplicationController
  def index
  @city = params[:city] || 'Bordeaux'
  service = MeteoService.new(@city)
  @meteo = service.current_weather.parsed_response
  end
end
