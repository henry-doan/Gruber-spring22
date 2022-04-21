class Api::ConfirmationsController < ApplicationController
  
  
    before_action :set_invoice
    before_action :set_confirmation, only: [:update, :show, :destroy]
    
    def index
      render json: @invoice.confirmations
    end
  
    def show
      render json: @confirmation
    end
  
    def create
      @confirmation = @invoice.confirmations.new(workerid: params[:workerid])
  
      file = params[:conf_img]
  
      if file && file != ''
        begin
          ext = File.extname(file.tempfile)
          cloud_image = Cloudinary::Uploader.upload(
            file, public_id: file.original_filename, secure: true
          )
          @confirmation.conf_img = cloud_image['secure_url']
  
          if @confirmation.save
            render json: @confirmation
          else
            render json: { errors: @confirmation.errors }, status: 422
          end
        rescue => e
          render json: { errors: e }, status: 422
        end
      else
        if @confirmation.save
          render json: @confirmation
        else
          render json: { errors: @confirmation.errors.full_messages }, status: 422
        end
      end
    end

    def update
    
      @confirmation.workerid = params[:workerid] ? params[:workerid] : @confirmation.workerid
  
    
      file = params[:conf_img]
      
      if file && file != '' && file != 'undefined'
        begin
          ext = File.extname(file.tempfile)
          cloud_image = Cloudinary::Uploader.upload(
            file, public_id: file.original_filename, secure: true
          )
          @confirmation.conf_img = cloud_image['secure_url']
          if @confirmation.save 
            render json: @confirmation
          else 
            
            render json: { errors: @confirmation.errors.full_messages }, status: 422
          end
        rescue => e
          render json: { errors: e }, status: 422
        end
      else 
        if @confirmation.save 
          render json: @confirmation
        else 
          render json: { errors: @confirmation.errors.full_messages }, status: 422
        end
      end
    end
  
  
    def destroy
      @confirmation.destroy
      render json: { message: 'confirmation deleted'}
    end
  
    private 
      def set_invoice
        @invoice = Invoice.find(params[:invoice_id])
      end
  
      def set_confirmation
        @confirmation = @invoice.confirmations.find(params[:id])
      end
  
      def confirmation_params
        params.require(:confirmation).permit(:workerid, :conf_img)
      end
  
  



end
