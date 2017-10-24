class Post < ActiveRecord::Base
  validates :title, :artist, :cover_url, :song_url, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :bookmarks,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Bookmark

  has_many :bookmarkers,
    through: :bookmarks,
    source: :user


end
