class SoundCloudAPI

  def self.tracks
    client = Soundcloud.new(client_id:'1931311a85d3f849f5e5cf60070cffad')
    tracks = client.get('/tracks', :limit => 30, :order => 'hotness', :q =>'chillwave')
  end


end