class CreateBookmarks < ActiveRecord::Migration
  def change
    create_table :bookmarks do |t|
      t.integer :post_id
      t.integer :user_id
    end
  end
end
