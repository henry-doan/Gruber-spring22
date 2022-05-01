class RemoveLawnSizeFromServices < ActiveRecord::Migration[7.0]
  def change
    remove_column :services, :lawn_size, :string
  end
end
