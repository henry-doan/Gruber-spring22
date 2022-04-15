Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do 
    resources :users, only: :update
    
    resources :users, except: [:index, :show, :create, :destroy, :update] do 
      resources :services 
    end
    resources :services, except: [:index, :show, :create, :destroy, :update] do
      resources :notes
    end
    resources :services, except: [:index, :show, :create, :destroy, :update] do
      resources :addresses
    end
    resources :services, except: [:index, :show, :create, :destroy, :update] do
      resources :invoices
    end


    

  end
  # Defines the root path route ("/")
  # root "articles#index"
end
