class Api::BookmarksController < ApplicationController

  def create
  end

  def index
  end

  def show
  end

  def destroy
  end


  private

  def bookmark_params
    params.require(:bookmark).permit(:post_id, :user_id)
  end
  
end
