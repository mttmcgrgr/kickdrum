class Bookmark < ActiveRecord::Base

  validates :user_id, :post_id, presence: true
  validates :user_id, uniqueness: {scope: :post_id}

 belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

 belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Post

end
