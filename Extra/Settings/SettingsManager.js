import Door from "../../Components/Door";
import DungeonMap from "../../Components/DungeonMap";
import Room from "../../Components/Room";
import RenderContext from "../../Render/RenderContext";
import RenderContextManager from "../../Render/RenderContextManager";
import Position from "../../Utils/Position";
import SettingGui from "./SettingGui";

class SettingsManager {

    /**
     * @param {RenderContextManager} renderContextManager 
     */
    constructor(renderContextManager, mapRenderer) {
        this.renderContextManager = renderContextManager

        this.currentSettings = JSON.parse(FileLib.read("soopyaddonsdata", "bettermapsettings.json") || "{}") || {}

        /**
         * @type {Map<RenderContext, Object>}
         */
        this.renderContexts = new Map()

        this.fakeDungeon = this.createFakeDungeon()

        let settingX = Renderer.screen.getWidth() / 2 + 100
        let settingSize = Renderer.screen.getWidth() - (Renderer.screen.getWidth() / 2 + 200)
        let settingY = Renderer.screen.getHeight() / 2 - settingSize / 2
        this.settingRenderContext = this.createRenderContext({ posX: settingX, posY: settingY, size: settingSize })

        this.settingsGui = new SettingGui(this.currentSettings, this.fakeDungeon, this.renderContextManager.getRenderContextData(this.settingRenderContext), mapRenderer)

        this.settingsGui.changed = (key, val) => {
            this.currentSettings[key] = val

            this.saveSettings()

            for (let contextData of this.renderContexts.entries()) {
                let [context, settingOverrides] = contextData

                let data = this.renderContextManager.getRenderContextData(context)

                data.setSettings({ ...this.currentSettings, ...settingOverrides })

                data.markReRender()
            }
        }
    }

    saveSettings() {
        new Thread(() => {
            FileLib.write("soopyaddonsdata", "bettermapsettings.json", JSON.stringify(this.currentSettings))
        }).start()
    }

    /**
     * Creates a render context from the users currrent settings
     * Also adds the render context to a local list to get the settings modified if a setting is changed in the settings menu
     * @returns {RenderContext}
     */
    createRenderContext(settingOverrides = {}) {
        let context = this.renderContextManager.createRenderContext({ ...this.currentSettings, ...settingOverrides })

        this.renderContexts.set(context, settingOverrides)

        this.renderContextManager.getRenderContextData(context).onDestroy(() => {
            this.renderContexts.delete(context)
        })

        return context
    }

    /**
     * Creates a fake dungeon map used to render the dungeon in the settings gui
     * 
     * AUTOGENERATED CODE, see ./LoadSettingMap.js
     * @returns {DungeonMap}
     */
    createFakeDungeon() {
        let dungeon = new DungeonMap("F7", new Set(), false);
        {
            let r = new Room(0, [new Position(-168, -200)], "102,66");
            r.currentSecrets = 0
            r.checkmarkState = 4;
            dungeon.roomsArr.add(r);
            r.components.forEach(c => {
                dungeon.rooms.set(c.arrayX + "," + c.arrayY, r);
            });
        }
        {
            let r = new Room(1, [new Position(-168, -168), new Position(-168, -136), new Position(-136, -136)], "1050,-524");
            r.currentSecrets = 2
            r.checkmarkState = 3;
            dungeon.roomsArr.add(r);
            r.components.forEach(c => {
                dungeon.rooms.set(c.arrayX + "," + c.arrayY, r);
            });
        }
        {
            let r = new Room(1, [new Position(-136, -104)], "498,-240");
            r.currentSecrets = 0
            r.checkmarkState = 3;
            dungeon.roomsArr.add(r);
            r.components.forEach(c => {
                dungeon.rooms.set(c.arrayX + "," + c.arrayY, r);
            });
        }
        {
            let r = new Room(2, [new Position(-104, -136)], "-60,-600");
            r.currentSecrets = 0
            r.checkmarkState = 4;
            dungeon.roomsArr.add(r);
            r.components.forEach(c => {
                dungeon.rooms.set(c.arrayX + "," + c.arrayY, r);
            });
        }
        {
            let r = new Room(2, [new Position(-104, -104)], "-60,-456");
            r.currentSecrets = 0
            r.checkmarkState = 2;
            dungeon.roomsArr.add(r);
            r.components.forEach(c => {
                dungeon.rooms.set(c.arrayX + "," + c.arrayY, r);
            });
        }
        {
            let r = new Room(4, [new Position(-136, -72)], "462,-312");
            r.currentSecrets = 0
            r.checkmarkState = 4;
            dungeon.roomsArr.add(r);
            r.components.forEach(c => {
                dungeon.rooms.set(c.arrayX + "," + c.arrayY, r);
            });
        }
        {
            let r = new Room(5, [new Position(-200, -72)], undefined);
            r.currentSecrets = undefined
            r.checkmarkState = 2;
            dungeon.roomsArr.add(r);
            r.components.forEach(c => {
                dungeon.rooms.set(c.arrayX + "," + c.arrayY, r);
            });
        }
        {
            let r = new Room(1, [new Position(-200, -40), new Position(-168, -40), new Position(-136, -40)], "530,-420");
            r.currentSecrets = 0
            r.checkmarkState = 3;
            dungeon.roomsArr.add(r);
            r.components.forEach(c => {
                dungeon.rooms.set(c.arrayX + "," + c.arrayY, r);
            });
        }
        {
            let r = new Room(1, [new Position(-136, -200), new Position(-104, -200), new Position(-136, -168), new Position(-104, -168)], "166,-592");
            r.currentSecrets = 1
            r.checkmarkState = 3;
            dungeon.roomsArr.add(r);
            r.components.forEach(c => {
                dungeon.rooms.set(c.arrayX + "," + c.arrayY, r);
            });
        }
        {
            let r = new Room(1, [new Position(-72, -168)], "66,-276");
            r.currentSecrets = 1
            r.checkmarkState = 4;
            dungeon.roomsArr.add(r);
            r.components.forEach(c => {
                dungeon.rooms.set(c.arrayX + "," + c.arrayY, r);
            });
        }
        {
            let r = new Room(2, [new Position(-72, -200)], "-96,-168");
            r.currentSecrets = 0
            r.checkmarkState = 2;
            dungeon.roomsArr.add(r);
            r.components.forEach(c => {
                dungeon.rooms.set(c.arrayX + "," + c.arrayY, r);
            });
        }
        {
            let r = new Room(1, [new Position(-40, -168)], "66,-240");
            r.currentSecrets = 0
            r.checkmarkState = 3;
            dungeon.roomsArr.add(r);
            r.components.forEach(c => {
                dungeon.rooms.set(c.arrayX + "," + c.arrayY, r);
            });
        }
        {
            let r = new Room(2, [new Position(-40, -200)], "-60,-564");
            r.currentSecrets = 0
            r.checkmarkState = 4;
            dungeon.roomsArr.add(r);
            r.components.forEach(c => {
                dungeon.rooms.set(c.arrayX + "," + c.arrayY, r);
            });
        }
        {
            let r = new Room(1, [new Position(-72, -136), new Position(-40, -136)], "574,-384");
            r.currentSecrets = 3
            r.checkmarkState = 4;
            dungeon.roomsArr.add(r);
            r.components.forEach(c => {
                dungeon.rooms.set(c.arrayX + "," + c.arrayY, r);
            });
        }
        {
            let r = new Room(1, [new Position(-72, -104), new Position(-72, -72), new Position(-104, -72)], "438,-524");
            r.currentSecrets = 0
            r.checkmarkState = 2;
            dungeon.roomsArr.add(r);
            r.components.forEach(c => {
                dungeon.rooms.set(c.arrayX + "," + c.arrayY, r);
            });
        }
        {
            let r = new Room(1, [new Position(-40, -104), new Position(-40, -72), new Position(-40, -40)], "630,-420");
            r.currentSecrets = 0
            r.checkmarkState = 3;
            dungeon.roomsArr.add(r);
            r.components.forEach(c => {
                dungeon.rooms.set(c.arrayX + "," + c.arrayY, r);
            });
        }
        {
            let r = new Room(6, [new Position(-104, -40)], undefined);
            r.currentSecrets = undefined
            r.checkmarkState = 1;
            dungeon.roomsArr.add(r);
            r.components.forEach(c => {
                dungeon.rooms.set(c.arrayX + "," + c.arrayY, r);
            });
        }
        {
            let r = new Room(3, [new Position(-72, -40)], "174,66");
            r.currentSecrets = 0
            r.checkmarkState = 4;
            dungeon.roomsArr.add(r);
            r.components.forEach(c => {
                dungeon.rooms.set(c.arrayX + "," + c.arrayY, r);
            });
        }
        {
            let r = new Room(1, [new Position(-200, -200), new Position(-200, -168), new Position(-200, -136), new Position(-200, -104)], "30,-456");
            r.currentSecrets = 0
            r.checkmarkState = 3;
            dungeon.roomsArr.add(r);
            r.components.forEach(c => {
                dungeon.rooms.set(c.arrayX + "," + c.arrayY, r);
            });
        }
        {
            let r = new Room(1, [new Position(-168, -104)], "174,-132");
            r.currentSecrets = 0
            r.checkmarkState = 3;
            dungeon.roomsArr.add(r);
            r.components.forEach(c => {
                dungeon.rooms.set(c.arrayX + "," + c.arrayY, r);
            });
        }
        {
            let r = new Room(7, [new Position(-168, -72)], "-312,30");
            r.currentSecrets = 1
            r.checkmarkState = 3;
            dungeon.roomsArr.add(r);
            r.components.forEach(c => {
                dungeon.rooms.set(c.arrayX + "," + c.arrayY, r);
            });
        }
        {
            let d = new Door(1, new Position(-157, -173), 0);
            dungeon.doors.set("-157,-173", d);
        }
        {
            let d = new Door(1, new Position(-156.8000030517578, -172.8000030517578), false);
            dungeon.doors.set("-156.8000030517578,-172.8000030517578", d);
        }
        {
            let d = new Door(1, new Position(-172.8000030517578, -156.8000030517578), true);
            dungeon.doors.set("-172.8000030517578,-156.8000030517578", d);
        }
        {
            let d = new Door(1, new Position(-140.8000030517578, -156.8000030517578), true);
            dungeon.doors.set("-140.8000030517578,-156.8000030517578", d);
        }
        {
            let d = new Door(2, new Position(-108.80000305175781, -124.80000305175781), true);
            dungeon.doors.set("-108.80000305175781,-124.80000305175781", d);
        }
        {
            let d = new Door(1, new Position(-124.80000305175781, -108.80000305175781), false);
            dungeon.doors.set("-124.80000305175781,-108.80000305175781", d);
        }
        {
            let d = new Door(2, new Position(-108.80000305175781, -92.80000305175781), true);
            dungeon.doors.set("-108.80000305175781,-92.80000305175781", d);
        }
        {
            let d = new Door(4, new Position(-124.80000305175781, -76.80000305175781), false);
            dungeon.doors.set("-124.80000305175781,-76.80000305175781", d);
        }
        {
            let d = new Door(1, new Position(-124.80000305175781, -44.80000305175781), false);
            dungeon.doors.set("-124.80000305175781,-44.80000305175781", d);
        }
        {
            let d = new Door(5, new Position(-188.8000030517578, -44.80000305175781), false);
            dungeon.doors.set("-188.8000030517578,-44.80000305175781", d);
        }
        {
            let d = new Door(1, new Position(-76.80000305175781, -156.8000030517578), true);
            dungeon.doors.set("-76.80000305175781,-156.8000030517578", d);
        }
        {
            let d = new Door(2, new Position(-60.80000305175781, -172.8000030517578), false);
            dungeon.doors.set("-60.80000305175781,-172.8000030517578", d);
        }
        {
            let d = new Door(1, new Position(-44.80000305175781, -156.8000030517578), true);
            dungeon.doors.set("-44.80000305175781,-156.8000030517578", d);
        }
        {
            let d = new Door(2, new Position(-28.800003051757812, -172.8000030517578), false);
            dungeon.doors.set("-28.800003051757812,-172.8000030517578", d);
        }
        {
            let d = new Door(1, new Position(-28.800003051757812, -140.8000030517578), false);
            dungeon.doors.set("-28.800003051757812,-140.8000030517578", d);
        }
        {
            let d = new Door(1, new Position(-60.80000305175781, -108.80000305175781), false);
            dungeon.doors.set("-60.80000305175781,-108.80000305175781", d);
        }
        {
            let d = new Door(1, new Position(-28.800003051757812, -108.80000305175781), false);
            dungeon.doors.set("-28.800003051757812,-108.80000305175781", d);
        }
        {
            let d = new Door(6, new Position(-92.80000305175781, -44.80000305175781), false);
            dungeon.doors.set("-92.80000305175781,-44.80000305175781", d);
        }
        {
            let d = new Door(3, new Position(-60.80000305175781, -44.80000305175781), false);
            dungeon.doors.set("-60.80000305175781,-44.80000305175781", d);
        }
        {
            let d = new Door(1, new Position(-172.8000030517578, -92.80000305175781), true);
            dungeon.doors.set("-172.8000030517578,-92.80000305175781", d);
        }
        {
            let d = new Door(7, new Position(-156.8000030517578, -76.80000305175781), false);
            dungeon.doors.set("-156.8000030517578,-76.80000305175781", d);
        }
        {
            let d = new Door(6, new Position(-157, -77), 0);
            dungeon.doors.set("-157,-77", d);
        }
        return dungeon;
    }
}

export default SettingsManager