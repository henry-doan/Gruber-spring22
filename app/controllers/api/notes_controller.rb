class Api::NotesController < ApplicationController
  before_action :set_service
  before_action :set_note, only: [:update, :show, :destroy]
  
  def index
    render json: @service.notes
  end

  def show
    render json: @note
  end

  def create
    @note = @service.notes.new(title: params[:title], body: params[:body])

    file = params[:note_img]

    if file && file != ''
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(
          file, public_id: file.original_filename, secure: true
        )
        @note.note_img = cloud_image['secure_url']

        if @note.save
          render json: @note
        else
          render json: { errors: @note.errors }, status: 422
        end
      rescue => e
        render json: { errors: e }, status: 422
      end
    else
      if @note.save
        render json: @note
      else
        render json: { errors: @note.errors.full_messages }, status: 422
      end
    end
  end

  def update
    
    @note.title = params[:title] ? params[:title] : @note.title
    @note.body = params[:body] ? params[:body] : @note.body

  
    file = params[:note_img]
    
    if file && file != '' && file != 'undefined'
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(
          file, public_id: file.original_filename, secure: true
        )
        @note.note_img = cloud_image['secure_url']
        if @note.save 
          render json: @note
        else 
          
          render json: { errors: @note.errors.full_messages }, status: 422
        end
      rescue => e
        render json: { errors: e }, status: 422
      end
    else 
      if @note.save 
        render json: @note
      else 
        render json: { errors: @note.errors.full_messages }, status: 422
      end
    end
  end


  def destroy
    @note.destroy
    render json: { message: 'Note deleted'}
  end

  private 
    def set_service
      @service = Service.find(params[:service_id])
    end

    def set_note
      @note = @service.notes.find(params[:id])
    end

    def note_params
      params.require(:note).permit(:title, :body, :note_img)
    end
end
