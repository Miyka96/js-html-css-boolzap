const app = new Vue(
    {
        el: '#root',
        data:
        {
           contacts: [
               {
                   name: 'Floriana',
                   avatar: "img/propic1.png",
                   visible: true,
                   messages: [
                       {
                        date: '10/01/2020 15:30:55',
                        text: 'Ricordati di comprare il pane',
                        status: 'sent'
                       },
                       {
                        date: '10/01/2020 15:50:00',
                        text: 'Non ho molte idee sul cosa scrivere onestamente',
                        status: 'sent'
                       },
                       {
                        date: '10/01/2020 16:15:22',
                        text: 'Avrei voluto essere un poco più creativa',
                        status: 'sent'
                       },
                       {
                        date: '10/01/2020 16:15:22',
                        text: 'Vabè non ci pensare, non fa niente',
                        status: 'recived'
                       }
                    ],
                },
                
                {
                    name: 'Mattia',
                    avatar: "img/propic2.png",
                    visible: true,
                    messages: [
                        {
                         date: '20/03/2020 16:30:00',
                         text: 'Ho cucinato una crostata',
                         status: 'recived'
                        },
                        {
                         date: '20/03/2020 16:30:55',
                         text: 'Che gusto?',
                         status: 'sent'
                        },
                        {
                         date: '20/03/2020 16:35:00',
                         text: 'Cioccolato',
                         status: 'recived'
                        },
                    ],
                },

                {
                    name: 'Mamma',
                    avatar: "img/propic3.png",
                    visible: true,
                    messages: [
                        {
                         date: '28/03/2020 10:10:40',
                         text: 'Volete venire domenica a pranzo?',
                         status: 'recived'
                        },
                        {
                         date: '28/03/2020 10:15:40',
                         text: 'Solo se mi cucini qualcosa di buono',
                         status: 'sent'
                        },
                        {
                         date: '28/03/2020 10:20:10',
                         text: 'Spaghetti con frutti di mare?',
                         status: 'recived'
                        },
                        {
                         date: '28/03/2020 10:30:30',
                         text: 'Brava mamma',
                         status: 'sent'
                        }
                    ],
                },

                {
                    name: 'Dario',
                    avatar: "img/propic4.png",
                    visible: true,
                    messages: [
                        {
                         date: '10/01/2020 15:30:55',
                         text: 'Anche in questa conversazione si parlerà di cibo',
                         status: 'sent'
                        },
                        {
                         date: '10/01/2020 15:50:00',
                         text: 'Ma perchè? Non possiamo parlare di altro?',
                         status: 'recived'
                        },
                        {
                         date: '10/01/2020 17:15:22',
                         text: 'O cibo o niente',
                         status: 'sent'
                        },
                        {
                         date: '10/01/2020 17:16:10',
                         text: 'Allora lasagne',
                         status: 'recived'
                        }
                    ],
                },
            ],

            // other data here
        },
    }
)