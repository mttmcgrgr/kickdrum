class CreateBookmarks < ActiveRecord::Migration
  def change
    create_table :bookmarks do |t|
      t.integer :post_id, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end
    add_index :bookmarks, :post_id, unique: true
    add_index :bookmarks, :user_id, unique: true
  end
end
