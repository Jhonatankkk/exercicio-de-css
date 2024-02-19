// let verificarPermissão = (cargo) => {
//     switch (cargo) {
//         case'comum' :
//             console.log(' usuário tem permissão comum.');
//             break;
//         case'gerente' :
//             console.log(' usuário tem permissão de gerente.');
//             break;
//         case 'Diretor':    
//             console.log(' usuário tem permissão de diretor.');
//             break;   
//         default: 
//             console.log(' cargo não reconhecido');
//     }
// };

// verificarPermissão("comum")


let cargo = "comum"
switch (cargo) {
    case'comum' :
        console.log(' usuário tem permissão comum.');
        break;
    case'gerente' :
        console.log(' usuário tem permissão de gerente.');
        break;
    case 'diretor':    
        console.log(' usuário tem permissão de diretor.');
        break;   
    default: 
        console.log(' cargo não reconhecido');
}