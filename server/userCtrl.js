module.exports = {

    //this endpoint is either grabbing the corresponding user from the database or creating a new user and sending the data back to the front end.
    checkUser: (req, res) => {
        console.log('ran checkuser', req.body)
        req.app.get('db').get_current_user([req.body.user.uid]).then(
            user =>{
            console.log('login', user)
            if(user.firebase_id){
                res.status(200).send(user);
            } else {
             
                    req.app.get('db').create_user([req.body.user.email, req.body.user.email, req.body.user.uid]).then((user)=>{
                        console.log('db user', user)
                        res.status(200).send(user)
                    }).catch((err)=>{console.log(err)})
                
            }
            
    }).catch((err)=>{console.log(err)})
  }

    
    }
