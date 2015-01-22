class HomeController < ApplicationController
  def index
    @tracks = SoundCloudAPI.tracks
  end
end
