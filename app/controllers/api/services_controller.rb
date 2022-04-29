class Api::ServicesController < ApplicationController
  before_action :set_user, except: [:allservices, :adminUpdateService]
  before_action :set_service, only: [:show, :update, :destroy]

  def index
    render json: @current_user.services
  end

  def allservices 
    paginate json: Service.all.order(:sdate)
  end

  def adminUpdateService
    @service = Service.find(params[:service_id])
    if @service.update(service_params)
      render json: @service
    else
      render json: { errors: @service.errors }, status: :unprocessable_entity
    end
  end

  def show
    render json: @service
  end

  def create
    @service = @current_user.services.new(lawn_size: params[:lawn_size], service_type: params[:service_type], frequency: params[:frequency], sdate: params[:sdate], stime: params[:stime], complete: params[:complete])

    file = params[:service_image]

    if file && file != ''
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(
          file, public_id: file.original_filename, secure: true
        )
        @service.service_image = cloud_image['secure_url']

        if @service.save
          render json: @service
        else
          render json: { errors: @service.errors }, status: :unprocessable_entity
        end
      rescue => e
        render json: { errors: e }, status: :unprocessable_entity
      end
    else
      if @service.save
        render json: @service
      else
        render json: { errors: @service.errors.full_messages }, status: :unprocessable_entity
      end
    end
  end

  def update
    
      @service.lawn_size = params[:lawn_size] ? params[:lawn_size] : @service.lawn_size
      @service.service_type = params[:service_type] ? params[:service_type] : @service.service_type
      @service.frequency = params[:frequency] ? params[:frequency] : @service.frequency
      @service.sdate = params[:sdate] ? params[:sdate] : @service.sdate
      @service.stime = params[:stime] ? params[:stime] : @service.stime
      @service.complete = params[:complete] ? params[:complete] : @service.complete
    
      file = params[:service_image]
      
      if file && file != '' && file != 'undefined'
        begin
          ext = File.extname(file.tempfile)
          cloud_image = Cloudinary::Uploader.upload(
            file, public_id: file.original_filename, secure: true
          )
          @service.service_image = cloud_image['secure_url']
          if @service.save 
            render json: @service
          else 
            
            render json: { errors: @service.errors }, status: :unprocessable_entity
          end
        rescue => e
          render json: { errors: e }, status: :unprocessable_entity
        end
      else 
        if @service.save 
          render json: @service
        else 
          render json: { errors: @service.errors.full_messages }, status: :unprocessable_entity
        end
      end
    end


    # if @service.update(service_params)
    #   render json: @service
    # else
    #   render json: { errors: @service.errors }, status: :unprocessable_entity
    # end
  

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
