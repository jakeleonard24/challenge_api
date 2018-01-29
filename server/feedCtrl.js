module.exports = {
    getFollowingFeed: (req, res) => {
        let {id} = req.params;
        req.app.get('db').get_following_feed([id]).then(feed =>{
                res.status(200).send(feed);
        }).catch((err)=>{console.log(err)})
      }
}