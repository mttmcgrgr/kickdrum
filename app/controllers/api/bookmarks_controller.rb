class Api::BookmarksController < ApplicationController

  def create
    @bookmark = Bookmark.new(bookmark_params)
    @bookmark.user_id = current_user.id

    if @bookmark.save
      render "api/posts/show"
    else
      render json: @bookmark.errors.full_messages, status: 422
    end

  end

  def destroy
    @bookmark = current_user.bookmarks.find_by(post_id: params[:id])
    @post = @bookmark.post

    if @bookmark.destroy
      render "api/posts/show"
    end
  end


  private

  def bookmark_params
    params.require(:bookmark).permit(:user_id, :post_id)
  end

end
