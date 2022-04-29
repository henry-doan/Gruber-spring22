Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do 
    resources :users, only: :update
      get '/allservices', to: 'services#allservices' 
      resources :users, except: [:index, :show, :create, :destroy, :update] do 
        resources :services
      end
      resources :services, except: [:index, :show, :create, :destroy, :update] do
        put '/adminUpdateService', to: 'services#adminUpdateService'
      resources :notes
    end
    resources :services, except: [:index, :show, :create, :destroy, :update] do
      resources :addresses
    end
    resources :services, except: [:index, :show, :create, :destroy, :update] do
      resources :invoices
    end
    resources :invoices, except: [:index, :show, :create, :destroy, :update] do
      resources :confirmations
    end



    

  end
  get '*other', to: 'static#index'
# Defines the root path route ("/")
  # root "articles#index"
end
