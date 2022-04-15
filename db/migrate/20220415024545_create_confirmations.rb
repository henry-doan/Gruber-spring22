class CreateConfirmations < ActiveRecord::Migration[7.0]
  def change
    create_table :confirmations do |t|
      t.integer :workerid
      t.string :conf_img
      t.belongs_to :invoice, null: false, foreign_key: true

      t.timestamps
    end
  end
end
