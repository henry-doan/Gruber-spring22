class Service < ApplicationRecord
  belongs_to :user

  validates :lawn_size, :service_type, :frequency, :sdate, :stime, :service_image, presence: true
end
