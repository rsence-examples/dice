
class DiceExample < GUIPlugin
  def random_dice
    rand(6)+1
  end
  def roll_dice( msg, value )
    if value.data == 1
      ses = get_ses( msg )
      ses[:dice1].set( msg, random_dice )
      ses[:dice2].set( msg, random_dice )
      ses[:dice3].set( msg, random_dice )
    end
    value.set( msg, 0 )
    true
  end
end

