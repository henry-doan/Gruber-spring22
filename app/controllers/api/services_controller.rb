class Api::ServicesController < ApplicationController
  before_action :set_user
  before_action :set_service, only: [:show, :update, :destroy ]
  def index
    render json: @current_user.services
  end
  def show
    render json: @service
  end
  def create
    @service = @current_user.services.new(service_params)
    if @service.save
      render json: @service
    else
      render json: { errors: @service.errors }, status: :unprocessable_entity
    end
  end
  def update
    if @service.update(service_params)
      render json: @service
    else
      render json: { errors: @service.errors }, status: :unprocessable_entity
    end
  end
  def destroy
    @service.destroy
    render json: { message: 'Service Canceled' }
  end

  private
    def set_service
      @service = @current_user.services.find(params[:id])
    end
    def set_user
      @current_user = User.find(params[:user_id])
    end
    def service_params
      params.require(:service).permit(:lawn_size, :service_type, :frequency, :sdate, :stime, :service_image, :complete)
    end
end
