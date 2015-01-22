Rails.application.routes.draw do
  get 'song/index'

  get 'song/create'

  get 'song/destroy'

  devise_for :users
  root 'home#index'

  resources :songs, only: [:index, :create, :destroy]


end
