/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package client.messages.commands.player;

import client.MapleCharacter;
import client.MapleClient;
import client.inventory.MapleInventory;
import client.inventory.MapleInventoryType;
import client.messages.Command;
import server.MapleInventoryManipulator;

/**
 *
 * @author Riley
 */
public class GetNXCommand extends Command {

    @Override
    public void execute(MapleClient c, String[] params) {
        MapleCharacter player = c.getPlayer();

        MapleInventory etc = player.getInventory(MapleInventoryType.ETC);
        int total = etc.countById(4031865) * 100 + etc.countById(4031866) * 250;
        while (etc.countById(4031865) > 0) { 
            MapleInventoryManipulator.removeFromSlot(c, MapleInventoryType.ETC, etc.findById(4031865).getPosition(), (short) 1, false);
        }
        while (etc.countById(4031866) > 0) { 
            MapleInventoryManipulator.removeFromSlot(c, MapleInventoryType.ETC, etc.findById(4031866).getPosition(), (short) 1, false);
        }
        if (total > 0) {
            player.modifyCSPoints(1, total, true);
        } else {
            player.dropMessage(6, "no nx cards found in inventory");
        }
    }

}
