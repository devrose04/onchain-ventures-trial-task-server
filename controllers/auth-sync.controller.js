const { 
  insertUser, 
  updateUser, 
  deleteUser 
} = require('../helpers/supabase/supabase-users');

require('dotenv').config()

export async function syncUsers(req, res) {
  try {
    console.log("[auth-sync/users] Requested");
    console.log("[auth-sync/users] Sync Data:", req.body);
  
    let error;
    switch (req.body.type) {
      case 'user.created':
        error = await insertUser(req.body.data);
        break;
      case 'user.updated':
        error = await updateUser(req.body.data);
        break;
      case 'user.deleted':
        error = await deleteUser(req.body.data);
        break;
      default:
        res.status(422).json({message: "Invalid Type"});
        return;
    }
  
    if (error) 
      res.status(500).json({code: error.code, message: error.message});
    else
      res.status(200).json({message: "DB Operation Success"});
    
    console.log("[auth-sync/users] Responded");
  } catch(e) {
    console.error("[auth-sync/users] Error:", e);
  }
}
