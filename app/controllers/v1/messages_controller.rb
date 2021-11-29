class V1::MessagesController < ApplicationController
  before_action :set_messages

  def index
    render json: @messages
  end

  private

  def set_messages
    @messages = Message.all.order('RANDOM()').limit(1)
  end
end
