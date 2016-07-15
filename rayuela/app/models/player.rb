class Player < ActiveRecord::Base

  validates :name, uniqueness: true
  has_many :games
  has_many :rivals, class_name: "Player", through: :games

end
