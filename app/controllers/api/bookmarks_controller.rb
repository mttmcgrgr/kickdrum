class Api::BookmarksController < ApplicationController

  def create
    @bookmark = Bookmark.new(bookmark_params)
    @bookmark.user_id = current_user.id

    if @bookmark.save
      render :show
    else
      render json: @bookmark.errors.full_messages, status: 422
    end

  end

  def destroy
    @bookmark = current_user.bookmarks.find_by(post_id: params[:id])

    if @bookmark.destroy
      render :show
    else
      render json: @bookmark.errors.full_messages, status: 422
    end
  end


  private

  def bookmark_params
    params.require(:bookmark).permit( :post_id )
  end

end
