class Api::InvoicesController < ApplicationController
  
    before_action :set_service
    before_action :set_invoice, only: [:update, :show, :destroy]
    
    def index
      render json: @service.invoices
    end
  
    def show
      render json: @invoice
    end
  
    def create
      @invoice = @service.invoices.new(invoice_params)
      if @invoice.save
        render json: @invoice
      else
        render json: { errors: @invoice.errors }, status: :unprocessable_entity
      end
    end
  
    def update
      if @invoice.update(invoice_params)
        render json: @invoice
      else
        render json: { errors: @invoice.errors }, status: :unprocessable_entity
      end
    end
  
    def destroy
      @invoice.destroy
      render json: { message: 'invoice deleted'}
    end
  
    private 
      def set_service
        @service = Service.find(params[:service_id])
      end
  
      def set_invoice
        @invoice = @service.invoices.find(params[:id])
      end
  
      def invoice_params
        params.require(:invoice).permit(:price, :approve)
      end
  
  

end
