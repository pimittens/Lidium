/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package client.messages.commands.player;

import client.MapleCharacter;
import client.MapleClient;
import client.messages.Command;

/**
 *
 * @author Riley
 */
public class ExpCommand extends Command {

    @Override
    public void execute(MapleClient c, String[] params) {
        MapleCharacter player = c.getPlayer();

        int level = player.getLevel();
        if (level < 10) {
            return;
        }
        int maxRate = level / 10;

        int amount;
        if (params.length > 0) {
            try {
                amount = Math.min(Integer.parseInt(params[0]), maxRate);
            } catch (NumberFormatException e) {
                amount = 1;
            }
        } else {
            amount = maxRate;
        }
        player.setExpRate(amount);
        player.dropMessage(6, "Your exp rate has been set to " + amount);
        player.dropMessage(6, "Your current max exp rate is " + maxRate);
        player.dropMessage(6, "Your current quest exp rate is " + Math.max(1, (level / 10 - 1) + Math.max(0, level / 10 - 5) + Math.max(0, 2 * (level / 10 - 11))));
    }
}
