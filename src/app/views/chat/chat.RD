jobs
  hai_firebase (to send push en each actions)
    Group
      create
      exit
      upload photo
      settings
      removeUsers
      sendMessage
      sendFile
      EditMessage
      removeMessage
    Message
      sendMessage
      sendFile
      editMessage
      removeMessage
      remove Conversation

requests:
  Groups
    list groups [members con info ver]
    list messages [members con info ver]
    create group
    exit group
    upload photo
    change group name | add more members
    remove members
    send message push
    send file push
    edit message
    remove message
  OneToOne
    list conversations
    list messages
    *send message
    *send file
    remove conversation
    ack conversation
    edit message
    remove message


Requests
  groups
  description: This request its for list all the groups available in the channel
  list groups me/conversations?environment_id=5ee4097fb5d503a78b3675c4&page=0&type_chat=1 GET
    .get  auth_controller.isBearerAuthenticated, conversation.getConversationList
  params: environment_id=5ee4097fb5d503a78b3675c4&page=0&type_chat=1 GET
  status: ok
  response_eg:
  {
      "data": [
          {
              "messages": [],
              "events": [
                  "5eeaf1bb4a199df51d6e53a7",
                  "5eeaf1bb4a199df51d6e53a8",
                  "5eeaf1bb4a199df51d6e53a9",
                  "5eeaf1bb4a199df51d6e53aa"
              ],
              "files": [],
              "members_obj": [
                  null,
                  null,
                  null,
                  null
              ],
              "members": [
                  2,
                  3,
                  4
              ],
              "members_ack": [],
              "group_key": "",
              "name": "fffa",
              "photo": "",
              "type": 1,
              "environment": "5ee4097fb5d503a78b3675c4",
              "_id": "5eeaf1bb4a199df51d6e53a6",
              "created_at": "2020-06-18T04:46:51.184Z",
              "updated_at": "2020-06-18T04:46:51.380Z",
              "__v": 1
          }
      ],
      "status": 200,
      "count_pages": 0
  }
  list messages /api/me/conversations/messages?page=0&conversation_id=5eed8b5bbb37719134c8d202 GET
    .get  auth_controller.isBearerAuthenticated, message.getMessageList
  params: conversation_id=5ee4097fb5d503a78b3675c4&page=0 GET
  response_eg:
  {
      "data": [
          {
              "conversation": "5eed8b5bbb37719134c8d202",
              "file": null,
              "member_id": 1,
              "members": [
                  1,
                  4,
                  3,
                  2
              ],
              "members_ack": [],
              "type_message": 0,
              "status": 0,
              "status_h": 0,
              "_id": "5eed8b78bb37719134c8d20b",
              "text_message": "text messagse",
              "created_at": "2020-06-20T04:07:20.461Z",
              "updated_at": "2020-06-20T04:07:20.461Z",
              "__v": 0
          },
          {
              "_id": "5eed8b93bb37719134c8d20d",
              "updated_at": "2020-06-20 01:07:47",
              "text_message": "",
              "status_h": 0,
              "status": 0,
              "type_message": 1,
              "file": "https://con3rs4t10n.sfo2.digitaloceanspaces.com/1592627782297.png",
              "members_ack": [],
              "members": [
                  {
                      "first_name": "Matias",
                      "last_name": "Baglieri",
                      "id": 1,
                      "avatar": "https://everythink-q-a1.sfo2.digitaloceanspaces.com/1585260386318-test.wav",
                      "lang": "en"
                  },
                  {
                      "first_name": "Charlie",
                      "last_name": "Charlie",
                      "id": 4,
                      "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png",
                      "lang": "en"
                  },
                  {
                      "first_name": "Oliver",
                      "last_name": "Bell",
                      "id": 3,
                      "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_2.png",
                      "lang": "en"
                  },
                  {
                      "first_name": "Moises",
                      "last_name": "Apaza",
                      "id": 2,
                      "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png",
                      "lang": "en"
                  }
              ],
              "member_id": 1
          },
          {
              "_id": "5eed8c2e13736497d68dc4c7",
              "updated_at": "2020-06-20 01:10:22",
              "text_message": "",
              "status_h": 0,
              "status": 0,
              "type_message": 1,
              "file": "https://con3rs4t10n.sfo2.digitaloceanspaces.com/1592626220657.png",
              "members_ack": [],
              "members": [
                  {
                      "first_name": "Matias",
                      "last_name": "Baglieri",
                      "id": 1,
                      "avatar": "https://everythink-q-a1.sfo2.digitaloceanspaces.com/1585260386318-test.wav",
                      "lang": "en"
                  },
                  {
                      "first_name": "Charlie",
                      "last_name": "Charlie",
                      "id": 4,
                      "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png",
                      "lang": "en"
                  },
                  {
                      "first_name": "Oliver",
                      "last_name": "Bell",
                      "id": 3,
                      "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_2.png",
                      "lang": "en"
                  },
                  {
                      "first_name": "Moises",
                      "last_name": "Apaza",
                      "id": 2,
                      "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png",
                      "lang": "en"
                  }
              ],
              "member_id": 1
          },
          {
              "_id": "5eed8c8e9cef15985e4e6ab7",
              "updated_at": "2020-06-20 01:11:58",
              "text_message": "",
              "status_h": 0,
              "status": 0,
              "type_message": 1,
              "file": "https://con3rs4t10n.sfo2.digitaloceanspaces.com/1592627782297.png",
              "members_ack": [],
              "members": [
                  {
                      "first_name": "Matias",
                      "last_name": "Baglieri",
                      "id": 1,
                      "avatar": "https://everythink-q-a1.sfo2.digitaloceanspaces.com/1585260386318-test.wav",
                      "lang": "en"
                  },
                  {
                      "first_name": "Charlie",
                      "last_name": "Charlie",
                      "id": 4,
                      "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png",
                      "lang": "en"
                  },
                  {
                      "first_name": "Oliver",
                      "last_name": "Bell",
                      "id": 3,
                      "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_2.png",
                      "lang": "en"
                  },
                  {
                      "first_name": "Moises",
                      "last_name": "Apaza",
                      "id": 2,
                      "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png",
                      "lang": "en"
                  }
              ],
              "member_id": 1
          },
          {
              "_id": "5eed8fe39cef15985e4e6ab9",
              "updated_at": "2020-06-20 01:26:11",
              "text_message": "",
              "status_h": 0,
              "status": 0,
              "type_message": 1,
              "file": "https://con3rs4t10n.sfo2.digitaloceanspaces.com/1592627782297.png",
              "members_ack": [],
              "members": [
                  {
                      "first_name": "Matias",
                      "last_name": "Baglieri",
                      "id": 1,
                      "avatar": "https://everythink-q-a1.sfo2.digitaloceanspaces.com/1585260386318-test.wav",
                      "lang": "en"
                  },
                  {
                      "first_name": "Charlie",
                      "last_name": "Charlie",
                      "id": 4,
                      "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png",
                      "lang": "en"
                  },
                  {
                      "first_name": "Oliver",
                      "last_name": "Bell",
                      "id": 3,
                      "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_2.png",
                      "lang": "en"
                  },
                  {
                      "first_name": "Moises",
                      "last_name": "Apaza",
                      "id": 2,
                      "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png",
                      "lang": "en"
                  }
              ],
              "member_id": 1
          },
          {
              "_id": "5eed8ff69cef15985e4e6abb",
              "updated_at": "2020-06-20 01:26:30",
              "text_message": "",
              "status_h": 0,
              "status": 0,
              "type_message": 1,
              "file": "https://con3rs4t10n.sfo2.digitaloceanspaces.com/1592627782297.png",
              "members_ack": [],
              "members": [
                  {
                      "first_name": "Matias",
                      "last_name": "Baglieri",
                      "id": 1,
                      "avatar": "https://everythink-q-a1.sfo2.digitaloceanspaces.com/1585260386318-test.wav",
                      "lang": "en"
                  },
                  {
                      "first_name": "Charlie",
                      "last_name": "Charlie",
                      "id": 4,
                      "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png",
                      "lang": "en"
                  },
                  {
                      "first_name": "Oliver",
                      "last_name": "Bell",
                      "id": 3,
                      "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_2.png",
                      "lang": "en"
                  },
                  {
                      "first_name": "Moises",
                      "last_name": "Apaza",
                      "id": 2,
                      "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png",
                      "lang": "en"
                  }
              ],
              "member_id": 1
          },
          {
              "conversation": "5eed8b5bbb37719134c8d202",
              "file": null,
              "member_id": 1,
              "members": [
                  1,
                  4,
                  3,
                  2
              ],
              "members_ack": [],
              "type_message": 1,
              "status": 0,
              "status_h": 0,
              "_id": "5eed9148c37e999b289bf93a",
              "text_message": "",
              "created_at": "2020-06-20T04:32:08.729Z",
              "updated_at": "2020-06-20T04:32:08.729Z",
              "__v": 0
          },
          {
              "conversation": "5eed8b5bbb37719134c8d202",
              "file": null,
              "member_id": 1,
              "members": [
                  1,
                  4,
                  3,
                  2
              ],
              "members_ack": [],
              "type_message": 1,
              "status": 0,
              "status_h": 0,
              "_id": "5eed91845c478b9ba60f5831",
              "text_message": "",
              "created_at": "2020-06-20T04:33:08.636Z",
              "updated_at": "2020-06-20T04:33:08.636Z",
              "__v": 0
          },
          {
              "_id": "5eed92488aab229ce9962c85",
              "updated_at": "2020-06-20 01:36:24",
              "text_message": "",
              "status_h": 0,
              "status": 0,
              "type_message": 1,
              "file": "https://con3rs4t10n.sfo2.digitaloceanspaces.com/1592627782297.png",
              "members_ack": [],
              "members": [
                  {
                      "first_name": "Matias",
                      "last_name": "Baglieri",
                      "id": 1,
                      "avatar": "https://everythink-q-a1.sfo2.digitaloceanspaces.com/1585260386318-test.wav",
                      "lang": "en"
                  },
                  {
                      "first_name": "Charlie",
                      "last_name": "Charlie",
                      "id": 4,
                      "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png",
                      "lang": "en"
                  },
                  {
                      "first_name": "Oliver",
                      "last_name": "Bell",
                      "id": 3,
                      "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_2.png",
                      "lang": "en"
                  },
                  {
                      "first_name": "Moises",
                      "last_name": "Apaza",
                      "id": 2,
                      "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png",
                      "lang": "en"
                  }
              ],
              "member_id": 1
          },
          {
              "_id": "5eed92a2c91b189daa793b0f",
              "updated_at": "2020-06-20 01:37:54",
              "text_message": "",
              "status_h": 0,
              "status": 0,
              "type_message": 1,
              "file": "https://con3rs4t10n.sfo2.digitaloceanspaces.com/1592627782297.png",
              "members_ack": [],
              "members": [
                  {
                      "first_name": "Matias",
                      "last_name": "Baglieri",
                      "id": 1,
                      "avatar": "https://everythink-q-a1.sfo2.digitaloceanspaces.com/1585260386318-test.wav",
                      "lang": "en"
                  },
                  {
                      "first_name": "Charlie",
                      "last_name": "Charlie",
                      "id": 4,
                      "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png",
                      "lang": "en"
                  },
                  {
                      "first_name": "Oliver",
                      "last_name": "Bell",
                      "id": 3,
                      "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_2.png",
                      "lang": "en"
                  },
                  {
                      "first_name": "Moises",
                      "last_name": "Apaza",
                      "id": 2,
                      "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png",
                      "lang": "en"
                  }
              ],
              "member_id": 1
          }
      ],
      "status": 200,
      "count_pages": 2
  }



  create -> push /me/conversations/group
    .post  auth_controller.isBearerAuthenticated, conversation.createGroup
  params {"environment_id":"588aa81ecd50eab0049b93ef", "name":"My test message","members":[4,3,2]}
  response_eg:
  {
      "_id": "5eed605305a49069e6c3f86e",
      "updated_at": "2020-06-19 10:03:15",
      "type": 1,
      "photo": "",
      "name": "My test mess33ag22222e",
      "last_message": null,
      "members": [
          {
              "first_name": "Charlie",
              "last_name": "Charlie",
              "id": 4,
              "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png",
              "lang": "en"
          },
          {
              "first_name": "Oliver",
              "last_name": "Bell",
              "id": 3,
              "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_2.png",
              "lang": "en"
          },
          {
              "first_name": "Moises",
              "last_name": "Apaza",
              "id": 2,
              "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png",
              "lang": "en"
          }
      ]
  }

  push:
  message =
    registration_ids: [req.user.dataValues.firebase_uid]
    priority        : 'high',
    collapse_key: 'chat/new_group'
    data:
      action : 'chat/new_group'
      conversation: conversation_
      type_message: 1
    notification:
      title: conversation_.name
      body : "new.group"


  exit -> push  /me/conversations/group
    .delete  auth_controller.isBearerAuthenticated, conversation.exitGroup
  params: _id
  response_eg:
  {
      "status": 200
  }

  upload photo /me/conversations/group/settings
    .post auth_controller.isBearerAuthenticated, conversationMiddleware.array('file',10), message.uploadPhotoGroup
  params: conversation_id, file
  response_eg:
  {
      "_id": "5eed5fcf4fc5a7695f26f93f",
      "updated_at": "2020-06-19 10:15:16",
      "type": 1,
      "photo": "https://con3rs4t10n.sfo2.digitaloceanspaces.com/1592615714616.png",
      "name": "My test messag2222e",
      "last_message": null,
      "members": [
          {
              "first_name": "Charlie",
              "last_name": "Charlie",
              "id": 4,
              "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png",
              "lang": "en"
          },
          {
              "first_name": "Oliver",
              "last_name": "Bell",
              "id": 3,
              "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_2.png",
              "lang": "en"
          },
          {
              "first_name": "Moises",
              "last_name": "Apaza",
              "id": 2,
              "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png",
              "lang": "en"
          }
      ]
  }

  change group name | add more members /me/conversations/group/settings
  .put  auth_controller.isBearerAuthenticated, conversation.settings
  params: conversation_id, name group_key | conversation_id, members
  response_eg:
  {
    "_id": "5ef0f30cd1ea3775bb6830a1",
    "updated_at": "2020-06-22 03:32:09",
    "type": 1,
    "photo": "https://con3rs4t10n.sfo2.digitaloceanspaces.com/1592850352444.png",
    "name": "test",
    "last_message": "",
    "members": [
        {
            "first_name": "Charlie",
            "last_name": "Charlie",
            "id": 4,
            "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png",
            "lang": "en"
        },
        {
            "first_name": "Oliver",
            "last_name": "Bell",
            "id": 3,
            "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_2.png",
            "lang": "en"
        },
        {
            "first_name": "Moises",
            "last_name": "Apaza",
            "id": 2,
            "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png",
            "lang": "en"
        }
    ]
}

  remove members /me/conversations/group/settings
  .delete  auth_controller.isBearerAuthenticated, conversation.removeMembers
  response_eg:
  {
      "status": 200
  }


  send message push /me/conversations/group
    .put  auth_controller.isBearerAuthenticated, message.createGroupMessage
  params {
    "conversation_id": "5eeaf14d4a199df51d6e53a1",
    "message":{
      "environment_id": "58b0e9d827fefef0776070d0",
      "type_message": 0,
      "text_message": "text message",
    }
  }
  response_eg:
  {
    "_id": "5eefd897f012bf2d305c7279",
    "updated_at": "2020-06-22 01:19:41",
    "type": 1,
    "photo": "",
    "name": "My test mess33a2222g22222e",
    "last_message": {
        "file": "",
        "members": [
            {
                "first_name": "Matias",
                "last_name": "Baglieri",
                "id": 1,
                "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png",
                "lang": "en"
            },
            {
                "first_name": "Charlie",
                "last_name": "Charlie",
                "id": 4,
                "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png",
                "lang": "en"
            },
            {
                "first_name": "Oliver",
                "last_name": "Bell",
                "id": 3,
                "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_2.png",
                "lang": "en"
            },
            {
                "first_name": "Moises",
                "last_name": "Apaza",
                "id": 2,
                "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png",
                "lang": "en"
            }
        ],
        "type_message": 0,
        "text_message": "text tetete",
        "updated_at": "2020-06-22 13:19:41"
    },
    "members": [
        {
            "first_name": "Charlie",
            "last_name": "Charlie",
            "id": 4,
            "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png",
            "lang": "en"
        },
        {
            "first_name": "Oliver",
            "last_name": "Bell",
            "id": 3,
            "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_2.png",
            "lang": "en"
        },
        {
            "first_name": "Moises",
            "last_name": "Apaza",
            "id": 2,
            "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png",
            "lang": "en"
        }
    ]
}

  send file push   /me/conversations/group/file
    .post auth_controller.isBearerAuthenticated, conversationMiddleware.array('file',10), message.uploadFileGroup
  params: conversation_id, file
  response_eg:
    {
        "_id": "5ef1004c64787c815330fd3c",
        "updated_at": "2020-06-22 04:02:41",
        "type": 1,
        "photo": "",
        "name": "My2f22f2e",
        "last_message": {
            "file": "https://con3rs4t10n.sfo2.digitaloceanspaces.com/1592853846558.png",
            "members": [
                {
                    "first_name": "Matias",
                    "last_name": "Baglieri",
                    "id": 1,
                    "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png",
                    "lang": "en"
                },
                {
                    "first_name": "Oliver",
                    "last_name": "Bell",
                    "id": 3,
                    "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_2.png",
                    "lang": "en"
                },
                {
                    "first_name": "Moises",
                    "last_name": "Apaza",
                    "id": 2,
                    "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png",
                    "lang": "en"
                }
            ],
            "type_message": 1,
            "text_message": "",
            "updated_at": "2020-06-22 16:24:08"
        },
        "members": [
            {
                "first_name": "Oliver",
                "last_name": "Bell",
                "id": 3,
                "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_2.png",
                "lang": "en"
            },
            {
                "first_name": "Moises",
                "last_name": "Apaza",
                "id": 2,
                "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png",
                "lang": "en"
            }
        ]
    }
  edit message /me/conversations/message
  .put     auth_controller.isBearerAuthenticated, message.editMessage
  params: conversation_id chat_message_id bytes
  response_eg:
  {
      "status": 200
  }

  remove message /me/conversations/message
  .delete  auth_controller.isBearerAuthenticated, message.deleteMessage
  params: conversation_id
  response_eg:
  {
      "status": 200
  }


  one to one

  description: This request its for list all the groups available in the channel
  list groups me/conversations?environment_id=5ee4097fb5d503a78b3675c4&page=0&type_chat=0 GET
    .get  auth_controller.isBearerAuthenticated, conversation.getConversationList
  params: environment_id=5ee4097fb5d503a78b3675c4&page=0&type_chat=1 GET
  status: ok
  response_eg:
  {
    "data": [
        {
            "_id": "5ef159b857a708542b94b3ed",
            "updated_at": "2020-06-22 10:24:08",
            "type": 0,
            "photo": "",
            "name": "Charlie Charlie",
            "last_message": {
                "file": "",
                "members": [
                    {
                        "first_name": "Matias",
                        "last_name": "Baglieri",
                        "id": 1,
                        "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png",
                        "lang": "en"
                    },
                    {
                        "first_name": "Charlie",
                        "last_name": "Charlie",
                        "id": 4,
                        "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png",
                        "lang": "en"
                    }
                ],
                "type_message": 0,
                "text_message": "text messagetetet",
                "updated_at": "2020-06-22 22:24:08"
            },
            "members": [
                {
                    "first_name": "Charlie",
                    "last_name": "Charlie",
                    "id": 4,
                    "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png",
                    "lang": "en"
                }
            ]
        }
    ],
    "status": 200,
    "count_pages": 0
}

  list messages /api/me/conversations/messages?page=0&conversation_id=5eed8b5bbb37719134c8d202 GET
    .get  auth_controller.isBearerAuthenticated, message.getMessageList
  params: conversation_id=5ee4097fb5d503a78b3675c4&page=0 GET
  response_eg:
  {
    "data": [
        {
            "_id": "5ef159b857a708542b94b3f0",
            "updated_at": "2020-06-22 22:24:08",
            "text_message": "text messagetetet",
            "status_h": 0,
            "status": 0,
            "type_message": 0,
            "file": null,
            "members_ack": [],
            "members": [
                {
                    "first_name": "Matias",
                    "last_name": "Baglieri",
                    "id": 1,
                    "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png",
                    "lang": "en"
                },
                {
                    "first_name": "Charlie",
                    "last_name": "Charlie",
                    "id": 4,
                    "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png",
                    "lang": "en"
                }
            ],
            "member_id": 1
        }
    ],
    "status": 200,
    "count_pages": 0
}

  *send message txt /me/conversations/message
    .post    auth_controller.isBearerAuthenticated, message.createMessage
  params: {
    "action": "send_message",
    "message":{
      "environment_id": "5eed88fd4dac898e99e6d58c",
      "type_message": 0,
      "text_message": "text messagetetet",
      "member_id":4
    }
  }
  response_eg:
  {
      "_id": "5ef159b857a708542b94b3ed",
      "updated_at": "2020-06-22 10:31:50",
      "type": 0,
      "photo": "",
      "name": "Charlie Charlie",
      "last_message": {
          "file": "",
          "members": [
              {
                  "first_name": "Matias",
                  "last_name": "Baglieri",
                  "id": 1,
                  "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png",
                  "lang": "en"
              },
              {
                  "first_name": "Charlie",
                  "last_name": "Charlie",
                  "id": 4,
                  "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png",
                  "lang": "en"
              }
          ],
          "type_message": 0,
          "text_message": "text messagetetet",
          "updated_at": "2020-06-22 22:31:50"
      },
      "members": [
          {
              "first_name": "Charlie",
              "last_name": "Charlie",
              "id": 4,
              "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png",
              "lang": "en"
          }
      ]
  }

  *send file /me/conversations/message/file
  .post auth_controller.isBearerAuthenticated, conversationMiddleware.array('file',10), message.uploadFile
  params: conversation_id
  response_eg:
  {
    "_id": "5ef159b857a708542b94b3ed",
    "updated_at": "2020-06-22 10:34:04",
    "type": 0,
    "photo": "",
    "name": "Charlie Charlie",
    "last_message": {
        "file": "https://con3rs4t10n.sfo2.digitaloceanspaces.com/1592876155358.png",
        "members": [
            {
                "first_name": "Matias",
                "last_name": "Baglieri",
                "id": 1,
                "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png",
                "lang": "en"
            },
            {
                "first_name": "Charlie",
                "last_name": "Charlie",
                "id": 4,
                "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png",
                "lang": "en"
            }
        ],
        "type_message": 1,
        "text_message": "",
        "updated_at": "2020-06-22 22:35:57"
    },
    "members": [
        {
            "first_name": "Charlie",
            "last_name": "Charlie",
            "id": 4,
            "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png",
            "lang": "en"
        }
    ]
}


  remove conversation /me/conversations
  .delete  auth_controller.isBearerAuthenticated, conversation.removeConversation
  {
      "status": 200
  }
  ack conversation /me/conversations/message/ack
    .post  auth_controller.isBearerAuthenticated, message.ackMessages
  params:conversation_id
  response_eg:
  {
      "_id": "5ef159b857a708542b94b3ed",
      "updated_at": "2020-06-22 10:34:04",
      "type": 0,
      "photo": "",
      "name": "Charlie Charlie",
      "last_message": {
          "file": "https://con3rs4t10n.sfo2.digitaloceanspaces.com/1592876155358.png",
          "members": [
              {
                  "first_name": "Matias",
                  "last_name": "Baglieri",
                  "id": 1,
                  "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png",
                  "lang": "en"
              },
              {
                  "first_name": "Charlie",
                  "last_name": "Charlie",
                  "id": 4,
                  "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png",
                  "lang": "en"
              }
          ],
          "type_message": 1,
          "text_message": "",
          "updated_at": "2020-06-22 22:44:14"
      },
      "members": [
          {
              "first_name": "Charlie",
              "last_name": "Charlie",
              "id": 4,
              "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png",
              "lang": "en"
          }
      ]
  }

  edit message /me/conversations/message
  .put     auth_controller.isBearerAuthenticated, message.editMessage
  params: conversation_id chat_message_id bytes
  response_eg:
  {
      "status": 200
  }

  remove message /me/conversations/message
  .delete  auth_controller.isBearerAuthenticated, message.deleteMessage
  params: conversation_id
  response_eg:
  {
      "status": 200
  }

jobs
  hai_firebase (to send push en each actions)
    Group
      create
      {
        registration_ids: [ '111' ],
        priority: 'high',
        collapse_key: 'group/new',
        data: {
          action: 'group/new',
          conversation: {
            _id: 5ef0eb3f304de36f34e02872,
            updated_at: '2020-06-22 02:32:47',
            type: 1,
            photo: '',
            name: 'My test mess33a2222g222222e',
            last_message: '',
            members: [Array]
          },
          type_message: 1
        },
        notification: { title: 'My test mess33a2222g222222e', body: 'new.group' }
      }
      exit ( not required, for user, required for other members)
      {
        priority: 'high',
        collapse_key: 'group/exitGroup',
        data: {
          action: 'group/exitGroup',
          conversation: {
            _id: 5ef0f308d1ea3775bb683095,
            updated_at: '2020-06-22 03:07:00',
            type: 1,
            photo: '',
            name: 'My2222e',
            last_message: '',
            members: [Array]
          },
          user: {
            first_name: 'Matias',
            last_name: 'Baglieri',
            id: 1,
            avatar: 'https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png',
            lang: 'en'
          }
        },
        notification: { title: 'remove.users', body: 'remove.users.body' }
      }
      upload photo
      {
        priority: 'high',
        collapse_key: 'group/uploadPhotoGroup',
        data: {
          action: 'group/uploadPhotoGroup',
          conversation: {
            _id: 5ef0f30cd1ea3775bb6830a1,
            updated_at: '2020-06-22 03:25:54',
            type: 1,
            photo: 'https://con3rs4t10n.sfo2.digitaloceanspaces.com/1592850352444.png',
            name: 'My2f222e',
            last_message: '',
            members: [Array]
          },
          photo: 'https://con3rs4t10n.sfo2.digitaloceanspaces.com/1592850352444.png'
        },
        notification: { title: 'upload.users.photo', body: 'upload.users.photo.body' }
      }
      settings
      {
        priority: 'high',
        collapse_key: 'group/settings',
        data: {
          action: 'group/settings',
          conversation: {
            _id: 5ef0f30cd1ea3775bb6830a1,
            updated_at: '2020-06-22 03:40:00',
            type: 1,
            photo: 'https://con3rs4t10n.sfo2.digitaloceanspaces.com/1592850352444.png',
            name: '111212',
            last_message: '',
            members: [Array]
          },
          name: '111212',
          group_key: 'testq1212'
        },
        notification: {
          title: 'settings.users.change_name',
          body: 'settings.users.change_name.body'
        }
      }
      removeUsers
        removed group
        {
          priority: 'high',
          collapse_key: 'group/removed',
          data: {
            action: 'group/removed',
            conversation: {
              _id: 5ef0ff243a732a7fc6f7210c,
              updated_at: '2020-06-22 04:00:17',
              type: 1,
              photo: '',
              name: 'Moises Apaza',
              last_message: '',
              members: [Array]
            },
            user: [ [Object] ]
          },
          notification: { title: 'group.removed', body: 'group.removed.body' }
        }
        removed group

        kicked group
        {
          priority: 'high',
          collapse_key: 'group/kicked',
          data: {
            action: 'group/kicked',
            conversation: {
              _id: 5ef0ff243a732a7fc6f7210c,
              updated_at: '2020-06-22 04:00:17',
              type: 1,
              photo: '',
              name: 'Moises Apaza',
              last_message: '',
              members: [Array]
            },
            user: [ [Object] ]
          },
          notification: { title: 'group.kicked', body: 'group.kicked.body' }
        }
        kicked group
      sendMessage
        {
          priority: 'high',
          collapse_key: 'group/message',
          data: {
            action: 'group/message',
            conversation: {
              _id: 5eefd897f012bf2d305c7279,
              updated_at: '2020-06-22 01:54:18',
              type: 1,
              photo: '',
              name: 'My test mess33a2222g22222e',
              last_message: [Object],
              members: [Array]
            },
            type_message: 0,
            file: ''
          },
          notification: { title: 'My test mess33a2222g22222e', body: 'text tetete11' }
        }
      sendFile
      {"priority":"high","collapse_key":"group/file","data":{"action":"group/file","conversation":{"_id":"5ef1004c64787c815330fd3c","updated_at":"2020-06-22 04:02:41","type":1,"photo":"","name":"My2f22f2e","last_message":{"file":"https://con3rs4t10n.sfo2.digitaloceanspaces.com/1592853846558.png","members":[{"first_name":"Matias","last_name":"Baglieri","id":1,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png","lang":"en"},{"first_name":"Oliver","last_name":"Bell","id":3,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_2.png","lang":"en"},{"first_name":"Moises","last_name":"Apaza","id":2,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png","lang":"en"}],"type_message":1,"text_message":"","updated_at":"2020-06-22 16:24:08"},"members":[{"first_name":"Oliver","last_name":"Bell","id":3,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_2.png","lang":"en"},{"first_name":"Moises","last_name":"Apaza","id":2,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png","lang":"en"}]},"type_message":1,"file":"https://con3rs4t10n.sfo2.digitaloceanspaces.com/1592853846558.png"},"notification":{"title":"My2f22f2e","body":"file.url"}}

      EditMessage
      {"priority":"high","collapse_key":"chat/edit_message","data":{"action":"chat/edit_message","conversation":{"file":"","members":[{"first_name":"Matias","last_name":"Baglieri","id":1,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png","lang":"en"},{"first_name":"Charlie","last_name":"Charlie","id":4,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png","lang":"en"},{"first_name":"Oliver","last_name":"Bell","id":3,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_2.png","lang":"en"},{"first_name":"Moises","last_name":"Apaza","id":2,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png","lang":"en"},{"first_name":"Matias","last_name":"Baglieri","id":1,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png","lang":"en"}],"type_message":0,"text_message":"Hi,11111","updated_at":"2020-06-22T19:51:59.526Z"},"type_message":"Hi,11111"},"notification":{"title":"chat.edit.info","body":"Hi,11111"}}
      removeMessage
      {"priority":"high","collapse_key":"chat/deleted_message","data":{"action":"chat/deleted_message","conversation":{"file":"","members":[{"first_name":"Matias","last_name":"Baglieri","id":1,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png","lang":"en"},{"first_name":"Charlie","last_name":"Charlie","id":4,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png","lang":"en"},{"first_name":"Oliver","last_name":"Bell","id":3,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_2.png","lang":"en"},{"first_name":"Moises","last_name":"Apaza","id":2,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png","lang":"en"},{"first_name":"Matias","last_name":"Baglieri","id":1,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png","lang":"en"}],"type_message":0,"text_message":"Hi,11111","updated_at":"2020-06-22T20:15:29.582Z"}},"notification":{"title":"chat.deleted.info","body":"chat.deleted.info"}}
    Message
      sendMessage
      {"priority":"high","collapse_key":"chat/message","data":{"action":"chat/message","conversation":{"_id":"5ef159b857a708542b94b3ed","updated_at":"2020-06-22 11:10:04","type":0,"photo":"","name":"Charlie Charlie","last_message":{"file":"","members":[{"first_name":"Matias","last_name":"Baglieri","id":1,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png","lang":"en"},{"first_name":"Charlie","last_name":"Charlie","id":4,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png","lang":"en"}],"type_message":0,"text_message":"text messagetetet","updated_at":"2020-06-22 23:10:04"},"members":[{"first_name":"Charlie","last_name":"Charlie","id":4,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png","lang":"en"}]},"type_message":"text messagetetet"},"notification":{"title":"Charlie Charlie","body":"text messagetetet"}}
      sendFile
      {"registration_ids":["not_implemented"],"priority":"high","collapse_key":"chat/message","data":{"action":"chat/message","conversation":{"messages":["5ef159b857a708542b94b3f0","5ef15b863841a055b20bd190","5ef15c0c3841a055b20bd192","5ef1647c19b33858d45d2502"],"events":[],"files":[],"members_obj":[],"members":[1,4],"members_ack":[1],"group_key":"","name":"","photo":"","type":0,"environment":"5eed88fd4dac898e99e6d58c","_id":"5ef159b857a708542b94b3ed","created_at":"2020-06-23T01:24:08.612Z","updated_at":"2020-06-23T02:10:04.451Z","__v":4},"type_message":1,"file":"https://con3rs4t10n.sfo2.digitaloceanspaces.com/1592878431641.png"},"notification":{"title":"Matias Baglieri","body":""}}
      EditMessage
      {"priority":"high","collapse_key":"chat/edit_message","data":{"action":"chat/edit_message","conversation":{"file":"","members":[{"first_name":"Matias","last_name":"Baglieri","id":1,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png","lang":"en"},{"first_name":"Charlie","last_name":"Charlie","id":4,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png","lang":"en"},{"first_name":"Oliver","last_name":"Bell","id":3,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_2.png","lang":"en"},{"first_name":"Moises","last_name":"Apaza","id":2,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png","lang":"en"},{"first_name":"Matias","last_name":"Baglieri","id":1,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png","lang":"en"}],"type_message":0,"text_message":"Hi,11111","updated_at":"2020-06-22T19:51:59.526Z"},"type_message":"Hi,11111"},"notification":{"title":"chat.edit.info","body":"Hi,11111"}}
      removeMessage
      {"priority":"high","collapse_key":"chat/deleted_message","data":{"action":"chat/deleted_message","conversation":{"file":"","members":[{"first_name":"Matias","last_name":"Baglieri","id":1,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png","lang":"en"},{"first_name":"Charlie","last_name":"Charlie","id":4,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_3.png","lang":"en"},{"first_name":"Oliver","last_name":"Bell","id":3,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_2.png","lang":"en"},{"first_name":"Moises","last_name":"Apaza","id":2,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png","lang":"en"},{"first_name":"Matias","last_name":"Baglieri","id":1,"avatar":"https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_m_1.png","lang":"en"}],"type_message":0,"text_message":"Hi,11111","updated_at":"2020-06-22T20:15:29.582Z"}},"notification":{"title":"chat.deleted.info","body":"chat.deleted.info"}}
      remove Conversation








todo: features
  archive
  mute
  orchestate conversation
  payment
  videoconference
  voice call
