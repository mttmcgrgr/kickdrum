class Api::BookmarksController < ApplicationController



  def create
    @bookmark = current_user.bookmarks.new(bookmark_params)
    if @bookmark.save
      render "api/bookmarks/show"
    else
      render json: @bookmark.errors, status: 422
    end
  end


  # def create
  #   @bookmark = Bookmarks.new(bookmark_params)
  #   @bookmark.user_id = current_user.id
  #   if @bookmark.save
  #     render "api/bookmarks/show"
  #   else
  #     render json: @bookmark.errors, status: 422
  #   end
  # end

  def destroy
    @Bookmark = Bookmark.find_by(post_id: params[:id], user_id: current_user.id)
    @bookmark.destroy
    render json: @bookmark
  end


  private

  def bookmark_params
    params.require(:bookmark).permit(:post_id, :user_id)
  end

end
