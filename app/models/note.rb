class Note < ApplicationRecord
  belongs_to :service

  # validates :title, :body, :note_img, presence: true
end
