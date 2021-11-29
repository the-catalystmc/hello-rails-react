class V1::MessagesController < ApplicationController
  before_action :set_messages

  def index
    render json: @posts
  end

  private

  def set_messages
    @messages = Message.all
  end
end
