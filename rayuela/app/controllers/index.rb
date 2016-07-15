get '/' do
  # Look in app/views/index.erb
  erb :index
end

post "/game" do
  @jugador = params[:jugador]
  @rival = params[:rival]
  erb :game
end


