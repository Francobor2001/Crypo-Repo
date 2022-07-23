const CRYPTO = "https://crypto.develotion.com/";

//* Usuarios
async function registro(user, password, idDepartamento, idCiudad) {
  const response = await fetch(
    `${CRYPTO}/usuarios.php`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    },
    {
      body: JSON.stringify({
        user,
        password,
        idDepartamento,
        idCiudad,
      }),
      credentials: "include",
    }
  );
  if (response.status === 200 || response.status === 201) {
    return response.json();
  } else {
    return Promise.reject({
      message: "Error en el registro de usuario",
      status: response.status,
    });
  }
}

async function login(user, password) {
  const response = await fetch(
    `${CRYPTO}/login.php`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    },
    {
      body: JSON.stringify({
        user,
        password,
      }),
      credentials: "include",
    }
  );
  if (response.status === 200 || response.status === 201) {
    return response.json();
  } else {
    return Promise.reject({
      message: "Error en el login de usuario",
      status: response.status,
    });
  }
}

//*Departamentos
async function getDepartamentos() {
  const response = await fetch(
    `${CRYPTO}/departamentos.php`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    {
      credentials: "include",
    }
  );
  if (response.status === 200 || response.status === 201) {
    return response.json();
  } else {
    return Promise.reject({
      message: "Error al obtener departamentos",
      status: response.status,
    });
  }
}

//cambiar nombre??
async function getCiudad(idDepartamento) {
  const response = await fetch(
    `${CRYPTO}/ciudades.php?idDepartamento=${idDepartamento}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    {
      credentials: "include",
    }
  );
  if (response.status === 200 || response.status === 201) {
    return response.json();
  } else {
    return Promise.reject({
      message: "Error al obtener la ciudad",
      status: response.status,
    });
  }
}

async function getCiudades() {
  const response = await fetch(
    `${CRYPTO}/ciudades.php`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    {
      credentials: "include",
    }
  );
  if (response.status === 200 || response.status === 201) {
    return response.json();
  } else {
    return Promise.reject({
      message: "Error al obtener ciudades",
      status: response.status,
    });
  }
}
//* Transacciones

async function getTransacciones(idUsuario) {
  const response = await fetch(
    `${CRYPTO}/transacciones.php?idUsuario=${idUsuario}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    {
      credentials: "include",
    }
  );
  if (response.status === 200 || response.status === 201) {
    return response.json();
  } else {
    return Promise.reject({
      message: "Error al obtener la transaccion",
      status: response.status,
    });
  }
}

async function postTransaccion(
  userId,
  tipoOperacion,
  moneda,
  cantidad,
  valorActual
) {
  const response = await fetch(
    `${CRYPTO}/transacciones.php`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
    {
      body: JSON.stringify({
        userId,
        tipoOperacion,
        moneda,
        cantidad,
        valorActual,
      }),
      credentials: "include",
    }
  );
  if (response.status === 200 || response.status === 201) {
    return response.json();
  } else {
    return Promise.reject({
      message: "Error al agregar la transaccion",
      status: response.status,
    });
  }
}

//*  Monedas
async function getMonedas() {
  const response = await fetch(
    `${CRYPTO}/monedas.php`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
    {
      credentials: "include",
    }
  );
  if (response.status === 200 || response.status === 201) {
    return response.json();
  } else {
    return Promise.reject({
      message: "Error al obtener monedas",
      status: response.status,
    });
  }
}

//*Usuarios por departamentos
async function getUsuariosPorDepartamentos() {
  const response = await fetch(
    `${CRYPTO}/usuariosPorDepartamento.php`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
    {
      credentials: "include",
    }
  );
  if (response.status === 200 || response.status === 201) {
    return response.json();
  } else {
    return Promise.reject({
      message: "Error al obtener usuarios por departamentos",
      status: response.status,
    });
  }
};


export { registro, login, getDepartamentos, getCiudad, getCiudades, getTransacciones, postTransaccion
,getMonedas, getUsuariosPorDepartamentos }