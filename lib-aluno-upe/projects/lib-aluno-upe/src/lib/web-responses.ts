export const WebResponses = {

  //#region [ RESPOSTAS GENÉRICAS/CRÍTICAS ]

  API_STATUS: {
    UNKNOWN_RESPONSE: "UPE_ERROR_UNKNOWN_RESPONSE",
    ERROR_ACCESSDENIED: "UPE_RESPONSE_API_ERROR_ACCESSDENIED"
  },

  //#endregion

  //#region [ RESPOSTAS DE API DE AUTENTICAÇÃO ]

  API_LOGOUT_STATUS: {
    LOGOUT_SUCCESSFULLY: "UPE_RESPONSE_API_LOGOUT_SUCCESSFULLY",
    LOGOUT_INVALIDTOKEN: "UPE_RESPONSE_API_LOGOUT_INVALIDTOKEN"
  },

  API_LOGIN_STATUS: {
    LOGIN_INVALIDCPFOREMAIL: "UPE_RESPONSE_API_LOGIN_INVALIDCPFOREMAIL",
    LOGIN_INVALIDPASSWORD: "UPE_RESPONSE_API_LOGIN_INVALIDPASSWORD",
    LOGIN_WRONGCREDENTIALS: "UPE_RESPONSE_API_LOGIN_WRONGCREDENTIALS",
    LOGIN_DEACTIVATEDACCOUNT: "UPE_RESPONSE_API_LOGIN_DEACTIVATEDACCOUNT",
    LOGIN_PENDINGACCEPTANCE: "UPE_RESPONSE_API_LOGIN_PENDINGACCEPTANCE",
    LOGIN_FAILED: "UPE_RESPONSE_API_LOGIN_FAILED",
    LOGIN_SUCCESSFULLY: "UPE_RESPONSE_API_LOGIN_SUCCESSFULLY",
    LOGIN_MISSINGPARAMETERS: "UPE_RESPONSE_API_LOGIN_MISSINGPARAMETERS",
    LOGIN_OUTDATED: "UPE_RESPONSE_API_LOGIN_OUTDATED",
    LOGIN_SHOULDRESETPASSWORD: "UPE_RESPONSE_API_LOGIN_SHOULDRESETPASSWORD"
  },

  API_REGISTER_STATUS: {
    REGISTER_INVALIDUSERTYPE: "UPE_RESPONSE_API_REGISTER_INVALIDUSERTYPE",
    REGISTER_INVALIDUSERNAME: "UPE_RESPONSE_API_REGISTER_INVALIDUSERNAME",
    REGISTER_INVALIDEMAIL: "UPE_RESPONSE_API_REGISTER_INVALIDEMAIL",
    REGISTER_INVALIDPASSWORD: "UPE_RESPONSE_API_REGISTER_INVALIDPASSWORD",
    REGISTER_INVALIDCPF: "UPE_RESPONSE_API_REGISTER_INVALIDCPF",
    REGISTER_INVALIDCELLPHONE: "UPE_RESPONSE_API_REGISTER_INVALIDCELLPHONE",
    REGISTER_INVALIDCAMPUSID: "UPE_RESPONSE_API_REGISTER_INVALIDCAMPUSID",
    REGISTER_INVALIDCOURSEID: "UPE_RESPONSE_API_REGISTER_INVALIDCOURSEID",
    REGISTER_USERALREADYEXISTS: "UPE_RESPONSE_API_REGISTER_USERALREADYEXISTS",
    REGISTER_FAILED: "UPE_RESPONSE_API_REGISTER_FAILED",
    REGISTER_SUCCESSFULLY: "UPE_RESPONSE_API_REGISTER_SUCCESSFULLY",
    REGISTER_CANNOTCREATEACTIVATION: "UPE_RESPONSE_API_REGISTER_CANNOTCREATEACTIVATION",
    REGISTER_MISSINGPARAMETERS: "UPE_RESPONSE_API_REGISTER_MISSINGPARAMETERS",
    REGISTER_INVALIDRISKFLAG: "UPE_RESPONSE_API_REGISTER_INVALIDRISKFLAG"
  },

  API_FORGOTPASSWORD_STATUS: {
    FORGOTPASSWORD_INVALIDCPFOREMAIL: "UPE_RESPONSE_API_FORGOTPASSWORD_INVALIDCPFOREMAIL",
    FORGOTPASSWORD_FAILED: "UPE_RESPONSE_API_FORGOTPASSWORD_FAILED",
    FORGOTPASSWORD_PENDINGACCEPTANCE: "UPE_RESPONSE_API_FORGOTPASSWORD_PENDINGACCEPTANCE",
    FORGOTPASSWORD_DEACTIVATEDACCOUNT: "UPE_RESPONSE_API_FORGOTPASSWORD_DEACTIVATEDACCOUNT",
    FORGOTPASSWORD_SUCCESSFULLY: "UPE_RESPONSE_API_FORGOTPASSWORD_SUCCESSFULLY",
    FORGOTPASSWORD_MISSINGPARAMETERS: "UPE_RESPONSE_API_FORGOTPASSWORD_MISSINGPARAMETERS"
  },

  API_WELCOME_STATUS: {
    WELCOME_MISSINGPARAMETERS: "UPE_RESPONSE_API_WELCOME_MISSINGPARAMETERS",
    WELCOME_SUCCESSFULLY: "UPE_RESPONSE_API_WELCOME_SUCCESSFULLY",
    WELCOME_INVALIDCPFOREMAIL: "UPE_RESPONSE_API_WELCOME_INVALIDCPFOREMAIL",
    WELCOME_ALREADYREQUESTED: "UPE_RESPONSE_API_WELCOME_ALREADYREQUESTED",
    WELCOME_FAILED: "UPE_RESPONSE_API_WELCOME_FAILED"
  },

  API_RESETPASSWORD_STATUS: {
    RESETPASSWORD_INVALIDTOKEN: "UPE_RESPONSE_API_RESETPASSWORD_INVALIDTOKEN",
    RESETPASSWORD_MISSINGPARAMETERS: "UPE_RESPONSE_API_RESETPASSWORD_MISSINGPARAMETERS",
    RESETPASSWORD_INVALIDPASSWORD: "UPE_RESPONSE_API_RESETPASSWORD_INVALIDPASSWORD",
    RESETPASSWORD_SUCCESSFULLY: "UPE_RESPONSE_API_RESETPASSWORD_SUCCESSFULLY",
    RESETPASSWORD_FIRSTACCESSNOTREQUESTED: "UPE_RESPONSE_API_RESETPASSWORD_FIRSTACCESSNOTREQUESTED",
    RESETPASSWORD_ALREADYRESETED: "UPE_RESPONSE_API_RESETPASSWORD_ALREADYRESETED",
    RESETPASSWORD_FAILED: "UPE_RESPONSE_API_RESETPASSWORD_FAILED"
  },

  //#endregion

  //#region [ RESPOSTAS DE API DE INFORMAÇÕES ]

  API_LISTCAMPUS_STATUS: {
    LISTCAMPUS_SUCCESSFULLY: "UPE_RESPONSE_API_LISTCAMPUS_SUCCESSFULLY",
    LISTCAMPUS_ERROR: "UPE_RESPONSE_API_LISTCAMPUS_ERROR"
  },

  API_LISTCOURSES_STATUS: {
    LISTCOURSES_SUCCESSFULLY: "UPE_RESPONSE_API_LISTCOURSES_SUCCESSFULLY",
    LISTCOURSES_ERROR: "UPE_RESPONSE_API_LISTCOURSES_ERROR",
    LISTCOURSES_INVALIDCOURSEASSOCIATION: "UPE_RESPONSE_API_LISTCOURSES_INVALIDCOURSEASSOCIATION"
  },

  API_LISTLOCALS_SUCCESSFULLY: {
    LISTLOCALS_SUCCESSFULLY: "UPE_RESPONSE_API_LISTLOCALS_SUCCESSFULLY",
    LISTLOCALS_ERROR: "UPE_RESPONSE_API_LISTLOCALS_ERROR"
  },

  API_LISTSUBJECTS_SUCCESSFULLY: {
    LISTSUBJECTS_SUCCESSFULLY: "UPE_RESPONSE_API_LISTSUBJECTS_SUCCESSFULLY",
    LISTSUBJECTS_ERROR: "UPE_RESPONSE_API_LISTSUBJECTS_ERROR"
  },

  API_INFOPROFILE_STATUS: {
    INFOPROFILE_INVALIDTOKEN: "UPE_RESPONSE_API_PROFILE_INVALIDTOKEN",
    INFOPROFILE_FAILED: "UPE_RESPONSE_API_PROFILE_FAILED",
    INFOPROFILE_SUCCESSFULLY: "UPE_RESPONSE_API_PROFILE_SUCCESSFULLY"
  },

  //#endregion

  //#region [ RESPOSTAS DE API DE ESTUDANTES ]

  API_LISTAVAILABLERESERVES_STATUS: {
    UPE_RESPONSE_API_LISTAVAILABLERESERVES_INVALIDTOKEN: "UPE_RESPONSE_API_LISTAVAILABLERESERVES_INVALIDTOKEN",
    UPE_RESPONSE_API_LISTAVAILABLERESERVES_EMPTYRESERVES: "UPE_RESPONSE_API_LISTAVAILABLERESERVES_EMPTYRESERVES",
    UPE_RESPONSE_API_LISTAVAILABLERESERVES_SUCCESSFULLY: "UPE_RESPONSE_API_LISTAVAILABLERESERVES_SUCCESSFULLY"
  },

  API_LISTSTUDENTMESSAGES_STATUS: {
    LISTSTUDENTMESSAGES_INVALIDTOKEN: "UPE_RESPONSE_API_LISTSTUDENTMESSAGES_INVALIDTOKEN",
    LISTSTUDENTMESSAGES_EMPTYMESSAGES: "UPE_RESPONSE_API_LISTSTUDENTMESSAGES_EMPTYMESSAGES",
    LISTSTUDENTMESSAGES_SUCCESSFULLY: "UPE_RESPONSE_API_LISTSTUDENTMESSAGES_SUCCESSFULLY"
  },

  API_GENERATEQRCODE_STATUS: {
    GENERATEQRCODE_INVALIDTOKEN: "UPE_RESPONSE_API_GENERATEQRCODE_INVALIDTOKEN",
    GENERATEQRCODE_FAILED: "UPE_RESPONSE_API_GENERATEQRCODE_FAILED",
    GENERATEQRCODE_SUCCESSFULLY: "UPE_RESPONSE_API_GENERATEQRCODE_SUCCESSFULLY",
    GENERATEQRCODE_QRCODEALREADYACTIVATED: "UPE_RESPONSE_API_GENERATEQRCODE_QRCODEALREADYACTIVATED"
  },

  API_SUBMITANALYSIS_STATUS: {
    SUBMITANALYSIS_INVALIDTOKEN: "UPE_RESPONSE_API_SUBMITANALYSIS_INVALIDTOKEN",
    SUBMITANALYSIS_SENT: "UPE_RESPONSE_API_SUBMITANALYSIS_SENT",
    SUBMITANALYSIS_SOMETHINGWRONG: "UPE_RESPONSE_API_SUBMITANALYSIS_SOMETHINGWRONG"
  },

  API_JOINRESERVE_STATUS: {
    JOINRESERVE_INVALIDTOKEN: "UPE_RESPONSE_API_JOINRESERVE_INVALIDTOKEN",
    JOINRESERVE_FORBIDDEN: "UPE_RESPONSE_API_JOINRESERVE_FORBIDDEN",
    JOINRESERVE_FAILED: "UPE_RESPONSE_API_JOINRESERVE_FAILED",
    JOINRESERVE_SUCCESSFULLY: "UPE_RESPONSE_API_JOINRESERVE_SUCCESSFULLY",
    JOINRESERVE_INVALIDRESERVEID: "UPE_RESPONSE_API_JOINRESERVE_INVALIDRESERVEID"
  },

  API_LEAVERESERVE_STATUS: {
    LEAVERESERVE_INVALIDTOKEN: "UPE_RESPONSE_API_LEAVERESERVE_INVALIDTOKEN",
    LEAVERESERVE_INVALIDRESERVEID: "UPE_RESPONSE_API_LEAVERESERVE_INVALIDRESERVEID",
    LEAVERESERVE_RESERVEDOESNOTEXISTS: "UPE_RESPONSE_API_LEAVERESERVE_RESERVEDOESNOTEXISTS",
    LEAVERESERVE_PRESENCEALREADYCONFIRMED: "UPE_RESPONSE_API_LEAVERESERVE_PRESENCEALREADYCONFIRMED",
    LEAVERESERVE_FORBIDDEN: "UPE_RESPONSE_API_LEAVERESERVE_FORBIDDEN",
    LEAVERESERVE_FAILED: "UPE_RESPONSE_API_LEAVERESERVE_FAILED",
    LEAVERESERVE_SUCCESSFULLY: "UPE_RESPONSE_API_LEAVERESERVE_SUCCESSFULLY"
  },

  //#endregion

  //#region [ RESPOSTAS DE API DE PROFESSORES ]

  API_FETCHOWNRESERVES_STATUS: {
    FETCHOWNRESERVES_INVALIDTOKEN: "UPE_RESPONSE_API_FETCHOWNRESERVES_INVALIDTOKEN",
    FETCHOWNRESERVES_EMPTYRESERVES: "UPE_RESPONSE_API_FETCHOWNRESERVES_EMPTYRESERVES",
    FETCHOWNRESERVES_SUCCESSFULLY: "UPE_RESPONSE_API_FETCHOWNRESERVES_SUCCESSFULLY"
  },

  API_CREATERESERVE_STATUS: {
    CREATERESERVE_INVALIDTOKEN: "UPE_RESPONSE_API_CREATERESERVE_INVALIDTOKEN",
    CREATERESERVE_MISSINGPARAMETERS: "UPE_RESPONSE_API_CREATERESERVE_MISSINGPARAMETERS",
    CREATERESERVE_INVALIDINTERVAL: "UPE_RESPONSE_API_CREATERESERVE_INVALIDINTERVAL",
    CREATERESERVE_UNAVAILABLE: "UPE_RESPONSE_API_CREATERESERVE_UNAVAILABLE",
    CREATERESERVE_FAILED: "UPE_RESPONSE_API_CREATERESERVE_FAILED",
    CREATERESERVE_SUCCESSFULLY: "UPE_RESPONSE_API_CREATERESERVE_SUCCESSFULLY"
  },

  API_SHOWPRESENCES_STATUS: {
    SHOWPRESENCES_INVALIDTOKEN: "UPE_RESPONSE_API_SHOWPRESENCES_INVALIDTOKEN",
    SHOWPRESENCES_INVALIDRESERVEID: "UPE_RESPONSE_API_SHOWPRESENCES_INVALIDRESERVEID",
    SHOWPRESENCES_FORBIDDEN: "UPE_RESPONSE_API_SHOWPRESENCES_FORBIDDEN",
    SHOWPRESENCES_SUCCESSFULLY: "UPE_RESPONSE_API_SHOWPRESENCES_SUCCESSFULLY"
  },

  API_CONFIRMPRESENCE_STATUS: {
    CONFIRMPRESENCE_INVALIDTOKEN: "UPE_RESPONSE_API_CONFIRMPRESENCE_INVALIDTOKEN",
    CONFIRMPRESENCE_INVALIDRESERVEID: "UPE_RESPONSE_API_CONFIRMPRESENCE_INVALIDRESERVEID",
    CONFIRMPRESENCE_INVALIDUSERID: "UPE_RESPONSE_API_CONFIRMPRESENCE_INVALIDUSERID",
    CONFIRMPRESENCE_MANDATORYCHECKIN: "UPE_RESPONSE_API_CONFIRMPRESENCE_MANDATORYCHECKIN",
    CONFIRMPRESENCE_FAILED: "UPE_RESPONSE_API_CONFIRMPRESENCE_FAILED",
    CONFIRMPRESENCE_SUCCESSFULLY: "UPE_RESPONSE_API_CONFIRMPRESENCE_SUCCESSFULLY"
  },

  API_DENYPRESENCE_STATUS: {
    DENYPRESENCE_INVALIDTOKEN: "UPE_RESPONSE_API_DENYPRESENCE_INVALIDTOKEN",
    DENYPRESENCE_INVALIDRESERVEID: "UPE_RESPONSE_API_DENYPRESENCE_INVALIDRESERVEID",
    DENYPRESENCE_INVALIDUSERID: "UPE_RESPONSE_API_DENYPRESENCE_INVALIDUSERID",
    DENYPRESENCE_FORBIDDEN: "UPE_RESPONSE_API_DENYPRESENCE_FORBIDDEN",
    DENYPRESENCE_SUCCESSFULLY: "UPE_RESPONSE_API_DENYPRESENCE_SUCCESSFULLY"
  },

  API_LISTPROFESSORMESSAGES_STATUS: {
    LISTPROFESSORMESSAGES_INVALIDTOKEN: "UPE_RESPONSE_API_LISTPROFESSORMESSAGES_INVALIDTOKEN",
    LISTPROFESSORMESSAGES_EMPTYMESSAGES: "UPE_RESPONSE_API_LISTPROFESSORMESSAGES_EMPTYMESSAGES",
    LISTPROFESSORMESSAGES_SUCCESSFULLY: "UPE_RESPONSE_API_LISTPROFESSORMESSAGES_SUCCESSFULLY"
  },

  API_CREATECOURSEMESSAGE_STATUS: {
    CREATECOURSEMESSAGE_INVALIDTOKEN: "UPE_RESPONSE_API_CREATECOURSEMESSAGE_INVALIDTOKEN",
    CREATECOURSEMESSAGE_INVALIDTITLE: "UPE_RESPONSE_API_CREATECOURSEMESSAGE_INVALIDTITLE",
    CREATECOURSEMESSAGE_INVALIDBODY: "UPE_RESPONSE_API_CREATECOURSEMESSAGE_INVALIDBODY",
    CREATECOURSEMESSAGE_MISSINGPARAMETERS: "UPE_RESPONSE_API_CREATECOURSEMESSAGE_MISSINGPARAMETERS",
    CREATECOURSEMESSAGE_UNLINKEDCOURSE: "UPE_RESPONSE_API_CREATECOURSEMESSAGE_UNLINKEDCOURSE",
    CREATECOURSEMESSAGE_INVALIDCAMPUS: "UPE_RESPONSE_API_CREATECOURSEMESSAGE_INVALIDCAMPUS",
    CREATECOURSEMESSAGE_INVALIDCOURSE: "UPE_RESPONSE_API_CREATECOURSEMESSAGE_INVALIDCOURSE",
    CREATECOURSEMESSAGE_FAILED: "UPE_RESPONSE_API_CREATECOURSEMESSAGE_FAILED",
    CREATECOURSEMESSAGE_SUCCESSFULLY: "UPE_RESPONSE_API_CREATECOURSEMESSAGE_SUCCESSFULLY"
  },

  API_DELETECOURSEMESSAGE_STATUS: {
    DELETECOURSEMESSAGE_INVALIDTOKEN: "UPE_RESPONSE_API_DELETECOURSEMESSAGE_INVALIDTOKEN",
    DELETECOURSEMESSAGE_INVALIDMESSAGEID: "UPE_RESPONSE_API_DELETECOURSEMESSAGE_INVALIDMESSAGEID",
    DELETECOURSEMESSAGE_FAILED: "UPE_RESPONSE_API_DELETECOURSEMESSAGE_FAILED",
    DELETECOURSEMESSAGE_SUCCESSFULLY: "UPE_RESPONSE_API_DELETECOURSEMESSAGE_SUCCESSFULLY"
  },

  //#endregion

  //#region [ RESPOSTAS DE API DE GESTORES ]

  API_LISTPENDINGUSERS_STATUS: {
    LISTPENDINGUSERS_INVALIDTOKEN: "UPE_RESPONSE_API_LISTPENDINGUSERS_INVALIDTOKEN",
    LISTPENDINGUSERS_SUCCESSFULLY: "UPE_RESPONSE_API_LISTPENDINGUSERS_SUCCESSFULLY"
  },

  API_ACCEPTUSER_STATUS: {
    ACCEPTUSER_SUCCESSFULLY: "UPE_RESPONSE_API_ACCEPTUSER_SUCCESSFULLY",
    ACCEPTUSER_INVALIDUSERID: "UPE_RESPONSE_API_ACCEPTUSER_INVALIDUSERID",
    ACCEPTUSER_INVALIDTOKEN: "UPE_RESPONSE_API_ACCEPTUSER_INVALIDTOKEN",
    ACCEPTUSER_FAILED: "UPE_RESPONSE_API_ACCEPTUSER_FAILED"
  },

  API_REJECTUSER_STATUS: {
    REJECTUSER_SUCCESSFULLY: "UPE_RESPONSE_API_REJECTUSER_SUCCESSFULLY",
    REJECTUSER_INVALIDUSERID: "UPE_RESPONSE_API_REJECTUSER_INVALIDUSERID",
    REJECTUSER_INVALIDTOKEN: "UPE_RESPONSE_API_REJECTUSER_INVALIDTOKEN",
    REJECTUSER_FAILED: "UPE_RESPONSE_API_REJECTUSER_FAILED"
  },

  API_VALIDATEQRCODE_STATUS: {
    VALIDATEQRCODE_INVALIDTOKEN: "UPE_RESPONSE_API_VALIDATEQRCODE_INVALIDTOKEN",
    VALIDATEQRCODE_INVALIDQRCODE: "UPE_RESPONSE_API_VALIDATEQRCODE_INVALIDQRCODE",
    VALIDATEQRCODE_SUCCESSFULLY: "UPE_RESPONSE_API_VALIDATEQRCODE_SUCCESSFULLY"
  },

  API_SEARCHUSERS_STATUS: {
    SEARCHUSERS_INVALIDTOKEN: "UPE_RESPONSE_API_SEARCHUSERS_INVALIDTOKEN",
    SEARCHUSERS_NOMATCHFOUND: "UPE_RESPONSE_API_SEARCHUSERS_NOMATCHFOUND",
    SEARCHUSERS_SUCCESSFULLY: "UPE_RESPONSE_API_SEARCHUSERS_SUCCESSFULLY"
  },

  API_DETAILUSER_STATUS: {
    DETAILUSER_INVALIDTOKEN: "UPE_RESPONSE_API_DETAILUSER_INVALIDTOKEN",
    DETAILUSER_INVALIDUSERID: "UPE_RESPONSE_API_DETAILUSER_INVALIDUSERID",
    DETAILUSER_SUCCESSFULLY: "UPE_RESPONSE_API_DETAILUSER_SUCCESSFULLY"
  },

  API_DELETEUSER_STATUS: {
    DELETEUSER_INVALIDTOKEN: "UPE_RESPONSE_API_DELETEUSER_INVALIDTOKEN",
    DELETEUSER_INVALIDUSERID: "UPE_RESPONSE_API_DELETEUSER_INVALIDUSERID",
    DELETEUSER_SUCCESSFULLY: "UPE_RESPONSE_API_DELETEUSER_SUCCESSFULLY"
  },

  API_SEARCHLOCAL_STATUS: {
    SEARCHLOCAL_INVALIDTOKEN: "UPE_RESPONSE_API_SEARCHLOCAL_INVALIDTOKEN",
    SEARCHLOCAL_NOMATCHFOUND: "UPE_RESPONSE_API_SEARCHLOCAL_NOMATCHFOUND",
    SEARCHLOCAL_SUCCESSFULLY: "UPE_RESPONSE_API_SEARCHLOCAL_SUCCESSFULLY"
  },

  API_DETAILLOCAL_STATUS: {
    DETAILLOCAL_INVALIDTOKEN: "UPE_RESPONSE_API_DETAILLOCAL_INVALIDTOKEN",
    DETAILLOCAL_INVALIDLOCALID: "UPE_RESPONSE_API_DETAILLOCAL_INVALIDLOCALID",
    DETAILLOCAL_SUCCESSFULLY: "UPE_RESPONSE_API_DETAILLOCAL_SUCCESSFULLY"
  },

  API_DELETELOCAL_STATUS: {
    DELETELOCAL_INVALIDTOKEN: "UPE_RESPONSE_API_DELETELOCAL_INVALIDTOKEN",
    DELETELOCAL_INVALIDLOCALID: "UPE_RESPONSE_API_DELETELOCAL_INVALIDLOCALID",
    DELETELOCAL_SUCCESSFULLY: "UPE_RESPONSE_API_DELETELOCAL_SUCCESSFULLY"
  },

  API_DETAILRESERVE_STATUS: {
    DETAILRESERVE_INVALIDTOKEN: "UPE_RESPONSE_API_DETAILRESERVE_INVALIDTOKEN",
    DETAILRESERVE_INVALIDRESERVEID: "UPE_RESPONSE_API_DETAILRESERVE_INVALIDRESERVEID",
    DETAILRESERVE_SUCCESSFULLY: "UPE_RESPONSE_API_DETAILRESERVE_SUCCESSFULLY"
  },

  API_DELETERESERVE_STATUS: {
    DELETERESERVE_INVALIDTOKEN: "UPE_RESPONSE_API_DELETERESERVE_INVALIDTOKEN",
    DELETERESERVE_INVALIDRESERVEID: "UPE_RESPONSE_API_DELETERESERVE_INVALIDRESERVEID",
    DELETERESERVE_SUCCESSFULLY: "UPE_RESPONSE_API_DELETERESERVE_SUCCESSFULLY"
  },

  API_LISTCAMPUSMESSAGES_STATUS: {
    LISTCAMPUSMESSAGES_INVALIDTOKEN: "UPE_RESPONSE_API_LISTCAMPUSMESSAGES_INVALIDTOKEN",
    LISTCAMPUSMESSAGES_EMPTYMESSAGES: "UPE_RESPONSE_API_LISTCAMPUSMESSAGES_EMPTYMESSAGES",
    LISTCAMPUSMESSAGES_SUCCESSFULLY: "UPE_RESPONSE_API_LISTCAMPUSMESSAGES_SUCCESSFULLY"
  },

  API_CREATECAMPUSMESSAGE_STATUS: {
    CREATECAMPUSMESSAGE_INVALIDTOKEN: "UPE_RESPONSE_API_CREATECAMPUSMESSAGE_INVALIDTOKEN",
    CREATECAMPUSMESSAGE_MISSINGPARAMETERS: "UPE_RESPONSE_API_CREATECAMPUSMESSAGE_MISSINGPARAMETERS",
    CREATECAMPUSMESSAGE_FAILED: "UPE_RESPONSE_API_CREATECAMPUSMESSAGE_FAILED",
    CREATECAMPUSMESSAGE_SUCCESSFULLY: "UPE_RESPONSE_API_CREATECAMPUSMESSAGE_SUCCESSFULLY",
    CREATECAMPUSMESSAGE_INVALIDTITLE: "UPE_RESPONSE_API_CREATECAMPUSMESSAGE_INVALIDTITLE",
    CREATECAMPUSMESSAGE_INVALIDBODY: "UPE_RESPONSE_API_CREATECAMPUSMESSAGE_INVALIDBODY"
  },

  API_DELETECAMPUSMESSAGE_STATUS: {
    DELETECAMPUSMESSAGE_INVALIDTOKEN: "UPE_RESPONSE_API_DELETECAMPUSMESSAGE_INVALIDTOKEN",
    DELETECAMPUSMESSAGE_INVALIDMESSAGEID: "UPE_RESPONSE_API_DELETECAMPUSMESSAGE_INVALIDMESSAGEID",
    DELETECAMPUSMESSAGE_FAILED: "UPE_RESPONSE_API_DELETECAMPUSMESSAGE_FAILED",
    DELETECAMPUSMESSAGE_SUCCESSFULLY: "UPE_RESPONSE_API_DELETECAMPUSMESSAGE_SUCCESSFULLY"
  },

  API_CREATESUBJECT_STATUS: {
    CREATESUBJECT_INVALIDTOKEN: "UPE_RESPONSE_API_CREATESUBJECT_INVALIDTOKEN",
    CREATESUBJECT_MISSINGPARAMETERS: "UPE_RESPONSE_API_CREATESUBJECT_MISSINGPARAMETERS",
    CREATESUBJECT_INVALIDCOURSEID: "UPE_RESPONSE_API_CREATESUBJECT_INVALIDCOURSEID",
    CREATESUBJECT_FAILED: "UPE_RESPONSE_API_CREATESUBJECT_FAILED",
    CREATESUBJECT_INVALIDSUBJECTNAME: "UPE_RESPONSE_API_CREATESUBJECT_INVALIDSUBJECTNAME",
    CREATESUBJECT_SUCCESSFULLY: "UPE_RESPONSE_API_CREATESUBJECT_SUCCESSFULLY"
  },

  API_DELETESUBJECT_STATUS: {
    DELETESUBJECT_INVALIDTOKEN: "UPE_RESPONSE_API_DELETESUBJECT_INVALIDTOKEN",
    DELETESUBJECT_INVALIDCOURSEID: "UPE_RESPONSE_API_DELETESUBJECT_INVALIDCOURSEID",
    DELETESUBJECT_INVALIDSUBJECTID: "UPE_RESPONSE_API_DELETESUBJECT_INVALIDSUBJECTID",
    DELETESUBJECT_FAILED: "UPE_RESPONSE_API_DELETESUBJECT_FAILED",
    DELETESUBJECT_SUCCESSFULLY: "UPE_RESPONSE_API_DELETESUBJECT_SUCCESSFULLY"
  },

  API_CREATELOCAL_STATUS: {
    CREATELOCAL_INVALIDTOKEN: "UPE_RESPONSE_API_CREATELOCAL_INVALIDTOKEN",
    CREATELOCAL_INVALIDNAME: "UPE_RESPONSE_API_CREATELOCAL_INVALIDNAME",
    CREATELOCAL_INVALIDDESCRIPTION: "UPE_RESPONSE_API_CREATELOCAL_INVALIDDESCRIPTION",
    CREATELOCAL_INVALIDCAPACITY: "UPE_RESPONSE_API_CREATELOCAL_INVALIDCAPACITY",
    CREATELOCAL_INVALIDBLOCK: "UPE_RESPONSE_API_CREATELOCAL_INVALIDBLOCK",
    CREATELOCAL_INVALIDFLOOR: "UPE_RESPONSE_API_CREATELOCAL_INVALIDFLOOR",
    CREATELOCAL_MISSINGPARAMETERS: "UPE_RESPONSE_API_CREATELOCAL_MISSINGPARAMETERS",
    CREATELOCAL_FAILED: "UPE_RESPONSE_API_CREATELOCAL_FAILED",
    CREATELOCAL_SUCCESSFULLY: "UPE_RESPONSE_API_CREATELOCAL_SUCCESSFULLY"
  },

  API_PATCHUSER_STATUS: {
    PATCHUSER_INVALIDTOKEN: "UPE_RESPONSE_API_PATCHUSER_INVALIDTOKEN",
    PATCHUSER_INVALIDUSERID: "UPE_RESPONSE_API_PATCHUSER_INVALIDUSERID",
    PATCHUSER_INVALIDNAME: "UPE_RESPONSE_API_PATCHUSER_INVALIDNAME",
    PATCHUSER_INVALIDCPF: "UPE_RESPONSE_API_PATCHUSER_INVALIDCPF",
    PATCHUSER_INVALIDCELLPHONE: "UPE_RESPONSE_API_PATCHUSER_INVALIDCELLPHONE",
    PATCHUSER_INVALIDPERMISSIONS: "UPE_RESPONSE_API_PATCHUSER_INVALIDPERMISSIONS",
    PATCHUSER_INVALIDCAMPUSID: "UPE_RESPONSE_API_PATCHUSER_INVALIDCAMPUSID",
    PATCHUSER_INVALIDCOURSEID: "UPE_RESPONSE_API_PATCHUSER_INVALIDCOURSEID",
    PATCHUSER_UNLINKEDCAMPUSANDCOURSE: "UPE_RESPONSE_API_PATCHUSER_UNLINKEDCAMPUSANDCOURSE",
    PATCHUSER_UNSPECIFIEDCOURSE: "UPE_RESPONSE_API_PATCHUSER_UNSPECIFIEDCOURSE",
    PATCHUSER_UNPATCHED: "UPE_RESPONSE_API_PATCHUSER_UNPATCHED",
    PATCHUSER_SUCCESSFULLY: "UPE_RESPONSE_API_PATCHUSER_SUCCESSFULLY"
  },

  API_SEARCHRESERVES_STATUS: {
    SEARCHRESERVES_INVALIDTOKEN: "UPE_RESPONSE_API_SEARCHRESERVES_INVALIDTOKEN",
    SEARCHRESERVES_NOMATCHFOUND: "UPE_RESPONSE_API_SEARCHRESERVES_NOMATCHFOUND",
    SEARCHRESERVES_SUCCESSFULLY: "UPE_RESPONSE_API_SEARCHRESERVES_SUCCESSFULLY"
  },

  API_PATCHRESERVE_STATUS: {
    PATCHRESERVE_INVALIDTOKEN: "UPE_RESPONSE_API_PATCHRESERVE_INVALIDTOKEN",
    PATCHRESERVE_INVALIDRESERVEID: "UPE_RESPONSE_API_PATCHRESERVE_INVALIDRESERVEID",
    PATCHRESERVE_INTERVALSHOULDBEPROVIDED: "UPE_RESPONSE_API_PATCHRESERVE_INTERVALSHOULDBEPROVIDED",
    PATCHRESERVE_INVALIDINTERVAL: "UPE_RESPONSE_API_PATCHRESERVE_INVALIDINTERVAL",
    PATCHRESERVE_UNAVAILABLE: "UPE_RESPONSE_API_PATCHRESERVE_UNAVAILABLE",
    PATCHRESERVE_UNPATCHED: "UPE_RESPONSE_API_PATCHRESERVE_UNPATCHED",
    PATCHRESERVE_SUCCESSFULLY: "UPE_RESPONSE_API_PATCHRESERVE_SUCCESSFULLY"
  },

  API_VIEWUSER_STATUS: {
    VIEWUSER_INVALIDTOKEN: "UPE_RESPONSE_API_VIEWUSER_INVALIDTOKEN",
    VIEWUSER_INVALIDQRCODE: "UPE_RESPONSE_API_VIEWUSER_INVALIDQRCODE",
    VIEWUSER_SUCCESSFULLY: "UPE_RESPONSE_API_VIEWUSER_SUCCESSFULLY"
  },

  API_CHECKOUT_STATUS: {
    CHECKOUT_INVALIDTOKEN: "UPE_RESPONSE_API_CHECKOUT_INVALIDTOKEN",
    CHECKOUT_INVALIDQRCODE: "UPE_RESPONSE_API_CHECKOUT_INVALIDQRCODE",
    CHECKOUT_SUCCESSFULLY: "UPE_RESPONSE_API_CHECKOUT_SUCCESSFULLY"
  }

  //#endregion

};
