class CreateServices < ActiveRecord::Migration[7.0]
  def change
    create_table :services do |t|
      t.string :lawn_size
      t.string :service_type
      t.string :frequency
      t.datetime :sdate
      t.datetime :stime
      t.string :service_image
      t.boolean :complete
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
