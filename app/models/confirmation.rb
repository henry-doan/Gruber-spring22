class Confirmation < ApplicationRecord
  belongs_to :invoice

  validates :workerid, :conf_img, presence: true
end
