class Api::UsersController < ApplicationController

	def create
		@user = User.new(user_params)

		if @user.save
			login(@user)
			render :show
		else
			render json: @user.errors.full_messages, status: 422
		end
	end


	def show
    @user = User.find(params[:id])
		@posts = @user.posts
		@bookmarks = @user.bookmarks


    if @user
      render :profile
    else
      render json: ['user does not exist']
    end
  end


	private

	def user_params
		params.require(:user).permit(:username, :password, :photo_url)
	end

end
