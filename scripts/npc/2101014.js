var points;
var items;
var prices;
var n;

function start() {
    var record = cm.getCData("bossQuest");
    points = record == null ? "0" : record;
	n = 0;
    cm.sendSimple("Would you like to have a taste of a relentless boss battle?\n\r\n\r #b#L3#Current points#l#k \r\n #b#L4#exchange points#l#k \r\n\r\n #b#L0# #v03994115##l #L1# #v03994116##l #L2# #v03994117##l #L28# #v03994118##l");
}

function action(mode, type, selection) {
    if (mode == 1) {
		if (n == 0) {
			n = 2;
			switch (selection) {
				case 0:
				if (cm.getParty() != null) {
				if (cm.getDisconnected("BossQuestEASY") != null) {
					cm.getDisconnected("BossQuestEASY").registerPlayer(cm.getPlayer());
				 } else if (cm.isLeader()) {
					var party = cm.getPlayer().getParty().getMembers();
					var mapId = cm.getPlayer().getMapId();
					var next = true;
					var it = party.iterator();
					while (it.hasNext()) {
					var cPlayer = it.next();
					var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
					if (ccPlayer == null || ccPlayer.getLevel() < 70) {
						next = false;
						break;
					}
					}	
					if (next) {
					var q = cm.getEventManager("BossQuestEASY");
					if (q == null) {
						cm.sendOk("Unknown error occured");
					} else {
						q.startInstance(cm.getParty(), cm.getMap());
						cm.dispose();
					}
					} else {
					cm.sendOk("All players must be in map and above level 70.");
					}
				} else {
					cm.sendOk("You are not the leader of the party, please ask your leader to talk to me.");
				}
				} else {
					cm.sendOk("Please form a party first.");
				}
				break;
				case 1:
				if (cm.getParty() != null) {
				if (cm.getDisconnected("BossQuestMed") != null) {
					cm.getDisconnected("BossQuestMed").registerPlayer(cm.getPlayer());
				 } else if (cm.isLeader()) {
					var party = cm.getPlayer().getParty().getMembers();
					var mapId = cm.getPlayer().getMapId();
					var next = true;
					var it = party.iterator();
					while (it.hasNext()) {
					var cPlayer = it.next();
					var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
					if (ccPlayer == null || ccPlayer.getLevel() < 100) {
						next = false;
						break;
					}
					}	
					if (next) {
					var q = cm.getEventManager("BossQuestMed");
					if (q == null) {
						cm.sendOk("Unknown error occured");
					} else {
						q.startInstance(cm.getParty(), cm.getMap());
						cm.dispose();
					}
					} else {
					cm.sendOk("All players must be in map and above level 100.");
					}
					} else {
					cm.sendOk("You are not the leader of the party, please ask your leader to talk to me.");
					}
				} else {
					cm.sendOk("Please form a party first.");
				}
				break;
				case 2:
				if (cm.getParty() != null) {
				if (cm.getDisconnected("BossQuestHARD") != null) {
					cm.getDisconnected("BossQuestHARD").registerPlayer(cm.getPlayer());
				 } else if (cm.isLeader()) {
					var party = cm.getPlayer().getParty().getMembers();
					var mapId = cm.getPlayer().getMapId();
					var next = true;
					var it = party.iterator();
					while (it.hasNext()) {
					var cPlayer = it.next();
					var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
					if (ccPlayer == null || ccPlayer.getLevel() < 120) {
						next = false;
						break;
					}
					}	
					if (next) {
					var q = cm.getEventManager("BossQuestHARD");
					if (q == null) {
						cm.sendOk("Unknown error occured");
					} else {
						q.startInstance(cm.getParty(), cm.getMap());
						cm.dispose();
					}
					} else {
					cm.sendOk("All players must be in map and above level 120.");
					}
					} else {
					cm.sendOk("You are not the leader of the party, please ask your leader to talk to me.");
					}
				} else {
					cm.sendOk("Please form a party first.");
				}
				break;
				case 28:
				if (cm.getParty() != null) {
				if (cm.getDisconnected("BossQuestHELL") != null) {
					cm.getDisconnected("BossQuestHELL").registerPlayer(cm.getPlayer());
				 } else if (cm.isLeader()) {
					var party = cm.getPlayer().getParty().getMembers();
					var mapId = cm.getPlayer().getMapId();
					var next = true;
					var it = party.iterator();
					while (it.hasNext()) {
					var cPlayer = it.next();
					var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
					if (ccPlayer == null || ccPlayer.getLevel() < 160) {
						next = false;
						break;
					}
					}	
					if (next) {
					var q = cm.getEventManager("BossQuestHELL");
					if (q == null) {
						cm.sendOk("Unknown error occured");
					} else {
						q.startInstance(cm.getParty(), cm.getMap());
						cm.dispose();
					}
					} else {
					cm.sendOk("All players must be in map and above level 160.");
					}
					} else {
					cm.sendOk("You are not the leader of the party, please ask your leader to talk to me.");
					}
				} else {
					cm.sendOk("Please form a party first.");
				}
				break;
				case 3:
				cm.sendOk("#bCurrent Points : " + points);
				break;
				case 4:
				var selStr = "Current Points : " + points + " \r\n\r\n#b";
				items = [1112920, 1012070, 1012071, 1012072, 1012073, 2049700, 5062002, 1182007];
				prices = [100, 5000, 5000, 5000, 5000, 10000, 50000, 100000];
				for (var i = 0; i < items.length; i++)
					selStr += "\r\n#L" + i + "##i" + items[i] + "##z" + items[i] + "# (" + prices[i] + " points)#b";
				n = 1;
				cm.sendSimple(selStr);
				break;
			}
		} else if (n == 1) {
			if (prices[selection] > points) {
				cm.sendOk("You don't have enough points for that");
			} else {
				cm.spendBossQuestPoints(prices[selection]);
				var qty = 1;
				if (items[selection] == 5062002) {
					qty = 10;
				}
				if (cm.canHold(items[selection], qty)) {
                    cm.gainItem(items[selection], qty);
                    cm.sendOk("The item is done! Take it and try this piece of art for yourself.");
                } else {
                    cm.sendOk("You have no free slot in your inventory.");
                }
			}
			cm.dispose();
		} else {
			cm.dispose();
		}
    }
}