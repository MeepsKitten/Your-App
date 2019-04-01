cb.settings_choices = [
    { name: 'title', type: 'str', minLength: 1, maxLength: 255, defaultValue: "Follow Meepsalot on CB", label: "--------Stream Title--------" },
    { name: 'tags', type: 'str', minLength: 1, maxLength: 140, label: "Room Hastags" },

    {
        name: 'captcha', type: 'choice',
        choice1: 'enable',
        choice2: 'disable', defaultValue: 'disable', label: "Require users to verify that they are human before chatting"
    },

    { name: 'whispercost', type: 'int', minValue: 0, defaultValue: 0, label: "CHAT SETTINGS --------\nWhisper Cost [0 to disable] (after tipping this amount a user can use /whisper)" },
    { name: 'prefixesenabled', type: 'int', minValue: 0, maxValue: 1, defaultValue: 1, label: "Enable chat prefixes (0 for disable, 1 for enable)" },
    { name: 'addcom', type: 'int', minValue: 0, maxValue: 1, defaultValue: 0, label: "/Addcom functionality (0 for disable, 1 for enable)" },

    { name: 'multiplier', type: 'int', minValue: 0, defaultValue: 1, label: "MODIFIERS -------- \nTip Multiplier (all incoming tips will be multiplied by this amount)" },
    { name: 'timerupdate', type: 'int', minValue: 0, defaultValue: 1, label: "How many seconds between timer updates?" },

    { name: 'rewardsenabled', type: 'int', minValue: 0, maxValue: 1, defaultValue: 1, label: "REWARD POINTS OPTIONS --------\n Enable reward points (0 for disable, 1 for enable)" },
    { name: 'freeentryenabled', type: 'int', minValue: 0, maxValue: 1, defaultValue: 1, label: "Enable free ticket show entry (0 for disable, 1 for enable)" },
    { name: 'freeentryamount', type: 'int', minValue: 0, defaultValue: 600, label: "Points required for free entry" },
    { name: 'spincooldown', type: 'int', minValue: 0, defaultValue: 60, label: "Time between spins (in seconds)" },
    { name: 'spinMin', type: 'int', minValue: 0, defaultValue: 5, label: "Minimum spin reward" },
    { name: 'spinMax', type: 'int', minValue: 0, defaultValue: 20, label: "Maximum spin reward" },

    { name: 'ticketprice', type: 'int', minValue: 0, defaultValue: 25, label: "TICKET SHOW OPTIONS --------\n Ticket Show Ticket price" },
    { name: 'ticketpricemult', type: 'int', minValue: 0, defaultValue: 2, label: "Ticket Show Ticket price increse multiplier after started" },

    { name: 'goal', type: 'int', minValue: 0, maxValue: 1, defaultValue: 0, label: "GOAL OPTIONS --------\n  Goal functionality (0 for disable, 1 for enable)" },
    { name: 'goalRollover', type: 'int', minValue: 0, maxValue: 1, defaultValue: 1, label: "Goal tip rollover: if a goal is finished the rest of the tip will roll over to the next goal if it exsists (0 for disable, 1 for enable)" },

    { name: 'tiptimer', type: 'int', minValue: 0, maxValue: 1, defaultValue: 0, label: "COMMAND OPTIONS --------\nTip Timer functionality (0 for disable, 1 for enable)" },
    { name: 'tiptimercost', type: 'int', minValue: 0, defaultValue: 25, label: "Tip cost to increase timer" },
    { name: 'tiptimerinc', type: 'int', minValue: 0, defaultValue: 25, label: "The ammount of second a tip increses the timer by" },
    { name: 'extras', type: 'int', minValue: 0, maxValue: 1, defaultValue: 0, label: "Easter eggs (0 for disable, 1 for enable)" },

    { name: 'adaptiveMenu', type: 'int', minValue: 0, maxValue: 1, defaultValue: 1, label: "TIP MENU OPTIONS --------\n Adaptive tip menu (0 to disable 1 to enable)" },
    { name: 'feete', type: 'int', minValue: 0, maxValue: 1, defaultValue: 0, label: "Feet command (0 to disable 1 to enable)" },
    { name: 'feet', type: 'int', minValue: 0, defaultValue: 10, label: "Feet command cost" },
    { name: 'spanke', type: 'int', minValue: 0, maxValue: 1, defaultValue: 0, label: "Spank command (0 to disable 1 to enable)" },
    { name: 'spank', type: 'int', minValue: 0, defaultValue: 15, label: "Spank command cost" },
    { name: 'flashe', type: 'int', minValue: 0, maxValue: 1, defaultValue: 0, label: "Flash command (0 to disable 1 to enable)" },
    { name: 'flash', type: 'int', minValue: 0, defaultValue: 35, label: "Flash command cost" },
    { name: 'fingere', type: 'int', minValue: 0, maxValue: 1, defaultValue: 0, label: "Finger command (0 to disable 1 to enable)" },
    { name: 'finger', type: 'int', minValue: 0, defaultValue: 35, label: "Finger command cost" },
    { name: 'fingerse', type: 'int', minValue: 0, maxValue: 1, defaultValue: 0, label: "2 Finger command (0 to disable 1 to enable)" },
    { name: 'fingers', type: 'int', minValue: 0, defaultValue: 35, label: "2 Finger command cost" },
    { name: 'posee', type: 'int', minValue: 0, maxValue: 1, defaultValue: 0, label: "Pose command (0 to disable 1 to enable)" },
    { name: 'pose', type: 'int', minValue: 0, defaultValue: 40, label: "Pose command cost" },
    { name: 'closeupe', type: 'int', minValue: 0, maxValue: 1, defaultValue: 0, label: "Closeup command (0 to disable 1 to enable)" },
    { name: 'closeup', type: 'int', minValue: 0, defaultValue: 20, label: "Closeup command cost" },
    { name: 'controle', type: 'int', minValue: 0, maxValue: 1, defaultValue: 0, label: "Control command (0 to disable 1 to enable)" },
    { name: 'control', type: 'int', minValue: 0, defaultValue: 400, label: "Control command cost" },
    { name: 'stope', type: 'int', minValue: 0, maxValue: 1, defaultValue: 0, label: "Stop command (0 to disable 1 to enable)" },
    { name: 'stop', type: 'int', minValue: 0, defaultValue: 50, label: "Stop command cost" },
    { name: 'harde', type: 'int', minValue: 0, maxValue: 1, defaultValue: 0, label: "Hard command (0 to disable 1 to enable)" },
    { name: 'hard', type: 'int', minValue: 0, defaultValue: 50, label: "Hard command cost" },
    { name: 'bje', type: 'int', minValue: 0, maxValue: 1, defaultValue: 0, label: "blowjob command (0 to disable 1 to enable)" },
    { name: 'bj', type: 'int', minValue: 0, defaultValue: 0, label: "blowjob command cost" },
    { name: 'toye', type: 'int', minValue: 0, maxValue: 1, defaultValue: 0, label: "Toy command (0 to disable 1 to enable)" },
    { name: 'toy', type: 'int', minValue: 0, defaultValue: 100, label: "Toy command cost" },
    { name: 'toyname', type: 'str', minLength: 1, maxLength: 255, defaultValue: 'my pee-pee', label: "Toy name (for toy command)" },

    { name: 'levelse', type: 'int', minValue: 0, maxValue: 1, defaultValue: 0, label: "CUSTOM LEVEL OPTIONS --------\n tip level functionality (0 for disable, 1 for enable)" },
    { name: 'levelsNotice', type: 'int', minValue: 0, maxValue: 1, defaultValue: 0, label: "Automatically send notices with levels (0 for disable, 1 for enable)" },
    { name: 'levelsRounding', type: 'choice', choice1: 'enabled', choice2: 'disabled', label: "Round tips to nearest afforable level" },
    { name: 'levelsTimerE', type: 'choice', choice1: 'enabled', choice2: 'disabled', label: "Automatically start a timer when level is purchased (if applicable)" },
    { name: 'levelsNumericalText', type: 'choice', choice1: 'enabled', choice2: 'disabled', label: "Show item numbers (in the order they are listed below)" },
    { name: 'levels1',required: false, type: 'str', minLength: 0, maxLength: 255, defaultValue: '', label: "Item 1" },
    { name: 'levels1cost', type: 'int', minValue: 1, defaultValue: 1, label: "    Cost" },
    { name: 'levels1time', type: 'int', minValue: 0, defaultValue: 2, label: "    Time (in seconds) | 0 to activate instantly" },
    { name: 'levels2',required: false, type: 'str', minLength: 0, maxLength: 255, defaultValue: '', label: "Item 2" },
    { name: 'levels2cost', type: 'int', minValue: 1, defaultValue: 25, label: "    Cost" },
    { name: 'levels2time', type: 'int', minValue: 0, defaultValue: 15, label: "    Time (in seconds) | 0 to activate instantly" },
    { name: 'levels3',required: false, type: 'str', minLength: 0, maxLength: 255, defaultValue: '', label: "Item 3" },
    { name: 'levels3cost', type: 'int', minValue: 1, defaultValue: 75, label: "    Cost" },
    { name: 'levels3time', type: 'int', minValue: 0, defaultValue: 30, label: "    Time (in seconds) | 0 to activate instantly" },
    { name: 'levels4',required: false, type: 'str', minLength: 0, maxLength: 255, defaultValue: '', label: "Item 4" },
    { name: 'levels4cost', type: 'int', minValue: 1, defaultValue: 100, label: "    Cost" },
    { name: 'levels4time', type: 'int', minValue: 0, defaultValue: 45, label: "    Time (in seconds) | 0 to activate instantly" },
    { name: 'levels5',required: false, type: 'str', minLength: 0, maxLength: 255, defaultValue: '', label: "Item 5" },
    { name: 'levels5cost', type: 'int', minValue: 1, defaultValue: 150, label: "    Cost" },
    { name: 'levels5time', type: 'int', minValue: 0, defaultValue: 35, label: "    Time (in seconds) | 0 to activate instantly" },



];

var backgrounds = {
    default: {Id:"f693e535-c6b4-4b43-898a-d81a8ccabde2", PrimaryColor: "#ffd800", SecondaryColor: "#ffffff"},
    edge: {Id:"52145946-8f2f-4132-a247-1644b260934a", PrimaryColor: "#a8a8a8" , SecondaryColor: "#ffffff"}

};

var currentBackground = backgrounds.default;

const timerInfo = {
    timerLength: 0,
    running: false,
    remaining: '',
    timeout: 0,
};

const rewardsInfo = {
    claimTimeouts: [],
    rewardPoints: [],
};

const ticketShowInfo = {
    ticketedUsers: [],
    sellingTickets: false,
    price: cb.settings['ticketprice'],
    priceMult: cb.settings['ticketpricemult'],
    allowFreeEntry: cb.settings['freeentryenabled'],
    freeEntryAmount: cb.settings['freeentryamount'],
    active: false,
};

const streamInfo =
{
    startTime: 0,
    totalSpanks: 0,
    verifiedUsers: [],
    streamer: cb.room_slug,
}

const tipInfo = {
    totalTipped: 0,
    HighestTipEver: {},
    king: 'UNCLAIMED',
    AllTips: {},
    AllGifters: {},
};

const goalInfo = {
    goal: 0,
    goal2: 0,
    goalstart: 0,
    goal2start: 0,
    goalTitleTag: "",
    goal2TitleTag: "",
    StreamTitle: cb.settings['title'],
    Tags: cb.settings['tags'],
    thirdPanel: 'temp',
    secondPanel: 'temp',
    secondPanelHeader: 'temp',
    secondPanelHeaderOffset: '120',
    firstPanel: 'temp',
    firstPanelHeader: 'temp',
    firstPanelHeaderOffset: '120',

    goal1Queue: [],
    goal2Queue: [],
};

const UserInfo = {
    activeUsers: {},
    mutedUsers: {},
    interactiveUsers: [],
    customPrefixes: {},
}

const levelsInfo = {
    levels: [],
    queue: [],
    noticeTimeout: undefined,
    queueTimeout: undefined,
    enabled: cb.settings['levelse'],
}

//text info
var purple = "#C287C2";
var darkpurple = "#3a004c";
var red = "#f4a6a6";
var darkred = "#840000";
var blue = "#00e1ff";
var gold = '#e6e655';
var grey = '#dbdbdb';
var black = '#000000';
var white = '#ffffff';
var meepsBlue = '#47A5C9';
var fontSize = 11;
var smallfontSize = 9;

UpdateDisplay(true);

class PaidCommand {
    constructor(name, cost, callback, help, enabled) {
        this.name = name;
        this.cost = cost;
        this.callback = callback;
        this.help = help;
        this.enabled;

        if (enabled == 0) {
            this.enabled = false;
        }
        else {
            this.enabled = true;
        }
    }
}

class TmpCommand {

    constructor(name, reply) {
        this.name = name;
        this.reply = reply;
    }

}

class FreeCommand {

    constructor(name, callback, help, enabled, hides) {
        this.name = name;
        this.callback = callback;
        this.help = help;
        this.enabled;
        this.hides = hides;

        if (enabled == 0) {
            this.enabled = false;
        }
        else {
            this.enabled = true;
        }
    }

}

var Commands = [];
var FreeCommands = [];
var TmpCommands = [];

//levels init
if (cb.settings['levelse']) {

    if (cb.settings['levels1'].length > 0)
        levelsInfo.levels[cb.settings['levels1cost']] = { level: 1, name: cb.settings['levels1'], time: cb.settings['levels1time'] };
    if (cb.settings['levels2'].length > 0)
        levelsInfo.levels[cb.settings['levels2cost']] = { level: 2, name: cb.settings['levels2'], time: cb.settings['levels2time'] };
    if (cb.settings['levels3'].length > 0)
        levelsInfo.levels[cb.settings['levels3cost']] = { level: 3, name: cb.settings['levels3'], time: cb.settings['levels3time'] };
    if (cb.settings['levels4'].length > 0)
        levelsInfo.levels[cb.settings['levels4cost']] = { level: 4, name: cb.settings['levels4'], time: cb.settings['levels4time'] };
    if (cb.settings['levels5'].length > 0)
        levelsInfo.levels[cb.settings['levels5cost']] = { level: 5, name: cb.settings['levels5'], time: cb.settings['levels5time'] };

}

//add paid commands to list
{
    if (cb.settings['adaptiveMenu']) {
        Commands.push(new PaidCommand("/FEET", cb.settings['feet'], FeetCallback, FeetHelpCallback, cb.settings['feete']));
        Commands.push(new PaidCommand("/POSE", cb.settings['pose'], PoseCallback, PoseHelpCallback, cb.settings['posee']));
        Commands.push(new PaidCommand("/FLASH", cb.settings['flash'], FlashCallback, FlashHelpCallback, cb.settings['flashe']));
        Commands.push(new PaidCommand("/FINGER", cb.settings['finger'], FingerCallback, FingerHelpCallback, cb.settings['fingere']));
        Commands.push(new PaidCommand("/FINGERS", cb.settings['fingers'], FingersCallback, FingersHelpCallback, cb.settings['fingerse']));
        Commands.push(new PaidCommand("/CLOSEUP", cb.settings['closeup'], CloseupCallback, CloseupHelpCallback, cb.settings['closeupe']));
        Commands.push(new PaidCommand("/HARD", cb.settings['hard'], HardCallback, HardHelpCallback, cb.settings['harde']));
        Commands.push(new PaidCommand("/CONTROL", cb.settings['control'], ControlCallback, ControlHelpCallback, cb.settings['controle']));
        Commands.push(new PaidCommand("/STOP", cb.settings['stop'], StopCallback, StopHelpCallback, cb.settings['stope']));
        Commands.push(new PaidCommand("/SPANK", cb.settings['spank'], SpankCallback, SpankHelpCallback, cb.settings['spanke']));
        Commands.push(new PaidCommand("/TOY", cb.settings['toy'], ToyCallback, ToyHelpCallback, cb.settings['toye']));
        Commands.push(new PaidCommand("/BJ", cb.settings['bj'], BjCallback, BjHelpCallback, cb.settings['bje']));
    }

    Commands.push(new PaidCommand("/GIFT", ticketShowInfo.price, GiftCallback, GiftHelpCallback, true));
}

//add free commands to list
{
    //add extras if enabled
    if (cb.settings['extras'] == 1) {
        FreeCommands.push(new FreeCommand("/KASS", KassCallback, KassHelpCallback, true, true));

        backgrounds['meeps'] = {Id:"85c01932-c376-4449-a47d-33cad12521d3", PrimaryColor: meepsBlue, SecondaryColor: white};
        backgrounds['coolcat'] = {Id:"a52b8728-516f-4fb1-b11f-b9ee41cd83d6", PrimaryColor: "#ff1a19", SecondaryColor: white};
        backgrounds['kass'] = {Id:"73a76b1e-69e6-4721-8b60-e608cc64661a", PrimaryColor: meepsBlue, SecondaryColor: white};
        backgrounds['booty'] = {Id:"f1176b95-6dfb-4793-a178-8d050a9d0878", PrimaryColor: meepsBlue, SecondaryColor: white};
        backgrounds['nocturne'] = {Id:"9c70d37d-6e59-4277-835d-ef11e0e3a1c3", PrimaryColor: "#3EB618", SecondaryColor: white};
        backgrounds['meepsicon'] = {Id:"8bef6bac-4915-4f40-899e-03e7b4bc949b", PrimaryColor: darkpurple, SecondaryColor: white};
        backgrounds['inception'] = {Id:"847973dc-4d5c-42bf-a4b8-1047368594bb", PrimaryColor: meepsBlue, SecondaryColor: white};
        backgrounds['kitten'] = {Id:"5551b3b1-082e-422f-a2ab-871182eae153", PrimaryColor: meepsBlue, SecondaryColor: white};
        backgrounds['nosebleed'] = {Id:"f5527216-4db6-4379-96b0-f3564649049b", PrimaryColor: "#ff1a19", SecondaryColor: white};
        backgrounds['hypno'] = {Id:"8a22975c-cf26-4d65-967f-77a04a5ddbcc", PrimaryColor: meepsBlue, SecondaryColor: white};
        backgrounds['purr'] = {Id:"cba81fd1-058e-46b7-b5ea-871ff6d46530", PrimaryColor: "#ff1a19", SecondaryColor: white};
    }

    if (levelsInfo.enabled == 1) {
        FreeCommands.push(new FreeCommand("/STATICMENU", LevelsCallback, LevelsHelpCallback, true, true));
        FreeCommands.push(new FreeCommand("/STATICMENUREMINDER", LevelsReminderCallback, LevelsReminderCallback, true, true));
    }

    /// invocation
    FreeCommands.push(new FreeCommand("/HELP", HelpCallback, HelpHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/SETTITLE", SetTitleCallback, SetTitleHelpCallback, true, true)); //This goes second to allow you to put command names in title
    FreeCommands.push(new FreeCommand("/SETTAGS", SetTagsCallback, SetTagsHelpCallback, true, true)); //This goes second to allow you to put command names in tags
    FreeCommands.push(new FreeCommand("/SETGOAL", SetGoalCallback, SetGoalHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/QUEUEGOAL", QueueGoalCallback, QueueGoalHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/REMINDER", ReminderCallback, ReminderHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/DISABLE", DisableCallback, DisableHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/ENABLE", EnableCallback, EnableHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/BACKGROUND", BackgroundCallback, BackgroundHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/STARTTIMER", StartTimerCallback, StartTimerHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/STARTSHOW", TicketShowCallback, TicketShowHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/STOPSHOW", StopShowCallback, StopShowHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/STOPSALES", StopSalesCallback, StopSalesHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/STARTSALES", StartSalesCallback, StartSalesHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/ADD", AddTicketCallback, AddTicketHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/SILENCE", SilenceCallback, SilenceHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/UNSILENCE", UnsilenceCallback, UnsilenceHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/BC", BCCallback, BCHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/TM", TMCallback, TMHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/TBM", TBMCallback, TBMHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/CN", CNCallback, CNHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/WHISPER", WhisperCallback, WhisperHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/JOIN", JoinCallback, JoinHelpCallback, (cb.settings['captcha'] == 'enable'), true));
    FreeCommands.push(new FreeCommand("/SPIN", SpinCallback, SpinHelpCallback, cb.settings['rewardsenabled'], true));
    FreeCommands.push(new FreeCommand("/ADDCOM", AddcomCallback, AddcomHelpCallback, cb.settings['addcom'], false));
    FreeCommands.push(new FreeCommand("/CLEARPREFIX", ClearPrefixCallback, ClearPrefixHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/PREFIX", PrefixCallback, PrefixHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/UPTIME", UptimeCallback, UptimeHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/LEADERBOARD", LeaderboardCallback, LeaderboardHelpCallback, cb.settings['rewardsenabled'], true));
    FreeCommands.push(new FreeCommand("/GOALS", GoalsCallback, GoalsHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/TIPMENU", TipMenuCallback, TipMenuHelpCallback, true, true));
    FreeCommands.push(new FreeCommand("/MENU", TipMenuCallback, TipMenuHelpCallback, true, true));


}

//mark stream start
streamInfo.startTime = new Date();

//HELPER FUNCTIONS
//#region
function NotEnoughTokens(mod, user, to, tipped, modName) {
    cb.chatNotice("You must tip at least " + mod + " tokens to use this modifier!", user, red);
    cb.chatNotice(user + " tried to use " + tipped + " tokens to use the " + modName + " mod. (needed " + mod + ")", to, red);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function FindCommandInfo(name, commandList) {
    var length = commandList.length;
    for (i = 0; i < length; i++) {
        var cmd = commandList[i];

        if (cmd.name == name) {
            return cmd;
        }
    }
}

function UpdateDisplay(UpdateTitle) {
    if (UpdateTitle) {
        if (goalInfo.goal > 0) {
            cb.changeRoomSubject(goalInfo.StreamTitle + " [" + goalInfo.goalTitleTag + " " + goalInfo.goal + " Tokens] " + goalInfo.Tags);
        }
        else {
            cb.changeRoomSubject(goalInfo.StreamTitle + " " + goalInfo.Tags);
        }
    }

    if (!timerInfo.running) {
        goalInfo.thirdPanel = "Top Tipper: " + tipInfo.king + " (" + tipInfo.AllTips[tipInfo.king] + " tokens)";
    }
    else {
        goalInfo.thirdPanel = `Timer: ${timerInfo.remaining}`;
        if (ticketShowInfo.sellingTickets) {
            goalInfo.thirdPanel += ` - Tickets Cost: ${ticketShowInfo.price} Tokens`;
        }
        else if (cb.settings['tiptimer'] == 1) {
            goalInfo.thirdPanel += ` - Tip ${cb.settings['tiptimercost']} to add ${cb.settings['tiptimerinc']} seconds`;
        }
    }

    if (goalInfo.goal <= 0) {
        goalInfo.firstPanelHeader = `Total Tipped:`;
        goalInfo.firstPanel = tipInfo.totalTipped;
        goalInfo.firstPanelHeaderOffset = 145;
    }
    else {
        goalInfo.firstPanelHeader = 'GOAL 1:';
        goalInfo.firstPanel = goalInfo.goalTitleTag + " " + goalInfo.goal + " Tokens";
        goalInfo.firstPanelHeaderOffset = 120;
    }

    if (goalInfo.goal2 <= 0) {
        goalInfo.secondPanelHeader = `Highest Tip:`;

        if (!tipInfo.HighestTipEver['name']) {
            goalInfo.secondPanel = 'No tips'
        }
        else {
            goalInfo.secondPanel = `${tipInfo.HighestTipEver['amount']} by ${tipInfo.HighestTipEver['name']}`;
        }

        goalInfo.secondPanelHeaderOffset = 140;
    }
    else {
        goalInfo.secondPanelHeader = 'GOAL 2:';
        goalInfo.secondPanel = goalInfo.goal2TitleTag + " " + goalInfo.goal2 + " Tokens";
        goalInfo.secondPanelHeaderOffset = 120;

    }

    cb.drawPanel();
}

function UpdateTimer() {
    timerInfo.timerLength -= cb.settings['timerupdate'];

    var mind = timerInfo.timerLength % (60 * 60);
    var minutes = Math.floor(mind / 60);

    const secsLol = timerInfo.timerLength % 60;
    let paddedSeconds = secsLol < 10 ? `0${secsLol}` : `${secsLol}`;

    timerInfo.remaining = `${minutes}:${paddedSeconds}`;
    UpdateDisplay(false);

    if (timerInfo.timerLength > 0) {
        timerInfo.timeout = cb.setTimeout(UpdateTimer, cb.settings['timerupdate'] * 1000);
    }
    else {
        cb.chatNotice("TIME IS UP!", '', blue);
        timerInfo.running = false;
        UpdateDisplay(false);
    }
}

function CreateNewTimer() {
    timerInfo.running = true;

    //time remaining text
    var mind = (timerInfo.timerLength - cb.settings['timerupdate']) % (60 * 60);
    var minutes = Math.floor(mind / 60);

    const secsLol = (timerInfo.timerLength - cb.settings['timerupdate']) % 60;
    let paddedSeconds = secsLol < 10 ? `0${secsLol}` : `${secsLol}`;

    let time = `${minutes}:${paddedSeconds}`;

    let msg = `Timer set for ${time}`;
    if (cb.settings['tiptimer']) {
        msg += ` | Tip ${cb.settings['tiptimercost']} to add ${cb.settings['tiptimerinc']} seconds to the timer`;
    }

    cb.sendNotice(msg, '', blue)
    UpdateTimer();
}

function SetTimer(seconds) {
    if (!timerInfo.running) {
        timerInfo.timerLength = seconds + cb.settings['timerupdate'];
        CreateNewTimer();
    }
    else {
        timerInfo.timerLength = seconds + cb.settings['timerupdate'];
    }
}

function SetGiftPrice(price) {
    let cmd = FindCommandInfo("/GIFT", Commands);

    cmd.cost = price;
}

function activeUser(name) {
    // let exsists = false;
    // let length = UserInfo.activeUsers.length;

    // for (var user in UserInfo.activeUsers) {
    //     let curUser = UserInfo.activeUsers[user];

    //     if (curUser['user'] == name) {
    //         exsists = true;
    //     }
    // }

    // return exsists;

    return UserInfo.activeUsers[name];
}

function setGoal(user, goal, goalText, amount) {
    if (goalText.length > 0) {

        if (goal == 1) //if setting goal 1
        {
            goalInfo.goal = parseInt(amount);

            if (!goalInfo.goal) {
                cb.sendNotice("Invalid goal ammount of " + amount, user, red);
                goalInfo.goal = 0;
            }
            else {
                goalInfo.goalTitleTag = goalText;
                goalInfo.goalstart = goalInfo.goal;
                if (goalInfo.goal > 1 || goalInfo.goal == 0) {
                    cb.sendNotice("New goal set!\nGoal: " + goalInfo.goalTitleTag + " " + goalInfo.goal + " Tokens!", '', gold, blue);
                }
                else {
                    cb.sendNotice("New goal set!\nGoal: " + goalInfo.goalTitleTag + " " + goalInfo.goal + " Token!", '', gold, blue);
                }
                UpdateDisplay(true);
            }
        }
        else if (goal == 2) //if setting goal 2
        {
            goalInfo.goal2 = parseInt(amount);

            if (!goalInfo.goal2) {
                cb.sendNotice("Invalid goal ammount of " + amount, user, red);
                goalInfo.goal2 = 0;
            }
            else {
                goalInfo.goal2TitleTag = goalText;
                goalInfo.goal2start = goalInfo.goal2;
                if (goalInfo.goal > 1 || goalInfo.goal == 0) {
                    cb.sendNotice("New goal set!\nGoal: " + goalInfo.goal2TitleTag + " " + goalInfo.goal2 + " Tokens!", '', gold, blue);
                }
                else {
                    cb.sendNotice("New goal set!\nGoal: " + goalInfo.goal2TitleTag + " " + goalInfo.goal2 + " Token!", '', gold, blue);
                }
                UpdateDisplay(true);
            }
        }
        else //goal not specified
        {
            cb.sendNotice("Invalid goal number (choose goal 1 or 2)", user, red);
        }

    }
    else {
        cb.sendNotice("Please specify a subject for your goal", user, red);

    }
}

function updateGoalQueues(newgoal = false) {
    if (goalInfo.goal <= 0) {
        let nextGoal = goalInfo.goal1Queue[0];
        if (!newgoal && goalInfo.goalTitleTag)
            cb.sendNotice("Goal Cleared: " + goalInfo.goalTitleTag + " " + goalInfo.goalstart + " Tokens", '', darkpurple, blue, 'bold');

        if (nextGoal) {
            setGoal('', 1, nextGoal['text'], nextGoal['amount']);
            goalInfo.goal1Queue.shift();
        }
    }
    if (goalInfo.goal2 <= 0) {
        let nextGoal = goalInfo.goal2Queue[0];
        if (!newgoal && goalInfo.goal2TitleTag)
            cb.sendNotice("Goal Cleared: " + goalInfo.goal2TitleTag + " " + goalInfo.goal2start + " Tokens", '', darkpurple, blue, 'bold');
        if (nextGoal) {
            setGoal('', 2, nextGoal['text'], nextGoal['amount']);
            goalInfo.goal2Queue.shift();
        }
    }
}

function LevelsCheck(tipped, user) {
    if (levelsInfo.enabled) {

        let level = null;

        if (cb.settings['levelsRounding'] == 'enabled') {
            var arrayLength = levelsInfo.levels.length;
            var bestOption = 0;

            for (var i = 0; i < arrayLength; i++) {
                if (tipped >= i && (i != 0)) {
                    if (i > bestOption && levelsInfo.levels[i]) {
                        bestOption = i;
                    }
                }
            }

            level = levelsInfo.levels[bestOption];
        }
        //dont find best possible, look for exact match
        else {
            level = levelsInfo.levels[tipped];
        }

        if (level) {

            if (cb.settings['levelsNumericalText'] == 'enabled') {
                if (level['time'] > 0) {
                    levelsInfo.queue.push({ text: `${user} activated tip level ${level['level']} ("${level['name']}") for ${level['time']} seconds`, time: level['time'] });
                }
                else {
                    levelsInfo.queue.push({ text: `${user} activated tip level ${level['level']} ("${level['name']}")`, time: 0 });
                }
            }
            else {
                if (level['time'] > 0) {
                    levelsInfo.queue.push({ text: `${user} activated the tip option "${level['name']}" for ${level['time']} seconds`, time: level['time'] });
                }
                else {
                    levelsInfo.queue.push({ text: `${user} activated the tip option "${level['name']}"`, time: 0 });
                }
            }

            if (!levelsInfo.queueTimeout) {
                ExecuteQueuedTips();
            }
            else {
                if (cb.settings['levelsNumericalText'] == 'enabled') {
                    if (level['time'] > 0) {
                        cb.sendNotice(`Tip at level ${level['level']} ("${level['name']}") for ${level['time']} seconds added to queue. (Spot ${levelsInfo.queue.length})`, '', darkpurple, blue, 'bold')
                    }
                    else {
                        cb.sendNotice(`Tip at level ${level['level']} ("${level['name']}") added to queue. (Spot ${levelsInfo.queue.length})`, '', darkpurple, blue, 'bold')
                    }
                }
                else {
                    if (level['time'] > 0) {
                        cb.sendNotice(`Tip towards "${level['name']}") for ${level['time']} seconds added to queue. (Spot ${levelsInfo.queue.length})`, '', darkpurple, blue, 'bold')
                    }
                    else {
                        cb.sendNotice(`Tip for "${level['name']}" added to queue. (Spot ${levelsInfo.queue.length})`, '', darkpurple, blue, 'bold')
                    }
                }
            }
        }

    }
}

function ExecuteQueuedTips() {
    let object = levelsInfo.queue[0];
    let length = levelsInfo.queue.length;
    levelsInfo.queue.shift();

    if (object) {

        cb.sendNotice(object['text'], '', gold, darkred, 'bold');
        
        if(cb.settings['levelsTimerE'] == 'enabled'){
            if(object['time'] > 0)
                SetTimer(object['time']);
        }

        levelsInfo.queueTimeout = cb.setTimeout(ExecuteQueuedTips, 1000 * object['time'])
    }
    else {
        cb.cancelTimeout(levelsInfo.queueTimeout);
        levelsInfo.queueTimeout = undefined;
    }
}

//#endregion
//END OF HELPER FUNCTIONS

//PAID COMMAND CALLBACKS
//#region

function StopCallback(cmd, sucess, tipped, user, to, message) {
    if (sucess == true) {
        cb.chatNotice(user + " requested for " + to + " to stop playing with themself for " + tipped + " seconds", '', purple);
        if (!timerInfo.running) {
            timerInfo.timerLength = tipped + cb.settings['timerupdate'];
            CreateNewTimer();
        }
    }
    else {
        NotEnoughTokens(cmd.cost, user, to, tipped, "stop");
    }
}

function StopHelpCallback(cmd, user) {
    return String("\n[" + cmd.cost + " or more Tokens] - '/stop' the brodcaster will stop playing with themselves for [amount tipped] seconds");
}

function ControlCallback(cmd, sucess, tipped, user, to, message) {
    if (sucess == true) {
        cb.chatNotice(user + " requests control over " + to + "'s toy for " + tipped / 2 + " seconds", '', purple);
        cb.chatNotice("Check your private messages. You will recive a control invite link shortly ", user, blue);
    }
    else {
        NotEnoughTokens(cmd.cost, user, to, tipped, "control");
    }
}

function ControlHelpCallback(cmd, user) {
    return String("\n[" + cmd.cost + " or more Tokens] - '/control' brodcaster will give you full control of their lovense toy for [amount tipped/2] seconds");
}

function BjCallback(cmd, sucess, tipped, user, to, message) {
    if (sucess == true) {
        cb.chatNotice(user + " wants one of the performers to give the other a Blowjob for " + tipped + " seconds", '', purple);
    }
    else {
        NotEnoughTokens(cmd.cost, user, to, tipped, "bj");
    }
}

function BjHelpCallback(cmd, user) {
    return String("\n[" + cmd.cost + " or more Tokens] - '/bj' one of the performers will give the other for [amount tipped] seconds. Feel free to specify which performer!");
}

function FingerCallback(cmdl, sucess, tipped, user, to, message) {
    if (sucess == true) {
        cb.chatNotice(user + " wants " + to + " to finger themselves (1 finger)", '', purple);
    }
    else {
        NotEnoughTokens(cmdl.cost, user, to, tipped, "finger");
    }
}

function FingerHelpCallback(cmdl, user) {
    return String("\n[" + cmdl.cost + " or more Tokens] - '/finger' the performer will finger themselves with 1 finger.");
}

function FingersCallback(cmdl, sucess, tipped, user, to, message) {
    if (sucess == true) {
        cb.chatNotice(user + " wants " + to + " to finger themselves (2 fingers)", '', purple);
    }
    else {
        NotEnoughTokens(cmdl.cost, user, to, tipped, "fingers");
    }
}

function FingersHelpCallback(cmdl, user) {
    return String("\n[" + cmdl.cost + " or more Tokens] - '/fingers' the performer will finger themselves with 2 fingers.");
}

function FeetCallback(cmdl, sucess, tipped, user, to, message) {
    if (sucess == true) {
        var timeReq = (tipped / 10) * 2;
        cb.chatNotice(user + " requests to see feet for " + timeReq + " seconds", '', purple);
    }
    else {
        NotEnoughTokens(cmdl.cost, user, to, tipped, "Feet");
    }
}

function FeetHelpCallback(cmdl, user) {
    return String("\n[" + cmdl.cost + " or more Tokens] - '/feet' brodcaster will show feet for ([amount tipped] / 10) * 2 seconds");
}

function SpankCallback(cmdl, sucess, tipped, user, to, message) {
    if (sucess == true) {
        var num = Math.floor(tipped / cmdl.cost);
        streamInfo.totalSpanks += num;
        let word = (num > 1 ? 'spanks' : 'spank');
        cb.chatNotice(`${user} requests ${num} ${word} (${streamInfo.totalSpanks} total)`, '', purple);
    }
    else {
        NotEnoughTokens(cmd.cost, user, to, tipped, "Spank");
    }
}

function SpankHelpCallback(cmd, user) {
    return String("\n[" + cmd.cost + " or more Tokens] - '/spank' brodcaster will spank themself for every " + cmd.cost + " tokens you tip");
}

function PoseCallback(cmd, sucess, tipped, user, to, message) {
    if (sucess == true) {
        var timeReq = (tipped / 10) * 4;
        cb.chatNotice(user + " requested a pose for " + timeReq + " seconds!", '', purple);
        cb.chatNotice("Pose Message: " + message.replace('/pose', ''), to, red);
    }
    else {
        NotEnoughTokens(cmd.cost, user, to, tipped, "Pose");
    }
}

function PoseHelpCallback(cmd, user) {
    return String("\n[" + cmd.cost + " or more Tokens] - '/pose [message]' request the brodcaster to do a pose specified in your message for ([amount tipped] / 10) * 4 seconds");
}

function FlashCallback(cmd, sucess, tipped, user, to, message) {
    if (sucess == true) {
        cb.chatNotice(user + " requested " + to + " to flash a body part!", '', purple);
        cb.chatNotice("Flash Message: " + message.replace('/flash', ''), to, red);
    }
    else {
        NotEnoughTokens(cmd.cost, user, to, tipped, "flash");
    }
}

function FlashHelpCallback(cmd, user) {
    return String("\n[" + cmd.cost + " or more Tokens] - '/flash [body part]' request the brodcaster to flash whichever body part you specify");
}

function CloseupCallback(cmd, sucess, tipped, user, to, message) {
    if (sucess == true) {
        var timeReq = (tipped / 10) * 2;
        cb.chatNotice(user + " requests to see a close-up for " + timeReq + " seconds", '', purple);
        cb.chatNotice("close-up Message: " + message.replace('/closeup', ''), to, red);
    }
    else {
        NotEnoughTokens(cmd.cost, user, to, tipped, "closeup");
    }
}

function CloseupHelpCallback(cmd, user) {
    return String("\n[" + cmd.cost + " or more Tokens] - '/closeup [body part]' request the brodcaster to do a close-up shot of a specified body part for ([amount tipped] / 10) * 2 seconds");
}

function HardCallback(cmd, sucess, tipped, user, to, message) {
    if (sucess == true) {
        var timeReq = (tipped / 2);
        cb.chatNotice(user + " requested for " + to + " to stay hard for " + timeReq + " seconds", '', purple);
    }
    else {
        NotEnoughTokens(cmd.cost, user, to, tipped, "hard");
    }
}

function HardHelpCallback(cmd, user) {
    return String("\n[" + cmd.cost + " or more Tokens] - '/hard' the brodcaster will get hard and stay hard for [amount tipped] / 2 seconds");
}

function GiftCallback(cmd, sucess, tipped, user, to, message) {
    if (sucess == true && ticketShowInfo.sellingTickets) {
        var msgNoHead = message.substr(6);
        msgNoHead = msgNoHead.trim();

        if (msgNoHead.length >= 3 && activeUser(msgNoHead)) {

            tipInfo.AllTips[user] = (tipInfo.AllTips[user] || 0) - tipped;
            tipInfo.AllTips[msgNoHead] = (tipInfo.AllTips[msgNoHead] || 0) + tipped;

            tipInfo.AllGifters[user] = (tipInfo.AllGifters[user] || 0) + 1;


            if (cb.limitCam_isRunning()) {
                if (!cb.limitCam_userHasAccess(msgNoHead)) {
                    cb.limitCam_addUsers(msgNoHead);
                    cb.sendNotice(`Enjoy the Show! ${user} purchased you a ticket!`, msgNoHead, blue);
                }
            }
            else if (!ticketShowInfo.ticketedUsers.includes(msgNoHead)) {
                ticketShowInfo.ticketedUsers.push(msgNoHead);
                cb.sendNotice(`Enjoy the Show! ${user} purchased you a ticket!`, msgNoHead, blue);

            }
        }
        else {
            cb.sendNotice(`User ${msgNoHead} does not exsist!`, user, red);
            cb.sendNotice(`User ${msgNoHead} does not exsist!`, cb.room_slug, red);
        }
    }
    else {
        if (!ticketShowInfo.sellingTickets) {
            cb.sendNotice("Tickets are not being sold", user);
        }
        else
            NotEnoughTokens(cmd.cost, user, to, tipped, "Gift");
    }
}

function GiftHelpCallback(cmd, user) {
    return String(`\n[${cmd.cost} or more Tokens] - '/gift [user]' buys a ticket to specified user`);
}

function ToyHelpCallback(cmd, user) {
    return String("\n[" + cmd.cost + " or more Tokens] - '/toy' the brodcaster will use their toy (" + cb.settings['toyname'] + ") for [amount tipped] / 2 seconds");
}

function ToyCallback(cmd, sucess, tipped, user, to, message) {
    if (sucess == true) {
        var timeReq = (tipped / 2);
        cb.chatNotice(user + " requested for " + to + " to use their toy (" + cb.settings['toyname'] + ") for " + timeReq + " seconds", '', purple);
    }
    else {
        NotEnoughTokens(cmd.cost, user, to, tipped, "toy");
    }
}

//#endregion
//END OF PAID CALLBACKS

//FREE COMMAND CALLBACKS
//#region

function JoinCallback(user, message, rawMsgData) {

    rawMsgData['m'] = 'Joining...';
    if (!streamInfo.verifiedUsers.includes(user)) {
        streamInfo.verifiedUsers.push(user);
        cb.chatNotice("You may now chat freely.", user, blue);
    }
    else {
        cb.chatNotice("You have already joined chat", user, red);
    }
}

function JoinHelpCallback(user, message, rawMsgData) {
    return "Allows a user to chat";
}

function UptimeCallback(user, message, rawMsgData) {
    var curTime = new Date();
    var DeltaTime = (curTime.getTime() - streamInfo.startTime) / 1000;

    let hours = Math.floor(DeltaTime / 3600);
    DeltaTime %= 3600;
    let minutes = (Math.floor(DeltaTime / 60));
    let seconds = (DeltaTime % 60).toFixed(0);

    let paddedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    let paddedHours = hours < 10 ? `0${hours}` : `${hours}`;
    let paddedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    cb.sendNotice(`Uptime: ${paddedHours}:${paddedMinutes}:${paddedSeconds}`, user, white, darkpurple, 'bold');
}

function UptimeHelpCallback(user, message, rawMsgData) {
    return "Tells you how long the stream has been going (based on when the app is started, not the stream itself)";
}

function LevelsCallback(user, message, rawMsgData) {
    let arrayLength = levelsInfo.levels.length;
    let text = null;

    if (cb.settings['adaptiveMenu'] == 1) {
        text = "Static Tip Menu Rewards:";
    }
    else {
        text = "Tip Menu:";
    }

    for (var i = 0; i < arrayLength; i++) {
        if (levelsInfo.levels[i]) {
            text += '\n'
            let level = levelsInfo.levels[i];

            if (cb.settings['levelsRounding'] == 'enabled') {
                if (cb.settings['levelsNumericalText'] == 'enabled') {
                    if (level['time'] > 0)
                        text += `[${i}+ Tokens] Level ${level['level']}: "${level['name']}" for ${level['time']} seconds`;
                    else
                        text += `[${i}+ Tokens] Level ${level['level']}: "${level['name']}"`;
                }
                else {
                    if (level['time'] > 0)
                        text += `[${i}+ Tokens] "${level['name']}" for ${level['time']} seconds`;
                    else
                        text += `[${i}+ Tokens] "${level['name']}"`;
                }
            }
            else {
                if (cb.settings['levelsNumericalText'] == 'enabled') {
                    if (level['time'] > 0)
                        text += `[${i} Tokens] Level ${level['level']}: "${level['name']}" for ${level['time']} seconds`;
                    else
                        text += `[${i} Tokens] Level ${level['level']}: "${level['name']}"`;
                }
                else {
                    if (level['time'] > 0)
                        text += `[${i} Tokens] "${level['name']}" for ${level['time']} seconds`;
                    else
                        text += `[${i} Tokens] "${level['name']}"`;
                }
            }


        }
    }
    cb.sendNotice(text, user, white, darkpurple, 'bold');
}

function LevelsHelpCallback(user, message, rawMsgData) {
    return "Shows you a list of tip levels";
}

function LevelsReminderCallback(user, message, rawMsgData) {
    let arrayLength = levelsInfo.levels.length;
    let text = "Tip levels:";
    for (var i = 0; i < arrayLength; i++) {
        if (levelsInfo.levels[i]) {
            text += '\n'
            let level = levelsInfo.levels[i];

            if(cb.settings['levelsRounding'] == 'enabled')
            {
                if(cb.settings['levelsNumericalText'] == 'enabled')
                {
                    if(level['time'] > 0)
                        text += `[${i}+ Tokens] Level ${level['level']}:"${level['name']}" for ${level['time']} seconds`;
                    else
                        text += `[${i}+ Tokens] Level ${level['level']}:"${level['name']}"`;
                }
                else
                {
                    if(level['time'] > 0)
                        text += `[${i}+ Tokens] "${level['name']}" for ${level['time']} seconds`;
                    else
                        text += `[${i}+ Tokens] "${level['name']}"`;
                }
            }
            else
            {
                if(cb.settings['levelsNumericalText'] == 'enabled')
                {
                    if(level['time'] > 0)
                        text += `[${i} Tokens] Level ${level['level']}:"${level['name']}" for ${level['time']} seconds`;
                    else
                        text += `[${i} Tokens] Level ${level['level']}:"${level['name']}"`;
                }
                else
                {
                    if(level['time'] > 0)
                        text += `[${i} Tokens] "${level['name']}" for ${level['time']} seconds`;
                    else
                        text += `[${i} Tokens] "${level['name']}"`;
                }
            }


        }
    }
        cb.sendNotice(text, '', white, darkpurple, 'bold');
    
}

function LevelsReminderHelpCallback(user, message, rawMsgData) {
    return "(MODS ONLY) Shows a list of tip levels to all users";
}

function SilenceCallback(user, message, rawMsgData) {
    if ((rawMsgData['is_mod'] || (rawMsgData['user'] == cb.room_slug))) {
        let match = message.match(/^(\/silence)\s+(\S+)$/);

        if (match) {

            let [_, command, name] = match;

            if (activeUser(name)) {
                UserInfo.mutedUsers[name] = name;
                cb.sendNotice(`You have been silenced`, name, red);
                cb.sendNotice(`${name} has been silenced`, user, red);
            }
        }
    }
    else {
        cb.sendNotice(`You must be a mod to use this command`, user, red);
    }
}

function SilenceHelpCallback(user, message, rawMsgData) {
    return "Mutes a user's messages";
}

function UnsilenceCallback(user, message, rawMsgData) {
    if ((rawMsgData['is_mod'] || (rawMsgData['user'] == cb.room_slug))) {
        let match = message.match(/^(\/unsilence)\s+(\S+)$/);

        if (match) {

            let [_, command, name] = match;

            if (activeUser(name) && UserInfo.mutedUsers[name]) {
                delete UserInfo.mutedUsers[name];
                cb.sendNotice(`You have been unsilenced`, name, blue);
                cb.sendNotice(`${name} has been unsilenced`, user, red);
            }
        }
    }
    else {
        cb.sendNotice(`You must be a mod to use this command`, user, red);
    }
}

function UnsilenceHelpCallback(user, message, rawMsgData) {
    return "Allows a user who has been silenced to speak again. | usage: /unsilence [username]";
}

function GoalsCallback(user, message, rawMsgData) {

    var length1 = goalInfo.goal1Queue.length;
    var length2 = goalInfo.goal2Queue.length;

    var goals = '';

    if (goalInfo.goal > 0) {
        goals += "-------- Goal slot 1 goals --------\n";

        goals += `1) ${goalInfo.goalTitleTag} ${goalInfo.goal} tokens`;

        if (length1 > 0) {

            let num = 2;
            for (var i = 0; i < length1; ++i) {
                var goal = goalInfo.goal1Queue[i];
                goals += '\n'
                goals += `${num}) ${goal['text']} ${goal['amount']} tokens`;
                num++;
            }
        }
    }

    if (goalInfo.goal2 > 0) {
        goals += "\n-------- Goal slot 2 goals --------\n"
        goals += `1) ${goalInfo.goal2TitleTag} ${goalInfo.goal2} tokens`;

        if (length2 > 0) {

            let num = 2;
            for (var i = 0; i < length2; ++i) {
                var goal = goalInfo.goal2Queue[i];
                goals += '\n'
                goals += `${num}) ${goal['text']} ${goal['amount']} tokens`;
                num++;
            }
        }
    }

    //print the whole message
    if ((length1 + length2 == 0) && (goalInfo.goal + goalInfo.goal2 == 0)) {
        cb.chatNotice("There are no goals set!", user, purple);
    }
    else {
        cb.chatNotice(goals, user, purple);

    }
}

function GoalsHelpCallback(user, message, rawMsgData) {
    return "Lists all the active and queued goals to you";
}

function QueueGoalHelpCallback(user, message, rawMsgData) {
    return "Allows Mods to queue a goal. If a goal is queued is will replace the goal in an active slot once the active goal is completed. First in; first out. \nUsage: /queuegoal [Goal Number] \"[Goal Text]\" [amount]";
}

function QueueGoalCallback(user, message, rawMsgData) {
    if ((rawMsgData['is_mod'] || (rawMsgData['user'] == cb.room_slug))) {

        let match = message.match(/(\/queuegoal)\s+(\d)\s+"([^"]+)"\s+(\S+)/);
        if (match) {
            let [_, command, goalNum, goalText, amount] = match;

            let NewGoal = {};
            NewGoal['text'] = goalText;
            NewGoal['amount'] = amount;
            if (goalText.length > 0 && amount > 0) {
                if (goalNum == 1) {
                    goalInfo.goal1Queue.push(NewGoal);
                    cb.sendNotice(`Goal pushed to queue`, user, gold, blue, 'bold');
                }
                else if (goalNum == 2) {
                    goalInfo.goal2Queue.push(NewGoal);
                    cb.sendNotice(`Goal pushed to queue`, user, gold, blue, 'bold');
                }
                else {
                    cb.sendNotice("Invalid goal number (choose goal 1 or 2)", user, red)
                }

                updateGoalQueues(true);
            }
            else {
                cb.sendNotice("Invalid goal message or amount", user, red)
            }
        }

    }
    else {
        rawMsgData['X-Spam'] = true;
        cb.chatNotice("You must be a mod or be in the fan club to add commands", user, purple);
    }
}

function ClearPrefixCallback(user, message, rawMsgData) {
    let match = message.match(/^(\S+)?(?:\s(.*))?$/);

    if (match) {

        let [_, command, username] = match;

        if (username) {
            if (rawMsgData['is_mod'] || (rawMsgData['user'] == cb.room_slug)) {
                if (activeUser(username)) {
                    if (UserInfo.customPrefixes.hasOwnProperty(username)) {
                        delete UserInfo.customPrefixes[username];
                        cb.sendNotice(`Your prefix has been cleared`, username, gold, blue, 'bold');
                        if (user != username) {
                            cb.sendNotice(`You cleared the prefix for ${username}`, user, gold, blue, 'bold');
                        }
                    }
                    else {
                        cb.sendNotice(`You cleared the prefix for ${username}`, user, gold, blue, 'bold');
                    }
                }
                else {
                    cb.sendNotice(`${username} does not exsist`, user, red);
                }
            }
            else {
                cb.sendNotice("You must be a mod to clear other user's prefixes", user, red);
            }
        }
        else {
            if (UserInfo.customPrefixes.hasOwnProperty(user)) {
                delete UserInfo.customPrefixes[user];
                cb.sendNotice(`Your prefix has been cleared`, user, gold, blue, 'bold');
            }
            else {
                cb.sendNotice(`Your prefix has been cleared`, user, gold, blue, 'bold');
            }
        }


    }
    else {
        cb.sendNotice(`Syntax error`, user, red, blue, 'bold');

    }
}

function ClearPrefixHelpCallback(user, message, rawMsgData) {
    return "Allows users to clear their prefix";
}

function PrefixCallback(user, message, rawMsgData) {
    if ((rawMsgData['is_mod'] || (rawMsgData['user'] == cb.room_slug))) {

        let match = message.match(/^(\/prefix)\s+(\S+)\s+(.*)$/);

        if (match) {
            let [_, command, username, prefix] = match;

            if (prefix) {
                if (activeUser(username)) {
                    cb.sendNotice(`Prefix set to ${prefix}`, user, gold, blue, 'bold');

                    if (user != username)
                        cb.sendNotice(`${user} set your prefix to: ${prefix}`, username, gold, blue, 'bold');

                    UserInfo.customPrefixes[username] = prefix;
                }
                else {
                    cb.sendNotice(`User ${username} does not exsist!`, user, red);
                }
            }
        }
        else {
            cb.sendNotice(`Command syntax invalid. Try /prefix [username] [prefix]`, user, red);
        }

    }
    else if (rawMsgData['in_fanclub']) {
        let match = message.match(/(\/prefix)\s+(\S+)/);

        let [_, command, prefix] = match;

        if (match) {
            cb.sendNotice(`Your prefix is now: ${prefix}`, user, gold, blue, 'bold');

            UserInfo.customPrefixes[user] = prefix;
        }
        else {
            cb.chatNotice("Syntax error! Use /prefix [prefix]", user, purple);
        }
    }
    else {
        rawMsgData['X-Spam'] = true;
        cb.chatNotice("You must be a mod or be in the fan club to set prefixes", user, purple);
    }
}

function PrefixHelpCallback(user, message, rawMsgData) {
    return String("Allows mods and fan club members to customize their prefix | Usage for mods: /prefix [username] [prefix] | Usage for fans: /prefix [prefix]");
}

function WhisperCallback(user, message, rawMsgData) {
    if ((rawMsgData['is_mod'] || (rawMsgData['user'] == cb.room_slug) || rawMsgData['in_fanclub']) || (cb.settings['whispercost'] > 0 && (tipInfo.AllTips[user] >= cb.settings['whispercost']))) {

        let match = message.match(/^(\/whisper)\s+(\S+)\s+(.*)$/);

        if (match) {
            let [_, command, username, whisper] = match;

            if (activeUser(username)) {
                rawMsgData['m'] = 'Sending whisper...';

                cb.chatNotice(`${user} -> ${username}: ${whisper}`, user, black, white, 'bold');
                cb.chatNotice(`${user} -> ${username}: ${whisper}`, username, black, white, 'bold');
            }
            else {
                cb.sendNotice(`User ${username} does not exsist!`, user, red);
            }
        }
        else {
            cb.sendNotice(`Command format not reconized. Try /whisper [user] [message]`, user, red);
        }

    }
    else {
        rawMsgData['X-Spam'] = true;
        if (cb.settings['whispercost'] > 0) {
            let amount = tipInfo.AllTips[user] ? cb.settings['whispercost'] - tipInfo.AllTips[user] : cb.settings['whispercost'];
            cb.chatNotice(`You must tip ${amount} more to enable this command`, user, purple);
        }
        else
            cb.chatNotice("You must be a mod or be in the fan club to add commands", user, red);
    }
}

function WhisperHelpCallback(user, message, rawMsgData) {
    if (cb.settings['whispercost'] > 0) {
        let amount = tipInfo.AllTips[user] ? cb.settings['whispercost'] - tipInfo.AllTips[user] : cb.settings['whispercost'];
        if (amount <= 0)
            return `[UNLOCKED] Allows you to send a PM to a user | Usage: /whisper [username] [message]`;
        else
            return `[TIP ${amount} TO UNLOCK] Allows you to send a PM to a user | Usage: /whisper [username] [message]`;

    }

    return String("Allows mods and fan club members to send a PM to a user | Usage: /whisper [username] [message]");
}

function BCCallback(user, message, rawMsgData) {
    if (rawMsgData['is_mod'] || rawMsgData['user'] == cb.room_slug) {
        var msgNoHead = message.substr(3);

        cb.chatNotice(`${user} -> ${cb.room_slug}: ${msgNoHead}`, cb.room_slug, black, white, 'bold');
        cb.chatNotice(`${user} -> ${cb.room_slug}: ${msgNoHead}`, user, black, white, 'bold');

        rawMsgData['m'] = 'Sending notice...';
    }
}

function BCHelpCallback(user, message, rawMsgData) {
    return String("Allows mods to send an inline PM to the streamer");
}

function CNCallback(user, message, rawMsgData) {
    if (rawMsgData['is_mod'] || rawMsgData['user'] == cb.room_slug) {
        var msgNoHead = message.substr(3);

        cb.chatNotice(msgNoHead, '', darkpurple, blue, 'bold');

        rawMsgData['m'] = 'Sending notice...';
    }
}

function CNHelpCallback(user, message, rawMsgData) {
    return String("Allows mods to send a chat notice");
}

function TMCallback(user, message, rawMsgData) {
    if (rawMsgData['is_mod'] || rawMsgData['user'] == cb.room_slug) {
        var msgNoHead = message.substr(3);

        for (var userL in UserInfo.activeUsers) {
            let curUser = UserInfo.activeUsers[userL];

            if (curUser['is_mod']) {
                cb.chatNotice(`${user} -> Mods: ${msgNoHead}`, curUser['user'], black, white, 'bold');
            }
        }

        rawMsgData['m'] = 'Sending notice...';
    }
}

function TMHelpCallback(user, message, rawMsgData) {
    return String("Allows mods to send an inline PM to all other mods");
}

function TBMCallback(username, message, rawMsgData) {
    if (rawMsgData['is_mod'] || rawMsgData['user'] == cb.room_slug) {
        var msgNoHead = message.substr(4);

        cb.chatNotice(`${username} -> B&M: ${msgNoHead}`, cb.room_slug, black, white, 'bold');

        for (var user in UserInfo.activeUsers) {
            let curUser = UserInfo.activeUsers[user];

            if (curUser['is_mod']) {
                cb.chatNotice(`${username}: ${msgNoHead}`, curUser['user'], black, white, 'bold');
            }
        }

        rawMsgData['m'] = 'Sending notice...';
    }
}

function TBMHelpCallback(user, message, rawMsgData) {
    return String("Allows mods to send an inline PM to all other mods and the streamer");
}

function LeaderboardCallback(user, message, rawMsgData) {
    var Highest = 0, second = 0, third = 0;
    var HighestUser = 'UNCLAIMED', secondUser = 'UNCLAIMED', thirdUser = 'UNCLAIMED';

    for (var curuser in rewardsInfo.rewardPoints) {
        if (rewardsInfo.rewardPoints.hasOwnProperty(curuser)) {
            var curAmmount = rewardsInfo.rewardPoints[curuser];

            if (curAmmount > Highest) {
                third = second;
                thirdUser = secondUser;

                second = Highest;
                secondUser = HighestUser;

                Highest = curAmmount;
                HighestUser = curuser;
            }
            else if (curAmmount > second) {
                third = second;
                thirdUser = secondUser;

                second = curAmmount;
                secondUser = curuser;
            }
            else if (curAmmount > third) {
                third = curAmmount;
                thirdUser = curuser;
            }
        }
    }

    cb.chatNotice("Type '/spin' to get points \n Leaderboard: \n1) " + HighestUser + ": " + Highest + "\n2) " + secondUser + ": " + second + "\n3) " + thirdUser + ": " + third, user, blue);
}

function LeaderboardHelpCallback() {
    return String("Shows the point leaderboard.");
}

function StopShowCallback(user, message, rawMsgData) {
    if (rawMsgData['is_mod'] || rawMsgData['user'] == cb.room_slug) {
        cb.limitCam_stop()

        ticketShowInfo.active = false;
        ticketShowInfo.sellingTickets = false;
    }
}

function StopShowHelpCallback(user, message, rawMsgData) {
    return String("Makes the cam public");
}

function StartSalesCallback(user, message, rawMsgData) {
    if (rawMsgData['is_mod'] || rawMsgData['user'] == cb.room_slug) {
        let msgNoHead = message.substr(11);

        if (!isNaN(parseInt(msgNoHead))) {
            ticketShowInfo.price = parseInt(msgNoHead);
            SetGiftPrice(ticketShowInfo.price);
        }

        ticketShowInfo.sellingTickets = true;

        cb.chatNotice("Tickets are now being sold for " + ticketShowInfo.price + " tokens!", '', blue);

        //give mods and fans free tickets
        let length = UserInfo.activeUsers.length;
        for (i = 0; i < length; i++) {
            let curUser = UserInfo.activeUsers[i];

            if (curUser['is_mod'] || curUser['in_fanclub']) {
                ticketShowInfo.ticketedUsers.push(curUser['user']);
            }
        }


        for (let key in tipInfo.AllTips) {
            if (tipInfo.AllTips.hasOwnProperty(key)) {
                if (tipInfo.AllTips[key] >= ticketShowInfo.price) {
                    if (!ticketShowInfo.ticketedUsers.includes(key))
                        ticketShowInfo.ticketedUsers.push(key);
                }
            }
        }
    }
}
function StartSalesHelpCallback(user, message, rawMsgData) {
    return String("Starts selling tickets for a Ticket Show. /startsales [ticket cost]");
}

function StopSalesCallback(user, message, rawMsgData) {
    if (rawMsgData['is_mod'] || rawMsgData['user'] == cb.room_slug) {
        ticketShowInfo.sellingTickets = false;
    }
}
function StopSalesHelpCallback(user, message, rawMsgData) {
    return String("Stops people from being able to buy/earn tickets");
}

function StartTimerCallback(user, message, rawMsgData) {
    if (rawMsgData['is_mod'] || rawMsgData['user'] == cb.room_slug) {
        let msgNoHead = message.substr(11);

        timerInfo.timerLength = parseInt(msgNoHead) + cb.settings['timerupdate'];

        if (!timerInfo.running) {
            CreateNewTimer();
        }
        else {
            cb.cancelTimeout(timerInfo.timeout);
            UpdateTimer();
        }

    }
}

function StartTimerHelpCallback() {
    return String("Starts a timer. Usage: /starttimer [time in seconds]");
}

function Spin(user) {
    var pointsEarned = getRndInteger(cb.settings['spinMin'], cb.settings['spinMax'])

    //add spin reward to points
    if (rewardsInfo.rewardPoints.hasOwnProperty(user)) {
        rewardsInfo.rewardPoints[user] += pointsEarned;
    }
    else {
        rewardsInfo.rewardPoints[user] = pointsEarned;
    }

    let notice = "You earned " + pointsEarned + " points! You now have a total of " + rewardsInfo.rewardPoints[user];

    if (ticketShowInfo.sellingTickets && ticketShowInfo.allowFreeEntry) {
        if (rewardsInfo.rewardPoints[user] < ticketShowInfo.freeEntryAmount) {
            notice += `\nYou need ${ticketShowInfo.freeEntryAmount - rewardsInfo.rewardPoints[user]} more to earn a free ticket`;
        }
        else {
            notice += `\nYou have earned a free ticket!`;

            if (cb.limitCam_isRunning()) {
                if (!cb.limitCam_userHasAccess(user))
                    cb.limitCam_addUsers(user);
            }
            else if (!ticketShowInfo.ticketedUsers.includes(user)) {
                ticketShowInfo.ticketedUsers.push(user);
                cb.sendNotice(`${user} has earned a free ticket`, cb.room_slug, blue);
            }
        }
    }

    cb.chatNotice(notice, user, blue);

}

function SpinCallback(user, message, rawMsgData) {

    var d = new Date()

    if (rewardsInfo.claimTimeouts.hasOwnProperty(user)) {

        var DeltaTime = (d.getTime() - rewardsInfo.claimTimeouts[user]) / 1000;

        if (DeltaTime >= cb.settings['spincooldown']) {
            rewardsInfo.claimTimeouts[user] = d.getTime();

            Spin(user);
        }
        else {
            cb.chatNotice("You must wait " + Math.ceil(cb.settings['spincooldown'] - DeltaTime) + " seconds to spin again", user, purple);
        }
    }
    else {
        rewardsInfo.claimTimeouts[user] = d.getTime();
        Spin(user);
    }
}

function SpinHelpCallback() {
    return String("Allows you to earn reward points by spining a wheel");
}

function AddcomCallback(user, message, rawMsgData) {
    if (cb.settings['addcom'] == 1) {
        if ((rawMsgData['is_mod'] || (rawMsgData['user'] == cb.room_slug) || rawMsgData['in_fanclub'])) {
            var tmp = message.replace(' ', '');

            //remove command header
            tmp = tmp.substr(7);

            //convert to array
            var arr = tmp.split("");
            //create string to store command name
            var commandName = "";

            //if valid command start
            if (arr[0] == '!' || arr[0] == '/') {
                //loop until you find a space and add each character to name
                var i = 0;
                while (arr[i] != ' ' && arr[i] != undefined) {
                    commandName = commandName.concat(arr[i]);
                    ++i;
                }

                var DoesCommandExsist = false;

                //check for command in list
                var length = TmpCommands.length;
                for (i = 0; i < length; i++) {
                    var cmd = TmpCommands[i];

                    if (commandName.toUpperCase().includes(cmd.name.toUpperCase())) {
                        cb.chatNotice(cmd.reply, '', purple);
                        DoesCommandExsist = true;
                    }
                }

                //check for command in list
                var length = FreeCommands.length;
                for (i = 0; i < length; i++) {
                    var cmd = FreeCommands[i];

                    if (commandName.toUpperCase().includes(cmd.name.toUpperCase())) {
                        DoesCommandExsist = true;
                    }
                }

                var response = tmp.replace(commandName, '');

                if (DoesCommandExsist == false) {
                    //remove the command name from tmp

                    if (response.length > 0) {
                        TmpCommands.push(new TmpCommand(commandName.toUpperCase(), response));
                        cb.chatNotice("Added new command: " + commandName + ". The response is: " + response, '', purple);
                    }
                    else {
                        rawMsgData['X-Spam'] = true;

                        cb.chatNotice("You must specify a command response after the command name (/addcom " + commandName + " [insert response here]", user, purple);
                    }
                }
                else {
                    rawMsgData['X-Spam'] = true;
                    //var oldCom = FindCommandInfo(commandName.toUpperCase(), TmpCommands);
                    //oldCom.reply = response;
                    cb.chatNotice("That command already exsists.", user, red);
                }
            }
            else {
                rawMsgData['X-Spam'] = true;

                cb.chatNotice("The command must start with either '/' (/addcom /[commandNameInOneWord] [response]", user, purple);
            }
        }
        else {
            rawMsgData['X-Spam'] = true;
            cb.chatNotice("You must be a mod or be in the fan club to add commands", user, purple);
        }
    }
}

function AddcomHelpCallback() {
    return String("Allows Fan Club members to add commands to the command list that reply text. \nUsage: /addcom /[commandNameInOneWord] [any text you want it to display]");
}

function HelpCallback(user, message, rawMsgData) {

    //checks to see it the user included a command that they wanted help with
    var aboutSpecificCommand = false;
    var command = null
    var length = FreeCommands.length;
    for (i = 0; i < length; i++) {
        var tmpcmd = FreeCommands[i];

        let match = message.match(/^(\S+)\s(.*)$/);
        if (match) {
            let [_, commandname, helper] = match;
            if (tmpcmd.name.toUpperCase() != "/HELP") {
                if (tmpcmd.enabled && helper.toUpperCase() == tmpcmd.name.toUpperCase()) {
                    aboutSpecificCommand = true;
                    command = tmpcmd;
                    break;
                }
            }
        }
    }

    if (aboutSpecificCommand) {
        cb.chatNotice(command.help(), user, blue);
    }

    //if they dont have a command that they wanted help with
    else {
        var help = "You can type '/help [commandname]' to learn more about a command\nThese are the available commands:\n";

        var length = FreeCommands.length;
        for (var i = length - 1; i >= 0; --i) {
            var cmd = FreeCommands[i];
            if (cmd.enabled) {
                help += cmd.name.toLowerCase();
                help += ',';
            }
        }

        var length = TmpCommands.length;

        if (length > 0) {
            help += "\nThese are temporary commands created by users using /addcom:\n"

            for (var i = 0; i < length; ++i) {
                var cmd = TmpCommands[i];
                help += cmd.name.toLowerCase();
                help += ',';
            }
        }

        //print the help message
        cb.chatNotice(help, user, purple);

        //print watermark only if listing commands
        if (!aboutSpecificCommand) {
            cb.chatNotice("This bot was coded by the model Meepsalot", user, blue);
        }

    }
}

//this should never be possible
function HelpHelpCallback() {
    return String("If you ever see this string somehting is seriously wrong");
}

function TipMenuCallback(user, message, rawMsgData) {
    
    if(cb.settings['levelse'] == 1)
    {
        LevelsCallback(user,message,rawMsgData);
    }
   
    if(cb.settings['adaptiveMenu'] == 1)
    {
    message['X-Spam'] = true;

    var help = "Adaptive Tip Menu: \n Type any of the following as your optional message to activate. \n Alternatively tip the base amount for automatic activation"

    var length = Commands.length;
    for (i = 0; i < length; i++) {
        var cmd = Commands[i];
        if (cmd.enabled) {
            help += cmd.help(cmd, user);
        }
    }
    cb.chatNotice(help, user, white, darkpurple, 'bold');
    }

   

    cb.chatNotice("This bot was coded by the model Meepsalot", user, blue);

}

function TipMenuHelpCallback() {
    return String("Shows a list of tip menu options with instuctions on how to use them.");
}

function ReminderCallback(user, message, rawMsgData) {
    if ((rawMsgData['is_mod'] || rawMsgData['user'] == cb.room_slug || rawMsgData['in_fanclub'])) {
        TipMenuCallback('',message,rawMsgData);
    }
}

function ReminderHelpCallback() {
    return String("Allows Mods and Fan Club members to remind the whole chat about the tip menu options");
}

function DisableCallback(user, message, rawMsgData) {
    if (rawMsgData['is_mod'] || rawMsgData['user'] == cb.room_slug) {

        var found = false;
        var length = Commands.length;
        for (i = 0; i < length; i++) {
            var cmd = Commands[i];
            if (cmd.enabled) {
                if (message.toUpperCase().includes(cmd.name)) {
                    cmd.enabled = false;
                    cb.chatNotice(cmd.name.toLowerCase() + " now disabled", '', red);
                    found = true;
                }
            }
        }
        if (!found) {
            var msg = "No command by that name found. Here is a command list: "

            var length = Commands.length;

            for (i = 0; i < length && !found; i++) {
                var cmd = Commands[i];
                msg += String("\n" + cmd.name.toLowerCase())
            }

            cb.chatNotice(msg, user, red);
        }
    }
}

function DisableHelpCallback() {
    return String("Allows Mods to disable tip menu options. \nUsage: /disable /[command name] (you can omit the command name to see a list of commands)");
}

function EnableCallback(user, message, rawMsgData) {

    if (rawMsgData['is_mod'] || rawMsgData['user'] == cb.room_slug) {
        var length = Commands.length;

        var msg = "";

        var found = false;
        for (i = 0; i < length && !found; i++) {
            var cmd = Commands[i];
            if (cmd.enabled == false) {
                if (message.toUpperCase().includes(cmd.name)) {
                    cmd.enabled = true;
                    cb.chatNotice(cmd.name.toLowerCase() + " now enabled", '', purple);
                    found = true;
                }
            }
        }

        if (!found) {
            var msg = "No command by that name found. Here is a command list: "

            var length = Commands.length;

            for (i = 0; i < length && !found; i++) {
                var cmd = Commands[i];
                msg += String("\n" + cmd.name.toLowerCase())
            }

            cb.chatNotice(msg, user, red);
        }
    }
}

function EnableHelpCallback() {
    return String("Allows Mods to enable tip menu options. \nUsage: /disable /[command name] (you can omit the command name to see a list of commands)");
}

function SetGoalCallback(user, message, rawMsgData) {

    if (rawMsgData['is_mod'] || rawMsgData['user'] == cb.room_slug) {
        let match = message.match(/(\/setgoal)\s+(\d)\s+"([^"]+)"\s+(\S+)/);

        if (match) {

            let [_, command, goal, goalText, amount] = match;

            setGoal(user, goal, goalText, amount);
        }
        else {
            cb.sendNotice("Syntax error! Please use /setgoal [Goal Number] \"[Goal Text]\" [amount]", user, red);
        }
    }
}

function SetGoalHelpCallback() {
    return String("Allows Mods to set a goal for the stream! \nUsage: /setgoal [Goal Number] \"[Goal Text]\" [amount]");
}

function SetTitleCallback(user, message, rawMsgData) {
    if (rawMsgData['is_mod'] || rawMsgData['user'] == cb.room_slug) {

        var msgNoHead = message.substr(9);

        goalInfo.StreamTitle = msgNoHead;

        UpdateDisplay(true);
    }

}

function AddTicketCallback(user, message, rawMsgData) {
    if (rawMsgData['is_mod'] || rawMsgData['user'] == cb.room_slug) {
        var msgNoHead = message.substr(5);
        msgNoHead = msgNoHead.trim();

        if (msgNoHead.length >= 3 && activeUser(msgNoHead)) {
            if (cb.limitCam_isRunning()) {
                if (!cb.limitCam_userHasAccess(msgNoHead)) {
                    cb.limitCam_addUsers(msgNoHead);
                    cb.chatNotice(`Enjoy the Show! ${user} granted you a ticket!`, msgNoHead, blue);
                }
            }
            else if (!ticketShowInfo.ticketedUsers.includes(msgNoHead)) {
                ticketShowInfo.ticketedUsers.push(msgNoHead);
                cb.chatNotice(`Enjoy the Show! ${user} granted you a ticket!`, msgNoHead, blue);

            }
        }
        else {
            cb.sendNotice(`User ${msgNoHead} does not exsist!`, user, red);
        }
    }
}

function AddTicketHelpCallback() {
    return String("MODS ONLY -- Adds a user to the ticket show. Usage: /add [username]");
}


function TicketShowCallback(user, message, rawMsgData) {
    if (rawMsgData['is_mod'] || rawMsgData['user'] == cb.room_slug) {

        ticketShowInfo.sellingTickets = true;
        ticketShowInfo.active = true;

        ticketShowInfo.ticketedUsers.forEach((user) => {
            cb.chatNotice("The show has started and you have a ticket!", user, blue);
        })

        cb.limitCam_start("The show has begun! Buy a ticket for " + ticketShowInfo.price + " tokens. You can get a ticket for FREE once you get " + ticketShowInfo.freeEntryAmount + " points by typing '!spin' in chat!", ticketShowInfo.ticketedUsers);

    }

}

function TicketShowHelpCallback() {
    return String("Starts the ticket show which hides the cam to any users without a ticket");
}

function SetTagsCallback(user, message, rawMsgData) {
    if (rawMsgData['is_mod'] || rawMsgData['user'] == cb.room_slug) {

        var msgNoHead = message.substr(8);

        goalInfo.Tags = msgNoHead;

        UpdateDisplay(true);
    }

}

function SetTagsHelpCallback() {
    return String("Allows Mods to change the stream tags \nUsage: /settags [tags]");

}

function SetTitleHelpCallback() {
    return String("Allows Mods to change the stream title \nUsage: /settitle [Title]");

}

function BackgroundCallback(user, message, rawMsgData) {
    if (rawMsgData['is_mod'] || rawMsgData['user'] == cb.room_slug) {

        var msgNoHead = message.substr(12);

        if (backgrounds.hasOwnProperty(msgNoHead.toLowerCase())) {
            currentBackground = backgrounds[msgNoHead.toLowerCase()];

            UpdateDisplay(false);

        }
        else {
            cb.chatNotice(msgNoHead + " is not a valid background name.", user, red);
        }

    }

}

function BackgroundHelpCallback() {
    var text = "Allows Mods to change the app panel background \nUsage: /background [image] \n Current Backgrounds: \n";
    text += Object.keys(backgrounds).join(', ');

    return text;
}

//extras
function KassCallback(user, message, rawMsgData) {
    cb.chatNotice(user + " wants to see Kass", '', blue);
    currentBackground = backgrounds.kass;
    UpdateDisplay(false);
}

function KassHelpCallback() {
    return String("Notifies the whole chat that you want to see Kass :D");
}



//#endregion
//END OF FREE CALLBACKS

function UpdateGoals(tipped, goal) {
    if (goal == 0 || goal == 1) {
        if (goalInfo.goal > 0) {
            if ((goalInfo.goal - tipped) <= 0) {
                tipped -= goalInfo.goal;
                goalInfo.goal = 0;
                updateGoalQueues();
                if (cb.settings['goalRollover']) {
                    if (goalInfo.goal > 0) {
                        UpdateGoals(tipped, 1);
                    }
                }
            }
            else if (tipped > 0) {
                goalInfo.goal -= tipped;
            }

            UpdateDisplay(true);


        }
        else {
            updateGoalQueues(true);
        }
    }

    if (goal == 0 || goal == 2) {
        if (goalInfo.goal2 > 0) {
            if ((goalInfo.goal2 - tipped) <= 0) {
                tipped -= goalInfo.goal2;
                goalInfo.goal2 = 0;
                updateGoalQueues();
                if (cb.settings['goalRollover']) {
                    if (goalInfo.goal2 > 0) {
                        UpdateGoals(tipped, 2);
                    }
                }
            }
            else {
                goalInfo.goal2 -= tipped;
                UpdateDisplay(false);
            }

        }
        else {
            updateGoalQueues(true);
        }
    }
}

cb.onTip(function (tip) {
    var tippedOrg = parseInt(tip['amount']);

    //apply multiplier
    var tipped = tippedOrg * cb.settings['multiplier'];

    var user = String(tip['from_user']);
    var to = String(tip['to_user']);

    //tip timer
    if (cb.settings['tiptimer'] == 1) {
        if (tipped == cb.settings['tiptimercost']) {
            if (timerInfo.running) {
                timerInfo.timerLength += cb.settings['tiptimerinc'];
            }
            else {
                timerInfo.timerLength = cb.settings['tiptimerinc'] + cb.settings['timerupdate'];
                cb.setTimeout(CreateNewTimer, 30 * 1000);
                cb.sendNotice("Timer starting in 30 seconds!", '', blue)
            }
        }
    }


    tipInfo.totalTipped += tipped;

    UpdateGoals(tipped, 0);

    LevelsCheck(tipped, user);


    var containsExplicitInvokation = false;

    var length = Commands.length;
    for (i = 0; i < length; i++) {
        var cmd = Commands[i];
        if (String(tip['message']).toUpperCase().includes(cmd.name)) {
            if (cmd.enabled) {
                if (tipped >= cmd.cost) {
                    cmd.callback(cmd, true, tipped, user, to, String(tip['message']));
                }
                else {
                    cmd.callback(cmd, false, tipped, user, to, String(tip['message']));
                }
                containsExplicitInvokation = true;

                break;
            }
            else {
                cb.chatNotice("Sorry, but that command is not currently enabled. Type '/tipmenu' for a list of enabled commands", user, red);
                cb.chatNotice("Appologize to " + user + " for using " + cmd.name.toLowerCase() + " while its disabled", to, red);
            }

        }
    }

    if (!containsExplicitInvokation) {
        var PossibleCmds = [];

        var length = Commands.length;
        for (i = 0; i < length; i++) {
            var cmd = Commands[i];

            if (cmd.enabled && (tipped == cmd.cost)) {
                if (cmd.name.toUpperCase() != "/GIFT") {
                    PossibleCmds.push(cmd);
                }
            }
        }

        length = PossibleCmds.length;

        //if the tip ammount matches multiple tip menu items
        if (length > 1) {
            var rewardtxt = user + " spent " + tipped + " tokens. They get their choice of the following options: \n"
            for (i = 0; i < length; i++) {
                rewardtxt += PossibleCmds[i].name.toLowerCase() + "\n";
            }
            rewardtxt += "Just let the broadcaster know which you would like! \n(for future reference you can type the command as your optional message to specify the one you want to use)"
            cb.chatNotice(rewardtxt, '', blue);
        }
        else if (length == 1) {
            PossibleCmds[0].callback(PossibleCmds[0], true, tipped, user, to, String(tip['message']));
        }
    }

    //This is at the bottom because it needs to happen after command checks

    //if the key does not exsist initialize, otherwise add to its value
    tipInfo.AllTips[user] = (tipInfo.AllTips[user] || 0) + tippedOrg;

    //Tell user of whisper status
    if (cb.settings['whispercost'] > 0) {
        let usersTipTotal = tipInfo.AllTips[user];
        if ((usersTipTotal >= cb.settings['whispercost']) && ((usersTipTotal - tippedOrg) < cb.settings['whispercost'])) {
            cb.chatNotice(`You can now use /whisper to privately message any user.\nType "/help /whisper" for more information on how to use it.`, user, blue);
            cb.chatNotice(`${user} can now use /whisper to privately message any user.`, streamInfo.streamer, blue);
        }
        else if (usersTipTotal < cb.settings['whispercost']) {
            cb.chatNotice(`Tip ${cb.settings['whispercost'] - usersTipTotal} to enable /whisper for your account`, user, purple);
        }
    }


    if (tipInfo.HighestTipEver.hasOwnProperty('amount')) {
        if (tipInfo.HighestTipEver['amount'] < tippedOrg) {
            tipInfo.HighestTipEver['name'] = user;
            tipInfo.HighestTipEver['amount'] = tippedOrg;
        }
    }
    else {
        tipInfo.HighestTipEver['name'] = user;
        tipInfo.HighestTipEver['amount'] = tippedOrg;
    }


    if (ticketShowInfo.sellingTickets) {
        if (tipInfo.AllTips[user] >= ticketShowInfo.price) {
            if (cb.limitCam_isRunning()) {
                if (!cb.limitCam_userHasAccess(user)) {
                    cb.limitCam_addUsers(user);
                    cb.chatNotice("Thank you for buying a ticket. Enjoy the Show!", user, blue);
                }
            }
            else if (!ticketShowInfo.ticketedUsers.includes(user)) {
                ticketShowInfo.ticketedUsers.push(user);
                cb.chatNotice("Thank you for buying a ticket. Enjoy the Show!", user, blue);

            }
        }
    }

    var HighestTip = 0;
    //find the king tipper
    for (var curuser in tipInfo.AllTips) {
        if (tipInfo.AllTips.hasOwnProperty(curuser)) {
            var curTip = tipInfo.AllTips[curuser];
            if (curTip > HighestTip) {
                HighestTip = curTip;
                tipInfo.king = curuser;
                UpdateDisplay(false);
            }
        }
    }
});

cb.onMessage(function (message) {
    var msg = String(message['m']);
    var user = String(message['user']);

    UserInfo.interactiveUsers[user] = user;


    if (cb.settings['prefixesenabled']) {
        let prefixadded = false;
        var prefix = "| "

        if (UserInfo.customPrefixes.hasOwnProperty(user)) {
            prefix += UserInfo.customPrefixes[user] + " ";
            prefixadded = true;
        }

        if (user == tipInfo.king) {
            prefix += ":smallCrown ";
            prefixadded = true;
        }

        //if there is not a custom prefix dont show these
        else if (!UserInfo.customPrefixes.hasOwnProperty(user)) {
            if (tipInfo.AllTips.hasOwnProperty(user)) {
                prefix += tipInfo.AllTips[user] + ' ';
                prefixadded = true;
            }

            if (tipInfo.AllGifters.hasOwnProperty(user)) {
                if (tipInfo.AllGifters[user] > 1) {
                    prefix += `:giftsmol x${tipInfo.AllGifters[user]} `;
                    prefixadded = true;
                }
                else {
                    prefix += `:giftsmol `;
                    prefixadded = true;
                }

            }
        }

        if (ticketShowInfo.ticketedUsers.includes(user)) {
            prefix += ":tinyticketvip ";
            message['background'] = gold;
            prefixadded = true;
        }

        prefix += " | ";


        if (prefixadded) {
            var prefixedMsg = prefix.concat(msg);
            message['m'] = prefixedMsg;
        }
    }

    var commandUsed = false;

    let match = msg.match(/^(\S+).*$/);
    if (match) {
        let [_, commandname] = match;

        //loop to see if any commands match commandname
        var length = FreeCommands.length;
        for (i = 0; i < length; i++) {
            var cmd = FreeCommands[i];
            if ((commandname.toUpperCase() == cmd.name) && msg[0] == '/') {
                if (cmd.enabled) {
                    if (cmd.hides) {
                        message['X-Spam'] = true;
                    }
                    cmd.callback(user, msg, message);
                    commandUsed = true;
                    break;
                }
            }
        }


        if (!commandUsed) {
            //check to see if they misused the tip commands by typing them without tipping

            var length = Commands.length;
            for (i = 0; i < length; i++) {
                var cmd = Commands[i];

                if (commandname.toUpperCase() == cmd.name) {
                    message['X-Spam'] = true;

                    cb.chatNotice("These commands are meant to be used as a tip memo and accompanied by a tip", user, red);
                }
            }

            //look to see if the message is a tmpcommand (this must happen last so that these dont trigger when you type '/addcom' to update a command)
            if (cb.settings['addcom'] == 1) {
                var length = TmpCommands.length;
                for (i = 0; i < length; i++) {
                    var cmd = TmpCommands[i];

                    if (commandname.toUpperCase() == cmd.name) {
                        cb.chatNotice(cmd.reply, '', purple);
                        commandUsed = true;
                    }
                }
            }
        }
    }

    if (UserInfo.mutedUsers[user]) {
        message['X-Spam'] = true;
    }

    if (cb.settings['captcha'] == 'enabled') {
        if ((!streamInfo.verifiedUsers.includes(user)) && !commandUsed) {
            message['m'] = String(`Message Failed: `).concat(message['m']);
            message['X-Spam'] = true;
            cb.sendNotice(`${user}, you must type "/join" to chat in this room`, user, red);
        }
    }   

    if (message['X-Spam']) {
        message['background'] = grey;
    }

    if (msg[0] == '/' && !commandUsed) {
        message['X-Spam'] = true;
        let oldmsg = message['m'];
        message['background'] = red;
        message['m'] = "Invalid Command: " + oldmsg;
    }

    return message;
});

cb.onDrawPanel(function (user) {
    return {
        "template": "image_template",
        "layers": [
            { 'type': 'image', 'fileID': currentBackground['Id'] },
            {
                'type': 'text',
                'text': goalInfo.firstPanelHeader,
                'top': 5,
                'left': 77,
                'font-size': fontSize,
                'color': currentBackground['PrimaryColor'],
            },
            {
                'type': 'text',
                'text': goalInfo.secondPanelHeader,
                'top': 29,
                'left': 77,
                'font-size': fontSize,
                'color': currentBackground['PrimaryColor'],
            },
            {
                'type': 'text',
                'text': goalInfo.firstPanel,
                'top': 8,
                'left': goalInfo.firstPanelHeaderOffset,
                'font-size': smallfontSize,
                'color': currentBackground['SecondaryColor'],
            },
            {
                'type': 'text',
                'text': goalInfo.secondPanel,
                'top': 31,
                'left': goalInfo.secondPanelHeaderOffset,
                'font-size': smallfontSize,
                'color': currentBackground['SecondaryColor'],
            },
            {
                'type': 'text',
                'text': goalInfo.thirdPanel,
                'top': 52,
                'left': 77,
                'font-size': smallfontSize,
                'color': currentBackground['SecondaryColor'],
            },
        ],
    };
});

//User list
cb.onEnter(function (user) {
    let name = user['user'];

    if (!UserInfo.activeUsers[name]) {
        UserInfo.activeUsers[name] = user;
    }

});

cb.onLeave(function (user) {
    let name = user['user'];

    if (UserInfo.activeUsers[name]) {
        delete UserInfo.activeUsers[name];
    }

    if (UserInfo.interactiveUsers.hasOwnProperty(name)) {
        delete UserInfo.interactiveUsers[name];
    }
});

cb.drawPanel();