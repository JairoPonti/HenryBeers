import axios from "axios";

//Estado inicial

const InicialState = {
  carrito: [],
  ordenes:[],
  orden:[],
  ordenCompra:[]
};

//Constantes

const GET_CARRITO = "GET_CARRITO";
const GET_ORDEN = "GET_ORDEN";

const GET_PEDIDO = "GET_PEDIDO";
//--------------
const GET_ORDEN_CANC  = "GET_ORDEN_CANC";
const GET_ORDEN_PROC = "GET_ORDEN_PROC";
const GET_ORDEN_CARRI = "GET_ORDEN_CARR ";
const GET_ORDEN_CREAD = "GET_ORDEN_CREAD "
const GET_ORDEN_COMPL = "GET_ORDEN_COMPL "


//Reducer

export default function carritoReducer(state = InicialState, action) {
  switch (action.type) {
    case GET_CARRITO:
      return { ...state, carrito: action.payload };
    case GET_ORDEN:
      return { ...state, ordenes: action.payload };
    case GET_ORDEN_CANC:
        return { ...state, ordenes: action.payload };
    case GET_ORDEN_CARRI:
          return { ...state, ordenes: action.payload };
    case GET_ORDEN_CREAD:
            return { ...state, ordenes: action.payload };
    case GET_ORDEN_PROC:
              return { ...state, ordenes: action.payload };
    case GET_ORDEN_COMPL:
              return { ...state, ordenes: action.payload };
    case GET_PEDIDO:
      return { ...state, orden: action.payload };
    
    default:
      return state;
  }
}

//Action

export const getcarrito = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `http://localhost:4000/users/${id}/carritos`
    );
    dispatch({
      type: GET_CARRITO,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPedido = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `http://localhost:4000/users/orden/${id}`
    );
    dispatch({
      type: GET_PEDIDO,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
//--------------------------------- ACTIONS PARA RENDERIZAR DINAMICAMENTE LA TABLA 

export const getOrdenes = () => async (dispatch, getState) => { //todas las ordenes
    try {
      const { data } = await axios.get(
        `http://localhost:4000/users/get`
      );
      dispatch({
        type: GET_ORDEN,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  

  export const getOrdenesCread = () => async (dispatch, getState) => { //todas las ordenes estatus Creada
    try {
      const { data } = await axios.get(
        `http://localhost:4000/users/getCread`
      );
      dispatch({
        type: GET_ORDEN_CREAD,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };



  export const getOrdenesCanc = () => async (dispatch, getState) => {//todas las ordenes estatus Cancelada
    try {
      const { data } = await axios.get(
        `http://localhost:4000/users/getCanc`
      );
      dispatch({
        type: GET_ORDEN_CANC,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  export const getOrdenesCarri = () => async (dispatch, getState) => {//todas las ordenes estatus Carrrito
    try {
      const { data } = await axios.get(
        `http://localhost:4000/users/getCarri`
      );
      dispatch({
        type: GET_ORDEN_CARRI,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  export const getOrdenesProc = () => async (dispatch, getState) => { //todas las ordenes estatus Procesada
    try {
      const { data } = await axios.get(`http://localhost:4000/users/getProce`);
      dispatch({
        type: GET_ORDEN_PROC,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  export const getOrdenesComp = () => async (dispatch, getState) => { //todas las ordenes estatus completadas
    try {
      const { data } = await axios.get(
        `http://localhost:4000/users/getcomple`
      );
      dispatch({
        type: GET_ORDEN_COMPL,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };


  
  //::::::::::::::::::::::::::::::::::::::::::::


  //:::: Inicial state


const initialState = {
  userCarritos: []
}

//::: Constantes

const GET_CARRITOS = "GET_CARRITOS";


//:::Reducer

export function activityReducer (state= initialState, action) {

  switch (action.type) {
      case GET_CARRITOS:
          return { ...state, userCarritos: action.payload };
  }

}


//:::::Action

export const getcarritos = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `http://localhost:4000/users/carrito/${id}` // A la ruta de get carritos de un usuarios
    );
    dispatch({
      type: GET_CARRITO,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};