// Dado el siguiente diagrama de clases... deseamos modelar el sistema utilizando objetos literales.
// Para el problema actual solo vamos a requerir 1 instancia de cada uno de los tipos de objetos, con lo cual
// vamos a poder definir la estructura de los objetos y asignarles valores al mismo tiempo.
// 1 Crear las tres variables e igualarlas a objetos literales vacios
    //var Cuenta = {
//}
//var Autorizador = {
//}
//var Cajero = {
//}

// 2 Agregar las propiedades a los tres objetos correspondientes con valores iniciales

// 3 Agregar las funciones correspondientes por el momento vacias pero con los parametros correctos
var Cuenta = {
    numero: 12345,
    usuario: 'daniel',
    clave: 0000,
    saldo: 6000,
    
  incrementarSaldo: function (monto){
      // Cuenta.saldo = (tambien se puede usar.)
    this.saldo += monto;
  },
  disminuirSaldo: function(monto) {
    if (this.saldo - monto < 0) {
      return false;
    } else {
      this.saldo -= monto;
      return true;
    }
  }
};
var CuentaConDescubierto = {
  numero: 54321,
    usuario: 'pedro',
    clave: 1111,
    saldo: 1000,
    limite: 5000,
  incrementarSaldo: function (monto){
      // Cuenta.saldo = (tambien se puede usar.)
    this.saldo += monto;
  },
  disminuirSaldo: function(monto) {
    if (monto <= this.saldo + this.limite){
      this.saldo -= monto;
      return true;
    }else{
      return false
    }
    }
   
};

function crearCuenta(nro, usuario, clave, saldo){
  var nuevaCuenta = {
    nro: nro,
    usuario: usuario,
    clave: clave,
    saldo: saldo,
  
  incrementarSaldo: function(monto){
    // Cuenta.saldo = (tambien se puede usar.)
  this.saldo += monto;
},

disminuirSaldo: function(monto) {
  if (monto <= this.saldo + this.limite){
    this.saldo -= monto;
    return true;
  }else{
    return false
  }
  },

  
};
Cajero.cuentas.push(nuevaCuenta);
}

var Autorizador = {
    validarAcceso: function (cuentas, nroCuenta, usuario, clave){
        var local = null;
        cuentas.forEach(function(cuenta){
          if(nroCuenta === cuenta.numero && usuario === cuenta.usuario && clave === cuenta.clave){
        local = cuenta;
          }
        });
        return local;
    }
};
var AutorizadorAdmin = {
  usuarioMaster: 'admin',
  claveMaster: 'admin',

  validarAcceso: function (cuentas, nroCuenta, usuario, clave){
    var local = null;
    if(this.usuarioMaster === usuario && this.claveMaster === clave){
    cuentas.forEach(function(cuenta){
      if(nroCuenta === cuenta.numero && usuario === cuenta.usuario && clave === cuenta.clave){
    local = cuenta;
      }
    });
    return local;
  }
}
};

var Cajero = {
    cuentas: [Cuenta],
    autorizador: Autorizador,
  depositarPlata: function (nroCuenta, usuario, clave, monto){
      var autorizado = this.autorizador.validarAcceso(this.cuentas, nroCuenta, usuario, clave);
      if (autorizado){
        autorizado.incrementarSaldo(monto);
        console.log('El nuevo saldo de su cuenta es: ' + autorizado.saldo);
      } else{
      console.log('Error!!');
      }
  },

  //retirarPlata: function (nroCuenta, usuario, clave, monto){
   // var retiro = this.autorizador.validarAcceso(this.cuentas, nroCuenta, usuario, monto);
   // if(retiro){
    //  autorizado.disminuirSaldo(monto);
    //  console.log('El nuevo saldo de su cuenta es: ' + autorizado.saldo);
    //}else{
    //  console.log('Error!!');
    //}
  //}
//}
retirarPlata: function(nroCuenta, usuario, clave, monto) {
  var autorizado = this.autorizador.validarAcceso(this.cuentas, nroCuenta, usuario, clave);
  if (autorizado) {
    var exito = autorizado.disminuirSaldo(monto);
    if (exito) {
      console.log('Tu retiro fue exitoso. El nuevo saldo de su cuenta es: ' + autorizado.saldo);
    } else {
      console.log('No es posible retirar ese monto de tu cuenta.');
    }
  } else {
    console.log('No ingresaste un nro de cuenta o clave correcta');
  }
}
};
// 4 Comencemos con la logica de incrementarSaldo del objeto Cuenta.
// 5 Armemos la logica del metodo validarAcceso del objeto Autorizador:
//     - Utilizemos forEach para recorrer las cuentas recibidas
              // cuentas.forEach(function(valor, indice, array){}

      //     - Validemos que coincidan tanto el nroCuenta, el usuario y la clave

//     - Si esto es verdadero, guardemos la cuenta en una variable local y devolvamos la cuenta encontrada al final
//     - O devolvamos null si no existe ninguna cuenta que coincida con la busqueda
// 6 Ahora, la logica del metodo depositarPlata del objeto Cajero:
//     - Primero validar el acceso utilizando el Autorizador interno y guardar la cuenta encontrada en una variable
//     - Si existe una cuenta, invocar al metodo incrementarSaldo de la misma. Y luego en consola mostrar el saldo actual.
//     - Si no, hacer console log de un mensaje de error
// 7 Finalicemos implementando disminuirSaldo de Cuenta y retirarPlata de Cajero
//     - La cuenta esta encargada de revisar que la disminucion sea valida, sino no modificar el saldo y avisar al cajero si el retiro fue exitoso o no.
//     - El Cajero debe hacer console log si el retiro fue exitoso o no y el estado actual de la cuenta luego del retiro (solo si fue exitoso).



// Ejercicios extra:
// Poner en el html 4 inputs: nroCuenta, usuario, clave, monto
// Poner 2 botones: retirar, depositar
// Bindear el click de ambos botones para que interactuen con los metodos del cajero (asi como estan)

$(function(){
  var retirar = $('#retirar');
    console.log(retirar);

$(retirar).on( "click", function( event ) {
  Cajero.retirarPlata(event.target.NroCuenta, event.target.Usuario, event.target.Clave, event.target.Monto);
});

var depositar = $('#depositar');
    console.log(depositar);

$(depositar).on( "click", function( event ) {
  Cajero.depositarPlata();
});

});


// Proximos desafios:
// Cuenta con limite al descubierto:
// 1 - Armar un nuevo Objeto literal CuentaConDescubierto con las mismas propiedades y metodos que Cuenta

// Autorizador para administradores
// Cajero para administradores (sin cambiar su logica)
