Rails.application.routes.draw do

  root "indices#index"


  get "payment" => "indices#payment"
end


