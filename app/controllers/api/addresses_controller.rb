class Api::AddressesController < ApplicationController
  before_action :set_service
  before_action :set_address, only: [:update, :show, :destroy]
  
  def index
    render json: @service.addresses
  end

  def show
    render json: @address
  end

  def create
    @address = @service.addresses.new(address_params)
    if @address.save
      render json: @address
    else
      render json: { errors: @address.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @address.update(address_params)
      render json: @address
    else
      render json: { errors: @address.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @address.destroy
    render json: { message: 'Address deleted'}
  end

  private 
    def set_service
      @service = Service.find(params[:service_id])
    end

    def set_address
      @address = @service.addresses.find(params[:id])
    end

    def address_params
      params.require(:address).permit(:street, :city, :state, :zip)
    end
end
