class AddFnameAndLnameAndPhoneAndRoleAndImgToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :fname, :string
    add_column :users, :lname, :string
    add_column :users, :phone, :string
    add_column :users, :role, :string
    add_column :users, :img, :string
  end
end
