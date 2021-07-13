/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package client.messages.commands.player;

import client.MapleClient;
import client.messages.Command;

/**
 *
 * @author Riley
 */
public class SaveCharacterCommand extends Command {

    @Override
    public void execute(MapleClient c, String[] params) {
        c.getPlayer().saveToDB(false, false);
        c.getPlayer().dropMessage(6, "Character saved");
    }
}