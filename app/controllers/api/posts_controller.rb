class Api::PostsController < ApplicationController

  def index
    @posts = Post.all

    if logged_in?
      render :index
    else
      render 'api/posts/home'
    end

  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      @posts = Post.all
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
    params.require(:post).permit(:title, :artist, :cover_url, :song_url, :user_id, :all_tags)
  end
end
