class Songs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :url_track, :url_image, :title
      t.belongs_to :user
    end
  end
end
