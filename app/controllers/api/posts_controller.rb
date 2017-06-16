class Api::PostsController < ApplicationController

  def index
    @posts = Post.all.includes(:user)
    @posts.to_a.reverse!
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)
    
    if @post.save
      render :index
    else
      render json: @post.errors.full_messages, status: 422
    end
  end


  def destroy
    @post = Post.find(params[:id])

    if @post.destroy
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :artist, :cover_url, :song_url, :user_id)
  end
end
