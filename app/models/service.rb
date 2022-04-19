class Service < ApplicationRecord
  belongs_to :user
  has_many :notes, dependent: :destroy
  has_many :addresses, dependent: :destroy
  has_many :invoices, dependent: :destroy


  # validates :lawn_size, :service_type, :frequency, :sdate, :stime, :service_image, presence: true
end
