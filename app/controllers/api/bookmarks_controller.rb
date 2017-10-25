class Api::BookmarksController < ApplicationController

  def create
    @bookmark = Bookmark.new(bookmark_params)
    @post = @bookmark.post

    if @bookmark.save
      render "api/posts/show"
    else
      render json: @like.errors.full_messages, status: 422
    end

  end

  def destroy
    @bookmark = Bookmark.find_by(
      post_id: bookmark_params[:post_id],
      user_id: bookmark_params[:user_id]
    )
    @post = @bookmark.post

    if @bookmark
       @bookmark.destroy
      render "api/posts/show"
    end
  end


  private

  def bookmark_params
    params.require(:bookmark).permit(:post_id, :user_id)
  end

end
