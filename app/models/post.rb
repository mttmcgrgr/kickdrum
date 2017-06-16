class Post < ActiveRecord::Base
  validates :title, :artist, :cover_url, :song_url, presence: true

  belongs_to :user
  has_many :bookmarks
  has_many :bookmarking_users, :through => :bookmarks, :source => :user
end
