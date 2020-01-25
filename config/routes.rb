Rails.application.routes.draw do
  namespace :api, defaults: { format: "json" } do
    get :people, to: 'people#all'
  end

  root to: "main#index"
end
