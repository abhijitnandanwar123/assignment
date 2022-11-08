const config ={
    local:{
        DB:{
            HOST : "172.10.1.3",
            PORT  : "27017",
            DATABASE : "abhijitnandanwar",
            MONGOOSE : {
                useUnifiedTopology : true,
                useNewUrlParser : true,
            },
            userName : "abhijitnandanwar",
            Password : "abhijitnandanwar321",
        },
        email:{
      username: "abhijitnandanwar123@gmail.com",
      password: "nrrnqxlxuomhcunu",
      host: "smtp.gmail.com",
      port: 465,
        },
        PORTNO:8080,        
        }
    }
export const get = function get(env){
    return config[env]
}
