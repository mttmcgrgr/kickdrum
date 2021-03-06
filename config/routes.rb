Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [ :create, :show ]
    resource :session, only: [ :create, :destroy, :show ]
    resources :posts, only: [ :create, :show, :index, :destroy ]
    resources :bookmarks, only: [ :create, :destroy ]
  end
  root "static_pages#root"
end
