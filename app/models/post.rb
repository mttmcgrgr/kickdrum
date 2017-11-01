class Post < ActiveRecord::Base
  validates :title, :artist, :cover_url, :song_url, presence: true

  belongs_to :user

  has_many :bookmarks,
    dependent: :destroy

end
