class Invoice < ApplicationRecord
  belongs_to :service
  has_many :confirmations
  validates :price, presence: true
end
