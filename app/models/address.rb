class Address < ApplicationRecord
  belongs_to :service

  validates :street, :city, :state, :zip, presence: true
end
