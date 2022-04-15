class CreateInvoices < ActiveRecord::Migration[7.0]
  def change
    create_table :invoices do |t|
      t.float :price
      t.boolean :approve
      t.belongs_to :service, null: false, foreign_key: true

      t.timestamps
    end
  end
end
