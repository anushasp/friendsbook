'use strict';
var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var mysql  =require('mysql');


router.get('/', function (req, res)
{
    res.send('respond with a resource');
});


router.get('/current', function (req, res)
{
    var username = req.session.login;
    var connection = mysql.createConnection({
        host: 'mis-sql.uhcl.edu',
        user: 'saripellaa6306',
        password: '1517381',
        database: 'saripellaa6306'
    });

    connection.connect(function (err) {
        if (!err) {
            console.log("Database is connected ... nn");

        } else {
            console.log("Error connecting database ... nn" + JSON.stringify(err));
        }
    });
   
    connection.query("Select * from friendbookaccount where userID = '" + username + "'", function (err, rows, fields) {

        console.log("query started ... nn");

        if (err) {
            console.log(err);
        }
        else
        {
            var user = {
                name: rows[0].name,
                gender: rows[0].gender,
                school: rows[0].school,
                bday: rows[0].Bday,
                
            };
            res.send(user);
            return;
        }
        
    });
});


router.get('/latestupdates', function (req, res) {
    var username = req.session.login;
    var items = [];
    var connection = mysql.createConnection ({
        host: 'mis-sql.uhcl.edu',
        user: 'saripellaa6306',
        password: '1517381',
        database: 'saripellaa6306'
    });

    connection.connect(function (err)
    {
        if (!err) {
            console.log("latestupdates Database is connected ... nn");

        } else {
            console.log("Error connecting database ... nn" + JSON.stringify(err));
        }
    });
            connection.query("Delete from UpdateComment");
            connection.query("Select * from updates "
                + "order by updateid desc limit 5", function (err, rows, fields) {
                   
                    if (err) {
                        console.log(err);
                    }

                    var n = rows.length;
                    var count = 0;
                    var Pid = 1;
                    while (count<n)
                    {
                        var updateby = "";
                        var comment = "";
                        var postedby = "";
                        postedby = rows[count].userid + " has posted: ";
                        updateby = rows[count].updatecontent;
                        comment = rows[count].comment;
                        var pp = "";
                        var UpdateCommentList =
                            {
                                posted: postedby,
                                updates: updateby,
                                comments: comment,
                                newcomment:pp
                            }
                        items.push(UpdateCommentList);
                        connection.query("insert into UpdateComment values "
                            + "('" + Pid + "', '" + rows[count].updateid + "',"
                            + "'" + rows[count].userid + "', '" + rows[count].updatecontent + "','" + rows[count].comment + "')");
                        Pid++;
                        count++;
                       
                    }
                    console.log("final", items);
                    res.send(items);
                    return;
                });
});

router.post('/commentupdates', function (req, res) {
    var username = req.session.login;
    var selectedupdate = req.body.selectedupdate;
    var newcomment = req.body.commentonUpdate;
     var result = req.body.res;
   
    console.log("selected update:", selectedupdate);
    console.log("----------------------------------");
    console.log("commentupdate update:", newcomment);
    var connection = mysql.createConnection({
        host: 'mis-sql.uhcl.edu',
        user: 'saripellaa6306',
        password: '1517381',
        database: 'saripellaa6306'
    });

    connection.connect(function (err) {
        if (!err) {
            console.log("commentUpdates Database is connected ... nn");

        } else {
            console.log("Error connecting database ... nn" + JSON.stringify(err));
        }
    });

    var comment = "";
    connection.query("Select * from UpdateComment where content = '" + selectedupdate + "'", function (err, rows, fields) {
        if (err)
        {
            console.log(err);
        }
        if (rows.length == 1)
        
        {
            comment = comment + rows[0].comment;
            newcomment = newcomment + " ----Posted by " + username;
            comment = comment + "\n" + newcomment;
            connection.query("Update updates set "
                + "comment = '" + comment + "' where updatecontent = '" + selectedupdate + "'");
            
            result = "Comment Posted";
            newcomment = "";
        }
       
        res.send(result);
        return;
        
    });
           
});

router.get('/notificationsnum', function (req, res) {
    var id = req.session.login;
    var notitems = [];
    var notifcount = 0;
    var notificationlist = "";

    var connection = mysql.createConnection ({
        host: 'mis-sql.uhcl.edu',
        user: 'saripellaa6306',
        password: '1517381',
        database: 'saripellaa6306'
    });

    connection.connect(function (err) {
        if (!err) {
            console.log("notificationsUpdates Database is connected ... nn");

        } else {
            console.log("Error connecting database ... nn" + JSON.stringify(err));
        }
    });

    connection.query("Delete from shownotifications");
    var type = 0;
   
    var showid = 1;
    var loop = 0;
    var count = 0;
   
                connection.query("Select * from notifications " + "where userid = '" + id +
                    "' and type = '" + type + "'", function (err, rows, fields) {

                        if (err)
                        {
                            console.log(err);
                        }
                        var n = rows.length;
                        for (var i = 0; i < n; i++)
                        {

                            connection.query("insert into shownotifications values "
                                + "('" + showid + "', '" + rows[i].notid + "', '" + rows[i].type + "','"
                                + rows[i].content + "')");
                            showid++;
                            count++;
                        }
                       res.status(200).send((count).toString());
                        return;
                    });
       
});

router.get('/DisplayNotifications', function (req, res) {
    var notitems = [];
   
    var connection = mysql.createConnection({
        host: 'mis-sql.uhcl.edu',
        user: 'saripellaa6306',
        password: '1517381',
        database: 'saripellaa6306'
    });

    connection.connect(function (err) {
        if (!err) {
            console.log("Displaynotifications Database is connected ... nn");

        } else {
            console.log("Error connecting database ... nn" + JSON.stringify(err));
        }
    });
    var y = 0;
    connection.query("Select * from shownotifications"  , function (err, rows, fields) {
        
        if (err)
          {
                console.log(err);
          }
        var n = rows.length;
        
           for (var i = 0; i < n; i++)
            {
              notitems.push(rows[i].content);
             
            }
           res.send(notitems);
            return;
        });
});

router.post('/AcceptFriend', function (req, res) {
    var id = req.session.login;
    var not = req.body.not;
    var result = "";
    var connection = mysql.createConnection({
        host: 'mis-sql.uhcl.edu',
        user: 'saripellaa6306',
        password: '1517381',
        database: 'saripellaa6306'
    });

    connection.connect(function (err) {
        if (!err) {
            console.log("Friends Database is connected ... nn");

        } else {
            console.log("Error connecting database ... nn" + JSON.stringify(err));
        }
    });

    connection.query("Select * from notifications where content = '" + not + "'", function (err, rows, fields) {


       if (err)
        {
          console.log(err);
        }

        if (rows.length == 1)
        {
            connection.query("insert into friends values "
                + "('" + rows[0].senderid + "','" + id + "')");
            result = result + "Friend Request Accepted";
        }

        connection.query("Delete from notifications where content = '" + not + "'");
        connection.query("Delete from shownotifications where content = '" + not + "'");
        res.send(result);
            return;

        });
});

router.get('/friends', function (req, res) {
    var username = req.session.login;
    var friendsList = [];


    var connection = mysql.createConnection({
        host: 'mis-sql.uhcl.edu',
        user: 'saripellaa6306',
        password: '1517381',
        database: 'saripellaa6306'
    });

    connection.connect(function (err) {
        if (!err) {
            console.log("Friends Database is connected ... nn");

        } else {
            console.log("Error connecting database ... nn" + JSON.stringify(err));
        }
    });

  connection.query("Select * from friends "
        + "where id1 = '" + username + "' || id2 = '" + username + "'", function (err, rows, fields) {

        console.log("query started ... nn");

            if (err)
            {
            console.log(err);
            }

            for (var i = 0; i < rows.length; i++)
            {
                if (username == rows[i].id1)
                {
                    friendsList.push(rows[i].id2);

                }
                else if (username == rows[i].id2)
                {
                    friendsList.push(rows[i].id1);
                }
            }
      
            res.send(friendsList);
            return;

    });
});

router.get('/previousmessages/:friendname', function (req, res) {
    var id = req.session.login;
    var friendname = req.params.friendname;
  
    console.log(friendname);
    var curmsg = "";
    var connection = mysql.createConnection({
        host: 'mis-sql.uhcl.edu',
        user: 'saripellaa6306',
        password: '1517381',
        database: 'saripellaa6306'
    });

    connection.connect(function (err) {
        if (!err) {
            console.log("messages Database is connected ... nn");

        } else {
            console.log("Error connecting database ... nn" + JSON.stringify(err));
        }
    });
    
    connection.query("Select * from message "
        + "where (id1 = '" + friendname + "' and id2 = '" + id + "') || "
        + "(id1 = '" + id + "' and id2 = '" + friendname + "')", function (err, rows, fields) {

            if (err)
            {
                console.log(err);
            }
            console.log(rows.length);
            if (rows.length == 1)
            {
                curmsg = curmsg + rows[0].message;
            }
            res.send(curmsg);
            return;
        });
});

router.post('/sendmsg/:friendname', function (req, res) {
    var id = req.session.login;
    var friendname = req.params.friendname;
    var messg = req.body.messg;

    var connection = mysql.createConnection({
        host: 'mis-sql.uhcl.edu',
        user: 'saripellaa6306',
        password: '1517381',
        database: 'saripellaa6306'
    });

    connection.connect(function (err)
    {
        if (!err) {
            console.log("sendmsg Database is connected ... nn");

        } else {
            console.log("Error connecting database ... nn" + JSON.stringify(err));
        }
    });

    connection.query("Select * from message "
        + "where (id1 = '" + friendname + "' and id2 = '" + id + "') || "
        + "(id1 = '" + id + "' and id2 = '" + friendname + "')", function (err, rows, fields) {
            if (err) {
                console.log(err);
            }
            if (rows.length == 1) {
                var message = rows[0].message;
                message = message + "\n" + messg + "---- by " + id;
                connection.query("Update message set message = '" + message
                    + "' where (id1 = '" + friendname + "' and id2 = '" + id + "') || "
                    + "(id1 = '" + id + "' and id2 = '" + friendname + "')");
            }
            else {
                messg = messg + "---- by" + id;
                connection.query("insert into message values "
                    + "('" + friendname + "', '" + id + "', '" + messg + "')");

            }
            connection.query("Select * from notificationnumber", function (err, res, fields) {
                var notid = 1;
                var nextnotid = 1;
                var type = 1;
                if (res.length == 1) {
                    notid = res[0].nextnotid + 1;
                    nextnotid = res[0].nextnotid + 1;
                }
                else {
                    connection.query("insert into notificationnumber values "
                        + "('" + nextnotid + "')");
                }
                connection.query("update notificationnumber set nextnotid = '" + nextnotid + "'");
                connection.query("insert into notifications values "
                    + "('" + notid + "', '" + friendname + "', '" + messg + "', '" + type + "', '" + id + "')");
               
            });
            res.send("Message Sent");
            return;
        });
});



router.post('/friendsprofile', function (req, res) {
    var username = req.session.login;
    var friendname = req.body.friendprof;
    var stat = "";
    var connection = mysql.createConnection({
        host: 'mis-sql.uhcl.edu',
        user: 'saripellaa6306',
        password: '1517381',
        database: 'saripellaa6306'
    });

    connection.connect(function (err) {
        if (!err) {
            console.log("Friends Database is connected ... nn");

        } else {
            console.log("Error connecting database ... nn" + JSON.stringify(err));
        }
    });

    connection.query("Select * from friendbookaccount "
        + "where userID = '" + friendname + "'", function (err, rows, fields) {

            console.log("query started ... nn");
            if (err) {
                console.log(err);
            }
            var frienddetails =
            {
                    Name: rows[0].name,
                    Gender: rows[0].gender,
                    School: rows[0].school,
                    Bday: rows[0].Bday,
            }

            res.send(frienddetails);
            return;

        });
});

router.post('/viewprofile', function (req, res) {
    var username = req.session.login;
    var msg = "";
    var connection = mysql.createConnection({
        host: 'mis-sql.uhcl.edu',
        user: 'saripellaa6306',
        password: '1517381',
        database: 'saripellaa6306'
    });

    connection.connect(function (err) {
        if (!err) {
            console.log("Friends Database is connected ... nn");

        } else {
            console.log("Error connecting database ... nn" + JSON.stringify(err));
        }
    });

    connection.query("Select * from friendbookaccount "
        + "where userID = '" + username + "'", function (err, rows, fields) {
            console.log("query started ... nn");

            if (err) {
                console.log(err);
            }
            else {
                connection.query("Update friendbookaccount set "
                    + "name = '" + req.body.username + "' where userID = '" + username + "'");

                connection.query("Update friendbookaccount set "
                    + "gender = '" + req.body.gender + "' where userID = '" + username + "'");

                connection.query("Update friendbookaccount set "
                    + "bday = '" + req.body.bday+ "' where userID = '" + username + "'");


                connection.query("Update friendbookaccount set "
                    + "school = '" + req.body.school + "' where userID = '" + username + "'");

                msg = msg + "Profile Updated";
            }
            res.send(msg);
            return;

        });
});

router.post('/checkaccount', function (req, res) {


    console.log(req.body.searchname);
    var searchname = req.body.searchname;
    var check = "";
    var details = [];
    var connection = mysql.createConnection({
        host: 'mis-sql.uhcl.edu',
        user: 'saripellaa6306',
        password: '1517381',
        database: 'saripellaa6306'
    });

    connection.connect(function (err) {
        if (!err) {
            console.log("Friendsrequest Database is connected ... nn");

        } else {
            console.log("Error connecting database ... nn" + JSON.stringify(err));
        }
    });

    connection.query("Select * from friendbookaccount "
        + "where userID = '" + searchname + "'", function (err, rows, fields)
        {
            console.log(rows.length);
           
            console.log("query started ... nn");
            if (err)
            {
                console.log("err");
            }
            if (rows.length == 1)
            {
                var frienddetails =
                    {
                        Name: rows[0].name,
                        Gender: rows[0].gender,
                        School: rows[0].school,
                        Bday: rows[0].Bday,
                    }
            }
            else 
            {
                frienddetails = "No such account";
            }
           
            res.send(frienddetails);
            return;
        });
});

router.post('/friendrequest', function (req, res)
{
    var id = req.session.login;
    var searchname = req.body.searchname;
    var request = "";
    var notification = "";
    var type = 0;
    var connection = mysql.createConnection({
        host: 'mis-sql.uhcl.edu',
        user: 'saripellaa6306',
        password: '1517381',
        database: 'saripellaa6306'
    });

    connection.connect(function (err) {
        if (!err) {
            console.log("Friendsrequest Database is connected ... nn");

        } else {
            console.log("Error connecting database ... nn" + JSON.stringify(err));
        }
    });

    connection.query("Select * from friends "
        + "where (id1 = '" + searchname + "' and id2 = '" + id + "') or "
        + "(id1 = '" + id + "' and id2 = '" + searchname + "')", function (err, rows, fields) {

            console.log("query started ... nn");
            if (err) {
                console.log("err");
            }
            if (rows.length == 1) {
                request = request + "you both are already friends";
            }
            else
            {
                notification = notification + id + " has send you a FriendRequest" + "\n";
                var notid = 1;
                var nextnotid = 1;
                connection.query("Select * from notificationnumber", function (err, res, fields) {
                    if (err) {
                        console.log("err");
                    }
                    console.log("notification number :", res.length);
                    console.log(res[0].nextnotid);
                    if (res.length == 1) {
                        notid = res[0].nextnotid + 1;
                        nextnotid = res[0].nextnotid + 1;
                    }
                    else
                    {
                        connection.query("insert into notificationnumber values "
                            + "('" + nextnotid + "')");
                    }
                    console.log("after updation");
                    console.log(nextnotid);
                    console.log(notid);

                    connection.query("update notificationnumber set nextnotid = '" + nextnotid + "'");

                    connection.query("insert into notifications values "
                        + "('" + notid + "', '" + searchname + "', '" + notification + "', '" + type + "', '" + id + "')");
                });
             request = request + "Friend Request Sent!";
             }
            res.send(request);
            return;
        });
});

router.post('/createpost', function (req, res) {
    var id = req.session.login;
    var post = req.body.newpost;
    var postid = 1;
    var postmsg = "";
    var type = 2;
   
    var connection = mysql.createConnection({
        host: 'mis-sql.uhcl.edu',
        user: 'saripellaa6306',
        password: '1517381',
        database: 'saripellaa6306'
    });

    connection.connect(function (err) {
        if (!err) {
            console.log("createpost Database is connected ... nn");

        } else {
            console.log("Error connecting database ... nn" + JSON.stringify(err));
        }
    });

     connection.query("Select * from postnumber", function (err, rows, fields) {
      var nextid = 1;
        if (rows.length == 1)
        {
            postid = rows[0].postnum + 1;
            nextid = rows[0].postnum + 1;
        }
        else
        {
            connection.query("insert into postnumber values "
                + "('" + nextid + "')");
        }
         
         connection.query("update postnumber set postnum = '" + nextid + "'");
         connection.query("insert into post values "
             + "('" + postid + "', '" + id + "', '" + post + "')");
         postmsg = postmsg + "Post Created";
         res.send(postmsg);
    });

    var updateid = 1;
    connection.query("Select * from updatenumber", function (err, rows, fields) {

        var nextupid = 1;
        if (rows.length == 1)
        {
            updateid = rows[0].updatenum + 1;
            nextupid = rows[0].updatenum + 1;
        }
        else
        {
            connection.query("insert into updatenumber values "
                + "('" + nextupid + "')");
        }
        var comment = "";
        connection.query("update updatenumber set updatenum = '" + nextupid + "'");

        connection.query("insert into updates values "
            + "('" + updateid + "', '" + id + "', '" + type + "','" + postid + "','" + post + "','"
            + comment + "')");
    });
    console.log("post length:",post.length);

   
    
        var count = 1;
        var start = post.charAt(0);
        if (start == '#') {
            var end = 0;
            var first = true;
            for (var j = 0; j < post.length - 1; j = j + end) {
                var hash = "#";
                var hashpost = "";
                var d = post.charAt(j);
                if (d == '#') {
                    for (var i = j + 1, k = post.length; i < k; i++) {
                        var c = post.charAt(i);
                        if (c != '#') {
                            hash = hash + c;
                        }
                        if (c == '#')
                        {
                            connection.query("select * from hashtags where hash = '" + hash + "'", function (err, result, fields) {

                                if (result.length == 1)
                                {
                                    var counter = result[0].count + 1;
                                    var postids = pid + " , " + result[0].postid;
                                    var posts = post + "\n" + result[0].posts;
                                    posts = posts + "  ---- by" + id;
                                    connection.query("update hashtags set count= '" + counter
                                        + "' , postid = '" + postids + "' ,userid = '" + id + "' ,"
                                        + " posts = '" + posts + "' where hash = '" + hash + "'");
                                }
                                else {
                                    if (first == true) {
                                        hashpost = post + "  ---- by " + id;
                                    }
                                    else {
                                        hashpost = hashpost;
                                    }
                                    connection.query("insert into hashtags values "
                                        + "('" + hash + "', '" + count + "', '" + id + "','" + postid + "','" + hashpost + "')");
                                }
                            });
                            end = i - j;
                            break;
                        }
                    }

                    
                }
            }
        }
        return;
});

router.get('/logout', function (req, res) {
    //delete req.session.login;
    req.session.destroy();
    console.log("logging out");
    res.send("logout");
    return;
});

router.post("/login", function (req, res)
{
    var connection = mysql.createConnection({
        host: 'mis-sql.uhcl.edu',
        user: 'saripellaa6306',
        password: '1517381',
        database: 'saripellaa6306'
    });

    connection.connect(function (err) {
        if (!err) {
            console.log("Database is connected ... nn");

        } else {
            console.log("Error connecting database ... nn" + JSON.stringify(err));
        }
    });
    var username = req.body.username;
    var password = req.body.password;

    connection.query("Select * from friendbookaccount where userID = '" + username + "'", function (err, rows, fields) {

        console.log("query started ... nn");

        if (err)
        {
            console.log(err);
        }
        if (rows[0].password == password) {
            console.log("Found");
            req.session.login = username;
            res.send('pass');
            return;
        }
        else
        {
            res.send('fail');
            return;
        }
    });
});

module.exports = router;
