/*
 * @FilePath: /mac-ui/src/model/App.js
 * @Author: admin@hamm.cn
 * @Date: 2021-08-09 20:51:06
 * @LastEditTime: 2021-08-19 00:38:03
 * @LastEditors: admin@hamm.cn
 * Written by https://hamm.cn
 * @Description: 
 */

export default {
    allAppList: [
        {
            "key": "system_about",
            "component": "SystemAbout",
            "icon": "icon-question",
            "title": "关于本站",
            "iconColor": "#fff",
            "iconBgColor": "#23282d",
            "width": 400,
            "height": 250,
            "disableResize": true,
            "hideInDesktop": true,
        },
        {
            "key": "system_task",
            "component": "SystemTask",
            "icon": "icon-icon_roundclose_fill",
            "title": "强制退出...",
            "iconColor": "#fff",
            "iconBgColor": "#333",
            "width": 300,
            "height": 400,
            "disableResize": true,
            "hideInDesktop": true,
        },
        {
            "key": "demo_demo",
            "component": "Demo",
            "icon": "icon-MIS_chanpinshezhi",
            "title": "DEMO",
            "iconColor": "#fff",
            "iconBgColor": "#db5048",
            "width": 600,
            "height": 400,
            "keepInDock": true,
        },
        {
            "key": "demo_github",
            "icon": "icon-github",
            "title": "Github仓库",
            "iconColor": "rgb(36,41,46)",
            "iconBgColor": "#eee",
            "keepInDock": true,
            "outLink": true,
            "url": "https://github.com/HammCn/MacOS-Web-UI"
        },
        {
            "key": "demo_gitee",
            "icon": "icon-gitee",
            "title": "Gitee仓库",
            "iconColor": "#fff",
            "iconBgColor": "rgb(199,29,35)",
            "keepInDock": true,
            "outLink": true,
            "url": "https://gitee.com/hamm/mac-ui"
        },
        {
            "key": "demo_dy",
            "component": "DemoWeb",
            "icon": "icon-video_fill",
            "title": "抖音去水印",
            "iconColor": "#fff",
            "iconBgColor": "rgb(33,179,81)",
            "width": 600,
            "height": 600,
            "keepInDock": true,
            "innerLink": true,
            "url": "https://dy.hamm.cn/"
        },
        {
            "key": "demo_dock",
            "component": "DemoDock",
            "icon": "icon-MIS_bangongOA",
            "title": "常驻Dock应用",
            "iconColor": "#fff",
            "iconBgColor": "#022732",
            "width": 420,
            "height": 350,
            "keepInDock": true,
        },
        {
            "key": "demo_unresize",
            "component": "DemoUnResize",
            "icon": "icon-smallscreen_fill",
            "title": "固定尺寸应用",
            "iconColor": "#fff",
            "iconBgColor": "#1573fa",
            "width": 600,
            "height": 400,
            "disableResize": true,
        },
        {
            "key": "demo_unclose",
            "component": "DemoUnClose",
            "icon": "icon-wechat-fill",
            "title": "无法彻底关闭",
            "iconColor": "#fff",
            "iconBgColor": "#24dc72",
            "width": 610,
            "height": 430,
            "hideWhenClose": true
        },
        {
            "key": "demo_hidedesktop",
            "component": "DemoHideDesktop",
            "icon": "icon-shezhi",
            "title": "不在桌面显示",
            "iconColor": "#333",
            "iconBgColor": "#d4dbef",
            "width": 500,
            "height": 300,
            "hideInDesktop": true,
            "keepInDock": true,
        },
        {
            "key": "demo_colorfull",
            "component": "DemoColorFull",
            "icon": "icon-changyongtubiao-mianxing-86",
            "title": "花里胡哨",
            "iconColor": "#fff",
            "iconBgColor": "#ff4500",
            "width": 420,
            "height": 310,
            "titleBgColor": "#ff4500",
            "titleColor": "#fff",
        },
        {
            "key": "demo_camera",
            "component": "DemoCamera",
            "icon": "icon-camera1",
            "title": "Photo Booth",
            "iconColor": "#fff",
            "iconBgColor": "#E24637",
            "width": 540,
            "height": 540,
            "disableResize": true,
        },
        {
            "key": "demo_multitask",
            "component": "DemoMultiTask",
            "icon": "icon-app",
            "title": "多任务应用",
            "iconColor": "#fff",
            "iconBgColor": "#333",
            "width": 600,
            "height": 400,
            "multiTask": true,
            "keepInDock": true,
        },
    ]
}