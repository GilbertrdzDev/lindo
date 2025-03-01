import { SettingsInterface } from './settings.interface';

export const SettingsDefault: SettingsInterface = {
    language: "en",
    buildVersion: null,
    appVersion: null,
    macAddress: null,
    alertCounter: 0,
    last_news: null,
    appPreferences: null,
    option: {
        general: {
            hidden_shop: false,
            hidden_tabs: false,
            stay_connected: true,
            resolution: {
                x: 1280,
                y: 720
            },
            local_content: false,
            sound_focus: true,
            early: false,
            audio_muted: false,
            user_agent: 'Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-N920T Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/58.0.3029.83 Mobile Safari/537.36'
        },
        shortcuts: {
            no_emu: {
                new_tab: "ctrl+t",
                new_window: "ctrl+n",
                next_tab: "down",
                prev_tab: "up",
                activ_tab: "",
                tabs: [
                    "f1",
                    "f2",
                    "f3",
                    "f4",
                    "f5",
                    "f6",
                    "f7",
                    "f8"
                ]
            },
            diver: {
                end_turn: "backspace",
                open_chat: "return",
                active_open_menu: true,
                open_menu: "",
                go_up: "ctrl+up",
                go_bottom: "ctrl+down",
                go_left: "ctrl+left",
                go_right: "ctrl+right"
            },
            spell: [
                "",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "0",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            ],
            item: [
                "ctrl+1",
                "ctrl+2",
                "ctrl+3",
                "ctrl+4",
                "ctrl+5",
                "ctrl+6",
                "ctrl+7",
                "ctrl+8",
                "ctrl+9",
                "ctrl+0",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            ],
            interface: {
                carac: "c",
                spell: "s",
                bag: "i",
                bidhouse: "h",
                map: "m",
                friend: "f",
                book: "q",
                guild: "g",
                conquest: "k",
                job: "j",
                alliance: "",
                mount: "n",
                directory: "",
                alignement: "",
                bestiary: "b",
                title: "t",
                achievement: "u",
                dailyQuest: "x",
                spouse: "l",
                shop: "v",
                goultine: "r"
            }
        },
        notification: {
            private_message: true,
            fight_turn: true,
            tax_collector: true,
            kolizeum: true,
            party_invitation: true,
            aggression: true,
            focus_fight_turn: true,
        },
        vip: {
            general: {
                disable_inactivity: false,
                health_bar: true,
                health_bar_shortcut: 'p',
                jobsxp: false,
                estimator: true,
                fightchronometer: true,
                hidden_mount: false,
                party_info_pp: false,
                party_info_lvl: false,
                zaapsearchfilter: true,
                harvest_indicator: true,
                show_resources: false,
                show_resources_shortcut: '',
                party_member_on_map: true,
                monster_tooltip: true,
                monster_tooltip_shortcut: '',
            },
            auto_group: {
                active: false,
                leader: null,
                members: null,
                follow_leader: false,
                follow_on_map: false,
                strict_move: false,
                ready: false,
                fight: false,
            },
            multi_account: {
                active: false,
                master_password: "",
                windows: [[]],
            }
        }
    }
};
