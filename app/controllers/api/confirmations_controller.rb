class Api::ConfirmationsController < ApplicationController
  
  
    before_action :set_invoice
    before_action :set_confirmation, only: [:update, :show, :destroy]
    
    def index
      render json: @invoices.confirmations
    end
  
    def show
      render json: @confirmation
    end
  
    def create
      @confirmation = @invoice.confirmations.new(confirmation_params)
      if @confirmation.save
        render json: @confirmation
      else
        render json: { errors: @confirmation.errors }, status: :unprocessable_entity
      end
    end
  
    def update
      if @confirmation.update(confirmation_params)
        render json: @confirmation
      else
        render json: { errors: @confirmation.errors }, status: :unprocessable_entity
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
