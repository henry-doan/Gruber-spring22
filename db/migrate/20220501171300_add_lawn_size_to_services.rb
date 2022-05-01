class AddLawnSizeToServices < ActiveRecord::Migration[7.0]
  def change
    add_column :services, :lawn_size, :integer
  end
end
