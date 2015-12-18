
$(document).ready(function(){




  menu = new MainMenu().render();


      list = [{id: 1 , nombre: "Nicolasa" , tipo: "Farma" , gender: 'f', horas: 8, canDoCaja: false },
              {id: 2 , nombre: "Doris :)" , tipo: "Farma" , gender: 'f', horas: 8, canDoCaja: false },
              {id: 3 , nombre: "Yisela" ,   tipo: "Farma" , gender: 'f', horas: 8, canDoCaja: false },

              {id: 4 , nombre: "Kevin" , tipo: "Emp" , gender: 'm', horas: 9, canDoCaja: true },
              {id: 5 , nombre: "Joel" ,  tipo: "Emp" , gender: 'm', horas: 9, canDoCaja: true },
              {id: 6 , nombre: "Marcos", tipo: "Emp" , gender: 'm', horas: 8, canDoCaja: true },
              {id: 7 , nombre: "Luis" ,  tipo: "Emp" , gender: 'm', horas: 8, canDoCaja: true },
              {id: 8 , nombre: "Rodrigo",tipo: "Emp" , gender: 'm', horas: 9, canDoCaja: true },
              {id: 9 , nombre: "Maria" , tipo: "Emp" , gender: 'f', horas: 9, canDoCaja: true },
              {id: 10 , nombre:"Mariana",tipo: "Emp" , gender: 'f', horas: 8, canDoCaja: true },
              {id: 11 , nombre: "Adrián",tipo: "Emp" , gender: 'm', horas: 9, canDoCaja: true },
             

            ];


      personal = new PersonalCollection(list);

      lista  = new PersonalList().render();
      calendario = new Calendar().render();



});





