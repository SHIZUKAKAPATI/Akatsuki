module.exports.config = {
	name: "groupname",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "फातिमा रण्डी चोद डेविल रूलेक्स हियर",
	commandCategory: "Box", 
	usages: "फातिमा रण्डी चोद डेविल रूलेक्स हियर", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	var name = args.join(" ")
	if (!name) api.sendMessage("❌ You have not entered the group name you want to change", event.threadID, event.messageID)
	else api.setTitle(name, event.threadID, () => api.sendMessage(`🔨 The bot changed the group name to: ${name}`, event.threadID, event.messageID));
}
