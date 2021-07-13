/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package client.messages.commands.player;

import client.MapleCharacter;
import client.MapleClient;
import client.messages.Command;
import java.util.HashSet;
import server.life.MapleLifeFactory;
import server.life.MapleMonster;
import server.maps.MapleMapObject;

/**
 *
 * @author Riley
 */
public class SpawnRateCommand extends Command {

    @Override
    public void execute(MapleClient c, String[] params) {
        MapleCharacter player = c.getPlayer();
        HashSet<MapleMonster> mobs = new HashSet<>();

        for (MapleMapObject mmo : player.getMap().getAllMonster()) {
            MapleMonster mob = (MapleMonster) mmo;
            if (mob.isAlive() && !mob.isBoss()) {
                mobs.add(mob);
            }
        }

        int multiplier;

        if (params.length > 0) {
            try { 
                multiplier = Integer.parseInt(params[0]);
                if (multiplier > 5) {
                    multiplier = 5;
                }
            }
            catch (NumberFormatException ex) {
                player.dropMessage(6, "Syntax: !xsp or !xsp <multiplier between 1 and 5>");
                multiplier = 1;
            }
        } else {
            multiplier = 1;
        }

        for (MapleMonster mob : mobs) {
            for (int i = 0; i < multiplier; i++) {
                player.getMap().spawnMonsterOnGroundBelow(MapleLifeFactory.getMonster(mob.getId()), mob.getPosition());
            }
        }
    }

}