// Supports ES6
import { create, Whatsapp } from "venom-bot";

const { NlpManager } = require('node-nlp');

const manager = new NlpManager({ languages: ['pt'], forcptER: true });
// TREINO DE SAUDAÇÃO
manager.addDocument('pt', 'voce esta bem', 'ESTAR');
manager.addDocument('pt', 'bom dia', 'DIA');
manager.addDocument('pt', 'Mano, boa tarde... Tudo bem? Confirmado para sua parte mais tarde?  LEITURA DA BÍBLIA', 'SALAO');
manager.addDocument('pt', 'olá tudo bem? confirmado sua parte mais tarde?', 'SALAO');
manager.addDocument('pt', 'boa tarde', 'TARDE');
manager.addDocument('pt', 'boa noite', 'NOITE');
manager.addDocument('pt', 'bom final de semana', 'SEMANA');
manager.addDocument('pt', 'tudo bem', 'SAUDE');
manager.addDocument('pt', 'voce ta bem', 'SAUDE');
manager.addDocument('pt', 'oi', 'SAUDACAO');
manager.addDocument('pt', 'ola', 'SAUDACAO');
manager.addDocument('pt', 'opa', 'SAUDACAO');
manager.addDocument('pt', 'ja saiu da escola', 'ESCOLA');
manager.addDocument('pt', 'itapuca partiu', 'ITAPUCA');
manager.addDocument('pt', 'bora cair', 'ITAPUCA')
manager.addDocument('pt', 'bora surfar', 'ITAPUCA')
manager.addDocument('pt', 'bora andar de skate', 'SKATE')
manager.addDocument('pt', 'cabixu', 'FAMILIA')
manager.addDocument('pt', 'cabexu', 'FAMILIA')
manager.addDocument('pt', 'cocoseco', 'FAMILIA')
manager.addDocument('pt', 'fez muitas atividades', 'ESTUDO')
manager.addDocument('pt', 'cripto', 'MARKET')
manager.addDocument('pt', 'crypto', 'MARKET')  



manager.addAnswer(
  'pt',
  'SAUDACAO',
  'Olá, sou um bot 🤖 desenvolvido por Danilo, quando ele estiver disponível poderá te responder, deixe sua mensagem!!'
);
manager.addAnswer(
  'pt',
  'SAUDE',
  'Olá, tudo sim!! Sou um bot 🤖 desenvolvido por Danilo, quando ele estiver disponível poderá te responder!'
);
manager.addAnswer(
  'pt',
  'ESTAR',
  'Olá, to sim!! Sou um bot🤖 desenvolvido por Danilo, quando ele estiver disponível poderá te responder!'
);
manager.addAnswer(
  'pt',
  'ITAPUCA',
  'Itapuca nos espera partiu!!🌊🐢'
);
manager.addAnswer(
  'pt',
  'DIA',
  'Olá, bom dia!! Tenha um ótimo dia!☀'
);
manager.addAnswer(
  'pt',
  'TARDE',
  'Olá, boa tarde!! Tenha um bom final de dia!!🌄'
);
  manager.addAnswer(
  'pt',
  'NOITE',
  'Oie, boa noite pra você também!!😀🌕💤'
);
manager.addAnswer(
  'pt',
  'SEMANA',
  'Bom final de semana pra você também, que venham mais!!😁😁😁'
);
manager.addAnswer(
  'pt',
  'SKATE',
  'Partiu skatin?!🛹🧢'
);
 manager.addAnswer(
  'pt',
  'SALAO',
  'Oie, confirmado sim!!😀'
);
 manager.addAnswer(
  'pt',
  'ESCOLA',
  'Para saber se eu já sai da escola é só olhar as horas, seg, ter e qua eu saio as 12:00 PM, porém qui e sex saio as 13:00 PM'
);
manager.addAnswer(
  'pt',
  'FAMILIA',
  'Diz ai cara!!'
);
manager.addAnswer(
  'pt',
  'ESTUDO',
  'Fiz algumas, não muito!'
);
manager.addAnswer(
  'pt',
  'MARKET',
  'Bora lá, me atualiza da situação do mercado de hoje!!'
);

(async () => {
  await manager.train();
  manager.save();

  create("BOT")
    .then((client) => {
      //EVENTO
      
      client.onMessage(async (message) => {
        if (message.isGroupMsg === false) {
          const response = await manager.process(
            "pt",
            message.body.toLowerCase()
      );
         
         
          console.log('intenção:', response.intent);
          console.log('precisão:', response.score);
          client.sendText(message.from, response.answer);
        }
      });
    })
    .catch((erro) => {
      console.log(erro);
    });

})();
