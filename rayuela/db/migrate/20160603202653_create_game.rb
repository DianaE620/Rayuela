class CreateGame < ActiveRecord::Migration
  def change

    create_table :players do |t|
      t.string :name
    end

    create_table :games do |t|
      t.string :winner
      t.string :loser
      t.belongs_to :player, index: true
      t.belongs_to :rival, index: true
      t.timestamps
    end
  end


end
