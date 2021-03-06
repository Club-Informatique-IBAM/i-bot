/* ---------------------------------------section visituer--------------------------*/
var visiteur = function() {
    botui.message.add({
      loading: true,
      delay: 1000,
      photo: 'build/rasht.png',
      content: "En quoi puis-je donc vous aider?"
    })
    .then(function () {
      return botui.action.button({
        delay: 1000,
        action: [{
          text: 'Programme de la semaine',
          value: 'programme_semaine'
        }, {
          text: 'Conseils pratiques',
          value: 'conseils'
        }, {
          text: 'Autres informations sur l\'Institut',
          value: 'other'
        },{
          text: 'Retour',
          icon: 'angle-left',
          value: 'skip'
        }]
      })
  }).then(function (res) {
    if(res.value == 'programme_semaine') {
      agenda();
    } else if(res.value == 'conseils') {
      conseils();
  
    }else if(res.value == 'other') {
      autresInfos();// fonction déjà prise en compte dans "rensenseignementAutres.js"/ //n'est plus pris en compte.
  
    } else  {
      sup1();       
    }
  });
  }
/* ---------------------------------------sous section agenda--------------------------*/
  var agenda = function() {
    botui.action.select({
      loading:true,
      delay: 1000,
      action: {
          placeholder : "Choisissez votre filière",
          value: 'MIAGE', // valeur par défaut (miage, bah c'est normal!)
          searchselect : false, 
          label : 'text', 
          options : [
                          {value: "ABF", text : "ABF" },
                          {value: "ADB", text : "ADB" },
                          {value: "CCA", text : "CCA" },
                          {value: "MIAGE", text : "MIAGE" },
                          {value: "MG", text : "MG" },
    
                    ],
          button: {
            icon: 'check',
            label: 'Valider'
          }
        }
    }).then(function (res) {
      if(res.value == 'MIAGE') {
        programme_miage();
    
      } else if(res.value == 'ADB') {
        programme_adb();
    
      }else if(res.value == 'CCA') {
        programme_cca();
    
      }else if(res.value == 'MG') {
        programme_mg();
    
      } else  {
      programme_abf();
      }
    });
}
//les scripts des programmes sont dans le fichier ./build/scripts/programmesSemaines.js
/* ---------------------------------------fin de la sous section agenda--------------------------*/


/* ---------------------------------------sous section conseils--------------------------*/
  var conseils = function() {
    botui.message.add({
      loading: true,
      delay: 1000,
      photo: 'build/rasht.png',
      content: "Quelques conseils pratique pour réussir son année!"
    })
    .then(function () {
      return botui.action.button({
        delay: 1000,
        action: [{
          text: 'Dans le cadre des  évaluations',
          value: 'eval'
        }, {
          text: 'Dans le cadre de la vie universitaire ',
          value: 'univ_life'
        },
        {
          text: 'Retour',
          icon: 'angle-left',
          value: 'skip'
        }]
      })
  }).then(function (res) {
    if(res.value == 'eval') {
      //showReminderInput();
      évaluations();
    } else if(res.value == 'univ_life') {
      univ_life();
  
    } else  {
      sup5();       
    }
  });
  }

  var évaluations = function() {
    botui.message.add({
      loading: true,
      delay: 1000,
      photo: 'build/rasht.png',
      content: "Comment bien réussir ses examens?"
    }).then(function () {
        return	botui.message
        .bot({
          delay: 1000,
          photo: 'build/rasht.png',
          content: '->La première des choses c\'est de tout faire pour être présent à tous les cours!'
        })
    }).then(function () {
        return	botui.message
        .bot({
          delay: 2000,
          photo: 'build/rasht.png',
          content: '-> Participer aux cours(passer au tableau, poser des questions...)'
        })
    }).then(function () {
        return	botui.message
        .bot({
          delay: 3000,
          photo: 'build/rasht.png',
          content: '-> Être présent aux TD et TP'
        })
    }).then(function () {
        return	botui.message
        .bot({
          delay: 1000,
          photo: 'build/rasht.png',
          content: '-> Reprendre les exercices de classe individuellement'
        })
    }).then(function () {
        return	botui.message
        .bot({
          delay: 2000,
          photo: 'build/rasht.png',
          content: '-> Reprendre les TD individuellement'
        })
    }).then(function () {
        return	botui.message
        .bot({
          delay: 2000,
          photo: 'build/rasht.png',
          content: '-> Constituer et participer à des groupes des traveaux'
        })
    }).then(function () {
        return	botui.message
        .bot({
          delay: 3000,
          photo: 'build/rasht.png',
          content: '-> Réviser régulièrement les modules'
        })
    }).then(function () {
        return	botui.message
        .bot({
          delay: 2000,
          photo: 'build/rasht.png',
          content: '-> Ne pas négliger les modules à faibles coefficient'
        })
    }).then(function () {
        return	botui.message
        .bot({
          delay: 3000,
          photo: 'build/rasht.png',
          content: '--> Toujours se rappeller de la présence de la bibliothèque!'
        })
    }).then(function () {
        return botui.action.button({
          delay: 1000,
          action: [
          {
            text: 'Retour',
            icon: 'angle-left',
            value: 'skip'
          }]
        })
    }).then(function (res) {
      if(res.value == 'skip') {
        //showReminderInput();
        sup4();
      }  else  {
        sup4();       
      }
    })
   ;
  }

  var univ_life = function() {
    botui.message.add({
      loading: true,
      delay: 1000,
      photo: 'build/rasht.png',
      content: "Comment bien réussir ses examens?"
    }).then(function () {
        return	botui.message
        .bot({
          delay: 1000,
          photo: 'build/rasht.png',
          content: '->La première des choses c\'est de tout faire pour être présent à tous les cours!'
        })
    }).then(function () {
        return	botui.message
        .bot({
          delay: 2000,
          photo: 'build/rasht.png',
          content: '-> Participer aux cours(passer au tableau, poser des questions...)'
        })
    }).then(function () {
        return	botui.message
        .bot({
          delay: 3000,
          photo: 'build/rasht.png',
          content: '-> Être présent aux TD et TP'
        })
    }).then(function () {
        return	botui.message
        .bot({
          delay: 1000,
          photo: 'build/rasht.png',
          content: '-> Reprendre les exercices de classe individuellement'
        })
    }).then(function () {
        return	botui.message
        .bot({
          delay: 2000,
          photo: 'build/rasht.png',
          content: '-> Reprendre les TD individuellement'
        })
    }).then(function () {
        return	botui.message
        .bot({
          delay: 2000,
          photo: 'build/rasht.png',
          content: '-> Constituer et participer à des groupes des traveaux'
        })
    }).then(function () {
        return	botui.message
        .bot({
          delay: 3000,
          photo: 'build/rasht.png',
          content: '-> Réviser régulièrement les modules'
        })
    }).then(function () {
        return	botui.message
        .bot({
          delay: 2000,
          photo: 'build/rasht.png',
          content: '-> Ne pas négliger les modules à faibles coefficient'
        })
    }).then(function () {
        return	botui.message
        .bot({
          delay: 3000,
          photo: 'build/rasht.png',
          content: '--> Toujours se rappeller de la présence de la bibliothèque!'
        })
    }).then(function () {
        return botui.action.button({
          delay: 1000,
          action: [
          {
            text: 'Retour',
            icon: 'angle-left',
            value: 'skip'
          }]
        })
    }).then(function (res) {
      if(res.value == 'skip') {
        //showReminderInput();
        sup4();
      }  else  {
        sup4();       
      }
    })
   ;
  }

/* ---------------------------------------fin de la sous section conseils--------------------------*/

/* ---------------------------------------sous section autres infos--------------------------*/
var autresInfos = function() {
  botui.message.add({
    loading: true,
    delay: 1000,
    photo: 'build/rasht.png',
    content: "Autres informations"
  })
  .then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: ' A propos de IBAM',
        value: 'a_propos'
      }, {
        text: 'Vie estudiantine',
        value: 'vie_estu'
      }, {
        text: 'Règlement',
        value: 'règlement'
      },{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }]
    })
}).then(function (res) {
  if(res.value == 'a_propos') {
    a_propos();
  } else if(res.value == 'vie_estu') {
    vie_estu();

  }else if(res.value == 'règlement') {
    règlempent();

  } else  {
    sup5();       
  }
});
}
// les scripts des autres renseignments sont dans le fichier renseignementAutres.js
/* ---------------------------------------fin de la sous section autres infos--------------------------*/
/* ---------------------------------------fin de la section visiteurs--------------------------*/