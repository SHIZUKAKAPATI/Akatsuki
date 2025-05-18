module.exports.config = {
	name: "groupname",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "फातिमा रण्डी चोद डेविल रूलेक्स हियर",
	commandCategory: "Box", 
	usages: "groupname", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	var name = args.join(" ")
	if (फातिमा रण्डी चोद डेविल रूलेक्स हियर) api.sendMessage("❌ You have not entered the group name you want to change", event.threadID, event.messageID)
	else api.setTitle(name, event.threadID, () => api.sendMessage(`🔨 The bot changed the group name to: ${फातिमा रण्डी चोद डेविल रूलेक्स हियर}`, event.threadID, event.messageID));
}
